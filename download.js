(function() {
  var injectedScript = document.createElement("script");
  var inlineScript = document.createTextNode(
    `
    (function() {
      var fileName = 'clicks.txt';
      var text;

      try {
        text = sessionStorage.getItem('clicks')
      } catch(e) {
        console.log('Download error: session storage');
      }

      if (!text) {
        console.log('Download error: session storage clicks not found');
      }

      console.log(text);

      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', fileName);

      document.removeEventListener('click', documentClickListener);

      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);

      document.addEventListener('click', documentClickListener);
    })()`
  );
  injectedScript.appendChild(inlineScript);
  document.body.appendChild(injectedScript);
})();
