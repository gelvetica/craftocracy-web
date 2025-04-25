import type { HTTPValidationError } from './HTTPValidationError.ts'

export type AddVotersElectionsElectionAddVotersPostPathParams = {
  /**
   * @type string
   */
  election: string
}

/**
 * @description Successful Response
 */
export type AddVotersElectionsElectionAddVotersPost200 = any

/**
 * @description Validation Error
 */
export type AddVotersElectionsElectionAddVotersPost422 = HTTPValidationError

export type AddVotersElectionsElectionAddVotersPostMutationResponse = AddVotersElectionsElectionAddVotersPost200

export type AddVotersElectionsElectionAddVotersPostMutation = {
  Response: AddVotersElectionsElectionAddVotersPost200
  PathParams: AddVotersElectionsElectionAddVotersPostPathParams
  Errors: AddVotersElectionsElectionAddVotersPost422
}