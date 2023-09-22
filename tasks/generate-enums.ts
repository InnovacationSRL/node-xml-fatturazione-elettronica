import { readFile, writeFile } from "fs/promises";
import '@tasks/utils/global'
import { readdirSync } from "fs";
import path from 'path'

async function generateEnum(fileName: string) {
  const enumName = fileName.capitalize();
  const path = `${baseFolder}/${fileName}.txt`
  const contents = await readFile(path, { encoding: "utf8"})
  const tsLines = contents.lines().map(line => {
    const values = line.split('\t').filter(x => x)
    let [key, value] = values
    if(!key.isLetters()) {
      key = `"${key}"`
    }
    return `${key}: z.string().describe("${value}"),`
  }).unlines();
  
  const values = `export const ${enumName}Values = z.object({
    ${tsLines}
  })`
  const schema = `export const ${enumName} = ${enumName}Values.keyof()`
  const type = `export type ${enumName} = z.infer<typeof ${enumName}>`
  
  const fileContent = [imports, values, schema, type].unlines()
  
  await writeFile(`./src/enumerations/${fileName}.ts`, fileContent);
  
  console.log('written file: ', fileName);
  
  const proc = Bun.spawnSync({
    cmd: ["bun", "run", "node_modules/prettier/bin/prettier.cjs", `src/enumerations/${fileName}.ts`, "--write"]
  });
  
  if(proc.success) {
    console.log('formatted with success');
    console.log(proc.stdout.toString());
  } else {
    console.error(proc.stderr.toString())
  }
}


const imports = `import { z } from 'zod'`
const baseFolder = './export';
const files = readdirSync(baseFolder);
console.log('FILES: ', files)
for(const file of files) {
  const filePath = path.parse(file)
  if(filePath.ext === ".txt") {
    console.log('----------------------------------------')
    console.log('GENERATING FILE: ', file)
    console.log('----------------------------------------')
    console.log('')
    await generateEnum(filePath.name)
    console.log('----------------------------------------')
    console.log('END GENERATING FILE', file)
    console.log('----------------------------------------')
    console.log('')
  }
}