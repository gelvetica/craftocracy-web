/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetProposalProposalsProposalGetQueryResponse, GetProposalProposalsProposalGetPathParams, GetProposalProposalsProposalGet422 } from "./types/GetProposalProposalsProposalGet.ts";

 /**
 * @summary Get Proposal
 * {@link /proposals/:proposal}
 */
export async function getProposalProposalsProposalGet(proposal: GetProposalProposalsProposalGetPathParams["proposal"], config: Partial<RequestConfig> = {}) {
    const res = await client<GetProposalProposalsProposalGetQueryResponse, GetProposalProposalsProposalGet422, unknown>({ method: "GET", url: `/proposals/${proposal}`, ...config });
    return res.data;
}