document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close');
  
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
  });

  document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('a[href="#home"]');
    const servicesLink = document.querySelector('a[href="#services"]');
    const aboutMeLink = document.querySelector('a[href="#about-me"]');
  
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    servicesLink.addEventListener('click', function(e) {
      e.preventDefault();
      const servicesSection = document.getElementById('services');
      window.scrollTo({ top: servicesSection.offsetTop, behavior: 'smooth' });
    });
  
    aboutMeLink.addEventListener('click', function(e) {
      e.preventDefault();
      const aboutMeSection = document.getElementById('about-me');
      window.scrollTo({ bottom: aboutMeSection.offsetTop, behavior: 'smooth' });
    });
  });
  