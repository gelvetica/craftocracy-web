import type { GetElectionModel } from './GetElectionModel.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

export type GetElectionElectionsElectionGetPathParams = {
  /**
   * @type string
   */
  election: string
}

/**
 * @description Successful Response
 */
export type GetElectionElectionsElectionGet200 = GetElectionModel

/**
 * @description Validation Error
 */
export type GetElectionElectionsElectionGet422 = HTTPValidationError

export type GetElectionElectionsElectionGetQueryResponse = GetElectionElectionsElectionGet200

export type GetElectionElectionsElectionGetQuery = {
  Response: GetElectionElectionsElectionGet200
  PathParams: GetElectionElectionsElectionGetPathParams
  Errors: GetElectionElectionsElectionGet422
}