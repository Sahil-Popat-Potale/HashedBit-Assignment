function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function correctfn(sentence, wrong, correct) {
  // replace all whole-word occurrences (case-sensitive); use 'i' if case-insensitive needed
  const re = new RegExp('\\b' + escapeRegex(wrong) + '\\b', 'g');
  return sentence.replace(re, correct);
}

// Example
console.log(correctfn("I love Javasript. Javasript is fun.", "Javasript", "JavaScript"));
// "I love JavaScript. JavaScript is fun."
