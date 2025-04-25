import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { InsertElectionModel } from './InsertElectionModel.ts'

/**
 * @description Successful Response
 */
export type PostElectionElectionsPost200 = any

/**
 * @description Validation Error
 */
export type PostElectionElectionsPost422 = HTTPValidationError

export type PostElectionElectionsPostMutationRequest = InsertElectionModel

export type PostElectionElectionsPostMutationResponse = PostElectionElectionsPost200

export type PostElectionElectionsPostMutation = {
  Response: PostElectionElectionsPost200
  Request: PostElectionElectionsPostMutationRequest
  Errors: PostElectionElectionsPost422
}