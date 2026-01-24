import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/index.js"],
  format: ["esm", "cjs"],
  dts: false,
  clean: true,
  sourcemap: true,
  outDir: "dist",
  shims: true,
  splitting: false,
  bundle: true,
  platform: "node",
  target: "node18",
  outExtension({ format }) {
    return {
      js: format === "esm" ? ".mjs" : ".cjs",
    };
  },
  // Externalize dependencies that should not be bundled
  external: [
    "axios",
    "debug",
    "fs-extra",
    "memory-stream",
    "node-api-headers",
    "npmlog",
    "rc",
    "semver",
    "tar",
    "which",
    "yargs",
  ],
  // Copy cpp folder for win_delay_load_hook.cc and Find-VisualStudio.cs
  onSuccess: async () => {
    const fs = await import("fs-extra");
    await fs.copy("lib/cpp", "dist/cpp");
    await fs.ensureDir("dist/import");
    await fs.copy("lib/import/Find-VisualStudio.cs", "dist/import/Find-VisualStudio.cs");
  },
});
