import type { ElectionTicketModel } from './ElectionTicketModel.ts'
import type { ElectionVoterModel } from './ElectionVoterModel.ts'

export type GetElectionModel = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  title: string
  /**
   * @type array
   */
  choices: ElectionTicketModel[]
  /**
   * @type array
   */
  voters: ElectionVoterModel[]
  /**
   * @type integer
   */
  total_voters: number
  /**
   * @type integer
   */
  total_voted: number
}