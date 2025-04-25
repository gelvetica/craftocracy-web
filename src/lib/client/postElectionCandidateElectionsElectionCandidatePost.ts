/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  PostElectionCandidateElectionsElectionCandidatePostMutationRequest,
  PostElectionCandidateElectionsElectionCandidatePostMutationResponse,
  PostElectionCandidateElectionsElectionCandidatePostPathParams,
  PostElectionCandidateElectionsElectionCandidatePost422,
} from './types/PostElectionCandidateElectionsElectionCandidatePost.ts'

export function getPostElectionCandidateElectionsElectionCandidatePostUrl(election: PostElectionCandidateElectionsElectionCandidatePostPathParams['election']) {
  return `/elections/${election}/candidate` as const
}

/**
 * @summary Post Election Candidate
 * {@link /elections/:election/candidate}
 */
export async function postElectionCandidateElectionsElectionCandidatePost(
  election: PostElectionCandidateElectionsElectionCandidatePostPathParams['election'],
  data: PostElectionCandidateElectionsElectionCandidatePostMutationRequest,
  config: Partial<RequestConfig<PostElectionCandidateElectionsElectionCandidatePostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PostElectionCandidateElectionsElectionCandidatePostMutationResponse,
    ResponseErrorConfig<PostElectionCandidateElectionsElectionCandidatePost422>,
    PostElectionCandidateElectionsElectionCandidatePostMutationRequest
  >({ method: 'POST', url: getPostElectionCandidateElectionsElectionCandidatePostUrl(election).toString(), data, ...requestConfig })
  return res.data
}