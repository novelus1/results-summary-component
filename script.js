const categoriesContainer = document.getElementById("categories");

const jsonData = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

jsonData.forEach((item) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  categoryDiv.classList.add(`category-${item.category.toLowerCase()}`);

  const image = document.createElement("img");
  image.src = item.icon;
  image.alt = item.category;

  const categoryTextContainer = document.createElement("div");
  categoryTextContainer.style.display = "flex"; 
  categoryTextContainer.style.alignItems = "center";

  const categorySpan = document.createElement("span");
  categorySpan.textContent = item.category;

  const scoreContainerSpan = document.createElement("span");
  scoreContainerSpan.classList.add("score-container");

  const scoreSpan = document.createElement("div");
  scoreSpan.textContent = item.score;
  scoreSpan.classList.add("score");

  const scoreSuffixSpan = document.createElement("span");
  scoreSuffixSpan.innerHTML = "&nbsp;&nbsp/ 100";
  scoreSuffixSpan.classList.add("score-suffix");

  scoreContainerSpan.appendChild(scoreSpan);
  scoreContainerSpan.appendChild(scoreSuffixSpan);

  categoryTextContainer.appendChild(image);
  categoryTextContainer.appendChild(categorySpan);

  categoryDiv.appendChild(categoryTextContainer);
  categoryDiv.appendChild(scoreContainerSpan);

  categoriesContainer.appendChild(categoryDiv);
});
