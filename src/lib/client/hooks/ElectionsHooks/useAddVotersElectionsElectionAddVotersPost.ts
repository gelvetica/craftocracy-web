import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  AddVotersElectionsElectionAddVotersPostMutationResponse,
  AddVotersElectionsElectionAddVotersPostPathParams,
  AddVotersElectionsElectionAddVotersPost422,
} from '../../types/AddVotersElectionsElectionAddVotersPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const addVotersElectionsElectionAddVotersPostMutationKey = () => [{ url: '/elections/{election}/add_voters' }] as const

export type AddVotersElectionsElectionAddVotersPostMutationKey = ReturnType<typeof addVotersElectionsElectionAddVotersPostMutationKey>

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
    url: `/elections/${election}/add_voters`,
    ...requestConfig,
  })
  return res.data
}

/**
 * @summary Add Voters
 * {@link /elections/:election/add_voters}
 */
export function useAddVotersElectionsElectionAddVotersPost(
  election: AddVotersElectionsElectionAddVotersPostPathParams['election'],
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        AddVotersElectionsElectionAddVotersPostMutationResponse,
        ResponseErrorConfig<AddVotersElectionsElectionAddVotersPost422>,
        AddVotersElectionsElectionAddVotersPostMutationKey
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = addVotersElectionsElectionAddVotersPostMutationKey()

  return useSWRMutation<
    AddVotersElectionsElectionAddVotersPostMutationResponse,
    ResponseErrorConfig<AddVotersElectionsElectionAddVotersPost422>,
    AddVotersElectionsElectionAddVotersPostMutationKey | null
  >(
    shouldFetch ? mutationKey : null,
    async (_url) => {
      return addVotersElectionsElectionAddVotersPost(election, config)
    },
    mutationOptions,
  )
}