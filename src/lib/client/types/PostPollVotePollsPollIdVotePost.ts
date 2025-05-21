import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PostBallot } from './PostBallot.ts'

export type PostPollVotePollsPollIdVotePostPathParams = {
  /**
   * @type string
   */
  poll_id: string
}

/**
 * @description Successful Response
 */
export type PostPollVotePollsPollIdVotePost200 = any

/**
 * @description Validation Error
 */
export type PostPollVotePollsPollIdVotePost422 = HTTPValidationError

export type PostPollVotePollsPollIdVotePostMutationRequest = PostBallot

export type PostPollVotePollsPollIdVotePostMutationResponse = PostPollVotePollsPollIdVotePost200

export type PostPollVotePollsPollIdVotePostMutation = {
  Response: PostPollVotePollsPollIdVotePost200
  Request: PostPollVotePollsPollIdVotePostMutationRequest
  PathParams: PostPollVotePollsPollIdVotePostPathParams
  Errors: PostPollVotePollsPollIdVotePost422
}