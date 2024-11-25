import axios from 'axios'

import type { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios'

declare const AXIOS_BASE: string
declare const AXIOS_HEADERS: string

/**
 * Subset of AxiosRequestConfig
 */
export type RequestConfig<TData = unknown> = {
    url?: string
    method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE'
    params?: unknown
    data?: TData
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
    signal?: AbortSignal
    headers?: AxiosRequestConfig['headers']
}
/**
 * Subset of AxiosResponse
 */
export type ResponseConfig<TData = unknown> = {
    data: TData
    status: number
    statusText: string
    headers?: AxiosResponse['headers']
}

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

axiosInstance.interceptors.request.use(
    function(config) {
        console.log("got here")
        const token = localStorage.getItem("strudel_token");
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);


export const axiosClient = async <TData, TError = unknown, TVariables = unknown>(config: RequestConfig<TVariables>): Promise<ResponseConfig<TData>> => {
    const promise = axiosInstance.request<TVariables, ResponseConfig<TData>>({ ...config }).catch((e: AxiosError<TError>) => {
        throw e
    })

    return promise
}

export default axiosClient