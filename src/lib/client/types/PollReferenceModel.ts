import type { PollChoiceResultsModel } from './PollChoiceResultsModel.ts'

export type PollReferenceModel = {
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
}