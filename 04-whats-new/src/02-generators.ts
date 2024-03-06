function* generatorFunction() {
  yield "🍑"; // paused here!
  yield "🍉";
  yield "🍋";
  yield "🥭";
}

const fruitGenerator = generatorFunction();

console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(...generatorFunction());

function* fibon() {
  // 1, 1, 2, 3, 5, 8, .....
  let first = 1;
  let second = 1;

  while (true) {
    let sum = first + second;

    yield sum;
    if (sum > 1000) {
      return;
    }
    first = second;
    second = sum;
  }
}

const sequence = fibon();

console.log([...sequence]);

async function* commentLoader(postId: number, batchSize = 100) {
  let startIndex = 0;
  let hasMoreComments = true;

  while (hasMoreComments) {
    const response = await fetch(
      `/api/posts/${postId}/comments?start=${startIndex}&limit=${batchSize}`
    );
    const comments = await response.json();

    if (comments.length < batchSize) {
      hasMoreComments = false;
    }

    yield comments; // Yield a batch of comments

    startIndex += comments.length;
  }
}
async function getComments() {
  const commentGenerator = commentLoader(1);
  // const comments = [...commentGenerator];
}
