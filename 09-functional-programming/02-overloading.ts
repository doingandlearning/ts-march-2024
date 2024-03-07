// Gulp

task("default", ["styles", "scripts"]);
task("scripts", ["lint"], () => {});
task("styles", () => {});

type CallbackFn = () => void;

function task(name: string, dependencies: string[]): string;
function task(
  name: string,
  dependencies: string[],
  callback: CallbackFn
): number;
function task(name: string, callback: CallbackFn): boolean;
function task(
  name: string,
  param2: string[] | CallbackFn,
  param3?: CallbackFn
): string | number | boolean {
  //
  return true;
}

task(
  "weird",
  () => {},
  () => {}
);
task();

document.createEvent();

function fn(input: number): number;
function fn(input: string): string;
function fn(input: number | string): number | string {
  // even if we break the signature contract - that's on us!
  if (typeof input === "number") {
    return "this also works";
  } else {
    return 1337;
  }
}
