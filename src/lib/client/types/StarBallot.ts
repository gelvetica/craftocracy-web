import type { ChoiceScore } from './ChoiceScore.ts'

export type StarBallot = {
  /**
   * @type string | undefined
   */
  _id?: string
  /**
   * @type string
   */
  ballot_type: 'star'
  /**
   * @type array
   */
  scores: ChoiceScore[]
}