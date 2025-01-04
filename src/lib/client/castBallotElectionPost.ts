/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { CastBallotElectionPostMutationRequest, CastBallotElectionPostMutationResponse, CastBallotElectionPost422 } from "./types/CastBallotElectionPost.ts";

 /**
 * @summary Cast Ballot
 * {@link /election}
 */
export async function castBallotElectionPost(data: CastBallotElectionPostMutationRequest, config: Partial<RequestConfig<CastBallotElectionPostMutationRequest>> = {}) {
    const res = await client<CastBallotElectionPostMutationResponse, CastBallotElectionPost422, CastBallotElectionPostMutationRequest>({ method: "POST", url: `/election`, data, ...config });
    return res.data;
}