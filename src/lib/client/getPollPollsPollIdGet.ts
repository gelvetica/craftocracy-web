/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetPollPollsPollIdGetQueryResponse, GetPollPollsPollIdGetPathParams, GetPollPollsPollIdGet422 } from "./types/GetPollPollsPollIdGet.ts";

 /**
 * @summary Get Poll
 * {@link /polls/:poll_id}
 */
export async function getPollPollsPollIdGet(poll_id: GetPollPollsPollIdGetPathParams["poll_id"], config: Partial<RequestConfig> = {}) {
    const res = await client<GetPollPollsPollIdGetQueryResponse, GetPollPollsPollIdGet422, unknown>({ method: "GET", url: `/polls/${poll_id}`, ...config });
    return res.data;
}