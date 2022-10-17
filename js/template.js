class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `    
        <footer>            
          created by Sergio Bianchini in 2022, all rights reserved.<br>
          powered by Bootstrap, GitHub and some coding.
        </footer>     
      `;
    }
  }

  customElements.define('main-footer', Footer);


  class Head extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = ` 
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SyriasSerj</title>
  
      <!--style-->
      <link href="/style/mainstyle.css" rel="stylesheet">
      <!-- fonts -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM Sans|Manrope|Bebas Neue">
      <!-- jQuery Slim Min -->
      <script src="https://code.jquery.com/jquery-3.6.1.js"></script>
      `;
    }
  }
  customElements.define('main-head', Head);

  class Navbar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `      
        <nav class="navbar navbar-expand-md fixed-top siteMainColor">
          <a class="navbar-brand" href="/">SyriasSerj</a>
            <!-- Toggler button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenuOpts" aria-controls="navbarMenuOpts" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Items -->
            <div class="collapse navbar-collapse" id="navbarMenuOpts">
              <ul class="navbar-nav ms-3 me-3" onclick="myFunction(event)">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/include/music/music.html" id="pageMusic" >Music</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/include/photos/photos.html" id="pagePhotos" >Photos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/include/career/career.html" id="pageCareer" >Professional Career</a>
                </li>
              </ul>
            </div>
        </nav>
        `
        }
    }
    
  customElements.define('main-navbar', Navbar);