var express = require('express');
var hbs = require('hbs');
var app = express();
app.set('vgvg','hbs');
hbs.registerPartials(__dirname + '/views/partials' );
//app.use(express.static(__dirname + '/tool'));
hbs.registerHelper('gettono', () =>
{
  return 'hi';
} )
app.get('/about',(req,res) => {
  res.render('kelo.hbs',
    {
      name : 'rk',
      write : 'hi'
    });

});
app.get('/about1',(req,res) => {
  res.render('eno.hbs',
    {
      name : 'rk',
      write : 'hi'
    });

});
app.listen(3000,() =>
{
  console.log("odidi");
})
