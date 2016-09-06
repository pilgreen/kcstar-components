I'm trying a setup where local components have to be installed in the normal Bower location.

This is due to an issue of including Polymer more than one time across multiple domains. 
Basically it breaks the page in Safari and iOS. If you want to include Polymer across multiple domains
the only way to ensure that it doesn't load twice is to literally include the file from '../polymer/polymer.html' 
every time from any source. Annoying, but I see their point I guess.

The Polymer team declared that they weren't going to fix this problem, and that I should deal
with it on my end. Yay. Therefore, the files inside the components folder are dummies that load the 
components from the folder inside bower_components/kcstar-webcomponents. 

That way we can keep the proper ../polymer/polymer.html structure when we use the components on a totally
different site like kuhoops.com. Just remember, ALWAYS MAKE SURE THAT POLYMER IS AT `../polymer/polymer.html` 
if you want to use it, or any other Polymer element.
