/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetPollsPollsGetQueryResponse } from "./types/GetPollsPollsGet.ts";

 /**
 * @summary Get Polls
 * {@link /polls/}
 */
export async function getPollsPollsGet(config: Partial<RequestConfig> = {}) {
    const res = await client<GetPollsPollsGetQueryResponse, Error, unknown>({ method: "GET", url: `/polls/`, ...config });
    return res.data;
}