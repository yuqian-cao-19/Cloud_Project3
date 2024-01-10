let html1 = `
    <header class="nav-bar">
      <a href="index.html">
        <button class="nav-button">Home</button>
      </a>
      <a href="Portfolio.html">
        <button class="nav-button">Portfolio</button>
      </a>
      <a href="Qualifications.html">
        <button class="nav-button">Qualifications</button>
      </a>
      <a href="Service.html"> <button class="nav-button">Service</button></a>
      <a href="AIGenerated.html">
        <button class="nav-button">Contact</button></a
      >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
      />
    </header>
    <button class="toggle" onclick="toggleTheme()">Change Me</button>

    
    <div class="title">Contact</div>

    <div class="contact-section">
      <div class="contact-box">
        <h3 class="contact-subtitle"><i class="fas fa-phone"></i> Phone</h3>
        <p class="contact-info">832-363-7583</p>
      </div>
      <div class="contact-box">
        <h3 class="contact-subtitle"><i class="fas fa-envelope"></i> Email</h3>
        <a class="contact-info" href="mailto:caoyuqian520@gmail.com"
          >caoyuqian520@gmail.com</a
        >
      </div>
      <div class="contact-box">
        <h3 class="contact-subtitle"><i class="fab fa-github"></i> Github</h3>
        <a class="contact-info" href="https://github.com/yuqian-cao-19"
          >https://github.com/yuqian-cao-19</a
        >
      </div>
      <div class="contact-box">
        <h3 class="contact-subtitle">
          <i class="fab fa-linkedin"></i> LinkedIn
        </h3>
        <a class="contact-info" href="https://github.com/yuqian-cao-19">
          https://www.linkedin.com/in/yuqian-cao-09ily/
        </a>
      </div>
    </div>
    <section class="big-text-box">
        <h2>Prompt to AI</h2>
       <p>I'm designing a web page, can you generate css based on the following html code and my desire</p>
       <p>I have a title called "contact" with four subtitles as "Phone", "Email", "Github", "LinkedIn" each with one line information about it</p>
       <p>I want the four categories to be lined up horizontally, each within a box</p>
       <p>can you remove the background color for the contact-section</p>
       <p>can you add an icon to each of the four categories to the right of the text</p>
       <p>the text is off-centered, can you fix that</p>
       <p>can you align text to the center in contact-subtitle</p>
       <p>can you decrease the spacing between the four boxes</p>
       <p>can you change the contact-section instead of the contact-box to achieve that effect</p>
       <p>I don't want that, revert back to previous response. Instead of changing the margin in contact-box, change justify-content in contact-section to center</p>
       <p>remove background color in contact-section</p>
       <p>increase margin between four boxes</p>
       <p>can you move four boxes down towards the center of the page</p>
       <p>increase it to 100px</p>
       <p>change width of box from set width to min-width</p>

    </section>
    <script type="text/javascript" src="index.js"></script>
  `;

let html2 = `
<header class="nav-bar">
      <a href="index.html">
        <button class="nav-button">Home</button>
      </a>
      <a href="Portfolio.html">
        <button class="nav-button">Portfolio</button>
      </a>
      <a href="Qualifications.html">
        <button class="nav-button">Qualifications</button>
      </a>
      <a href="Service.html"> <button class="nav-button">Service</button></a>
      <a href="AIGenerated.html">
        <button class="nav-button">Contact</button></a
      >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
      />
    </header>
    <button class="toggle" onclick="toggleTheme()">Change Me</button>
    <h1>Contact Me</h1>
    <div class="contact-container">
      <a href="tel:8323637583" class="contact-link phone"
        >Phone: (832) 363-7583</a
      >
      <a href="mailto:caoyuqian520@gmail.com" class="contact-link email"
        >Email: caoyuqian520@gmail.com</a
      >
      <a href="https://github.com/yuqian-cao-19" class="contact-link github"
        >GitHub</a
      >
      <a
        href="https://www.linkedin.com/in/yuqian-cao-09ily"
        class="contact-link linkedin"
        >LinkedIn</a
      >
    </div>
    <section class="big-text-box">
    <h2>Prompt to AI</h2>
    <p>can you give me a css style for my contact page that contains my phone, email, github, and linkedin? I want the theme to be futuristic and cyberpunk.</p>
    <p>can you change the github color</p>
    <p>can you change it to purple</p>
    <p>Can you position the whole text more down toward the center</p>
    <p>can you change the fonts to Orbitron</p>
    <p>can you add more decorations to the page to make it more interesting</p>
    <p>can you draw a big text box for me a bit after my contact information? Have it below the section where the screen first sees the page</p>
    <p>can you move the text box more down so that it's not initially visible without scrolling down</p>
    <p>now the contact me text are pushed upwards. Can you fix them so they are centered again. </p>
    <p>can you increase the margin for h1 even further</p>
    <p>can you increase it until the text are in the middle of the page</p>
    <p>just a little more</p>
    </section>
    <script type="text/javascript" src="index.js"></script>
`;

document
  .querySelector(".css-link")
  .setAttribute("href", localStorage.getItem("style"));
console.log(localStorage.getItem("style"));
toggleHTML();

function toggleTheme() {
  let collection = document.getElementsByClassName("css-link")[0];

  if (localStorage.getItem("style") == "styles/style.css") {
    collection.setAttribute("href", "styles/style2.css");
    localStorage.setItem("style", "styles/style2.css");
    document.querySelector(".contact-body").innerHTML = html2;
  } else if (localStorage.getItem("style") == "styles/style2.css") {
    collection.setAttribute("href", "styles/style.css");
    localStorage.setItem("style", "styles/style.css");
    document.querySelector(".contact-body").innerHTML = html1;
  } else {
    localStorage.setItem("style", "styles/style.css");
    document.querySelector(".contact-body").innerHTML = html1;
  }
}

function toggleHTML() {
  if (localStorage.getItem("style") == "styles/style.css") {
    console.log("setting to html1");
    document.querySelector(".contact-body").innerHTML = html1;
  } else {
    console.log("setting to html2");
    document.querySelector(".contact-body").innerHTML = html2;
  }
}
