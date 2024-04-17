const express = require('express');
const app = express();

const Timetable = require('comcigan-parser');
const timetable = new Timetable();
const now = new Date();
let today;

consol.log("test");

const test = async () => {
  await timetable.init();

  // 학교 검색 및 특정 학교 찾기
  const schoolList = await timetable.search('대덕');
  const targetSchool = schoolList.find((school) => {
    return school.region === '대전' && school.name === '대덕소프트웨어마이스터고등학교';
  });

  // 학교 설정
  await timetable.setSchool(targetSchool.code);
  const result = await timetable.getTimetable();

  // result[학년][반][요일][교시]
  // 요일: (월: 0 ~ 금: 4)
  // 교시: 1교시(0), 2교시(1), 3교시(2)..
  // 2학년 4반 화요일 3교시 시간표
  today = (result[1][4][now.getDay()-1]);
};
  
test();

app.listen(8080, () => {
  console.log('listen in 8080');
});

app.get('/1', (req, res) => {
  res.send('첫번째 페이지 입니다.');
})

app.get('/2', (req, res) => {
  res.send('두번째 페이지 입니다.');
})

app.get('/3', (req, res) => {
  res.send('세번째 페이지 입니다.');
})

// 수정 필요
app.post("/post", (req, res) => {
  const item = req;
  let output = "";
  for (var i = 0; i < 7; i++){
    output += ((i+1) + ". " + today[i].subject + "\n\r");
  }
  if(item != null) {
      return res.send(output);
      res.sendStatus(200);
  } else {
      res.sendStatus(400);
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/main.html');
})
