import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PostPollVoteModel } from './PostPollVoteModel.ts'

export type PollVoteLegacyPollsPollIdVotePostPathParams = {
  /**
   * @type string
   */
  poll_id: string
}

/**
 * @description Successful Response
 */
export type PollVoteLegacyPollsPollIdVotePost200 = any

/**
 * @description Validation Error
 */
export type PollVoteLegacyPollsPollIdVotePost422 = HTTPValidationError

export type PollVoteLegacyPollsPollIdVotePostMutationRequest = PostPollVoteModel

export type PollVoteLegacyPollsPollIdVotePostMutationResponse = PollVoteLegacyPollsPollIdVotePost200

export type PollVoteLegacyPollsPollIdVotePostMutation = {
  Response: PollVoteLegacyPollsPollIdVotePost200
  Request: PollVoteLegacyPollsPollIdVotePostMutationRequest
  PathParams: PollVoteLegacyPollsPollIdVotePostPathParams
  Errors: PollVoteLegacyPollsPollIdVotePost422
}