import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PollReferenceModel } from './PollReferenceModel.ts'
import type { PostPollModel } from './PostPollModel.ts'

/**
 * @description Successful Response
 */
export type PostPollLegacyPollsPost200 = PollReferenceModel

/**
 * @description Validation Error
 */
export type PostPollLegacyPollsPost422 = HTTPValidationError

export type PostPollLegacyPollsPostMutationRequest = PostPollModel

export type PostPollLegacyPollsPostMutationResponse = PostPollLegacyPollsPost200

export type PostPollLegacyPollsPostMutation = {
  Response: PostPollLegacyPollsPost200
  Request: PostPollLegacyPollsPostMutationRequest
  Errors: PostPollLegacyPollsPost422
}