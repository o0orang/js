const nav = getNode(".nav");
const ul = getNode(".nav ul");
const visualImage = getNode(".visual img");
const nickName = getNode("h1");

function handleSlider(e) {
  e.preventDefault();

  const target = e.target.closest("li");

  if (!target) return;

  const list = [...ul.children];
  const index = attr(target, "data-index");

  list.forEach((li) => removeClass(li, "is-active"));

  addClass(target, "is-active");

  attr(visualImage, "src", `./assets/${data[index - 1].name}.jpeg`);
  attr(visualImage, "alt", `${data[index - 1].alt}`);

  document.body.style.background = `linear-gradient(to bottom,${
    data[index - 1].color[0]
  },${data[index - 1].color[1]})`;

  nickName.textContent = `${data[index - 1].name}`;
}

nav.addEventListener("click", handleSlider);
