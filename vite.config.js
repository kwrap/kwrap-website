import { createHtmlPlugin } from 'vite-plugin-html'

export default ({ command }) => {
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
            assetsInlineLimit: 0,
            rollupOptions: {
                input: {
                    index: './src/index.html',
                    privacy: './src/privacy.html',
                    404: './src/404.html'
                },
                output: {
                    entryFileNames: '[name]-[hash].js',
                    chunkFileNames: `[name]-[hash].js`,
                    assetFileNames: `[name]-[hash].[ext]`
                }
            }
        },
        plugins: command === 'build' ? [createHtmlPlugin()] : []
    }
}
