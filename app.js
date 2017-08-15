const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(express.static('css'));
app.use(express.static('assets'));
app.get('/', (req, res)=> {
	res.render('index');
})
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
	console.log(`listening n port ${port}`);
})
