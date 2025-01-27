'use client'
import React from "react";
import Link from "next/link";
import useSWR from "swr";
import {getAccountAccountGet} from "@/lib/client";
import {isAxiosError} from 'axios'
import {useAccountStatus} from "@/lib/useAccountStatus"

const UserAccountComponent = () => {

    const {data, isLoading} = useAccountStatus();
    if (isLoading) return
    return (
        <Link href={data.ref} className="text-xl px-6 align-middle font-light hover:text-pink">{data.name}</Link>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="flex flex-none h-12  justify-between w-full bg-crust py-3 text-text">
                <div className="inline-flex items-start">
                    <Link href="/"
                          className="text-xl pl-4 pr-2 font-bold hover:text-pink align-middle">Craftocracy</Link>
                    <div className="">
                        <Link
                            href="/users"
                            className="strudel-dropdown strudel-dropdown-button text-xl px-4 hover:text-pink active:text-pink align-middle">Users
                        </Link>
                    </div>
                    <div className="">
                        <Link
                            href="/proposals"
                            className="strudel-dropdown strudel-dropdown-button text-xl px-4 hover:text-pink active:text-pink align-middle">Proposals
                        </Link>
                    </div>
                </div>
                <div className="inline-flex items-end">
                    {UserAccountComponent()}
                </div>
            </nav>
        </>
    );
};

export default Navbar;