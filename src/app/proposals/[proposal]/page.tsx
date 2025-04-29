'use client'

import { useParams } from 'next/navigation'
import useSWR from "swr";
import {getAccountAccountGet, useGetProposalProposalsProposalGet, useGetProposalsProposalsGet} from "@/lib/client";
import React from 'react';
import Link from "next/link";

function TextWithLineBreaks(t) {
    const textWithBreaks = t.split('\n').map((text, index) => (
        <React.Fragment key={index}>
            {text}
            <br />
        </React.Fragment>
    ));

    return <div>{textWithBreaks}</div>;
}

export default function ProposalPage() {
    const params = useParams<{ proposal: string }>()
    const {data: proposal, isLoading} = useGetProposalProposalsProposalGet(Number(params.proposal));
    const {data: account} = useSWR("/account", getAccountAccountGet)
    if (isLoading) return <div>please wait...</div>
    if (proposal) return (
        <div>
            {
                (account && proposal.revisions_allowed && account.id === proposal.author.id) &&
                <div className="float-right bg-surface0 p-1 px-2 rounded-full text-xl">
                    <Link href={`/proposals/${proposal.id}/revise`}>Revise</Link>
                </div>
            }

            <div className="text-2xl">{proposal.id}. {proposal.title}</div>
            <div className="text-xl text-subtext1">Proposed by {proposal.author.name}</div>
            {
                proposal.invalid &&
                <div className="outline outline-red outline-solid outline-6 mt-2 rounded w-fit p-1 bg-surface0">
                    <div className="text-2xl font-bold">Invalid!</div>
                    <div className="text-xl text-subtext2">{proposal.rejection_reason}</div>
                </div>
            }
            <div className="mt-2">
                {TextWithLineBreaks(proposal.revisions.slice(-1)[0].body)}
            </div>
        </div>
    )
}