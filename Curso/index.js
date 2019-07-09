const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
// const Sequelize = require('sequelize');

// Config

// Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexão com banco de dados MySql
// const sequelize = new Sequelize('test1', 'root', 'password', {
//     host: "localhost",
//     dialect: "mysql",
// });

// Rotas

app.get("/", function(req, res) {
  Post.findAll({ order: [["id", "DESC"]] }).then(function(posts) {
    console.log(posts);
    res.render("home", {
      posts: posts
    });
  });
});

app.get("/cad", function(req, res) {
  // res.send('ROTA DE CADASTRO DE POSTS')
  res.render("formulario");
});

app.post("/add", function(req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  })
    .then(function() {
      // res.send('Post criado com sucesso!')
      res.redirect("/");
    })
    .catch(function(erro) {
      res.send("Houve um erro: " + erro);
    });

  // res.send('FORMUÁRIO RECEBIDO!')
  // res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
});

app.get("/deletar/:id", function(req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(function() {
      res.send("Postagem deletada com sucesso");
    })
    .catch(function(erro) {
      res.send("Esta postagem nao existe! ");
    });
});

/* 
app.get("/", function (req, res) {
    res.send("Seja bem-vindo ao meu app!")
});

app.get("/sobre", function (req, res) {
    res.send("Minha página sobre")
});

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao meu blog!")
});

app.get("/livedetest", function (req, res) {
    res.send("BIRL!")
});

app.get("/rotaDeTest", function (req, res) {
    res.send("HAHAHA")
});
*/

app.listen(8081, function() {
  console.log("Servidor Rodando na url http://locahost:8081");
});
