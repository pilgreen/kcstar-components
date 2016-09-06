/**
 * Web components site javascript
 * created 2016-07-05
 */

function sanitize(html, comps) {
  var comps = comps || [];
  var arr = ['<script src="https://pilgreen.github.io/kcstar-webcomponents/js/kcstar-webcomponents.js"></script>'];

  comps.forEach(function(d) {
    arr.push(`<link rel="import" href="https://pilgreen.github.io/kcstar-webcomponents/${d}"></link>`);
  });

  var code = html
    .replace(/></g, '>\n<') // Table line needs to have newlines added for editing later
    .replace(/<img.*src="".*>/g, '') // remove empty images
    .replace(/<img (.*)>/g, '<img $1></img>') // Close image tags for Newsgate
    .replace(/\n\s+/g, '\n') // Move everything to the left
    .split(/\n/); 

  arr = arr.concat(code);
  return arr.join('\n');
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
