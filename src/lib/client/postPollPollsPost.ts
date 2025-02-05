/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { PostPollPollsPostMutationRequest, PostPollPollsPostMutationResponse, PostPollPollsPost422 } from "./types/PostPollPollsPost.ts";

 /**
 * @summary Post Poll
 * {@link /polls/}
 */
export async function postPollPollsPost(data: PostPollPollsPostMutationRequest, config: Partial<RequestConfig<PostPollPollsPostMutationRequest>> = {}) {
    const res = await client<PostPollPollsPostMutationResponse, PostPollPollsPost422, PostPollPollsPostMutationRequest>({ method: "POST", url: `/polls/`, data, ...config });
    return res.data;
}