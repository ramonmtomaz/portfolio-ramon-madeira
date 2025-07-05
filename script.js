document.getElementById("seta-esquerda").addEventListener("click", function() {
  if (document.querySelector(".audestoque").style.display === "none") {
    document.querySelector(".audestoque").style.display = "flex";
    document.querySelector(".audpedido").style.display = "none";
  } else {
    document.querySelector(".audestoque").style.display = "none";
    document.querySelector(".audpedido").style.display = "flex";
  }
});

document.getElementById("seta-direita").addEventListener("click", function() {
  if (document.querySelector(".audpedido").style.display === "none") {
    document.querySelector(".audpedido").style.display = "flex";
    document.querySelector(".audestoque").style.display = "none";
  } else {
    document.querySelector(".audpedido").style.display = "none";
    document.querySelector(".audestoque").style.display = "flex";
  }
});