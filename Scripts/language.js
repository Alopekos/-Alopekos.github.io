const toggle = document.getElementById("toggle");
const english = document.getElementById("english");
const french = document.getElementById("french");
let language = "FR";

const resumeTxt = document.getElementById("resume-txt");
const resumeSmallTxt = document.getElementById("resume-small-txt");
const homeTxt = document.getElementById("home-txt");
const profileTxt = document.getElementById("profile-txt");
const helloTxt = document.getElementById("hello-txt");
const wasdTxt = document.getElementById("wasd-txt");
const presentationTitle = document.getElementById("presentation-title");
const aboutTxt = document.getElementById("about-col-1-txt");
const skillsTxt = document.getElementById("skills-txt");
const experienceTxt = document.getElementById("experience-txt");
const educationTxt = document.getElementById("education-txt");
const skillHTML = document.getElementById("skills");
const experienceHTML = document.getElementById("experience");
const educationHTML = document.getElementById("education");
const servicesTxt = document.getElementById("services-txt");
const serviceList = document.getElementById("service-list");
const projectTxt = document.getElementById("project-txt");
const portefolioProjetTxt = document.getElementById("portefolio-projet-txt");
const portefolioDnDGameTitle = document.getElementById("dnd-title");
const rpgMapTitle = document.getElementById("rpg-map-title");
const rpgMapTxt = document.getElementById("rpg-map-txt");
const portefolioDnDGame = document.getElementById("dnd-project-txt");
const seeMoreTxt = document.getElementById("see-more-txt");
const emailTxt = document.getElementById("email-txt");

toggle.addEventListener("click", () => {
  if (language === "FR") {
    language = "EN";
    french.style.opacity = "0";
    english.style.opacity = "1";
    toggle.classList.add("active");
    toEnglish();

    const root = document.querySelector(":root");

    root.style.setProperty("--myname", `"Rémi !`);
    root.style.setProperty("--pxlartist", `'a pixel artist'`);
    root.style.setProperty("--foxenjoyer", `'a fox enthusiast'`);
    root.style.setProperty("--design", `'an app designer'`);
    root.style.setProperty("--dev", `'an app developer'`);
  } else {
    language = "FR";
    toggle.classList.remove("active");
    french.style.opacity = "1";
    english.style.opacity = "0";
    toFrench();

    const root = document.querySelector(":root");

    root.style.setProperty("--myname", `"Rémi !`);
    root.style.setProperty("--pxlartist", `'pixel artist'`);
    root.style.setProperty("--foxenjoyer", `'amateur de renards'`);
    root.style.setProperty("--design", `'concepteur appli'`);
    root.style.setProperty("--dev", `'développeur'`);
  }
});

const toEnglish = () => {
  resumeTxt.innerText = "Resume";
  resumeSmallTxt.innerText = "Resume";
  homeTxt.innerText = "Home";
  profileTxt.innerText = "Profile";
  helloTxt.innerText = "- Hi, I'm -";
  wasdTxt.innerText = "Press the keys on your keyboard.";
  presentationTitle.innerText = "About me";
  aboutTxt.innerHTML = `
              <p>
                Hello, my name is Rémi Legrand. <br />
               I'm an application designer and developer. As a programmer, my passion is creating original and responsive user interfaces.
              </p>
              <p>
                Passionate about pixel art and programming, I'm always
                curious to learn more about new technologies and innovative coding.
              </p>
              <p>Let's get in touch!</p>`;
  skillsTxt.innerText = "Skills";
  experienceTxt.innerText = "Experience";
  educationTxt.innerText = "Education";
  skillHTML.innerHTML = `
              <ul>
                <li>
                  <span>UI/UX</span><br />Interface design for Web or software applications
                </li>
                <li>
                  <span>App developpement</span><br />Working as a team to build applications
                </li>
                <li>
                  <span>Softwares and technologies used</span><br />
                  JavaScript, Photoshop, Git, GitHub, Java, Spring, JavaScript, Vue3, PHP, Bootstrap, Laravel, Agile
                </li>
              </ul>`;
  experienceHTML.innerHTML = `
              <ul>
                <li>
                  <span>2024 - 2026</span><br />Trainee at Le Campus Numérique Grenoble as a application developper
                </li>
                <li>
                  <span>2023 - 2024</span><br />Self-taught programmer
                </li>
                <li>
                  <span>2022 - 2023</span><br />English teacher at "Abaque", Grenoble
                </li>
                <li>
                  <span>2014</span><br />Observation internship in web design/web development at "La Haute Société", Grenoble
                </li>
              </ul>`;
  educationHTML.innerHTML = `
              <ul>
                <li>
                  <span>2022</span><br />Master's degree in English literature (LLCER) at Grenoble Alpes University
                </li>
                <li>
                  <span>2020</span><br />Bachelor's degree in Applied Foreign Languages (LEA) at Grenoble Alpes University
                </li>
              </ul>`;
  servicesTxt.innerText = "My services";
  serviceList.innerHTML = `
          <div>
            <h2>Web Dev.</h2>
            <p>Building websites. HTML, CSS, Javascript, Git. Frameworks : (W.I.P.).</p>
            <a class="notAssigned">See more</a>
          </div>
          <div>
            <h2>UI/UX Design</h2>
            <p>Designing pleasant and interactives infterfaces. </p>
            <a class="notAssigned">See more</a>
          </div>
          <div>
            <h2>Pixel Art</h2>
            <p>Artist in my spare time, illustrator, pixel-oriented art. </p>
            <a class="notAssigned">See more</a>
          </div>
  `;
  projectTxt.innerText = "My Projects";
  portefolioProjetTxt.innerHTML = `My first project. A personal portfolio with a design that changes with the seasons.<br/> GitHub repository:`;
  portefolioDnDGameTitle.innerHTML = `Java D&D Game`;
  portefolioDnDGame.innerHTML = `Dungeons & Dragons type game made at Campus Numérique as part of my training.<br/>Github repository:`;
  rpgMapTitle.innerHTML = `RPG Map Vue3`;
  rpgMapTxt.innerHTML = `A small personal project in Vue.js to help the trainees at the Campus Numérique find their way around the dungeon rooms of our role-playing game.<br/> Website :`;
  seeMoreTxt.innerText = "See more";
  emailTxt.innerHTML = `
                Or send me an email:&nbsp;&nbsp;&nbsp;remi_legrand@icloud.com 
                <a href="mailto:remi_legrand@icloud.com" target="_blank" >
                  <ion-icon class="emailIcon" name="mail"></ion-icon>
                </a>`;

  return;
};

