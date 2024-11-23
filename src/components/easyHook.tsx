'use client'
import { useState, useEffect } from 'react'



export default function EasyHook(fetcher, args) {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const res = await fetcher(args)
            setData(res)
        }
        fetchData()
    }, [])

    if (!data) return <div>Loading...</div>

    return data
}