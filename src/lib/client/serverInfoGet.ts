/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { ServerInfoGetQueryResponse } from "./types/ServerInfoGet.ts";

 /**
 * @summary Server Info
 * @link /
 */
export async function serverInfoGet(config: Partial<RequestConfig> = {}) {
    const res = await client<ServerInfoGetQueryResponse, Error, unknown>({ method: "GET", url: `/`, ...config });
    return res.data;
}