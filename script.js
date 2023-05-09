
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('.main-content');

    window.addEventListener('scroll', () => {
      if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('sticky');
        mainContent.style.paddingTop = navbar.offsetHeight + 'px';
      } else {
        navbar.classList.remove('sticky');
        mainContent.style.paddingTop = '80px'; /* adjust this value to match the height of your navbar */
      }
    });
 