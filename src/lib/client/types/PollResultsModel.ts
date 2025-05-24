import type { StarResults } from './StarResults.ts'

export type PollResultsModel = {
  /**
   * @default false
   * @type boolean | undefined
   */
  public?: boolean
  data?: StarResults | null
}