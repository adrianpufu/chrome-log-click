(function() {
  var injectedScript = document.createElement("script");
  var inlineScript = document.createTextNode(
    `
      function getPathTo(element) {
        if (element.id !== '')
          return 'id("' + element.id + '")';

        if (element === document.body)
          return element.tagName;

        var ix= 0;
        var siblings = element.parentNode.childNodes;

        for (var i = 0; i < siblings.length; i++) {
          var sibling= siblings[i];

          if (sibling === element)
            return getPathTo(element.parentNode) + '/' + element.tagName + '[' + (ix+1) + ']';

          if (sibling.nodeType === 1 && sibling.tagName === element.tagName)
            ix++;
        }
      }

      var documentClickListener = function (event) {

        event.preventDefault();

        var data;

        try {
          data = sessionStorage.getItem('clicks');
        } catch(e) {
          console.log('Session storage ERROR:' + e);
        }

        if (!data)
          data = [];
        else
          data = JSON.parse(data);

        data.push(getPathTo(event.target));
        console.log(data);

        try {
          sessionStorage.setItem('clicks', JSON.stringify(data));
        } catch(e) {
          console.log('Session storage ERROR:' + e);
        }

      };

      document.addEventListener('click', documentClickListener, false);`
  );
  injectedScript.appendChild(inlineScript);
  document.body.appendChild(injectedScript);
})();
