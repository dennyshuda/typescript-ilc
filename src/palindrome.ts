export function isPalindrome(input: number) {
  let reverse = 0;
  let orginalNumber = input;

  while (orginalNumber != 0) {
    reverse = reverse * 10 + (orginalNumber % 10);
    orginalNumber = Math.floor(orginalNumber / 10);
  }

  if (input === reverse) {
    return true;
  } else {
    false;
  }
}
