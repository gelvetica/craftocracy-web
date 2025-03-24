import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  CastBallotElectionPostMutationRequest,
  CastBallotElectionPostMutationResponse,
  CastBallotElectionPost422,
} from '../../types/CastBallotElectionPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const castBallotElectionPostMutationKey = () => [{ url: '/election' }] as const

export type CastBallotElectionPostMutationKey = ReturnType<typeof castBallotElectionPostMutationKey>

/**
 * @summary Cast Ballot
 * {@link /election}
 */
export async function castBallotElectionPost(
  data: CastBallotElectionPostMutationRequest,
  config: Partial<RequestConfig<CastBallotElectionPostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<CastBallotElectionPostMutationResponse, ResponseErrorConfig<CastBallotElectionPost422>, CastBallotElectionPostMutationRequest>({
    method: 'POST',
    url: `/election`,
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * @summary Cast Ballot
 * {@link /election}
 */
export function useCastBallotElectionPost(
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        CastBallotElectionPostMutationResponse,
        ResponseErrorConfig<CastBallotElectionPost422>,
        CastBallotElectionPostMutationKey,
        CastBallotElectionPostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<CastBallotElectionPostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = castBallotElectionPostMutationKey()

  return useSWRMutation<
    CastBallotElectionPostMutationResponse,
    ResponseErrorConfig<CastBallotElectionPost422>,
    CastBallotElectionPostMutationKey | null,
    CastBallotElectionPostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return castBallotElectionPost(data, config)
    },
    mutationOptions,
  )
}