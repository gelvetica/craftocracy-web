/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryResponse } from "./types/GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet.ts";

 /**
 * @summary Get Am I Even Allowed To Vote
 * {@link /am_i_even_allowed_to_vote}
 */
export async function getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet(config: Partial<RequestConfig> = {}) {
    const res = await client<GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryResponse, Error, unknown>({ method: "GET", url: `/am_i_even_allowed_to_vote`, ...config });
    return res.data;
}