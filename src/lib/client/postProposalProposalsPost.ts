/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { PostProposalProposalsPostMutationRequest, PostProposalProposalsPostMutationResponse, PostProposalProposalsPost422 } from "./types/PostProposalProposalsPost.ts";

 /**
 * @summary Post Proposal
 * {@link /proposals/}
 */
export async function postProposalProposalsPost(data: PostProposalProposalsPostMutationRequest, config: Partial<RequestConfig<PostProposalProposalsPostMutationRequest>> = {}) {
    const res = await client<PostProposalProposalsPostMutationResponse, PostProposalProposalsPost422, PostProposalProposalsPostMutationRequest>({ method: "POST", url: `/proposals/`, data, ...config });
    return res.data;
}