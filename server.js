const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

function readCount() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const obj = JSON.parse(raw);
    return Number(obj.count) || 0;
  } catch (e) {
    return 0;
  }
}

function writeCount(n) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ count: n }, null, 2));
}

app.get('/count', (req, res) => {
  res.json({ count: readCount() });
});

app.post('/visit', (req, res) => {
  const n = readCount() + 1;
  writeCount(n);
  res.json({ count: n });
});

app.listen(PORT, () => {
  console.log(`Visitor counter server listening on http://localhost:${PORT}`);
});
