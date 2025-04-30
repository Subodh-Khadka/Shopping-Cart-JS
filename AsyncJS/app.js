// function fakeRequestPromise(url) {
//   return new Promise((resolve, reject) => {
//     const randomDelay = Math.random() * 2000;

//     setTimeout(() => {
//       if (Math.random() > 0.3) {
//         resolve(`Fake data from ${url}`);
//       } else {
//         reject("Network error");
//       }
//     }, randomDelay);
//   });
// }

// fakeRequestPromise("blogWebsite/api/data1")
//   .then((data) => {
//     console.log("The data1 was retrieved.");
//   })
//   .catch((err) => {
//     console.log("Error");
//   });

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("magenta", 1000));

const getTitle = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const titleId = res.data.id;
  const titleName = res.data.title;
  return { titleId, titleName };
};

const clickBtn = document.querySelector("#getTitleButton");
const newTitleList = document.querySelector(".title-list");

const addNewTitle = async () => {
  const id = Math.floor(Math.random() * 100) + 1;
  const postData = await getTitle(id);
  const Tid = postData.titleId;
  const TName = postData.titleName;
  const data = { ID: Tid, Name: TName };

  const newTitle = document.createElement("li");

  newTitle.innerText = `ID: ${data.ID}, Title ${data.Name}`;

  newTitleList.appendChild(newTitle);
};

clickBtn.addEventListener("click", addNewTitle);
