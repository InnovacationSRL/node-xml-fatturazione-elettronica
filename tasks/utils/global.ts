import { string } from "zod"


declare global {
  interface String {
    lines(): string[]
    capitalize(): string
    isLetters(): boolean
  }
  interface Array<T> {
    unlines(this: Array<string>): string
  }
}
String.prototype.lines = function(): string[] {
  return this.split('\n')
}
String.prototype.capitalize = function(): string {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
String.prototype.isLetters = function(): boolean {
  return /^\w*$/.test(this.toString())
}
Array.prototype.unlines = function() {
  return this.join('\n')
}
export {}