var express = require('express');
var router = express.Router();
const fs = require('node:fs');

const folder = "files";


router.get('/', function(req, res, next) {
  fs.readdir(`./${folder}`, {withFileTypes: true},function(err, files){
    res.render('index', { files, folder});
  })
});
router.get('/refresh', function(req, res, next) {
  res.redirect(`back`)
});
router.get('/file/:filename', function(req, res, next) {
  fs.readdir(`./${folder}`, {withFileTypes: true},function(err, files){
    fs.readFile(`./${folder}/${req.params.filename}`,"utf8",function(err, data){
      res.render('openedfile', { files, folder, filename: req.params.filename, padhlo: data});
    })
  })
});

router.post('/update/:newfile', function(req, res, next){
  fs.rename(`./${folder}/${req.params.newfile}`, `./${folder}/${req.body.updatingfilename}`, (err) => {});
  res.redirect('back')
})

router.post("/filesave/:filename", function(req, res, next) {
  fs.writeFile(`${folder}/${req.params.filename}`, req.body.writing , function(err){
    res.redirect(`back`);
  })
})

router.get('/filing', function(req, res, next) {
  fs.writeFile(`./${folder}/${req.query.name}`,"",function(err){})
  res.redirect('/')
});

router.get('/fooling', function(req, res, next) {
  fs.mkdir(`./${folder}/${req.query.name}`,function(err){})
  res.redirect('/')
});

router.get('/delete/file/:filename', function(req, res, next) {
  fs.unlink(`./${folder}/${req.params.filename}`,function(err){})
  res.redirect('/')
});
router.get('/delete/folder/:filename', function(req, res, next) {
  fs.rmdir(`./${folder}/${req.params.filename}`,function(err){})
  res.redirect('/')
});

module.exports = router;
