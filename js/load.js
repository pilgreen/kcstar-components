(function() {
  // Load Web Components
  if(!window.WebComponents) {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/webcomponents-lite.min.js';
    document.head.appendChild(script);
  }
})();
