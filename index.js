const images = document.querySelectorAll('.image-row img');

images.forEach(img => {

  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 0.3s ease';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });

  img.addEventListener('click', () => {
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) { 
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { 
      img.msRequestFullscreen();
    }
  });
});