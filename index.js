const xlsx = require('xlsx');
const file = "./data/INSE_2021__brasil.xlsx";
const express = require('express');
const app = express();
const port = 3000;
const _ = require('lodash');

app.get('/', (req, res) => {
  res.send("Acessar '/dados' para ver os dados do arquivo excel.");
});

app.get('/dados', (req, res) => {
  const wb = xlsx.readFile(file);
  const ws = wb.Sheets["INSE_BR_2021"];
  const data = xlsx.utils.sheet_to_json(ws);
  console.log(data);

  res.send(data);
});

app.listen(port, () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`);
});