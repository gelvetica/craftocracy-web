'use client'

import { useParams } from 'next/navigation'
import useSWR from "swr";
import {getProposalProposalsProposalGet, reviseProposalProposalsProposalRevisePost} from "@/lib/client";
import React, {FormEvent, useEffect, useState} from 'react';
import Link from "next/link";


export default function ReviseProposalPage() {
    const params = useParams<{ proposal: string }>()
    const {data: proposal, isLoading} = useSWR(params.proposal, getProposalProposalsProposalGet)
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
        if (proposal) {
            setText(proposal.revisions.slice(-1)[0].body);
        }
    }, [proposal]);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const revision_data = Object.fromEntries(formData.entries())
        await reviseProposalProposalsProposalRevisePost(Number(params.proposal), revision_data)
        window.location.href = `/proposals/${params.proposal}`
    }
    if (isLoading) return <div>please wait...</div>
    if (proposal) return (
        <div>
            <div className="text-2xl">Revising: {proposal.title}</div>
            <form onSubmit={onSubmit}>
                <textarea
                    id="body"
                    name="body"
                    value={text}
                    onChange={handleChange}
                    className="bg-surface0 w-full mt-2"
                    rows={20}
                    maxLength={10000}
                />
                <button className="bg-surface0 p-1 px-2 rounded-full text-xl mt-2" type="submit">Submit</button>
            </form>
        </div>
    )
}