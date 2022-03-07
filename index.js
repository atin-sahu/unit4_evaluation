const express = require("express");
const app = express();

app.use(logger);
app.use(checkPermission);

app.get("/books", (req,res)=>{
   return res.send({ route: "/books", who:req.ans});
})

app.get("/libraries", (req,res)=>{
    return res.send({ route: "/libraries",who:req.ans, permission: req.permission});
 })

 app.get("/authors", (req,res)=>{
    return res.send({ route: "/authors",who:req.ans, permission: req.permission});
 })

 function logger(req,res,next){
    if(req.path === "/books"){
        req.ans = "books"
    }else if(req.path === "/libraries"){
        req.ans = "libraries"
    }
    else if(req.path === "/authors"){
        req.ans = "authors"
    }
    next();
}

function checkPermission(req,res,next){
    if(req.path === "/libraries"){
        req.permission = true
    }
    else if(req.path === "/authors"){
        req.permission = true
    }
    next();
}

app.listen(3333,()=>{
    console.log("listnig on port 3333");
})


