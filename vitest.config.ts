import ci from 'ci-info';
import { defineConfig } from 'vitest/config';

export default defineConfig(() => {
    const timeOut = 300_000;

    return {
        clearScreen: ci.isCI,
        test: {
            watch: false,
            testTimeout: timeOut,
            hookTimeout: timeOut,
            teardownTimeout: timeOut,
        },
    };
});
