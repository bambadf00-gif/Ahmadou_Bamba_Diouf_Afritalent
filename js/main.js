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

