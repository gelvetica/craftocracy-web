'use client'

import {useParams} from "next/navigation";
import useSWR, { mutate } from "swr";
import {
    pollVotePollsPollIdVotePost,
    getPollPollsPollIdGet,
    PollModel,
    UserModel
} from "@/lib/client";
import {FormEvent} from "react";
import Link from "next/link";
import ResultsDisplay from "@/app/polls/resultsdisplay";

function UserWithParty(user: UserModel) {
    if (user.party != null) {
        return (
            <div>[{user.party.shorthand}] {user.name}</div>
        )
    }
    else {
        return (
            <div>[I] {user.name}</div>
        )
    }
}

function CastVoteForm(poll: PollModel) {
    async function cast_vote(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const ballot_data = Object.fromEntries(formData.entries())
        console.log(ballot_data)
        await pollVotePollsPollIdVotePost(poll.id, ballot_data)
        await mutate(poll.id)
    }
    return (
        <div>
            <form onSubmit={cast_vote}>
                {poll.choices.map(choice => {
                    return (
                        <div key={choice.body}>
                            <input className="p-2.5 mr-2 mb-2" name="body" value={choice.body} type="radio"/>
                            <label className="font-bold text-xl">{choice.body}</label>
                        </div>
                    )
                })}
                <input className="p-4 rounded-full bg-surface0 font-bold" type="submit" value="Vote"/>
            </form>
        </div>
    )
}

function VotersChoicesDisplay(poll: PollModel) {
    let not_voted_count = poll.total_voters
    poll.choices.forEach(choice => {
        not_voted_count -= choice.votes;
    });
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3">
            {poll.choices.map(choice => {
                return (
                    <div key={choice.body}>
                        <div className="font-bold text-lg">{choice.body} - {choice.votes}</div>
                        {poll.voters.map(voter => {
                            if (voter.choice == choice.body) {
                                return (
                                    <div key={voter.user.id}>{UserWithParty(voter.user)}</div>
                                )
                            }
                        })}
                    </div>
                )
            })}
            <div key={null}>
                <div className="font-bold text-lg">Not voted - {not_voted_count}</div>
                {poll.voters.map(voter => {
                    if (voter.choice == null) {
                        return (
                            <div key={voter.user.id}>{UserWithParty(voter.user)}</div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default function PollPage() {
    const params = useParams<{ poll: string }>()
    const {data: poll} = useSWR(params.poll, getPollPollsPollIdGet, {refreshInterval: 10000})
    if (poll) return (
        <div>
            <div className="text-2xl">{poll.title}</div>
            <div className="text-xl text-subtext0">References: <Link className="text-blue" href={`/proposals/${poll.proposal}`}>Proposal #{poll.proposal}</Link></div>
            <br/>
            <div className="2xl:w-1/2 xl:w-3/4 lg:w-2/3">{ResultsDisplay(poll)}</div>
            <br/>
            {CastVoteForm(poll)}
            <br/>
            {VotersChoicesDisplay(poll)}
        </div>
    )
}