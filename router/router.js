const express = require('express')

const path = require('path')

const Router = express.Router();

Router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../viewHtml/index.html'))
})
Router.get('/Work',(req,res)=>{
    res.sendFile(path.join(__dirname,'../viewHtml/work.html'))
})
Router.get('/Contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../viewHtml/contact.html'))
})
Router.get('/About',(req,res)=>{
    res.sendFile(path.join(__dirname,'../viewHtml/about.html'))
})
Router.get('/Blog',(req,res)=>{
    res.sendFile(path.join(__dirname,'../viewHtml/blog.html'))
})
module.exports = Router