export function truncateSentence(sentence: string, k: number, from: string) {
  const array = sentence.split(" ");
  const front = [];
  const back = [];
  if (from === "front") {
    for (let index = 0; index < k; index++) {
      front.push(array[index]);
      console.log(front.join(" "));
    }
  } else {
    for (let index = array.length - k; index < array.length; index++) {
      back.push(array[index]);
      console.log(back.join(" "));
    }
  }
}
