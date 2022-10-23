export function permuteAPalindrome(input: string): boolean {
  const lettterArray = input
    .toLowerCase()
    .split('')
    .sort(function(a: string, b: string) {
      return a.localeCompare(b);
    });
  let single = 0;
  for (let i = 0; i < lettterArray.length; i++) {
    if (lettterArray[i] === lettterArray[i + 1]) {
      i++;
    } else {
      single++;
    }
    if (single > 1) {
      return false;
    }
  }
  return true;
}
