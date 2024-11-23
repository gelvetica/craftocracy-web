'use client';
import {SWRConfig} from 'swr';

export const SWRProvider = ({ children }) => (
    <SWRConfig value={{
        refreshInterval: 0,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
    }}>
        {children}
    </SWRConfig>
);