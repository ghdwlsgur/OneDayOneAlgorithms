const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV == 'production' ? '.env.prod' : '.env.dev',
  ),
});

console.log('process.cwd()', process.cwd());
console.log('__dirname', __dirname);
console.log(process.env.NODE_ENV);

app.get('/', (req, res) => {
  res.send(`아이디: ${process.env.id}, 비밀번호: ${process.env.password}`);
});

const server = app.listen(3000, () => {
  console.log('3000번 포트로 서버 실행중...');
});
