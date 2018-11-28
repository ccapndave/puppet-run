import print from "./print"

declare const puppet: {
  argv: string[],
  exit (exitCode?: number): void
}

console.group("Greeting")

if (puppet.argv.length === 0) {
  print("Hello World")
} else {
  print(`Hello, ${puppet.argv[0]}!`)
}

console.groupEnd()

puppet.exit(0)
