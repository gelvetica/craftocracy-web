import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { ModelsPollsPollModelOutput } from './ModelsPollsPollModelOutput.ts'
import type { PollModelInput } from './PollModelInput.ts'

/**
 * @description Successful Response
 */
export type PostPollPollsPost200 = ModelsPollsPollModelOutput

/**
 * @description Validation Error
 */
export type PostPollPollsPost422 = HTTPValidationError

export type PostPollPollsPostMutationRequest = PollModelInput

export type PostPollPollsPostMutationResponse = PostPollPollsPost200

export type PostPollPollsPostMutation = {
  Response: PostPollPollsPost200
  Request: PostPollPollsPostMutationRequest
  Errors: PostPollPollsPost422
}