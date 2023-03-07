const http = require("http");
require("dotenv").config()
//const port = process.env.PORT && 8000
const port = process.env.PORT || 8000

http.createServer(
    (req, res) => {
        res.writeHead(200, {"content-Type": "text/plain"})
        res.write("Hello!")
        res.end() 
    }
).listen(port, () => console.log("server extablished! "))
