const UpcomingEvent = {
  async render() {
    return `
     <div class="container">
        <h1 class="mb-3">Event</h1>
        <div id="section-1" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <p class="card-title fw-medium">Nama Event</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center gap-3">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" disabled>Rating 0/0</button>
                    <button href="#/fotografer/:id" type="button" class="btn btn-sm btn-outline-primary">View</button>
                  </div>
                  <small class="text-body-secondary">1000 Partisipan</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <p class="card-title fw-medium">Nama Event</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center gap-3">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" disabled>Rating 0/0</button>
                    <button href="#/fotografer/:id" type="button" class="btn btn-sm btn-outline-primary">View</button>
                  </div>
                  <small class="text-body-secondary">1000 Partisipan</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <p class="card-title fw-medium">Nama Event</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center gap-3">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" disabled>Rating 0/0</button>
                    <button href="#/fotografer/:id" type="button" class="btn btn-sm btn-outline-primary">View</button>
                  </div>
                  <small class="text-body-secondary">1000 Partisipan</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
  },
};

export default UpcomingEvent;
