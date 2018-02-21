var express = require('express');
var app = express();

var db = require('./models');

app.listen(3000, function() {
  db.sequelize.sync();
});

var Post = db.Post;
var Comment = db.Comment;

app.get('/posts', function (req, res) {
  Post.findAll({
        include: [
            Comment
        ]
    })
    .then(function (data) {
      res.json(data);
    });
});