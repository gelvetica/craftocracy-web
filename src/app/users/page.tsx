'use client'

import {UserPartyModel} from "@/lib/client";
import {useListUsersUsersGet} from "@/lib/client/hooks";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import { Suspense } from 'react'

function resolve_party_reference(party: UserPartyModel) {
    if (party === null) {
        return {
            id: "#",
            shorthand: "I",
            name: "Independent",
        }
    }
    return party
}

const UsersList = () => {

    const { data, error, isLoading } = useListUsersUsersGet({...{inactive: false}, ...Object.fromEntries(useSearchParams())});
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    if (data) return (
        <ul>
            {data.users.map((user) => {
                const party = resolve_party_reference(user.party);
                const pref = `/parties/${party.id}`;
                const uref = `/users/${user.id}`;
                return (
                    <li key={user.id}><Link href={pref}>[{party.shorthand}]</Link> <Link href={uref}>{user.name}</Link></li>
                )
            })}
        </ul>
    );
}


export default function Home() {
    return (
        <div>
            <p className="text-2xl">Users</p>
            <Suspense fallback={(<div>loading...</div>)}>
                <UsersList/>
            </Suspense>
        </div>
    );
}