const toFrench = () => {
  resumeTxt.innerText = "C.V";
  resumeSmallTxt.innerText = "C.V";
  homeTxt.innerText = "Accueil";
  profileTxt.innerText = "Profil";
  helloTxt.innerText = "- Bonjour, je suis -";
  wasdTxt.innerText = "Appuyez sur les touches du clavier.";
  presentationTitle.innerText = "Présentation";
  aboutTxt.innerHTML = `
              <p>
                Bonjour, je m'appelle Rémi Legrand.  <br />
               Je suis un concepteur développeur d'application. En tant que programmeur, ma passion est de créer des interfaces utilisateur originales et réactives. 
              </p>
              <p>
Passionné de pixel art et de programmation, je suis toujours curieux d'en apprendre plus sur les nouvelles technologies et le codage innovant. 
              </p>
              <p>Entrons en contact !</p>`;
  skillsTxt.innerText = "Compétences";
  experienceTxt.innerText = "Expérience";
  educationTxt.innerText = "Éducation";
  skillHTML.innerHTML = `
              <ul>
                <li>
                  <span>UI/UX</span><br />Conception d'interfaces d'applications
                  Web
                </li>
                <li>
                  <span>Développeur applications</span><br />Développement
                  d'applications web.
                </li>
                <li>
                  <span>Logiciels et technologies</span><br />
                  JavaScript, Photoshop, Git, GitHub, Java, Spring, JavaScript, Vue3, PHP, Bootstrap, Laravel, Agile
                </li>
              </ul>`;
  experienceHTML.innerHTML = `
               <ul>
                <li>
                  <span>2024 - 2026</span><br />En formation concepteur développeur application au Campus Numérique, Grenoble
                </li>
                <li>
                  <span>2023 - 2024</span><br />Programmeur autodidacte
                </li>
                <li>
                  <span>2022 - 2023</span><br />Professeur d'anglais à "Abaque",
                  Grenoble
                </li>
                <li>
                  <span>2014</span><br />Stage d'observation en conception web
                  design/web development à "La Haute Société", Grenoble
                </li>
              </ul>`;
  educationHTML.innerHTML = `
              <ul>
                <li>
                  <span>2022</span><br />Master en littérature anglaise (LLCER)
                  à l'Université Grenoble Alpes
                </li>
                <li>
                  <span>2020</span><br />Licence en Langues Etrangères
                  Appliquées (LEA) à l'Université Grenoble Alpes
                </li>
              </ul>`;
  servicesTxt.innerText = "Mes services";
  serviceList.innerHTML = `
   <div>
            <h2>Developpeur applications</h2>
            <p>Java, Javascript, PHP, Git, Linux. Frameworks : Bootstrap, Laravel, Vue3, Spring.</p>
            <a class="notAssigned">En savoir plus</a>
          </div>
          <div>
            <h2>UI/UX Design</h2>
            <p>Design d'interfaces plaisantes et interactives. </p>
            <a class="notAssigned">En savoir plus</a>
          </div>
          <div>
            <h2>Pixel Art</h2>
            <p>Artiste à mes heures perdues, dessinateur, art orienté pixels. </p>
            <a class="notAssigned">En savoir plus</a>
          </div>`;
  projectTxt.innerText = "Mes Projets";
  portefolioProjetTxt.innerHTML = `Mon premier projet. Un portefolio personnel changeant avec les saisons.<br/> Répositoire GitHub:`;
  portefolioDnDGameTitle.innerHTML = `Jeu D&D en Java`;
  portefolioDnDGame.innerHTML = `Jeu type Donjon & Dragons réalisé au Campus Numérique dans le cadre de ma formation.<br/>Répositoire GitHub:`;
  rpgMapTitle.innerHTML = `Carte JDR Vue3`;
  rpgMapTxt.innerHTML = `Un petit projet personnel en Vue.js pour aider la promotion au campus numérique à s'orienter dans les salles du donjon de notre jeu de rôle.<br/>Le site :`;
  seeMoreTxt.innerText = "Voir plus";
  emailTxt.innerHTML = `
                Ou bien envoyez moi un email:&nbsp;&nbsp;&nbsp;remi_legrand@icloud.com 
                <a href="mailto:remi_legrand@icloud.com" target="_blank" >
                  <ion-icon class="emailIcon" name="mail"></ion-icon>
                </a>`;
  return;
};
