const n = 100;
const arr = [];
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push("Frontend Backend");
  } else if (i % 3 === 0) {
    arr.push("Frontend");
  } else if (i % 5 === 0) {
    arr.push("Backend");
  } else {
    arr.push(i);
  }
}

console.log(arr.join(", "));
