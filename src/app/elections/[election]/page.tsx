'use client'

import {useGetElectionElectionsElectionGet, useGetVoterStatusElectionsElectionVoterStatusGet} from "@/lib/client/hooks";
import { useParams } from 'next/navigation'
import {postElectionVoteElectionsElectionVotePost, ElectionTicketModel, GetElectionModel, VoterStatusModel} from "@/lib/client";
import {FormEvent, MouseEvent} from "react";
import React from "react";
import {useAccountStatus} from "@/lib/useAccountStatus";

function ordinal_suffix_of(i) {
    const j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

function election_choices(election: GetElectionModel) {
    const candidates = election.choices.length
    if (candidates === 2) {
        return 1
    } else return candidates
}

function BallotOnSelect(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    const children = e.currentTarget.parentElement.parentElement.children
    for (let i = 0; i < children.length; i++) {
        const target = children[i].children[0]
        if (target.nodeName === 'INPUT') {
            console.log("got input")
            if (target.id !== e.currentTarget.id ) {
                target.checked = false
            }
        }
    }
}

function TicketDescription(ticket: ElectionTicketModel) {
    return (
        <div>
            { (ticket.running_mate) ?
                <div className="font-bold">{ticket.candidate.name} / {ticket.running_mate.name}</div>
                : <div className="font-bold">{ticket.candidate.name}</div>
            }
            { (ticket.campaign) &&
            <div className="text-xs pb-3">{ticket.campaign.name}</div>
            }
        </div>
    )
}

function CandidateRow(ticket: ElectionTicketModel, options: number) {
    const range = [...Array(options).keys()]
    return (
        <tr>
            <td>{TicketDescription(ticket)}</td>
            {range.map((number) => (
                <td key={number}><input onClick={BallotOnSelect} className="mx-8" type="radio" id={String(number)} name={String(number)} value={ticket.id}
                           required/></td>
            ))}
        </tr>
    )
}

function VotingSection() {
    return (
        <div>
            <p className="text-xl">Please quadruple, then triple, then double check your choices before casting your
                ballot.</p>
            <p className="text-4xl">YOU CANNOT CHANGE YOUR VOTE!!!!!</p>
            <br/>
            <input className="p-4 rounded-full bg-surface0 font-bold" type="submit" value="Cast ballot!"/>
        </div>
    )
}

export default function ElectionInfoPage() {
    const params = useParams<{ election: string }>()
    async function cast_ballot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ballot_data = Object.fromEntries(formData.entries())
        const rankings = []
        for (const rank in ballot_data) {
            rankings[Number(rank)] = ballot_data[rank]
        }
        const ballot = {"rankings": rankings}
        console.log(ballot)
        await postElectionVoteElectionsElectionVotePost(params.election, ballot)
        window.location.reload()
    }

    const {data: election, isLoading} = useGetElectionElectionsElectionGet(params.election)
    if (isLoading) return (<div>please hold...</div>)
    if (election) {
        const tickets_count = election_choices(election)
        const tickets_range = [...Array(tickets_count).keys()]

        return (
        <div>
            <p className="text-2xl">{election.title}</p>
            <p className="text-xs text-subtext0">to ensure confidentiality of ballots, please do not share screenshots of partially or completely filled out ballots.</p>
            <br/>
            <form onSubmit={cast_ballot}>
                <table>
                    <thead>
                    <tr>
                        <th>Candidate</th>
                        {tickets_range.map((number) => (
                            <th key={number}>{ordinal_suffix_of(number + 1)}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {election.choices.map(ticket => (
                        <React.Fragment key={ticket.id}>{CandidateRow(ticket, tickets_count)}</React.Fragment>
                    ))}
                    </tbody>
                </table>
                <br/>
                <div> {election.total_voted}/{election.total_voters} votes cast ({((election.total_voted/election.total_voters) * 100).toFixed(2)}%)</div>
                <br/>
                {VotingSection()}
            </form>
        </div>
    )}
}