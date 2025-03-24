import type { AuthCallbackModel } from './AuthCallbackModel.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

export type CallbackCallbackGetQueryParams = {
  /**
   * @type string
   */
  code: string
}

/**
 * @description Successful Response
 */
export type CallbackCallbackGet200 = AuthCallbackModel

/**
 * @description Validation Error
 */
export type CallbackCallbackGet422 = HTTPValidationError

export type CallbackCallbackGetQueryResponse = CallbackCallbackGet200

export type CallbackCallbackGetQuery = {
  Response: CallbackCallbackGet200
  QueryParams: CallbackCallbackGetQueryParams
  Errors: CallbackCallbackGet422
}