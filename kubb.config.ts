import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginClient } from '@kubb/plugin-client'

export default defineConfig({
    input: {
        path: 'http://127.0.0.1:8000/openapi.json',
    },
    output: {
        path: './src/lib/client',
    },
    plugins: [
        pluginOas(),
        pluginTs(),
        pluginClient({
            output: {
                path: '.',
                barrelType: 'named',
                banner: '/* eslint-disable no-alert, no-console */',
                footer: '',
            },
            importPath: "../axiosInstance.ts",
        }),
    ],
})