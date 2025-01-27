'use client'

import React, {FormEvent, useEffect, useState} from "react";
import {postProposalProposalsPost, reviseProposalProposalsProposalRevisePost} from "@/lib/client";

export default function NewProposalPage() {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const proposal_data = Object.fromEntries(formData.entries())
        const proposal = await postProposalProposalsPost(proposal_data)
        window.location.href = `/proposals/${proposal.id}`
    }
    return (
        <div>
            <div className="text-2xl">New Proposal</div>
            <form onSubmit={onSubmit}>
                <input className="mt-2 text-xl bg-surface0" maxLength={70} size={70} id="title" name="title" type="text" placeholder="Title"/>
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