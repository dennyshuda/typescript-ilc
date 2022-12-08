interface Person {
  name: string;
  age: number;
  occupation: string;
}

interface Animal {
  name: string;
  age: number;
  color: string;
}

export function whatIsThis(argument: Person | Animal) {
  if ("occupation" in argument) {
    console.log("This is person!");
  } else if ("color" in argument) {
    console.log("This is a cat!");
  } else {
    console.log("This is not person or cat");
  }
}
