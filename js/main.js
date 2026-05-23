// ============================
//       afritallent js
// ============================
const btnToggel = document.querySelector("#darkmod");
const body = document.querySelector("body");

//changement de theme au dpart
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

btnToggel.addEventListener("click", () => {
  body.classList.toggle("dark");

  // suvegarde de theme 
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
})

// La navbar qui change de style au scroll (fond, ombre, effet shrink)

const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.classList.add("scrollNavabar");
  } else {
    navbar.classList.remove("scrollNavabar");
  }
})

const btnRemonte = document.querySelector("#btnRemonte");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnRemonte.classList.add("btnRmtAfficher");
  } else {
    btnRemonte.classList.remove("btnRmtAfficher");
  }

  btnRemonte.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
})


//====================================================================================
// Les compteurs de statistiques qui s'animent de 0 à leur valeur au scroll
// ===================================================================================

const TousNbr = document.querySelectorAll(".nbrIncrementer");

const observateur = new IntersectionObserver((entrez) => {

  for (let observe of entrez) {
    if (observe.isIntersecting) {
      let cpt = 0;
      let val = Number(observe.target.dataset.target);
      const calcul = setInterval(() => {
        if (cpt < val) {
          cpt++;
        } else {
          clearInterval(calcul);
        }
        observe.target.textContent = cpt;
      }, 1)
    }
  }
})

for (let prest of TousNbr) {
  observateur.observe(prest);
}

//====================================================================================
// Les compteurs de statistiques qui s'animent de 0 à leur valeur au scroll
// ===================================================================================

const sectionFondu = document.querySelectorAll("section");

const observateurSection = new IntersectionObserver((courSection) => {
  for (let sec of courSection) {
    if (sec.isIntersecting) {
      sec.target.classList.add("visbleSection");
    } else {
      sec.target.classList.remove("visbleSection");
    }
  }
});

for (let sectionVue of sectionFondu) {
  observateurSection.observe(sectionVue);
}

/*=====================================================
filtrage dynamique des freelances 
===================================================== */
const filtre = document.querySelectorAll(".btnFiltre");
const articles = document.querySelectorAll("article");

for (let art of articles) {
  art.classList.add("visi"); // affichage de tout les cartpar  defaut 
}

for (let btn of filtre) {
  btn.addEventListener("click", () => {
    for (let art of articles) {
      art.classList.add("visi");
      if (btn.dataset.category === "tous") {
        art.classList.add("visi");
      } else if (btn.dataset.category === art.dataset.category) {
        art.classList.add("visi");
      } else {
        art.classList.remove("visi");
      }
    }
  })
}


// =================================================
// validation du formulaire de contac
//==================================================

//Sélection des éléments
const formulaire = document.querySelector(".formulaire");
const nomUser = document.querySelector("#nomUser");
const prenomUser = document.querySelector("#prenomUser");
const mailUser = document.querySelector("#mailUser");
const messageUser = document.querySelector("#message");

//Sélection des paragraphes de messages d'erreur CSS
const erreurNom = document.querySelector(".erreurNom");
const erreurPrenom = document.querySelector(".erreurPrenom");
const erreurMail = document.querySelector(".erreurMail");
const erreurMessage = document.querySelector(".erreurMessage");

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const pupPupMessage = document.querySelector(".pupPupMessage");
const btnPuppup = document.querySelector(".pupPupMessage");


formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nomUser.value.trim().length < 2) {
    erreurNom.classList.add("erreurVisible");
  } else {
    erreurNom.classList.remove("erreurVisible");
  }

  if (prenomUser.value.trim().length < 3) {
    erreurPrenom.classList.add("erreurVisible");
  } else {
    erreurPrenom.classList.remove("erreurVisible");
  }

  if (messageUser.value.trim().length < 20) {
    erreurMessage.classList.add("erreurVisible");
  } else {
    erreurMessage.classList.remove("erreurVisible");
  }

  if (regex.test(mailUser.value.trim())) {
    erreurMail.classList.remove("erreurVisible");
  } else {
    erreurMail.classList.add("erreurVisible");
  }

  if (
    nomUser.value.trim().length > 2 &&
    prenomUser.value.trim().length > 3 &&
    messageUser.value.trim().length > 20 &&
    regex.test(mailUser.value.trim())
  ) {
    pupPupMessage.classList.add("messageVue");
  } else {
    pupPupMessage.classList.remove("messageVue");
  }
})

btnPuppup.addEventListener("click", () => {
  pupPupMessage.classList.add("messageVueFerme");
})