'use client'

import {getProposalsProposalsGet} from "@/lib/client";
import useSWR from "swr";
import Link from "next/link";


const ProposalsList = () => {
    const { data, error, isLoading } = useSWR("/users", getProposalsProposalsGet);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <ul>
            {data.proposals.toReversed().map((proposal) => {
                return (
                    <li key={proposal.id}><Link href={`/proposals/${proposal.id}`}>{proposal.id}. {proposal.title}</Link></li>
                )
            })}
        </ul>
    );
}


export default function ProposalsPage() {
    return (
        <div>
            <p className="text-2xl">Proposals</p>
            {ProposalsList()}
        </div>
    );
}
