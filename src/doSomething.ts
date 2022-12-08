export function doSomething(argument: string | number) {
  if (typeof argument === "string") {
    let saved = argument + argument;
    console.log(saved);
  } else {
    let multiple = argument ** 2;
    console.log(multiple);
  }
}
