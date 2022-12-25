function navMenu() {
  let mudaClass = document.getElementById("navigation")
  if (mudaClass.className === "topnav") {
    mudaClass.className += " responsive"
  } else {
    mudaClass.className = "topnav"
  }
}

function header() {
  return `
      <img src="images/logo.svg" alt="Sunnyside Logo">
      <nav class="topnav" id="navigation">
        <a href="#home" class="active">Contact</a>
        <a href="#news">Projects</a>
        <a href="#contact">Services</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="navMenu()">
        <i class="fa fa-bars"></i>
        </a>
      </nav>
      <div class="text-down">
        <h1>We are creatives</h1>
        <img src="images/icon-arrow-down.svg" alt="Arrow down">
      </div>
    `
}

function section1() {
  return `
    <div class="info-transform">
      <h3>Transform your brand</h3>
      <p>We are
        a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing
        for you.
      </p>
      <a href="#">Learn more</a>
    </div>
    <div class="img-egg">
      <img src="images/desktop/image-transform.jpg" alt="Transform">
    </div>
    `
}

function section2() {
  return `
    <div class="img-stand">
      <img src="images/desktop/image-stand-out.jpg" alt="Stand">
    </div>
    <div class="info-stand">
      <h3>Stand out to the right audience</h3>
      <p>Using a collaborative
        formula of designers, researchers, photographers, videographers, and
        copywriters, we’ll build and extend your brand in digital places.
      </p>
      <a class="Learn" href="#">Learn more</a>
    </div>
    `
}

function section3() {
  return `
    <div class="img-cereja">
      <h3>Graphic design</h3>
      <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
    </div>
    <div class="img-orange">
      <h3>Photography</h3>
      <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
    </div>
    `
}

function article() {
  return `
    <h1>Client testimonials</h1>
    <div class="row">
      <div class="column">
        <img src="images/image-emily.jpg" alt="Perfil 1">
        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
        <h2>Emily R.</h2>
        <h6>Marketing Director</h6>
      </div>
      <div class="column">
        <img src="images/image-thomas.jpg" alt="Perfil 2">
        <p>enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
        <h2>Thomas S.</h2>
        <h6>Chief Operating Officer</h6>
      </div>
      <div class="column">
        <img src="images/image-jennie.jpg" alt="Perfil 3">
        <p>Incredible end result! Our sales increased over 400% when we worked with
    Sunnyside. Highly recommended!</p>
        <h2>Jennie F.</h2>
        <h6>Business Owner</h6>
      </div>
    </div>
    `
}

function figure() {
  return `
    <img src="images/desktop/image-gallery-milkbottles.jpg" alt="Milk"><img src="images/desktop/image-gallery-orange.jpg" alt="Orange2"><img src="images/desktop/image-gallery-cone.jpg" alt="Cone"><img src="images/desktop/image-gallery-sugarcubes.jpg" alt="Sugar cubes">
    `
}

function footer() {
  return `
    <img src="images/logo.svg" alt="logo">
    <nav class="bottomnav">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Projects</a>
    </nav>
    <nav class="social-nav">
      <a href="#"><img src="images/icon-facebook.svg" alt="Facebook"></a>
      <a href="#"><img src="images/icon-instagram.svg" alt="Instagram"></a>
      <a href="#"><img src="images/icon-twitter.svg" alt="Twitter"></a>
      <a href="#"><img src="images/icon-pinterest.svg" alt="Pinterest"></a>
    </nav>
    `
}

document.querySelector("#header").innerHTML = header()

document.querySelector("#section1").innerHTML = section1()

document.querySelector("#section2").innerHTML = section2()

document.querySelector("#section3").innerHTML = section3()

document.querySelector("#article").innerHTML = article()

document.querySelector("#figure").innerHTML = figure()

document.querySelector("#footer").innerHTML = footer()