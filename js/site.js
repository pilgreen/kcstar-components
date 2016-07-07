/**
 * Web components site javascript
 * created 2016-07-05
 */

function formatCode(str, comps = []) {
  var components = ''
  comps.forEach(function(d) {
    components += `<link rel="import" href="https://pilgreen.github.io/kcstar-webcomponents/${d}">\n`;
  });

  var code = str.replace(/></gm, '>\n<');

  var full = `
    <script src="https://pilgreen.github.io/kcstar-webcomponents/bower_components/webcomponentsjs/webcomponents-lite.min.js"><\/script>
    ${components}
    ${code}
  `

  return full.replace(/^\s+/gm, '');
}

/**
 * Page Load
 */

document.addEventListener('DOMContentLoaded', function() {
  var codeBox = document.querySelector('#code');
  if(codeBox) {
    codeBox.addEventListener('click', function() {
      this.select();
    });
  }
});
