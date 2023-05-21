const http = require("http");

const Server = http.createServer((req, res) => {
  req.url === "/"
    ? (res.end("Welcome to our homepage"), null)
    : req.url === "/about"
    ? (res.end("Here is our short story"), null)
    : res.end(
        `<h1>Oops!</h1><p>We can't find the page you're looking for</p><a href="homepage">Back Home</a>`
      );
});

Server.listen(5000);

// const Server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to our homepage");
//     return;
//   } else if (req.url === "/about") {
//     res.end("here is our short story");
//     return;
//   } else {
//     res.end(
//       `<h1> Oops!  </h1> <p> we cant find the page that you looking for </p> <a href="homepage"> back home </p>`
//     );
//   }
// });

// Server.listen(5000);
