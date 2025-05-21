'use client'

import {useGetPollPollsPollIdGet, useTempVoterStatusPollsPollIdVoterStatusGet} from "@/lib/client/hooks";
import { useParams } from 'next/navigation'
import React, {FormEvent} from "react";
import {ElectionChoice, ModelsPollsPollModelOutput, TempVoterStatus, TextChoice, postPollVotePollsPollIdVotePost} from "@/lib/client";

function isTextChoice(choice: TextChoice | ElectionChoice): choice is TextChoice {
    return "text" in choice;
}

function isElectionChoice(choice: TextChoice | ElectionChoice): choice is ElectionChoice {
    return "candidate" in choice;
}

function StarBallotChoiceDescription(choice: TextChoice | ElectionChoice) {
    if (isTextChoice(choice)) {
        return (
            <div>
                <div className="font-bold pb-3">{choice.text}</div>
            </div>
        )
    } else if (isElectionChoice(choice)) {
        return (
            <div>
                { (choice.running_mate) ?
                    <div className="font-bold">{choice.candidate.name} / {choice.running_mate.name}</div>
                    : <div className="font-bold">{choice.candidate.name}</div>
                }
                { (choice.campaign) &&
                    <div className="text-xs pb-3">{choice.campaign.name}</div>
                }
            </div>
        )
    }
}

function VotingComponent(voter_status: TempVoterStatus) {
    if (voter_status) {
        if (voter_status.can_vote) {
            return (
                <div><input className="p-4 rounded-full bg-surface0 font-bold" type="submit" value="Cast ballot!"/></div>
            )
        } else {
            return (
                <div>{voter_status.reason}</div>
            )
        }
    } else {
        return (
            <div>Please sign in to vote.</div>
        )
    }
}

function ChooseOneBallotComponent(poll: ModelsPollsPollModelOutput, voter_status: TempVoterStatus) {
    async function cast_ballot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ballot_data = Object.fromEntries(formData.entries())
        const ballot = {ballot: {... {ballot_type: "choose-one"}, ... ballot_data}}
        console.log(ballot)
        await postPollVotePollsPollIdVotePost(poll._id, ballot)
        window.location.reload()
    }

    if (poll && poll.ballot_type === "choose-one") return (
        <div>
            <form onSubmit={cast_ballot}>
                {poll.choices.map(choice => {
                    return (
                        <div key={choice._id}>
                            <input className="p-2 mr-2 my-2" name="choice" value={choice._id} type="radio"/>
                            <label className="font-bold">{choice.text}</label>
                        </div>
                    )
                })}
                {VotingComponent(voter_status)}
            </form>
        </div>
    )
}

function StarBallotComponent(poll: ModelsPollsPollModelOutput, voter_status: TempVoterStatus) {
    async function cast_ballot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const scores = []
        for (const [choice, score] of formData.entries()) {
            scores.push({choice: choice, score: score})
        }
        const ballot = {ballot: {ballot_type: "star", scores: scores}}
        console.log(ballot)
        await postPollVotePollsPollIdVotePost(poll._id, ballot)
        window.location.reload()
    }

    if (poll && poll.ballot_type === "star") return (
        <div>
            <ul className="list-disc pl-5">
                <li>Give your favorite(s) five stars.</li>
                <li>Give your last choice(s) zero.</li>
                <li>Score other candidates as desired.</li>
                <li>Equal scores indicate no preference.</li>
            </ul>
            <p>If you&#39;re on mobile, you may have to swipe towards the left to see the complete ballot.</p>
            <form onSubmit={cast_ballot}>
                <table>
                    <thead>
                    <tr>
                        <th>Candidate</th>
                        {[0,1,2,3,4,5].map((number) => (
                            <th key={number}>{number}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {poll.choices.map((choice) => (
                        <tr key={choice._id}>
                            <td>{StarBallotChoiceDescription(choice)}</td>
                            {[0,1,2,3,4,5].map((number) => (
                                <td key={number}>
                                    <input className="p-2.5 mx-4" name={choice._id} value={number} type="radio" required/>
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className="pb-8">This election will use STAR Voting, in which the two
                    highest scoring candidates are finalists. Your full vote goes to the finalist you
                    prefer.</p>
                {VotingComponent(voter_status)}
            </form>
        </div>
    )
}

function BallotComponent(poll: ModelsPollsPollModelOutput, voter_status: TempVoterStatus) {
    if (poll.ballot_type === "choose-one") return (
        <div>{ChooseOneBallotComponent(poll, voter_status)}</div>
    ); else if (poll.ballot_type === "star") return (
        <div>{StarBallotComponent(poll, voter_status)}</div>
    )
}

export default function PollPage() {
    const params = useParams<{ poll: string }>()

    const {data: poll} = useGetPollPollsPollIdGet(params.poll)
    const {data: voter_status} = useTempVoterStatusPollsPollIdVoterStatusGet(params.poll)
    if (poll) return (
        <div>
            <div className="text-2xl">{poll.title}</div>
            {BallotComponent(poll, voter_status)}
        </div>
    )
}