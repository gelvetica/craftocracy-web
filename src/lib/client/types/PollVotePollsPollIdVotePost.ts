import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PostPollVoteModel } from './PostPollVoteModel.ts'

export type PollVotePollsPollIdVotePostPathParams = {
  /**
   * @type string
   */
  poll_id: string
}

/**
 * @description Successful Response
 */
export type PollVotePollsPollIdVotePost200 = any

/**
 * @description Validation Error
 */
export type PollVotePollsPollIdVotePost422 = HTTPValidationError

export type PollVotePollsPollIdVotePostMutationRequest = PostPollVoteModel

export type PollVotePollsPollIdVotePostMutationResponse = PollVotePollsPollIdVotePost200

export type PollVotePollsPollIdVotePostMutation = {
  Response: PollVotePollsPollIdVotePost200
  Request: PollVotePollsPollIdVotePostMutationRequest
  PathParams: PollVotePollsPollIdVotePostPathParams
  Errors: PollVotePollsPollIdVotePost422
}