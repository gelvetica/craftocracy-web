import type { PartyCollection } from './PartyCollection.ts'

/**
 * @description Successful Response
 */
export type ListPartiesPartiesGet200 = PartyCollection

export type ListPartiesPartiesGetQueryResponse = ListPartiesPartiesGet200

export type ListPartiesPartiesGetQuery = {
  Response: ListPartiesPartiesGet200
  Errors: any
}