import type { ElectionCampaignModel } from './ElectionCampaignModel.ts'
import type { ElectionCandidateModel } from './ElectionCandidateModel.ts'

export type ElectionTicketModel = {
  /**
   * @type string
   */
  id: string
  /**
   * @type object
   */
  candidate: ElectionCandidateModel
  running_mate?: ElectionCandidateModel | null
  campaign?: ElectionCampaignModel | null
}