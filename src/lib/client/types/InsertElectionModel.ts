import type { ScheduleModel } from './ScheduleModel.ts'

export type InsertElectionModel = {
  /**
   * @type string
   */
  slug: string
  /**
   * @type string
   */
  title: string
  /**
   * @default false
   * @type boolean | undefined
   */
  visible?: boolean
  /**
   * @default false
   * @type boolean | undefined
   */
  open?: boolean
  schedule?: ScheduleModel | null
  /**
   * @type array | undefined
   */
  choices?: any[]
  /**
   * @type array | undefined
   */
  voters?: any[]
  /**
   * @type array | undefined
   */
  ballots?: any[]
}