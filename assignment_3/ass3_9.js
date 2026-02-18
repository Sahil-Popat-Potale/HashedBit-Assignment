function countWords(paragraph) {
  const trimmed = paragraph.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

// Example
const p = "This is a sample paragraph. It has several words!";
console.log(countWords(p)); // e.g. 7
