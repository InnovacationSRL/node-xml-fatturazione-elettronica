import dts from "bun-plugin-dts"

await Bun.build({
  entrypoints: ["./index.ts"],
  format: "esm",
  outdir: "./dist",
  plugins: [dts()],
})
