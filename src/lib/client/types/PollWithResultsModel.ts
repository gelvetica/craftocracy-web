import type { ElectionChoice } from './ElectionChoice.ts'
import type { PollResultsModel } from './PollResultsModel.ts'
import type { TextChoice } from './TextChoice.ts'

export const pollWithResultsModelBallotTypeEnum = {
  irv: 'irv',
  star: 'star',
  approval: 'approval',
  'choose-one': 'choose-one',
} as const

export type PollWithResultsModelBallotTypeEnum = (typeof pollWithResultsModelBallotTypeEnum)[keyof typeof pollWithResultsModelBallotTypeEnum]

export type PollWithResultsModel = {
  /**
   * @type string | undefined
   */
  _id?: string
  /**
   * @type string
   */
  title: string
  /**
   * @type array
   */
  choices: (TextChoice | ElectionChoice)[]
  /**
   * @type string | undefined, date-time
   */
  timestamp?: string
  /**
   * @default true
   * @type boolean | undefined
   */
  open?: boolean
  /**
   * @type string
   */
  ballot_type: PollWithResultsModelBallotTypeEnum
  /**
   * @default [object Object]
   * @type object | undefined
   */
  voter_filter?: {
    [key: string]: any
  }
  /**
   * @default false
   * @type boolean | undefined
   */
  dynamic_voters?: boolean
  /**
   * @default false
   * @type boolean | undefined
   */
  secret?: boolean
  /**
   * @type object
   */
  results: PollResultsModel
}