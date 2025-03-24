import type { PollChoice } from './PollChoice.ts'

export type PostPollModel = {
  /**
   * @type string
   */
  title: string
  /**
   * @type array | undefined
   */
  choices?: PollChoice[]
  /**
   * @type integer
   */
  proposal: number
  /**
   * @default false
   * @type boolean | undefined
   */
  secret?: boolean
  party?: string | null
}