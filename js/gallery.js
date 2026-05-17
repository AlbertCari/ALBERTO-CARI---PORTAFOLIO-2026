const gallery =
  document.getElementById("gallery");

const pageName =
  window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

const pageCategoryMap = {

  "image": "image",
  "video": "video",
  "editorial": "editorial",
  "web": "web",
  "textil": "textil",
  "creatividad": "creatividad"

};

const currentCategory =
  pageCategoryMap[pageName];

const filteredItems =
  portfolioItems.filter(item =>
    item.category === currentCategory
  );

if (filteredItems.length === 0) {

  gallery.innerHTML = `

    <div class="empty-gallery">

      <h2>
        Próximamente contenido.
      </h2>

    </div>
  `;

} else {

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

            <h3>
              ${item.title}
            </h3>

          </div>

        </a>

      </article>
    `;
  });

}