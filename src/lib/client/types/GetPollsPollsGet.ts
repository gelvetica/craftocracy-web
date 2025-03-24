import type { PollCollection } from './PollCollection.ts'

/**
 * @description Successful Response
 */
export type GetPollsPollsGet200 = PollCollection

export type GetPollsPollsGetQueryResponse = GetPollsPollsGet200

export type GetPollsPollsGetQuery = {
  Response: GetPollsPollsGet200
  Errors: any
}