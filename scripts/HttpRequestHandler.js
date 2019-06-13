const makeRequest = (method, url, body) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.onload = () => {
      if (request.status >= 200 && request.status <= 299) {
        resolve(request.responseText);
      } else {
        const reason = new Error("Oops, something went wrong! Error code: " + request.status) ;
        reject(reason);
      }
    };

    request.open(method, url);
    request.send(body);
  });
};