var express = require('express');
var hbs = require('hbs');
const port = process.env.PORT || 3000;
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
app.listen(port,() =>
{
  console.log(`odd ${port}`);
})
