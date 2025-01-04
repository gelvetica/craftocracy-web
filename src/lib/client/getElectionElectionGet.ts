/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetElectionElectionGetQueryResponse } from "./types/GetElectionElectionGet.ts";

 /**
 * @summary Get Election
 * {@link /election}
 */
export async function getElectionElectionGet(config: Partial<RequestConfig> = {}) {
    const res = await client<GetElectionElectionGetQueryResponse, Error, unknown>({ method: "GET", url: `/election`, ...config });
    return res.data;
}