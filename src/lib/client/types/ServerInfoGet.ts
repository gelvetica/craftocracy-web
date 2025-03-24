import type { ServerInfoModel } from './ServerInfoModel.ts'

/**
 * @description Successful Response
 */
export type ServerInfoGet200 = ServerInfoModel

export type ServerInfoGetQueryResponse = ServerInfoGet200

export type ServerInfoGetQuery = {
  Response: ServerInfoGet200
  Errors: any
}