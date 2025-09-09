document.getElementById("seta-esquerda").addEventListener("click", function () {
  if (document.querySelector(".cftv").style.display === "flex") {
    document.querySelector(".audpedido").style.display = "flex";
    document.querySelector(".audestoque").style.display = "none";
    document.querySelector(".cftv").style.display = "none";
  } else if (document.querySelector(".audpedido").style.display === "flex") {
    document.querySelector(".audestoque").style.display = "flex";
    document.querySelector(".audpedido").style.display = "none";
    document.querySelector(".cftv").style.display = "none";
  } else if (document.querySelector(".audestoque").style.display === "flex") {
    document.querySelector(".cftv").style.display = "flex";
    document.querySelector(".audestoque").style.display = "none";
    document.querySelector(".audpedido").style.display = "none";
  }
});

document.getElementById("seta-direita").addEventListener("click", function () {
  if (document.querySelector(".cftv").style.display === "flex") {
    document.querySelector(".audpedido").style.display = "none";
    document.querySelector(".audestoque").style.display = "flex";
    document.querySelector(".cftv").style.display = "none";
  } else if (document.querySelector(".audpedido").style.display === "flex") {
    document.querySelector(".audestoque").style.display = "none";
    document.querySelector(".audpedido").style.display = "none";
    document.querySelector(".cftv").style.display = "flex";
  } else if ((document.querySelector(".audestoque").style.display = "flex")) {
    document.querySelector(".cftv").style.display = "none";
    document.querySelector(".audestoque").style.display = "none";
    document.querySelector(".audpedido").style.display = "flex";
  }
});
