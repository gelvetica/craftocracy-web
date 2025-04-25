import type { ElectionBallot } from './ElectionBallot.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

export type PostElectionVoteElectionsElectionVotePostPathParams = {
  /**
   * @type string
   */
  election: string
}

/**
 * @description Successful Response
 */
export type PostElectionVoteElectionsElectionVotePost200 = any

/**
 * @description Validation Error
 */
export type PostElectionVoteElectionsElectionVotePost422 = HTTPValidationError

export type PostElectionVoteElectionsElectionVotePostMutationRequest = ElectionBallot

export type PostElectionVoteElectionsElectionVotePostMutationResponse = PostElectionVoteElectionsElectionVotePost200

export type PostElectionVoteElectionsElectionVotePostMutation = {
  Response: PostElectionVoteElectionsElectionVotePost200
  Request: PostElectionVoteElectionsElectionVotePostMutationRequest
  PathParams: PostElectionVoteElectionsElectionVotePostPathParams
  Errors: PostElectionVoteElectionsElectionVotePost422
}