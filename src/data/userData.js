const user = {
  institution: 7,
  type0: "admin",
  type: "teacher",
  name1: "Antonia Kulas",
  name: "Samantha Schinner",
  email: "",
  id: 0,
  auth: true,
};
/*
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

let token = localStorage.getItem("token");

if (token !== null && token !== undefined) {
  const decoded = parseJwt(token);

  user.email = decoded.email;
  user.id = decoded.id._id;
  user.auth = true;

  if (decoded.exp * 1000 < new Date().getTime()) {
    localStorage.clear();
  } else {
  }
}
*/
export { user };
