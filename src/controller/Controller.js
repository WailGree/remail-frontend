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
  const requestOptions = { method: method, body: body };
  if (method === "POST" || method === "PUT") {
    requestOptions.headers = { "Content-type": "application/json" };
  }
  let url = `api/${endpoint}`;
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
 * Add an item and display it in the list.
 */
export function login(username, password) {
  let newLogin = {
    username: username,
    password: password,
  };
  sendAjax(
    "login",
    "POST",
    null,
    JSON.stringify(newLogin)
    //   function (data) {
    //     this.view.clearNewTodo();
    //     this._refresh(true);
    //   }
  );
}
