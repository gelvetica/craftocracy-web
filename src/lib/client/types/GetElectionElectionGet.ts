import type { ElectionModel } from './ElectionModel.ts'

/**
 * @description Successful Response
 */
export type GetElectionElectionGet200 = ElectionModel

export type GetElectionElectionGetQueryResponse = GetElectionElectionGet200

export type GetElectionElectionGetQuery = {
  Response: GetElectionElectionGet200
  Errors: any
}