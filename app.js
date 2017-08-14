const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(express.static('css'));
app.get('/', (req, res)=> {
	res.render('index');
})
app.get('/mint', (req, res)=> {
  res.render('mint');
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
	console.log(`listening n port ${port}`);
})