(function(){
  'use strict';
  var dropbox = document.getElementById('dropboxcheck');

  if (dropbox) {
    dropbox.checked = true;

    dropbox.addEventListener('change', function() {
      if(!this.checked) {
        chrome.runtime.sendMessage({"key": "pauseSundayDropbox"});
      } else {
        chrome.runtime.sendMessage({"key": "resumeSundayDropbox"});
      }
    });
  }
}());
