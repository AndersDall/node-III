'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
const fs = require("fs");                   // file system access
const httpStatus = require("http-status-codes");                   // file system access

module.exports = {
    home(req, res) {
        fs.readFile("views/index.html", function(err, data) {
            if (err) {
                res.end("<h1>The page you wanted doesn't exist</h1>");
            }
            res.write(data);
            res.end();
        });
    },
    side(req, res) {
        let path = "views" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                res.end("<h1>The page you wanted doesn't exist</h1>");
            }
            
            let body = [];
            req.on("data", function (bodyData) {    // eventhandling for data reception
                body.push(bodyData);                // bodyData is an object
            });
            req.on("end", function () {             // eventhandling for end-of-data
                body = Buffer.concat(body).toString();
                console.log("Log: Request Body Contents: " + body);
            });
            console.log("Log: URL: " + req.url);

            if(path == "views/contact.html"){
                
                
            };
            
            res.write(data);
            res.end();
        });
    },
    js(req, res) {
        let path = "public/js" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "application/javascript; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },
    css(req, res) {
        let path = "public/css" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/css; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },
    png(req, res) {
        let path = "public/images" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "image/png"
            });
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "image/jpeg"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },
    notfound(req, res) {
        console.log(`Handler 'notfound' was called for file ${req.url}.`);
        res.end();
    }
}