/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { ListPartiesPartiesGetQueryResponse } from "./types/ListPartiesPartiesGet.ts";

 /**
 * @summary List Parties
 * {@link /parties/}
 */
export async function listPartiesPartiesGet(config: Partial<RequestConfig> = {}) {
    const res = await client<ListPartiesPartiesGetQueryResponse, Error, unknown>({ method: "GET", url: `/parties/`, ...config });
    return res.data;
}