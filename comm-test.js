(function() {

  getFromApp = function(request, sender, callback) {
    console.log('getFromApp:', request);
    callback({'request':request});
  };

  chrome.runtime.onMessage.addListener(getFromApp);

}).call(this);
