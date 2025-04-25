/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  GetPartyPartiesPartyIdGetQueryResponse,
  GetPartyPartiesPartyIdGetPathParams,
  GetPartyPartiesPartyIdGet422,
} from './types/GetPartyPartiesPartyIdGet.ts'

export function getGetPartyPartiesPartyIdGetUrl(party_id: GetPartyPartiesPartyIdGetPathParams['party_id']) {
  return `/parties/${party_id}` as const
}

/**
 * @summary Get Party
 * {@link /parties/:party_id}
 */
export async function getPartyPartiesPartyIdGet(
  party_id: GetPartyPartiesPartyIdGetPathParams['party_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPartyPartiesPartyIdGetQueryResponse, ResponseErrorConfig<GetPartyPartiesPartyIdGet422>, unknown>({
    method: 'GET',
    url: getGetPartyPartiesPartyIdGetUrl(party_id).toString(),
    ...requestConfig,
  })
  return res.data
}