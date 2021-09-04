import axios, { AxiosRequestConfig } from 'axios';
import { IApiResponse, IDataRequest, IHeaderRequest, IResponse } from '../types/axios';
import { API_BASE_URL, ON_FETCH_ERROR, ON_PARSE_ERROR, ON_RESPONSE_ERROR } from './contant';

export enum ETypeMethod {
    GET = 'post',
    POST = 'post',
    head = 'head'
}

export enum EContentType{
    JSON = 'application/json',
    BINARY = 'multipart/form-data',
    TEXT = 'plain/text',
    URLENCODED = 'application/x-www-form-urlencoded'
}

export const contentType = (type: string): Record<'Content-Type', string> => {
    return { 'Content-Type': type };
}

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: { Accept: EContentType.JSON, ...contentType(EContentType.JSON) },
    withCredentials: true
});

function execApi<T>(
    method: ETypeMethod, 
    uri: string, 
    data?: IDataRequest, 
    headers?: IHeaderRequest,
    configs?: AxiosRequestConfig
  ): IResponse<T>{
    configs = configs ?? {};
    Object.assign(configs, { url: uri, method, headers, data: null });
  
    if (data){
      if (configs.method === ETypeMethod.GET) configs.method = ETypeMethod.POST;
      
      if (data instanceof FormData){
        headers = Object.assign(headers, contentType(EContentType.BINARY));
        configs.data = data;
      }
      else{
        configs.data = JSON.stringify(data);
      }
    }
  
    return API.request(configs).then(response => {
      const result: IApiResponse<T> = {
        data: null,
        success: false,
        errors: []
      }
  
      try{
        result.success = (Math.floor(response.status / 200) === 1);
  
        if (result.success){
          result.data = response.data.data;
          result.success = true;
          result.errors = [];
        }
        else{
          result.errors = response.data.errors ?? ON_RESPONSE_ERROR;
        }
      }
      catch(e){
        result.errors = ON_PARSE_ERROR;
      }
  
      return result;
    })
    .catch(error => {
      if (error.response && error.response.data){
        const response = error.response.data as IApiResponse<T>;
        response.success = false;
        return response;
      }
      else{
        return {
          success: false,
          data: null,
          errors: ON_FETCH_ERROR
        }
      }
    });
  }
  
export function apiGet<T>(
    uri: string, 
    headers?: IHeaderRequest, 
    configs?: AxiosRequestConfig
    ): IResponse<T>{
    return execApi<T>(ETypeMethod.GET, uri, undefined, headers, configs);
}

export function apiPost<T>(
    uri: string, 
    data?: IDataRequest, 
    headers?: IHeaderRequest, 
    configs?: AxiosRequestConfig
): IResponse<T>{
    return execApi(ETypeMethod.POST, uri, data, headers, configs);
}

export function api<T>(
    method: ETypeMethod, 
    uri: string, 
    data?: IDataRequest, 
    headers?: IHeaderRequest,
    configs?: AxiosRequestConfig
    ): IResponse<T>{
    switch(method){
        case ETypeMethod.POST:
        return apiPost<T>(uri, data, headers, configs);

        default:
        return apiGet<T>(uri, headers, configs);
    }
}


  