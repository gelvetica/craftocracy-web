import type { PollChoiceResultsModel } from './PollChoiceResultsModel.ts'
import type { PollVoterModel } from './PollVoterModel.ts'

export type PollModel = {
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
  choices: PollChoiceResultsModel[]
  /**
   * @type integer
   */
  proposal: number
  /**
   * @type integer
   */
  total_voters: number
  /**
   * @type array
   */
  voters: PollVoterModel[]
}