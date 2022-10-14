class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>            
          GESU         
        </footer>     
      `;
    }
  }
  customElements.define('main-footer', Footer);


  class Head extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` 
      <head>   
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>SyriasSerj</title>
      <script src="js/template.js"></script>
  
      <!--style-->
      <link href="style/mainstyle.css" rel="stylesheet">
  
      <!-- fonts -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM Sans|Manrope|Bebas Neue">
  
      <!-- jQuery Slim Min -->
      <script src="https://code.jquery.com/jquery-3.6.1.js"></script>
      <!-- jQuery loading HTML -->
        <script>
          $(function(){
            $("#leftPanel").load("/include/leftPanel.html"); 
          });
        </script> 
        <script>
          $(function(){
            $("#navbar").load("/include/navbar.html"); 
          });
        </script>
        <script>
          $(function(){
            $("#rightPanel").load("/include/rightPanel.html"); 
          });
        </script>
  
    </head>
      `;
    }
  }
  customElements.define('main-head', Head);

  class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!DOCTYPE html>
      <!--boostrap CSS-->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <!--boostrap JS-->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
      
      <nav class="navbar navbar-expand-md fixed-top siteMainColor">
        <a class="navbar-brand" href="/">SyriasSerj</a>
          <!-- Toggler button -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenuOpts" aria-controls="navbarMenuOpts" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Items -->
          <div class="collapse navbar-collapse" id="navbarMenuOpts">
            <ul class="navbar-nav ms-3 me-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/include/music.html" id="pageMuisc" >Music</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/include/photos.html" id="pagePhotos" >Photos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/include/career.html" id="pageCareer" >Professional Career</a>
              </li>
            </ul>
          </div>
      </nav>
        `
        }
    }
    
  customElements.define('main-navbar', Navbar);