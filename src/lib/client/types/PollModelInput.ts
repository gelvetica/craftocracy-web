import type { ElectionChoice } from './ElectionChoice.ts'
import type { TextChoice } from './TextChoice.ts'

export const pollModelInputBallotTypeEnum = {
  irv: 'irv',
  star: 'star',
  approval: 'approval',
  'choose-one': 'choose-one',
} as const

export type PollModelInputBallotTypeEnum = (typeof pollModelInputBallotTypeEnum)[keyof typeof pollModelInputBallotTypeEnum]

export type PollModelInput = {
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
  ballot_type: PollModelInputBallotTypeEnum
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
}