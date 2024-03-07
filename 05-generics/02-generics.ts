{
  function mergeObjects(obj1: any, obj2: any) {
    return { ...obj1, ...obj2 };
  }

  const objA = { name: "James" };
  const objB = { location: "Manchester" };

  const objC = mergeObjects(objA, objB);
}
{
  function genericMergeObjects<Obj1, Obj2>(
    obj1: Obj1,
    obj2: Obj2
  ): Obj1 & Obj2 {
    return { ...obj1, ...obj2 };
  }

  interface User {
    name: string;
    id?: string;
  }
  const objA = { name: "James" };
  const objB = { location: "Manchester" };

  const objC = genericMergeObjects<User, typeof objB>(objA, objB);
}
{
  function fetchUsers(): UserAPI {}

  function fetchArticles(): ArticleAPI {}

  function fetch<Type>(): API<Type> {}
}

{
  function getElement<T>(arr: T[], index: number): T {
    return arr[index];
  }

  const myArray = [1, "two", { three: 3 }];
  const element = getElement(myArray, 2);

  const arr2 = [1, 2, 3];
  const element2 = getElement(arr2, 1);
}
