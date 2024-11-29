'use client'

import {listUsersUsersGet, UserPartyModel} from "@/lib/client";
import useSWR from "swr";
import Link from "next/link";

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
    const { data, error, isLoading } = useSWR("/users", listUsersUsersGet);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
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
            {UsersList()}
        </div>
    );
}
