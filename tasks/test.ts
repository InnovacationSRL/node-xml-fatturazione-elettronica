import { readFileSync } from "fs";
import * as _ from 'lodash'
import { parse, fromXML, toXML } from "~/index";
import * as x from 'xml-js'

const xml = readFileSync('docs/agenzia-entrate/Esempi fattura, hash e ricevute/ST Fatturazione elettronica - ITHVQWPH73P42H501Y_00023_ITHVQWPH73P42H501Y_00023.xml', {encoding: 'utf8'})
const invoice = x.xml2js(xml, {compact: true}) as any

function removeText(object: any) {
  if(typeof object === "object") {
    const keys = Object.keys(object);
    for(const key of keys) {
      const innerKeys = Object.keys(object[key])
      if(innerKeys.length === 1 && innerKeys[0] === "_text") {
        object[key] = object[key]._text;
      } else {
        removeText(object[key])
      }
    }
  }
}
const v = invoice["ns2:FatturaElettronica"]
removeText(v)
delete v["ds:Signature"]
const result = parse(v);
console.log(result)
