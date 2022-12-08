import { binArrayToInt } from "./binary";
import { whatIsThis } from "./depends";
import { doSomething } from "./doSomething";
import { isPalindrome } from "./palindrome";
import { truncateSentence } from "./truncate";

const checkPalindrome = isPalindrome(343);

console.log(checkPalindrome);

truncateSentence("Hallo nama saya", 2, "front");
truncateSentence("Saya suka bermain sepeda", 2, "back");

console.log(binArrayToInt([1, 0, 1]));
console.log(binArrayToInt([1, 0, 1, 1, 0, 1]));

whatIsThis({ name: "Zidane", age: 21, occupation: "student" });
whatIsThis({ name: "Bob", age: 2, color: "black" });

doSomething("test");
doSomething(32);
