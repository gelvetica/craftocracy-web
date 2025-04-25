/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  AddVotersElectionsElectionAddVotersPostMutationResponse,
  AddVotersElectionsElectionAddVotersPostPathParams,
  AddVotersElectionsElectionAddVotersPost422,
} from './types/AddVotersElectionsElectionAddVotersPost.ts'

export function getAddVotersElectionsElectionAddVotersPostUrl(election: AddVotersElectionsElectionAddVotersPostPathParams['election']) {
  return `/elections/${election}/add_voters` as const
}

/**
 * @summary Add Voters
 * {@link /elections/:election/add_voters}
 */
export async function addVotersElectionsElectionAddVotersPost(
  election: AddVotersElectionsElectionAddVotersPostPathParams['election'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<AddVotersElectionsElectionAddVotersPostMutationResponse, ResponseErrorConfig<AddVotersElectionsElectionAddVotersPost422>, unknown>({
    method: 'POST',
    url: getAddVotersElectionsElectionAddVotersPostUrl(election).toString(),
    ...requestConfig,
  })
  return res.data
}