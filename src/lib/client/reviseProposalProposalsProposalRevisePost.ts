/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { ReviseProposalProposalsProposalRevisePostMutationRequest, ReviseProposalProposalsProposalRevisePostMutationResponse, ReviseProposalProposalsProposalRevisePostPathParams, ReviseProposalProposalsProposalRevisePost422 } from "./types/ReviseProposalProposalsProposalRevisePost.ts";

 /**
 * @summary Revise Proposal
 * {@link /proposals/:proposal/revise}
 */
export async function reviseProposalProposalsProposalRevisePost(proposal: ReviseProposalProposalsProposalRevisePostPathParams["proposal"], data: ReviseProposalProposalsProposalRevisePostMutationRequest, config: Partial<RequestConfig<ReviseProposalProposalsProposalRevisePostMutationRequest>> = {}) {
    const res = await client<ReviseProposalProposalsProposalRevisePostMutationResponse, ReviseProposalProposalsProposalRevisePost422, ReviseProposalProposalsProposalRevisePostMutationRequest>({ method: "POST", url: `/proposals/${proposal}/revise`, data, ...config });
    return res.data;
}