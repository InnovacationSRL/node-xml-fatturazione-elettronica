import { readFileSync } from "fs";

// const xsd = await readFileSync('docs/agenzia-entrate/Schema_VFPR12.xsd', { encoding: 'utf8'})
// const regex = /xs:\w+\b/gi
// const matches = [...xsd.matchAll(regex)]



// const unique = [...new Set(matches.flat())]
// console.log(unique)
import axios from 'axios'

const result = await axios.get('http://www.omdbapi.com/?s=harry%20potter&apikey=8d24c7aa')

console.log(result.data)