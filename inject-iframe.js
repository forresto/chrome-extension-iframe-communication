(function() {
  var GridExtensionPanel;

  if (window.theGridExtensionPanel != null) {
    return;
  }

  GridExtensionPanel = function() {
    var iframe = document.createElement('iframe');
    iframe.src = chrome.extension.getURL('iframe.html');
    iframe.id = 'comm-test-iframe';
    iframe.style.position = 'absolute';
    iframe.style.top = '0px';
    iframe.style.left = '0px';

    var body = document.body;
    if (!body) {
      body = document.getElementsByTagName('body')[0];
    }

    var container = document.createElement('div');
    container.id = 'comm-test-container';
    container.appendChild(iframe);

    body.appendChild(iframe);

    return {};
  };

  window.theGridExtensionPanel = new GridExtensionPanel();

}).call(this);
