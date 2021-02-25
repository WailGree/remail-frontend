/**
 * Sends an AJAX request.
 * @param endpoint The endpoint of the request, for example "/login"
 * @param method Request method. Can be "GET", "POST", "PUT", "DELETE",..
 * @param params Parameters in URL format, like "param1=3&param3=asdf"
 * @param body Content of request body
 * @param onSuccess A function to call when the request completes successfully.
 *                  The data will be in event.target.response
 */
export function sendAjax(
  endpoint,
  method,
  params = null,
  body = null,
  onSuccess = null
) {
  const scope = this;
  let formBody = [];
  for (let property in body) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(body[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  const requestOptions = { method: method, body: formBody };
  if (method === "POST" || method === "PUT") {
    requestOptions.headers = {
      "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    };
  }
  let url = `https://localhost:44357/api/${endpoint}`;
  url += !!params ? `?${params}` : "";
  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        console.log(
          "Request failed for " + endpoint + " HTTP status:" + response.status
        );
        // Read the response
        response.text().then((data) => console.log("Response body: " + data));
        return;
      }
      // Read the response
      response.text().then((data) => onSuccess.call(scope, data));
    })
    .catch(function (err) {
      console.error("Request failed for " + endpoint + " error: " + err);
    });
}

/**
 * Add login with username an Password.
 */
export function login(username, password, callback) {
  let newLogin = {
    username: username,
    password: password,
  };
  sendAjax("login", "POST", null, newLogin, function (data) {
    if (data === "Success") {
      callback(true);
    }
    callback(false);
    // #TODO return true in case login success
  });
}

export function getMails(callback) {
  sendAjax("get-mails", "POST", null, null, (emails) => {
    callback(emails)
  });

};
/**
 * Send log out request
/* Send new email.
 */
export function sendEmail(body, subject, to) {
  let newEmail = {
    body: body,
    subject: subject,
    to: to,
  };
  sendAjax("send-email", "POST", null, newEmail, function (data) {
    console.log(data);
  });
}

/* Send log out request
 */
export function logOut(username) {
  let logOut = {
    username: username,
  };
  sendAjax("log-out", "POST", null, logOut, function (data) { });
}
