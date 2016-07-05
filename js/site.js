/**
 * Web components site javascript
 * created 2016-07-05
 */

function formatCode(str) {
  var code = str.replace(/></gm, '>\n<');
  var full = `
    <script src="https://pilgreen.github.io/kcstar-webcomponents/bower_components/webcomponentsjs/webcomponents-lite.min.js"><\/script>
    <link rel="import" href="https://pilgreen.github.io/kcstar-webcomponents/components/graphic-stack.html">
    ${code}
  `

  return full.replace(/^\s+/gm, '');
}
