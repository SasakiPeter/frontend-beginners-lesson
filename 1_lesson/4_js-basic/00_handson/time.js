// const Max = (a, b, c) => Math.max(a, b, c);

// 0~a-1
const generateRandomInt = (a) => Math.floor(Math.random() * a);

// a = generateRandomInt(15);
// b = generateRandomInt(15);
// c = generateRandomInt(15);

const n = 3;
const nums = [];
for (let i = 0; i < n; i++) {
  nums.push(generateRandomInt(100));
}

// console.log(a, b, c);
// console.log(...array);

const myFunction = (a, b, c) => {
  // 二度手間星人
  array = [a, b, c];
  console.log(
    `${array.join("と")}を受け取りました。\
  一番大きい数値は${Math.max(...array)}です`
  );
};

myFunction(...nums);

const i = 1;

console.log(String(i).padStart(2, "0"));

const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
console.log([...segmenter.segment("👨‍👩‍👧‍👧")].length);

/////////////////////////

// const getTime = () => {
//   // 現在時刻
//   const currentDate = new Date();
//   // 時間
//   const hours = currentDate.getHours();
//   // 分
//   const minutes = currentDate.getMinutes();
//   // 秒
//   const seconds = currentDate.getSeconds();
//   return [hours, minutes, seconds].map((i) => String(i).padStart(2, "0"));
// };

const getTime = () =>
  [(d) => d.getHours(), (d) => d.getMinutes(), (d) => d.getSeconds()]
    .map((fn) => fn(new Date()))
    .map((i) => String(i).padStart(2, "0"));

console.log(getTime());

setInterval(() => {
  const [hours, minutes, seconds] = getTime();
  document.querySelector(
    ".time"
  ).innerHTML = `${hours}時${minutes}分${seconds}秒`;
}, 100);

const record = [];

const recordTime = () => {
  const time = getTime().join(":");
  record.push(time);
  const msgs = [];
  for (const time of record) {
    // console.log(time);
    msgs.push(`<li>${time}にクリックされました</li>`);
  }
  document.querySelector(".record").innerHTML = msgs.join("");
};

document.querySelector(".button").addEventListener("click", recordTime);
