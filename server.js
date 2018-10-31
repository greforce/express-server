const express = require('express');
const cors = require('cors');
const myip = require('my-local-ip');

const responses = [
  { '520': 'unknown. При выполнении запроса произошла ошибка' }, // 'unknown' ???
  { '522': 'timeout. Не удалось дождаться ответа от сервера.\nПопробуй повторить запрос позднее' }, // 'timeout' ???
  { '417': '0. Не удалось связаться с сервером.\nПроверьте подключение к интернету' }, // '0' - ???
  { '400': 'Сервер отклонил запрос' },
  { '401': 'Требуется авторизация' },
  { '403': 'Для выполнения запроса недостаточно прав' },
  { '500': 'Ох, на сервере что-то пошло не так.\nНаша команда уже в курсе произошедшего' },
  { '502': 'Плохой шлюз.\nПри выполнении запроса, сервера не смогли договориться' },
  { '200': 'все ок, получите ваши данные и делайте с ними что хотите!!!' },
];

let count = 0;

const app = express();
app.use(cors());

app.get('/apitest', (req, res) => {
  console.log(Date());
  console.log(Object.values(responses[count])[0]);

  res.status(Object.keys(responses[count])[0]);
  res.send({ message: Object.values(responses[count])[0] });
  count += 1;
  if (count >= responses.length) {
    count = 0;
  }
});

app.post('/apitest', (req, res) => {
  console.log(Date());
  console.log(Object.values(responses[count])[0]);

  res.status(Object.keys(responses[count])[0]);
  res.send({ message: Object.values(responses[count])[0] });
  count += 1;
  if (count >= responses.length) {
    count = 0;
  }
});

app.listen(8888);
console.log('server is running!')
console.log('local ip4', myip());
