const http = require("http");
const fs = require("fs");

require("dotenv").config()
//const port = process.env.PORT && 8000
const port = process.env.PORT || 8000

http.createServer(
    (req, res) => {
        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, {"content-Type": "text/plain"})
            res.write("Hello!")
            res.end() 
        })
    }
).listen(port, () => console.log("server extablished! "))
