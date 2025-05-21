import type { ApprovalBallot } from './ApprovalBallot.ts'
import type { ChooseOneBallot } from './ChooseOneBallot.ts'
import type { InstantRunoffBallot } from './InstantRunoffBallot.ts'
import type { StarBallot } from './StarBallot.ts'

export type PostBallot = {
  ballot: InstantRunoffBallot | StarBallot | ApprovalBallot | ChooseOneBallot
}