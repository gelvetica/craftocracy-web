'use client'
import Form from 'next/form'
import React, {FormEvent} from "react";
import useSWR from "swr";
import {registerUserAccountPost} from "@/lib/client";
import SuperErrorHandlerDeluxe from "@/components/SuperErrorHandlerDeluxe";
import { redirect } from 'next/navigation'

const pronounds = ["they", "she", "he", "it"]

const pronounds_items = pronounds.map(pronound =>
    <option key={pronound} value={pronound}>{pronound}</option>
);

export default function Page() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const registration_data = Object.fromEntries(formData.entries())
        await registerUserAccountPost(registration_data)
        window.location.href = '/'
    }
    return (
        <Form onSubmit={onSubmit}>
            <label htmlFor="name">Display Name</label><br/>
            <input className="bg-surface0 rounded-xl" required autoComplete='off' type="text" id="name" name="name"
                   maxLength={32} size={32}/><br/><br/>
            <label htmlFor="pronouns">Pronouns</label><br/>
            <select className="bg-surface0 rounded-xl" required autoComplete='off' id="pronouns" name="pronouns">
                {pronounds_items}
            </select><br/>
            <p className="text-xs text-subtext0">this is the pronoun used for you when generating text, seperate profile pronouns will be added later.</p>
            <br/>
            <button className="bg-surface0 p-1 px-2 rounded-full" type="submit">Submit</button>
        </Form>
    )
}