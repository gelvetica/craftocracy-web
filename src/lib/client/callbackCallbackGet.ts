/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { CallbackCallbackGetQueryResponse, CallbackCallbackGetQueryParams, CallbackCallbackGet422 } from "./types/CallbackCallbackGet.ts";

 /**
 * @summary Callback
 * {@link /callback}
 */
export async function callbackCallbackGet(params: CallbackCallbackGetQueryParams, config: Partial<RequestConfig> = {}) {
    const res = await client<CallbackCallbackGetQueryResponse, CallbackCallbackGet422, unknown>({ method: "GET", url: `/callback`, params, ...config });
    return res.data;
}