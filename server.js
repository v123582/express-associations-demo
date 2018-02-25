var express = require('express');
var app = express();

var db = require('./models');

app.listen(3000, function() {
  db.sequelize.sync();
});

var Post = db.Post;
var Comment = db.Comment;
var Tag = db.Tag;

app.get('/posts', function (req, res) {
  Post.findAll({
        include: [
            Comment, Tag
        ]
    })
    .then(function (data) {
      res.json(data);
    });
});

app.get('/tags', function (req, res) {
  Tag.findAll({
        include: [
            Post
        ]
    })
    .then(function (data) {
      res.json(data);
    });
});

// 新增標籤，不用做其他事情
// 新增留言，同時要指定文章 id 到留言的表格
// 新增文章，同時要指定標籤 id 到 posttags 的表格

