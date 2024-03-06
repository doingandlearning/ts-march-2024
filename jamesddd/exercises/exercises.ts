let myNumber: number = 20;

console.log(myNumber);

interface Person {
  name: string,
  age: number,
  email: string
}

const myPerson = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
}

function personFunction(person: Person): string {
  return `${person.name} ${person.age}`;
}

console.log(personFunction(myPerson));

// Exercise 3

{

  let myDictionary: { [key: string]: number } = {
    k1: 2,
    k2: 12,
  };

  function dictionarySum(dictionary: {[key: string]: number}): number {

    
    return 0;

  }


}


