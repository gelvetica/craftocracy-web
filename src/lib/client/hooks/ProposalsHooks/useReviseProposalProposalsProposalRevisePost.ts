import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  ReviseProposalProposalsProposalRevisePostMutationRequest,
  ReviseProposalProposalsProposalRevisePostMutationResponse,
  ReviseProposalProposalsProposalRevisePostPathParams,
  ReviseProposalProposalsProposalRevisePost422,
} from '../../types/ReviseProposalProposalsProposalRevisePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const reviseProposalProposalsProposalRevisePostMutationKey = () => [{ url: '/proposals/{proposal}/revise' }] as const

export type ReviseProposalProposalsProposalRevisePostMutationKey = ReturnType<typeof reviseProposalProposalsProposalRevisePostMutationKey>

/**
 * @summary Revise Proposal
 * {@link /proposals/:proposal/revise}
 */
export async function reviseProposalProposalsProposalRevisePost(
  proposal: ReviseProposalProposalsProposalRevisePostPathParams['proposal'],
  data: ReviseProposalProposalsProposalRevisePostMutationRequest,
  config: Partial<RequestConfig<ReviseProposalProposalsProposalRevisePostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    ReviseProposalProposalsProposalRevisePostMutationResponse,
    ResponseErrorConfig<ReviseProposalProposalsProposalRevisePost422>,
    ReviseProposalProposalsProposalRevisePostMutationRequest
  >({ method: 'POST', url: `/proposals/${proposal}/revise`, data, ...requestConfig })
  return res.data
}

/**
 * @summary Revise Proposal
 * {@link /proposals/:proposal/revise}
 */
export function useReviseProposalProposalsProposalRevisePost(
  proposal: ReviseProposalProposalsProposalRevisePostPathParams['proposal'],
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        ReviseProposalProposalsProposalRevisePostMutationResponse,
        ResponseErrorConfig<ReviseProposalProposalsProposalRevisePost422>,
        ReviseProposalProposalsProposalRevisePostMutationKey,
        ReviseProposalProposalsProposalRevisePostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<ReviseProposalProposalsProposalRevisePostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = reviseProposalProposalsProposalRevisePostMutationKey()

  return useSWRMutation<
    ReviseProposalProposalsProposalRevisePostMutationResponse,
    ResponseErrorConfig<ReviseProposalProposalsProposalRevisePost422>,
    ReviseProposalProposalsProposalRevisePostMutationKey | null,
    ReviseProposalProposalsProposalRevisePostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return reviseProposalProposalsProposalRevisePost(proposal, data, config)
    },
    mutationOptions,
  )
}