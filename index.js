const http = require('http');
const fs = require('fs');

require('dotenv').config()
//const port = process.env.PORT && 8000
const port = process.env.PORT || 8000

//res.writeHead(200, {"content-Type": "text/plain"})
http.createServer(
    (req, res) => {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write("Hello!")
            res.write(data)
            res.end() 
        })
    }
).listen(port, () => console.log("server extablished! "))
