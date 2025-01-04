/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetAccountAccountGetQueryResponse } from "./types/GetAccountAccountGet.ts";

 /**
 * @summary Get Account
 * {@link /account/}
 */
export async function getAccountAccountGet(config: Partial<RequestConfig> = {}) {
    const res = await client<GetAccountAccountGetQueryResponse, Error, unknown>({ method: "GET", url: `/account/`, ...config });
    return res.data;
}