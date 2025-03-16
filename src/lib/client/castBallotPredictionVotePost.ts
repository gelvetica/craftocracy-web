/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { CastBallotPredictionVotePostMutationRequest, CastBallotPredictionVotePostMutationResponse, CastBallotPredictionVotePost422 } from "./types/CastBallotPredictionVotePost.ts";

 /**
 * @summary Cast Ballot
 * {@link /prediction_vote}
 */
export async function castBallotPredictionVotePost(data: CastBallotPredictionVotePostMutationRequest, config: Partial<RequestConfig<CastBallotPredictionVotePostMutationRequest>> = {}) {
    const res = await client<CastBallotPredictionVotePostMutationResponse, CastBallotPredictionVotePost422, CastBallotPredictionVotePostMutationRequest>({ method: "POST", url: `/prediction_vote`, data, ...config });
    return res.data;
}