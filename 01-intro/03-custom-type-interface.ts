{
  type VALID_API_VALUE = string | number | boolean;

  let result: VALID_API_VALUE = 123;

  type API_RESULT = {
    results: number;
    items: [];
  };

  type BirdType = {
    wings: 2;
  };

  interface BirdInterface {
    wings: 2;
  }

  const bird1: BirdType = { wings: 2 };
  const bird2: BirdInterface = { wings: 2 };
  const bird3: BirdType = bird2; // Duck typing

  // If it looks like a duck, sounds like a duck, acts like a duck - it is a duck!

  type Owl = BirdType & { nocturnal: true }; // Intersection
  type Robin = BirdType & { nocturnal: false };

  // type Robin = { redbreast: true };

  interface Peacock extends BirdInterface {
    colourful: true;
    flies: false;
  }

  interface Chicken extends BirdType {
    colourful: false;
    flies: false;
  }

  interface Chicken {
    laysEggs: true;
  }

  let chicken: Chicken = {};
  let owl: Owl = {};
}
