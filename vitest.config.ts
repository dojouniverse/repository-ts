import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Allows using 'describe', 'it', 'expect' without importing them
    environment: "node",
    projects: [
      {
        extends: true,
        test: {
          name: "typecheck",
          include: ["src/**/__tests__/*.unit.test-d.ts"],
          typecheck: {
            enabled: true,
            // Ensure ONLY type checking happens in this project
            only: true,
            ignoreSourceErrors: true, // This stops Vitest from failing duo to errors in others files.
          },
        },
      },
    ],
    coverage: {
      provider: "v8", // Built-in coverage
      include: ["src/**/*.ts"], // Include source files for coverage
      exclude: [
        "src/**/__tests__/**",
        "src/**/__mocks__/**",
        // "src/**/interfaces/**",
      ], // Exclude test and mock files
      reporter: ["text", "html"], // Outputs
      thresholds: { lines: 80 }, // Enforce 80%+
    },
  },
});
