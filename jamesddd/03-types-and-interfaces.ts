// type and interface are more or less interchangeable. The advice from TS has changed several times

// type keyword - what if you want your own type?
// we can combine primitive types together to make a slightly better type

{
  type VALID_API_VALUE = string | number | boolean;
}

// Interface does the same thing but helps with the shape

{

  interface API_RESULT {
    results: number,
    items: []
  }

  // but we can also do

  type MY_API_RESULT = {
    results: number,
    items: []
  }
  // so they're *largely* interchangeable

  type BirdType = {
    wings: 2 
  }

  interface BirdInterface {
    wings: 2
  }

  const bird1: BirdType = { wings: 2 };
  const bird2: BirdInterface = { wings: 2};
  // Duck typing - we can assign bird2 to BirdType, because BirdInterface is the same
  const bird3: BirdType = bird2;

  // Intersection - use ampersand
  type Owl = BirdType & { nocturnal: true }

  // However I can't then do 
  // type Owl = { predatory: true }
  // Because types are closed

  interface Chicken extends BirdType {
    laysEggs: true
  }

  // So we can't then do: 
  // let chicken: Chicken = {};
  // But we get a nicer error message from the interface than we would if we just did type
}