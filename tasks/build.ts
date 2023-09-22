import dts from "bun-plugin-dts"
import { readFile } from "fs/promises"

const packageJson = await Bun.file("./package.json").json();


await Bun.build({
  entrypoints: ["./src/schema.ts"],
  format: "esm",
  outdir: "./dist",
  target: "node",
  plugins: [dts()],
  external: Object.keys(packageJson.peerDependencies)
})
