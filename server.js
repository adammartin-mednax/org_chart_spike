const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
