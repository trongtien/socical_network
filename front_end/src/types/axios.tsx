export interface IError{
    loc: string;
    msg: string;
    detail: string;
}
  
export interface IApiResponse<T>{
    errors: IError[];
    success: boolean;
    data: T | null;
}
  
export type IHeaderRequest = HeadersInit | Record<string, any>;

export type IDataRequest = Record<string, any> | FormData;

export type IResponse<T> = Promise<IApiResponse<T>>;