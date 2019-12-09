var express = require('express');

module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('./index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });


    //app.use(express.static('public'));
    app.use('/scripts', express.static('matter'));
    // app.get('/scripts/matter.js',function(req,res){
    //     res.render('matter');
    // });
}