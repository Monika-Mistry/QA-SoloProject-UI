const makeRequest = (method, url, body) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.onload = () => {
      if (request.response !== null) {
        resolve(request.responseText);
      } else {
        const reason = new Error("Oops, something went wrong!");
        reject(reason);
      }
    };

    request.open(method, url);
    request.send(body);
  });
};
