const isPalindrome = (x)=> {
    let string = x.toString();
    let reversed = string.split("").reverse().join("");
    return string === reversed;
  };