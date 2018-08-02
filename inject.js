(function() {
  var injectedScript = document.createElement("script");
  var inlineScript = document.createTextNode("document.addEventListener('click', function (event) {event.preventDefault(); console.log(event.target); }, false);");
  injectedScript.appendChild(inlineScript);
  document.body.appendChild(injectedScript);
})();
