//console.log("JS carregado");

window.addEventListener("DOMContentLoaded", () => {
  // carregar navbar
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });

  // carregar projetos
  fetch('data/projects.json')
    .then(response => response.json())
    .then(projects => {
      const container = document.getElementById('projects-container');

      projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Cria as imagens do carrossel
        const imageSlides = project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('');

        card.innerHTML = `
          <div class="carousel-container">
            <button class="carousel-btn prev" data-index="${index}">&#10094;</button>
            <div class="carousel-images" id="carousel-${index}">
              ${imageSlides}
            </div>
            <button class="carousel-btn next" data-index="${index}">&#10095;</button>
          </div>
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <div class="tech">${project.technologies.join(', ')}</div>
          <a href="${project.link}" target="_blank">Ver Projeto</a>
        `;

        container.appendChild(card);
      });

      // Lógica do carrossel
      const totalProjects = projects.length;
      const slideIndices = new Array(totalProjects).fill(0);

      document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const index = parseInt(btn.dataset.index);
          const carousel = document.getElementById(`carousel-${index}`);
          const totalSlides = carousel.children.length;

          if (btn.classList.contains('prev')) {
            slideIndices[index] = (slideIndices[index] - 1 + totalSlides) % totalSlides;
          } else {
            slideIndices[index] = (slideIndices[index] + 1) % totalSlides;
          }

          const offset = -slideIndices[index] * 100;
          carousel.style.transform = `translateX(${offset}%)`;
        });
      });
    })
    .catch(error => console.error('Erro ao carregar projetos:', error));
});
