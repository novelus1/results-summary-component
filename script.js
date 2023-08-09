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

  const categorySpan = document.createElement("span");
  categorySpan.textContent = item.category;

  const scoreSpan = document.createElement("span");
  scoreSpan.textContent = `Score: ${item.score}`;

  categoryDiv.appendChild(image);
  categoryDiv.appendChild(categorySpan);
  categoryDiv.appendChild(scoreSpan);

  categoriesContainer.appendChild(categoryDiv);
});
