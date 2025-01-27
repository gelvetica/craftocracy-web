/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetProposalsProposalsGetQueryResponse } from "./types/GetProposalsProposalsGet.ts";

 /**
 * @summary Get Proposals
 * {@link /proposals/}
 */
export async function getProposalsProposalsGet(config: Partial<RequestConfig> = {}) {
    const res = await client<GetProposalsProposalsGetQueryResponse, Error, unknown>({ method: "GET", url: `/proposals/`, ...config });
    return res.data;
}