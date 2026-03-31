// 5) შექმენით searchPosts მოდული DummyJSON API [https://dummyjson.com/posts?q=searchText](https://dummyjson.com/posts?q=searchText) გამოყენებით form submit-ზე გამოყენებული სიტყვით გაფილტრეთ მხოლოდ ის პოსტები რომელთა title შეიცავს საძიებო სიტყვას renderInfo ფუნქციით გამოიტანეთ title body views და tags გამოიყენეთ for of და აჩვენეთ ტექსტი თუ არც ერთი პოსტი არ მოიძებნა
// Requirements

// 1. HTML search input და form
// 2. async fetchInfo ფუნქცია რომელიც გამოიტანს data.posts
// 3. filter გამოყენება title.includes() შესამოწმებლად
// 4. for of ლუპი პოსტების გადასაყვანად DOM-ში
// 5. შეტყობინება თუ ძიებამ შედეგი ვერ მოიტანა

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchText = input.value;

  const res = await fetch(`https://dummyjson.com/posts?q=${searchText}`);
  const data = await res.json();

  renderPosts(data.posts, searchText);
});

function renderPosts(posts, searchText) {
  results.innerHTML = "";

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  for (const post of filtered) {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <p>Views: ${post.views}</p>
      <p>Tags: ${post.tags.join(", ")}</p>
      <hr/>
    `;

    results.appendChild(div);
  }
}