import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        hmr: {
            host: '51ff6ebd-443d-4395-b3fd-6a4af6b45e53-00-1az7np63jhuew.teams.replit.dev',
        },
        host: '0.0.0.0',
        origin: 'https://51ff6ebd-443d-4395-b3fd-6a4af6b45e53-00-1az7np63jhuew.teams.replit.dev:5173',
    },
});
