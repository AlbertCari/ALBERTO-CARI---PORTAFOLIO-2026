const gallery =
  document.getElementById("gallery");

const currentPage =
  window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

const filteredItems =
  portfolioItems.filter(item =>
    item.category === currentPage
  );

filteredItems.forEach(item => {

  gallery.innerHTML += `

    <article class="gallery-item">

      <a
        href="detail.html?id=${item.id}"
      >

        <img
          loading="lazy"
          src="${item.thumbnail}"
          alt="${item.title}"
        >

        <div class="gallery-overlay">

          <h3>${item.title}</h3>

        </div>

      </a>

    </article>
  `;
});