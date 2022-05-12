console.log(document.querySelector(".my-text").innerHTML);

const p = document.querySelector("p");
console.log(p.innerHTML);

const item2 = document.querySelector(".item:nth-child(2)");
console.log(item2.innerHTML);

setTimeout(() => {
  document.querySelector(".my-text").innerHTML = "おはよう";
  document.querySelector(
    ".my-text-2"
  ).innerHTML = `今日は<span class="weather">雨</span>です`;
}, 1000);

setTimeout(() => {
  document.querySelectorAll(".item").forEach((elem) => {
    elem.innerHTML += "さん";
  });
}, 2000);
