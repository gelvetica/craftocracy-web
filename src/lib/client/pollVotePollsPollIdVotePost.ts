/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { PollVotePollsPollIdVotePostMutationRequest, PollVotePollsPollIdVotePostMutationResponse, PollVotePollsPollIdVotePostPathParams, PollVotePollsPollIdVotePost422 } from "./types/PollVotePollsPollIdVotePost.ts";

 /**
 * @summary Poll Vote
 * {@link /polls/:poll_id/vote}
 */
export async function pollVotePollsPollIdVotePost(poll_id: PollVotePollsPollIdVotePostPathParams["poll_id"], data: PollVotePollsPollIdVotePostMutationRequest, config: Partial<RequestConfig<PollVotePollsPollIdVotePostMutationRequest>> = {}) {
    const res = await client<PollVotePollsPollIdVotePostMutationResponse, PollVotePollsPollIdVotePost422, PollVotePollsPollIdVotePostMutationRequest>({ method: "POST", url: `/polls/${poll_id}/vote`, data, ...config });
    return res.data;
}