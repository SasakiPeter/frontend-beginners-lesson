console.log("hello");

// level1
const level1 = () => {
  document.querySelectorAll(".item").forEach((item) =>
    item.addEventListener("click", (e) => {
      // console.log(event.target);
      document.querySelector(".image-dialog").classList.toggle("show");

      // level3
      // ここで、クリックされた要素に対応する情報を取得する
      // data持たせておくか
      const clickedId = e.target.dataset.id;
      const image = images.find((img) => img.id == clickedId);
      console.log(image);
      switchImageDialog(image);
    })
  );
  // document.querySelector(".image-dialog")

  document.querySelector(".close-button").addEventListener("click", (e) => {
    document.querySelector(".image-dialog").classList.remove("show");
  });
};

// level2

let images = [];
fetch("./json/photos.json").then((response) => {
  return response.json().then((json) => {
    // array
    console.log(json.data);
    images = json.data;
    const li_list = [];
    json.data.forEach((item) => {
      li_list.push(li_component(item.image, item.id));
    });

    document.querySelector(".image-list").innerHTML = li_list.join("");

    // DOMを書き換えた後に、イベントリスナーつけないと動かない
    level1();
    level4();
  });
});

const li_component = (src = "photos/flower01.jpg", id = "item1") =>
  `<li class="item">
  <img src=${src} data-id=${id} width="500" height="300" alt="" />
</li>`;

// level3

// image-containerに挿入
const image_component = (src = "photos/flower01.jpg", id = "item1") =>
  `<img
src=${src}
data-id=${id}
class="image"
  width="960"
  height="540"
  alt=""
  />`;

// image-containerに挿入
const text_component = (title = "画像タイトル", descriptioon = "画像の説明") =>
  ` <h2 class="image-title">${title}</h2>
  <p class="image-description">${descriptioon}</p>`;

const switchImageDialog = (image) => {
  document.querySelector(".image-container").innerHTML = image_component(
    image.image,
    image.id
  );
  document.querySelector(".text").innerHTML = text_component(
    image.title,
    image.description
  );
};

// level 4

const level4 = () => {
  // next
  document.querySelector(".prev-button").addEventListener("click", (e) => {
    console.log(e.target);

    // 現在の画像情報を取得
    // 冷静に、描画されている画像で動くことが想定されているから、imagesに入っている順番に応じて、切り替えるっていう実装でいいのかもしれん

    const clickedId = document.querySelector(".image-container>img").dataset.id;
    console.log(clickedId);
    const prevId =
      clickedId.slice(0, 4) +
      String(
        1 < Number(clickedId.slice(4))
          ? Number(clickedId.slice(4)) - 1
          : Number(clickedId.slice(4))
      );
    const image = images.find((img) => img.id == prevId);
    console.log(image);

    // そのまえに切り替える
    switchImageDialog(image);
  });

  // prev
  document.querySelector(".next-button").addEventListener("click", (e) => {
    console.log(e.target);
    // 現在の画像情報を取得
    const clickedId = document.querySelector(".image-container>img").dataset.id;
    console.log(clickedId);
    const nextId =
      clickedId.slice(0, 4) +
      String(
        Number(clickedId.slice(4)) < images.length
          ? Number(clickedId.slice(4)) + 1
          : Number(clickedId.slice(4))
      );
    const image = images.find((img) => img.id == nextId);
    console.log(image);

    // そのまえに切り替える
    switchImageDialog(image);
  });
};
