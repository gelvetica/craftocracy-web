'use client'

import { useParams } from 'next/navigation'
import useSWR from "swr";
import {getProposalProposalsProposalGet} from "@/lib/client";
import React from 'react';

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
    const params = useParams<{ user: string }>()
    const {data: proposal, isLoading} = useSWR(params.proposal, getProposalProposalsProposalGet)
    if (isLoading) return <div>please wait...</div>
    if (proposal) return (
        <div>
            <div className="text-2xl">{proposal.id}. {proposal.title}</div>
            <div className="text-xl text-subtext1">Proposed by {proposal.author.name}</div>
            <div className="mt-2">
            {TextWithLineBreaks(proposal.revisions.slice(-1)[0].body)}
            </div>
        </div>
    )
}