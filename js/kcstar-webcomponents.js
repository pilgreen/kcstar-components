(function() {
  if(!window.WebComponents) {
    var script = document.createElement('script');
    script.src = '/kcstar-webcomponents/bower_components/webcomponentsjs/webcomponents-lite.min.js';
    document.head.appendChild(script);
  }

  if(!window.Polymer) {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = '/kcstar-webcomponents/bower_components/polymer/polymer.html';
    document.head.appendChild(link);
  }

  if(!window.kcstarComponentsLoaded) {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = '/kcstar-webcomponents/components/base.html'
    document.head.appendChild(link);
    window.kcstarComponentsLoaded = true;
  }
})();
