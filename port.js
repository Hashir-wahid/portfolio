document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close');
    const categoryBtns = document.querySelectorAll('.category-btn');
  
    videoContainers.forEach(function(container) {
      container.addEventListener('click', function() {
        const videoSource = container.getAttribute('data-video');
        modalVideo.setAttribute('src', videoSource);
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      modalVideo.pause();
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        modalVideo.pause();
      }
    });
  
    categoryBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const category = btn.getAttribute('data-category');
        videoContainers.forEach(function(container) {
          const containerCategory = container.getAttribute('data-category');
          if (category === 'all' || category === containerCategory) {
            container.style.display = 'block';
          } else {
            container.style.display = 'none';
          }
        });
      });
    });
  });
  