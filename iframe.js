var setup = function () {
  var callback = function (data) {
    console.log("back from extension", data);
  };

  var sendTestMessageToExtension = function () {
    var data = Date();
    console.log("sendTestMessageToExtension", data);
    chrome.runtime.sendMessage(data, callback);
  }

  document
    .getElementById('send')
    .addEventListener('click', sendTestMessageToExtension);
}

window.addEventListener('DOMContentLoaded', setup);
