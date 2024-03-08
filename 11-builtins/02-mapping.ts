interface EventDetails {
  name: string;
  location: string;
  date: string;
  isPublic?: boolean;
}

type ReadOnlyEventDetails = {
  readonly [Key in keyof EventDetails]: EventDetails[Key];
};

type OurReadonly<Type> = {
  readonly [P in keyof Type]-?: Type[P];
};

type ReadOnlyEvents = OurReadonly<EventDetails>;

// Conditional types

const age = 40;
const ageDescription = age >= 40 ? "old" : "not old";

// types => extends

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

interface Rock {
  exist(): void;
}

type DogName<TypeToCheck> = TypeToCheck extends Dog ? true : false;

type test = DogName<Rock>;

type isString<T> = T extends string ? true : false;

const newVar = "test";

type NewVar = isString<typeof newVar>;

interface User {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

// type OurReadonly<Type> = {
//   readonly [P in keyof Type]: Type[P];
// };

type DeeplyReadonly<T> = {
  readonly [P in keyof T]: T[P] extends string | number
    ? T[P]
    : DeeplyReadonly<T[P]>;
};

type ImmutableUser = DeeplyReadonly<User>;

let user: ImmutableUser = {
  name: "",
  age: 10,
  address: {
    street: "",
    city: "",
  },
};
