## Useful stuff 

https://generator.tsconfigdemystified.com/

https://www.typescriptlang.org/play

https://tsplay-dev.vercel.app/

## Design principles

1. Emit idiomatic JS 
2. A superset of JS. It will never contradict JS. 
3. Static typing
4. Big focus on tooling. Microsoft *owns* VS code, and developed the Language Server Protocol (LSP). IDE, type inference
5. Gradual adoption

## ES6 - ECMAscript 6 - 2015 

- Sun Oracle own the phrase "JavaScript", which is why people say ES/ECMAscript

## JS primitives
1. string
2. number
3. boolean
4. undefined
5. bigint
6. null
7. symbol (a primitive type that allows for hidden properties. Iterator, for example, is a symbol, and anything that iterates has it as a property)

TS will always try to find the most restrictive type that it can. If we set a const, however, it will set the type to whatever 

```
const name = "James";
```

The type of name is now "James" because it can never be anything else.  

```
let age: number | string = 40;
```

...here we're deliberately widening the type. 

Anything beyond that is a non-primitive: Object, array, function, class.

## TS types that don't exist in JS
- any: basically opting out of typing
- void: return type that doesn't return anything. Enforce non-returning functions 
- unknown: not sure yet - use guard statements, so you return *when you know* - e.g.
```
function doSomething(age: unknown) {
  // Note: typeof will only return a *JS* type
  if (typeof age == 'string') {
    // now it's not unknown anymore!
  }
}
``` 
- never: a block that *should* never get called - e.g. a switch with a section that never gets called. So if something *dreadful* happens, TS will tell us

Tip: cmd + K + I gets you a "problem" window

## Enum isn't like the others

At compile time, almost all of our types leave nothing behind. But enum does. 

e.g. 

```
enum STATUS_CODE {
  "OK",
  "NOT_FOUND"
}

STATUS_CODE.OK;
```

It actually transpiles to a function that maps the values to numbers.

Or if we map the keys to the values, i.e. `"OK" = "OK"` it'll do the same thing only the transpiled function returns strings. 

Or, if you precede your enum with const, it will transpile to that plain string value, i.e. your bundled code will just have "OK" in it. 

