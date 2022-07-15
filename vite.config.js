import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

export default () => {
    return {
        server: {
            host: true,
            port: 80
        },
        base: './',
        root: './src/',
        build: {
            outDir: '../dist/',
            emptyOutDir: true,
            target: 'esnext',
            rollupOptions: {
                input: {
                    index: resolve(__dirname, './src/index.html'),
                    privacy: resolve(__dirname, './src/privacy.html'),
                    404: resolve(__dirname, './src/404.html')
                },
                output: {
                    entryFileNames: '[name]-[hash].js',
                    chunkFileNames: `[name]-[hash].js`,
                    assetFileNames: `[name]-[hash].[ext]`
                }
            }
        },
        plugins: [createHtmlPlugin()]
    }
}
