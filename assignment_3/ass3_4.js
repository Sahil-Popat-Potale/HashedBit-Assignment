function countVowelsConsonants(s) {
  const letters = s.toLowerCase().match(/[a-z]/g) || [];
  const vowels = new Set(['a','e','i','o','u']);
  let v = 0, c = 0;
  for (const ch of letters) {
    if (vowels.has(ch)) v++;
    else c++;
  }
  return { vowels: v, consonants: c };
}

// Example (≥20 characters)
const longStr = "This is a sample paragraph with plenty letters.";
console.log(countVowelsConsonants(longStr));
// => { vowels: X, consonants: Y }
