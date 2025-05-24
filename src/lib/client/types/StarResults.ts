import type { StarMatchupResults } from './StarMatchupResults.ts'

export type StarResults = {
  /**
   * @type string
   */
  results_type: 'star'
  /**
   * @type object
   */
  total_scores: {
    [key: string]: number
  }
  /**
   * @type array | undefined
   */
  highlighted_races?: [string, string][]
  /**
   * @type object
   */
  preference_matrix: {
    [key: string]: {
      [key: string]: StarMatchupResults
    }
  }
}