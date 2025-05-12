// navbar sendo chamada em todas as divs que for implementada
//só será executado depois de todo html carregado
window.addEventListener("DOMContentLoaded", () => {
    //requisição para buscar navbar
    fetch("components/navbar.html")
    //converter html em uma string
      .then(response => response.text())
      //injetar o conteúdo da navbar na navbar-placeholder
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
      });
  });
  