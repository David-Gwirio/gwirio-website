document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Mobile: tap a submenu parent to expand instead of navigating away.
  document.querySelectorAll('.nav-item.has-submenu > .nav-parent').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        var item = link.parentElement;
        var alreadyOpen = item.classList.contains('open');
        document.querySelectorAll('.nav-item.has-submenu.open').forEach(function (el) {
          el.classList.remove('open');
        });
        if (!alreadyOpen) {
          item.classList.add('open');
          e.preventDefault();
        }
      }
    });
  });

  // Highlight the current section in the nav.
  var path = window.location.pathname;
  document.querySelectorAll('[data-path]').forEach(function (link) {
    var target = link.getAttribute('data-path');
    if (target === '/index.html') {
      if (path === '/' || path === '/index.html') link.classList.add('active');
    } else if (path.indexOf(target) === 0) {
      link.classList.add('active');
    }
  });
});
