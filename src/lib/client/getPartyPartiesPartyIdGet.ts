/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetPartyPartiesPartyIdGetQueryResponse, GetPartyPartiesPartyIdGetPathParams, GetPartyPartiesPartyIdGet422 } from "./types/GetPartyPartiesPartyIdGet.ts";

 /**
 * @summary Get Party
 * @link /parties/:party_id
 */
export async function getPartyPartiesPartyIdGet(partyId: GetPartyPartiesPartyIdGetPathParams["party_id"], config: Partial<RequestConfig> = {}) {
    const res = await client<GetPartyPartiesPartyIdGetQueryResponse, GetPartyPartiesPartyIdGet422, unknown>({ method: "GET", url: `/parties/${partyId}`, ...config });
    return res.data;
}