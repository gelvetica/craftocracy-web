'use client'

import {isAxiosError} from 'axios'
import React from "react";


export default function SuperErrorHandlerDeluxe(error) {
    if (isAxiosError(error)) {
        return <div>{error.response.data.message}</div>
    }
    else {
        throw error;
    }
}
