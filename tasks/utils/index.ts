
export function prettify(path: string) {
  const proc = Bun.spawnSync({
    cmd: ["bun", "run", "node_modules/prettier/bin/prettier.cjs", path, "--write"]
  });
  
  if(proc.success) {
    return {
      type: 'success',
      value: proc.stdout.toString()
    } as const 
  } else {
    return {
      type: 'error',
      value: proc.stderr.toString()
    } as const
  }

}