export function binArrayToInt(binary: number[]) {
  let stringBinary: string = "";
  binary.forEach((item) => {
    stringBinary += item;
  });
  const convert = parseInt(stringBinary, 2);
  return convert;
}
