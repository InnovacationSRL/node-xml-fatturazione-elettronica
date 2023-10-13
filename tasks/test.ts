import { readFileSync } from "fs";
import * as _ from 'lodash'
import { parse, fromXML, toXML } from "~/index";
import * as x from 'xml-js'
import { match, P } from "ts-pattern";

const PATH = 'docs/agenzia-entrate/Esempi fattura, hash e ricevute/ST Fatturazione elettronica - ITHVQWPH73P42H501Y_00023_ITHVQWPH73P42H501Y_00023.xml';
const PATH_TEST1 = "IT016417907022023c_09RCz.xml"
const PATH_TEST2 = "IT016417907022023r_09GMx.xml"
const xml = readFileSync(PATH_TEST1, {encoding: 'utf8'})
const invoice = x.xml2js(xml, {compact: true}) as any
console.log(invoice)

function removeText(object: any) {
  if(typeof object === "object") {
    const keys = Object.keys(object);
    for(const key of keys) {
      match(object[key])
        .with({ _text: P.string.select() }, text => {
          object[key] = text
        })
        .otherwise(() => removeText(object[key]))
        
      const innerKeys = Object.keys(object[key])
      if(innerKeys.length === 1 && innerKeys[0] === "_text") {
        object[key] = object[key]._text;
      } else {
        removeText(object[key])
      }
    }
  }
}
const v = invoice["ns3:FatturaElettronica"]
removeText(v)
if(v["ds:Signature"]) {
  delete v["ds:Signature"]
}
if(v._attributes) {
  delete v._attributes
}
const result = parse(v);
function jp(object: any) {
  console.log(JSON.stringify(object, null, 2))
}
console.log(result)


