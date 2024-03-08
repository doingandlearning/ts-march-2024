{
  // 7 primitive types
  // string
  // number
  // boolean
  // null   null?
  // undefined
  // Symbol
  // BigInt (9,007,199,254,740,991)

  let name = "Kevin";
  let newName = name;
  newName = "Bob";

  let age: number | string = 40;

  // Non-primitive
  // object
  // array
  // function
  // class
}

{
  // any, void, unknown, never
  let name: any = "Kevin";
  const newName = name;

  function log(): void {
    console.log("I was called - woohoo!");
    // return "Yo!";
  }

  function doSomethingWithAge(age: unknown) {
    // I don't know yet!

    if (typeof age === "string") {
      const newAge = age;
    }
  }

  let newVar: never;

  function example(x: string | number): boolean {
    if (typeof x === "string") {
      return true;
    } else if (typeof x === "number") {
      return false;
    }

    // x here is of type 'never' since all possible types have already been covered above.
    const exhaustiveCheck: never = x;
    return exhaustiveCheck;
  }
  const result = example(true);
}

{
  // enum

  enum STATUS_CODE {
    "OK" = "OK", // 0
    "NOT_FOUND" = "NOT_FOUND", // 1
    "UNAUTHORIZED" = "UNAUTHORIZED", // 2
  }

  STATUS_CODE.OK;
}
