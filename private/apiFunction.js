// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetch(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  });

  xhr.open("GET", url);
  xhr.send();
}

if (typeof module !== "undefined") {
  module.exports = fetch;
}
