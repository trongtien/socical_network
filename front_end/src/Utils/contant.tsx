import { IError } from "../types/axios";

export const API_BASE_URL = "";

export const ON_FETCH_ERROR = [{
	detail: 'Cannot send request.',
	msg: 'ERR_CANNOT_SEND_REQUEST',
	loc: 'FETCH'
}] as IError[];

export const ON_PARSE_ERROR = [{
	loc: 'PARSE',
	msg: 'Parse_Response_failure',
	detail: 'Parse response failure'
}] as IError[];

export const ON_RESPONSE_ERROR = [{
	loc: 'RESPONSE',
	msg: 'Result_Response_failure',
	detail: 'Result response failure'
}] as IError[];


