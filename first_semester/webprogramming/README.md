# META
> CONTRIBUTOR: [김소희](https://github.com/ttohee)

```
대덕소프트웨어마이스터고등학교
1학년 1학기 전공교과 [웹프로그래밍]
학습 내용을 정리한 것

! - 소희꺼 다듬은거
```
# 3/6 - 4교시

## 교재 출판사

- **이지스 퍼블리싱**
- **생능출판**
- 이지스 퍼블리싱이 주 교재 빌려서 사용하는 것이므로, 낙서 X **관리 필요**

## VScode 설치

어차피 웬만하면 64비트라서 아래 링크로 다운로드 하기 [Visual Studio Code](https://drive.google.com/file/d/14Gu_QEF4QWevGaJRloWyalUGosda4xR8/view?usp=drive_link)

> 32비트 64비트 차이

**요약 : OS가 운영할 수 있는 메모리의 크기를 나타낸다.** 메모리는 사용하기 쉽게 공간을 나눠놓는데, 2의 32, 64승이 공간의 개수이다. 8bit = 1byte 1024byte = 1KB B(byte)부터 1024단위로 바뀐다. (KB MB GB TB..) **1024는 2의 10승** 그러니까 32는 **4GB** 메모리까지 가능하고 64는 **8GB** 메모리까지 가능하다. 운영체제가 32인데 8GB의 렘을 사용하면 운영체제가 사용 가능한 렘은 4GB이므로 4GB를 손해본다.

# 3/8 - 4교시

## 반 전체 자기소개

# 3/11 - 4교시

## 프론트앤드 개발

HTML, CSS, JS를 사용해 데이터를 그래픽 사용자 인터페이스인 웹으로 표시하는 것

- 학습 계획
    - 1학기 : HTML, CSS / 정적
    - 2학기 : JS / 동적
- HTML

내용을 담당한다.

- CSS

시각적 표현을 담당한다.

- JS

동적 처리를 담당한다.

## 웹 표준 [W3C]

### 표준어를 왜 쓰는가?

- 편하니까

### 안쓰면

- 불편하다.

### 웹을 만들때도 표준을 지켜야 한다.

## 크로스 브라우징

브라우저마다 세팅이 달라서 웹이 다르게 보이는데, 그 세팅을 없애버려야 한다. << 지금 수준으로는 못한다.

> 그러니까 크롬 쓰자.

## Windows와 Window

Windows는 운영체제고 Window는 인터넷 창이다.

## Window 구조

위에 웹 title이 보이는 곳은 tab이고 그 밑에 웹 주소 써있는 곳은 주소창이고 그 밑에 실제 웹이 표시되는 곳이 ViewPort이다.

## 이미지파일 형식

### Raster (비트맵)

픽셀의 조합으로 그려지는 이미지 표현 형식, 확대하면 이미지가 깨진다.

- GIF

표시할 수 있는 색상 수 : 256 파일 크기가 작은 편이고, 연속된 사진을 묶을 수 있다.

- JPG / JPEG

**손실 압축** 표시할 수 있는 색상 수 : 16777216 GIF보다 색상과 명암을다양하게 표현 가능 이미지 수정과 저장이 반복될 경우 디지털 풍화 진행

- PNG

**비손실 압축** 표시할 수 있는 색상 수 : 256 네트워크용으로 개발된 형식 색상을 다양하게 표현하면서 투명한 배경(Alpha channel)이 가능하기에 **웹에서 가장 많이** 사용된다. << **W3C 권장**

- WEBP

구글이 개발한 이미지 포멧 완벽한 손실(비손실 압축) 지원 GIF같은 애니메이션 지원 Alpha channel 지원 **근데 다들 안쓴다.**

### Vector (벡터)

점과 점을 연결해 수학적 원리로 그림을 그려 표현하는 형식, 확대해도 그대로다.

- SVG

웹 친화적인 벡터 파일 포맷, XML 기반의 파일 형식

## 특수문자

- **`** : Backtick
- **@** : At sign
- **^** : Caret
- **&** : Ampersand
- **** : ASTERISK
- **** : Hyphen, Dash
- **_** : Underscore, Lowdash
- **"** : Quotation
- **'** : Apostrophe
- **;** : Semicolon
- **,** : Comma
- **.** : Dot
- **|** : Vertical Bar
- **\** : Backslash
- **<** : Angle Brackets

## LoadMap

HTML, CSS JS -> React.js Python Java -> Spring Framework Node.js

## VScode 열기

### Open Folder

없으면 알아서 좀 만들자

### New File

### HTML파일 생성

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>웹 문서 만들기</title>
  </head>
  <body>
    <p>웹 개발 기초</p>
    <p>HTML</p>
    <p>CSS</p>
    <p>자바스크립트</p>
  </body>
</html>
```

해당 코드 입력 및 저장(Ctrl + S)

# 3/13 - 4교시

> 웹에서는 들여쓰기 4칸하면 촌스럽다. 2칸으로 바꿔라

하단의 spaces 클릭으로 변경 가능 기본 값 변경 : File Preference - settings - tab size - 4 -> 2 _ 상단 파일명 옆에 X가 아니라 O가 표시되면 저장이 안된거니까 저장(Ctrl + S) _ html파일 연결 프로그램 - 다른 앱 선택 - Chrome - 항상 html은 크롬으로 열자. _ VScode - Extension - LiveServer설치 html파일 우클릭 - Open with Live server _ 파일탐색기 : 보기 - 확장명 보기 근데 이건 다들 되있을걸?

## LiveServer란?

Open with Live server로 열었을 때 html, html과 link된 파일을 저장할 때 마다 자동으로 새로고침을 해주는 **매우 착한 친구** (VScode의 Extension)

### ping number

라이브서버로 열면 나오는 주소


`http://127.0.0.1:5500/파일명.html`

기본은 127.0.0.1 5500은 port 주소

주소 **물리주소** 시리얼넘버 다다름 **논리주소** 아이피주소 네트워크층, 변경가능 << 네트워크 접근(집 == node) mac주소 **포트주소** - 프로그램주소 변경불가 << 네트워크에 진입했을때 어떤 프로그램에 갈지 정하는거(집 안의 대상) 말하다말음

### 고생 안 사서 하는법

! + Tab으로

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

기본세팅 가져올 수 있다.

## 하나하나해석해준다.

```html
<!DOCTYPE html>
문서 자료형을 html로 정의
<html lang="ko">
웹의 언어를 한국어로 설정, html파일 시작
<head>
머리 시작, 웹의 콘텐츠 또는 파일 단위의 설정을 작성
<meta charset="UTF-8">
body에 대한 정보, 문자를 유니코드로 설정 << 한국어는 2byte가 필요
<meta name="viewport" content="width=device-width, initial-scale=1.0">
viewport의 길이를 기기길이로 설정, 1배수
<title>Document</title>
tab에 표기되는 텍스트 설정
</head>
머리 닫기
<body>
몸 열기, viewport 내의 컨텐츠 작성
</body>
몸 닫기
</html>
html파일 끝
```

# 3/15 - 4교시

[VScode 쓰기 귀찮을 때](notion://www.notion.so/codepen.io)

## HTML이란

Hypertext Markup Language의 약자 Hypertext : 문서를 서로 연결해 주는 링크

## 태그의 구성

```html
<여는태그>내용</닫는태그>
```

해당 형태를 요소(Element)라고 한다.

```html
<태그1><태그2>내용</태그2></태그1>
```

태그1은 부모 요소 (조상) 태그2는 자식 요소

실제 코드에서는

```html
<태그1>
  <태그2>내용</태그2>
</태그1>
```

의 형태

## 빈(Empty) 태그

내용이 비어있기에 빈 태그라 불린다. 빈 태그는 닫는 태그가 없고 여는 태그만 있다.

```html
<태그1> 또는 <태그2/>
```

태그2가 원래의 형태였으나 html5로 올라오면서 태그1로 써도 인식한다.

> 일반 태그와 빈태그를 바로 구분할 수 있어야한다.

빈태그의 내용은 속성에 담는다.

## 속성

```html
<태그1 속성1="값">내용</태그>
```

의 형태로 태그1에 띄어쓰기 하고 속성을 쓸 수 있다.

속성(Attribute) 값(Value)

## 이미지 사용

```html
<img/>
```

> 저렇게 쓰면 앞으로 저건 빈 태그겠구나 생각해라.

```html
<img src="cat.jpg" alt="고양이">
```

(source)src="주소(경로)" / 로 해당 주소의 이미지를 선택하여 표시한다. (alternate text)alt="텍스트" / 로 이미지 로딩 실패 시, 대체 텍스트를 표시한다. 속성이 필수는 아니지만 빈 태그에서는 필수다.

### meta data : 데이터에 대한 데이터

meta 태그로 여러 정보를 저장 할 수 있다.

```html
<!DOCTYPE html>
```

문서 타입을 html5로 정의

## 시멘틱(의미론적) 태그

그냥 div로 해도 웹에서는 똑같이 표시되지만 다른 개발자가 보기 좋으라고 쓴다.

```html
<div id="header"></div>
```

```html
<header></header>
```

두 코드의 차이

### 시멘틱 태그의 종류

```html
<header></header>
<nav></nav>
<main></main>
```

메인은 한번만 사용 가능하다.

```html
<article></article>
<section></section>
```

> 시멘틱태그를 css로 꾸미면 안된다. 이왕 할거면 그 안에 div를 넣어 꾸며라

```
<h1>
```

은 헤딩 태그로 제목을 쓰는 태그이다. 크기가 1~6까지 있는데 작을수록 크다.

```
<pre>
```

를 사용하면 개발자가 쓴 것 그대로 나온다. (띄어쓰기, 줄바꿈)

```
<br>
```

줄바꿈

- 연속으로 사용하면 css할때 불편하다.

## 입력

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>레드향</title>
</head>
<body>
  <h1>레드향</h1>
  <p>껍질에 붉은 빛이 돌아 레드향이라 불린다.</p>
  <p>레드향은 한라봉과 귤을 교배한 것으로<br>
    일반 귤보다 2~3배 크고, 과육이 붉고 통통하다.
  </p>
  <p>비타민 C와 비타민 P가 풍부해<br>핼액순환, 감기예방 등에 좋은 것으로 알려져 있다.</p>
  <h2>레드향 샐러드 레시피</h2>
  <h2>상품 구성</h2>
</body>
</html>

```

# 3/18 - 7교시

### 강조 태그

```
<b>, <strong>
```

굵어진다. 웹에서는 strong을 강조한걸로 구분

```
<i>, <em>
```

기울어진다. 웹에서서는 em을 강조한걸로 구분

### 인용

`<blockquote>`, 쓸일 없다

## 입력

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <title>레드향</title>
</head>
<body>
  <h1>레드향</h1>
  <p>껍질에 붉은 빛이 돌아 레드향이라 불린다.</p>
  <p>레드향은 <em>한라봉과 귤을 교배</em>한 것으로<br>일반 귤보다 2~3배 크고, 과육이 붉고 통통하다.</p>
  <blockquote>비타민 C와 비타민 P가 풍부해<br><strong>핼액순환, 감기예방</strong> 등에 좋은 것으로 알려져 있다.</blockquote>
  <h2>레드향 샐러드 레시피</h2>
  <h2>상품 구성</h2>
</body>
</html
```

### 목록 태그 (지옥의 nav)

```
<ol>
```

순서가 있는 리스트 속성으로 type(기본값 1), start(기본값 1), reversed가 있다.

```
<ul>
```

순서가 없는 리스트

```
<dl>
```

설명이 있는 리스트, `<li>`대신 `<dt>`로 타이틀(설명)을 쓰고 `<dd>`로 값(내용)을 쓴다.

```
<li>
```

리스트의 요소

## 표(Table) 태그

```
row 행 세로
col 열 가로
<caption> 제목
<table> 표 전체
<tr> 행
<td> 셀
<th> 제목 셀
```

테이블 하다 말았다...

# 3/20!
### 표를 만드는 태그

``<caption>`` 표 제목
``<table>`` 표 전체
``<tr>`` 행
``<td>`` 셀
``<th>`` 제목 셀

```html
<table>
  <caption>선물용과 가정용 상품 구성</caption>
  <tr>
    <th>용도</th>
    <th>중량</th>
    <th>갯수</th>
    <th>가격</th>
  </tr>
  <tr>
    <td>선물용</td>
    <td>3kg</td>
    <td>11~16과</td>
    <td>35,000원</td>
  </tr>
  <tr>
    <td>가정용</td>
    <td>5kg</td>
    <td>18~26과</td>
    <td>47,000원</td>
  </tr>
</table>
```

- 이것만 하면 테두리는 안 나온다.

``<table border="1">``  두께가 1인 테두리 생성

표의 구조 정의하기 '제목' '본문' '요약' 으로 나누고 ``<thead> <tbody> <tfoot>`` 태그를 사용한다.
실제로 보이지는 않지만 나레이션으로 나온다.
표의 본문이 긴 경우 자바스크립트를 이용하여 제목과 바닥 부분을 고정하고 본문만
스크롤 되도록 할 수 있다.

```html
<table border="1">
  <caption>선물용과 가정용 상품 구성</caption>
  <thead>
    <tr>
      <th>용도</th>
      <th>중량</th>
      <th>갯수</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>선물용</td>
      <td>3kg</td>
      <td>11~16과</td>
      <td>35,000원</td>
    </tr>
    <tr>
      <td>가정용</td>
      <td>5kg</td>
      <td>18~26과</td>
      <td>47,000원</td>
    </tr>
  </tbody>
</table>
```

colspan, rowspan 속성 : 열 또는 행 합치기
각각
``<td rowspan="합칠 셀의 개수">셀의 내용</td>`` , ``<td colspan="합칠 셀의 개수">셀의 내용</td>``
의 형태

```html
<table border="1">
  <caption>선물용과 가정용 상품 구성</caption>
  <thead>
    <tr>
      <th>용도</th>
      <th>중량</th>
      <th>갯수</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">선물용</td>
      <td>3kg</td>
      <td>11~16과</td>
      <td>35,000원</td>
    </tr>
    <tr>
      <td>3kg</td>
      <td>11~16과</td>
      <td>36,000원</td>
    </tr>
    <tr>
      <td rowspan="2">가정용</td>
      <td>5kg</td>
      <td>18~26과</td>
      <td>47,000원</td>
    </tr>
    <tr>
      <td>5kg</td>
      <td>18~26과</td>
      <td>48,000원</td>
    </tr>
  </tbody>
</table>
```

- 주의! 합쳐질 행의 이름 지워야 한다. 안 그러면 밀려나간다.

거기서 td에 width 속성을 사용하면 크기 조절이 가능하다

# 3/22!
``<td width = "200"></td>`` -> 아래 td들 다 같이 길어진다.
``&nbsp;``를 할게 아니라 속성을 쓰자.

rowspan 할 때 아래 칸 수 만큼 비워놓자. 정의 X colspan도 비슷하다.

### img 삽입
이미지 삽입 태그 사용 <img/> -> 빈태그 내용 X 속성과 속성 값 사용
``<img src="./cat.jpg" alt="고양이"/>``
``src="./cat.jpg"`` : 경로설정
``alt="고양이"`` : 대체 택스트 둘다 필수 << 사실 alt 없어도 뜨긴 한다.

### 테스트

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <table border="1">
    <tr>
      <th rowspan="4" width = "50" height = "50">A</th>
      <th colspan="2" width = "100" height= "50">B</th>
    </tr>
      <td rowspan="3">C</td>
      <td>D</td>
    <tr>
      <td>E</td>
    </tr>
  </table>
</body>
</html>
```

# 3/25!
HTML에서의 속성은 ``attribute``지만
CSS, JS 에선 속성이 ``property`` 이다.

---
### title 속성

```html
<h2 title>...</h2>
```

전역 속성,
마우스를 올리면``:hover`` 툴팁이 나온다.

---
#### 전역 속성 : 모든 태그에 적용할 수 있는 속성

### 예약어 쓰는 법, &엔터티

`&lt; < &gt; >`
`&quot; “ &apos; ‘`
`&nbsp; 공백 

display

- block << 자동으로 가로 채우기 << 세로로 쌓임
    - div << div안에 div가능
- inline << 자동으로 가로 최소화 + float: left<< 가로로 쌓임
    - span << inline 안에는 inline만 가능

### 주소 표현 방식
/ 절대경로 << root가 기준 (http 포함)
./ 상대경로 (생략가능) << 현재 위치가 기준
- 주소 내부 이동
	../ 상위 이동
	/ 하위 폴더 이동

# 3/27! ~ 3/29!
## 파일집어넣기
object, embed 써서 아무 파일이나 집어넣을 수 있다
object는 data안에
embed는 src안에 경로 넣기

``<audio> <video>`` 태그
autoplay 속성 쓰면 열자마자 재생 controls 속성 쓰면 재생 loop 속성 사용하면 계속 재생

audio 는 src안에 경로 넣고, 기본은 보이지 않지만 controls로 뭔가를 띄울 수 있다.
autoplay는 웹 열리면 알아서 재생된다.
안되면 preload를 auto로 설정해주자.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <img src="./web2/tangerines.jpg" alt="레드향">
  <h1>레드향</h1>
  <img src="<https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMDJfNzUg%2FMDAxNzA5MzczNjM0MjM4.KrJTbROqI-U3NfwwjoCfRq3kHMV8tGgNWj3PTfTkkawg.dRg8NHi-yhkthhDJTW-Az-cmNcZR4edeOTiuEcx35zgg.PNG%2Feungeul_19.png&type=sc960_832>" alt="치이카와">
  <h1>치이카와</h1>
  <img src="<https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMTdfMzQg%2FMDAxNzAyODAzOTAwMTM0.oczqyaTd8mnbQrpgJ-xUe099uDLkrmnQNBMdEr3PST8g.IDeRVNgeeoWChHsOVrLvxXvuEgvyG0YaIQWYVlL7_Rcg.GIF.9631ok%2FScreen%25A3%25DFRecording%25A3%25DF20231217%25A3%25DF172013%25A3%25DFYouTube%25A3%25DF4%25A3%25DF2%25A3%25DF1.gif&type=sc960_832_gif>" alt="하치와레">
  <h1>하치와레</h1>
  <p>원래 크기의 이미지</p>
  <img src="./web2/salad.jpg" alt="샐러드">
  <p>width="50%", height="50" 로 지정한 이미지</p>
  <img src="./web2/salad.jpg" alt="샐러드" width="50%">
  <p>width="150" 으로 지정한 이미지</p>
  <img src="./web2/salad.jpg" alt="샐러드" width="150"><br>
  <img src="web2/top.jpg" alt="탐라국 입춘굿" width="100%">
  <h1>탐라국 입춘굿</h1>
  <p>탐라국 어쩌고...</p>
  <h1>웹 문서에 PDF 파일 삽입하기</h1>
  <object width="900" height="800" data="product.pdf"></object>
</body>
</html>
```

width=”50%”

= 창 너비의 50퍼센트 퍼센트는 보여지는 화면 기준

object는 음악 파일 뿐만 아니라 동영상이나 자바 애플릿, PDF 파일 등 다양한 개체를 삽입 
기본형 ``<object width="너비" height="높이" data="파일"></object>``
display inline 수평, block 수직 linline은 자동으로 width맞춰서 변경이 안된다.
display는 width, height변경이 가능 input은 inline-block << 기본 inline인데 block요소의 특징(크기조절)을 가진다.

``<a>`` 태그 ``<a href="링크할 주소">택스트 또는 이미지</a>``
``target="_blank"`` 속성 쓰면 연결된 문서가 새 탭으로 열림 상대주소로 같은 컴퓨터 안에 있는것도 링크 걸 수 있다.

# 4/1!
### 폼 삽입하기
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="">
    <h1>레드향 주문하기</h1>
    <fieldset>
      <legend>상품선택</legend>
    </fieldset>
    <fieldset>
      <legend>배송정보</legend>
    </fieldset>
    <label for="user-id">아이디(6자 이상)</label>
    <input type="text" id="user-id">
  </form>
</body>
</html>
```

``<input/>`` : 빈태그, 사용자가 데이터를 입력하는 요소
어떤 데이터 입력을 받을건지는 속성으로 결정하고 type 속성값 굉장히 많다.
인라인인데 블록 특징 가져 인라인 블록이다.
``<form>`` : 태그 폼을 만드는 태그
``<fielset>`` : ``<div>``와 비슷, 대신 더 예쁘게 나눠준다.
``<label>`` 진짜 이름 input만 넣으면 뭘 넣어야 할지 모르니까
``<label>아이디<input type="text"></label>`` 이렇게 써도 맞지만 태그 안에 태그가 들어있어 보기 어렵다.

```
<label for="user-id">아이디(6자 이상)</label>
<input type="text" id="user-id">
```

그걸 보완한게 이거
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <fieldset>
    <label>아이디: <input type="text" id="user-id" size="10"></label>
    <label>비밀번호: <input type="password" id="user_pw" size="10"></label>
    <input type="submit" value="로그인">
  </fieldset>
</body>
</html>
```
``<input />``태그 다양한 속성
- autofocus 페이지 불러오자마자 원하는 폼 요소에 마우스 커서 표시
- placeholder 입력란에 표시하는 힌트로, 필드를 클릭하면 사라짐
- readonly 읽기만 하는거
- required 필수작성
# 4/8!
`<textarea>` 태그 여러줄 텍스트 입력 cols = 컬럼, 열 rows = 행 cols="40" -> 영어 기준, 한글은 20자 정도 가능 rows는 세로로
`<select>` 태그로 드롭다운 만들고 `<option>` 태그로 옵션 만들기

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form>
  <fieldset>
    <label>아이디: <input type="text" id="user-id" size="10"></label>
    <label>비밀번호: <input type="password" id="user_pw" size="10"></label>
    <input type="image" src="./login.png" alt="로그인">
  </fieldset>

  <fieldset>
    <legend>상품 선택</legend>
    <p><b>주문할 상품을 선택해 주세요</b></p>

    <label><input type="checkbox" value="s_3">선물용 3kg</label>
    <label><input type="checkbox" value="s_5">선물용 5kg</label>
    <label><input type="checkbox" value="f_3">가정용 3kg</label>
    <label><input type="checkbox" value="f_5">가정용 5kg</label>
    <p><b>포장 선택</b></p>
    <label><input type="radio" name="gift" value="yes">선물 포장</label>
    <label><input type="radio" name="gift" value="no">선물 포장 안함</label>
  </fieldset>

  <fieldset >
    <legend>배송정보</legend>
      <ul id="shipping">
        <li>
          <label for="prod">주문 상품</label>
          <input type="text" id="prod" value="상품용 3kg" readonly>
        </li>
        <li>
          <label for="user-name">이름</label>
          <input type="text" id="user-name" autofocus required>
        </li>
        <li>
          <label for="addr">배송 주소</label>
          <input type="text" id="addr" required>
        </li>
        <li>
          <label for="mail">이메일 주소</label>
          <input type="email" id="mail">
        </li>
        <li>
          <label for="phone">연락처</label>
          <input type="tel" id="phone" placeholder="하이픈 빼고 입력해 주세요.(01075487366)">
        </li>
        <li>
          <label for="d-day">배송 지정</label>
          <input type="date" id="d-day"><small>(주문일로부터 최소 3일)</small>
        </li>
        <li>
          <label for="memo">메모</label>
          <textarea id="memo" cols="40" rows="4"></textarea>
        </li>

      </ul>

  </fieldset>
  <div>
    <input type="submit" value="주문하기">
    <input type="reset" value="취소하기">
  </div>
</form>
  <fieldset>
    <ul>
      <li>
        <label><input type="checkbox" value="s_3">선물용 3kg</label>
        <input type="number" min="0" max="5">개 (최대 5개)
      </li>
      <li>
        <label><input type="checkbox" value="s_5">선물용 5kg</label>
        <input type="number" min="0" max="3" value="1">개 (최대 3개)
      </li>
    </ul>
  </fieldset>

  <fieldset>
    <ul>
      <li>
        <label><input type="checkbox" value="f_3">가정용 3kg</label>
        <input type="range" min="0" max="5">개 (최대 5개)
      </li>
      <li>
        <label><input type="checkbox" value="f_5">가정용 5kg</label>
        <input type="range" min="0" max="3" value="1">개 (최대 3개)
      </li>
    </ul>
  </fieldset>

  <h2>날짜 지정하기</h2>
  <input type="date">
  <input type="month">
  <input type="week">
  
  <h1>시간 지정하기</h1>
  <input type="time">
  <input type="datetime-local">
</body>
</html>
```

#### 드랍다운

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <fieldset>
    <label for="prod1">상품 선택</label>
    <select id="prod1">
      <option value="special_3" selected>선물용 3kg</option>
      <option value="special_5">선물용 5kg</option>
      <option value="family_3">가정용 3kg</option>
      <option value="family_5">가정용 5kg</option>
    </select>
  </fieldset>

  <fieldset>
    <label for="prod2">포장 여부</label>
    <input type="text" id="prod2" list="pack">
    <datalist id="pack">
      <option value="package">선물 포장</option>
      <option value="no_package">포장 안함</option>
    </datalist>
  </fieldset>
</body>
</html>
```
# 4/12!

## CSS 기본

CascadingStyleSheets 연쇄적으로 스타일 입히기

CSS 사용하는 이유

- html로 웹 내용을 나열했다면 css로는 웹 문서의 디자인 구성 -> 스타일 사용하면 웹문서 내용 상관없이 디자인만 바꿀 수 있다.
- 다양한 기기에 맞게 탄력적으로 바뀌는 문서를 만들 수 있다. -> 반응형 웹 디자인

## 스타일 형식
### 기본형

```jsx
선택자 { 속성1 : 속성값1; 속성2 : 속성값2; }
```

### 브라우저 기본 스타일
- html기본 적용 스타일
- 웹문서에 아무 스타일도 적용하지 않고 html만 사용해도 그 기능에 따라 크기에 맞게 보여준다.
- html 실행하면 나오는 그거다.

### 인라인 스타일
- 스타일 시트를 사용하지 않고 스타일을 적용할 대상에 직접 표시
- 스타일을 적용하고 싶은 태그에 style 속성을 사용해 style="속성 : 속성값;" 형태로 스타일 적용
- 속성

### 내부 스타일 시트
- html 내부에 있는 스타일
- 모든 스타일 정보는 헤드 태그와 스타일 태그 사이에서 정의
- 태그

### 외부 스타일 시트
- 링크로 불러들인다.
- 스타일 태그 없이 링크 태그만 사용해 미리 만들어 놓은 외부 스타일 시트 파일 연결

**인라인 스타일을 최우선시한다, 최우선적으로 적용된다.
인라인 > 내부 > 외부 > 브라우저**

### 기본 문법

```jsx
선택자{속성 : 값}
```

선택자 = 스타일을 입힐 대상 css 의 속성 = property : = 은, ; = 끝

```jsx
div{
color : red;
margin : 20px;
}
```

글자색 = color (text color X) 스타일에선 기본적으로 px 써야한다.

### (ctrl + /)

주석 /**/ html 주석 = <!-- -->

## CSS 선언 방식

### 내장 방식

- 스타일 태그 안에 작성
- head 태그 안에 쓰는게 좋다

### 인라인 방식

- 요소의 스타일 속성에 직접 스타일 입력(선택자 X)
- 수정하기 어렵다

### 외부스타일

- 링크방식
- 링크 태그(빈태그) 로 외부 css 문서를 가져와서 연결
- rel 과 href 필수 속성 relative, hypertext refernce

### @import 방식

- css의 @import 규칙으로 css문서 안에서 또다른 css문서를 가져와 연결하는 방식


# 4/16 - 7교시
### CSS 기본 문법
> 선택자 {속성:  값;}
### 용어 정리
- 선택자 - seletor
- 속성 - property
- 값 - value
### CSS 선언 방식
- 내장 - HTML ``<style>`` 태그로 사용
- 링크(외장) - CSS 파일을 HTML ``<link/>`` 태그로 사용
- 인라인 - HTML 태그 내부에 ``style`` 속성으로 사용
- @import - CSS 파일에서 ``@import url("url");`` 외부의 CSS 파일 참조
## CSS 선택자
- ``*`` 전체 선택자
- ``태그명`` 타입 선택자
- ``.클래스명`` 클래스 선택자
- ``#아이디명`` 아이디 선택자
- ``선택자1, 선택자2`` 그룹 선택자
- ``선택자1 선택자2`` 다중 선택자

# 4/17 - 4교시
## 글자 스타일
- font-style: 기본, 이탈릭
- font-weight: 글자 굵기 / normal : 400 / bold : 700
- font-size: 폰트 크기
- line-height: 행간
- text-align: 정렬 / center : 가운데 / justify : 좌우여백
- font-family: 글꼴, 계열
	- 글꼴 계열 꼭 쓰기
		- serif, **sans-serif**, cursive, fantasy, mono-space 중에 하나 고르기
		- nomospace하면 글자 width 똑같아짐
- color: 색

## CSS단위
- 크기 단위
	- em : 부모 대문자 너비를 기준
	- rem : 문서 대문자 너비를 기준
	- ex : 소문자 x의 높이를 기준
	- px : 모니터 픽셀 단위
	- pt : 일반 문서 글자 크기 단위
	- vw : 기기 너비
	- vh : 기기 높이
- 색상 단위 a는 alpha channal
	- hsl/hsla : 색상(red: 0, green: 120, blue: 240), 채도 (100%가 원본), 밝기(50%가 원본) 입력
	- 16진수 입력 : ``#16진수`` 단위로 rgb 입력 (2칸씩 색 구분 255가 최대)
	- rgb/rgba : ``10진수`` 단위로 rgb 입력

# 4/19 - 4교시
마저 글자 속성
- text-aligh: 글자 정렬
- font-size: 크기 - 기본 16px
- text-shadow: 가로, 세로, blur, 색상
- text-transform: capitalize(앞에만 대문자), uppercase(다 대문자), lowercase(다 소문자)
- letter-spacing: 자간
- text-decoration: none / underline / overline
>text-aligh: center; line-height를 높이와 동일하게 지정하면 가운데 정렬이 된다.

? 왜 이것만 하고 끝나
# 4/24 - 4교시
수행
# 5/1 - 3교시
## CSS 선택자
- 기본
	- 전체
	- 클래스
	- 아이디
	- 복합
	- 아 너무빨라
- 복합
- 가상 클래스
- 가상 요소
- 타입스타일
### 선택자우선순위
#### 점수높은순
!important
인라인
id
클래스
태그
전체선택자
상속은 점수가 없음
#### 점수가 같으면 나중에 해석된 것만 있는 취급

:hover
:active

대부분의 글자/문자 관련 속성은 부모 속성을 상속한다.
inherit 쓰면 강제 상속이 된다


# 5/7 - 2, 7교시
### 목록 스타일
- list-style-type: 자식 li 앞에 기호 / none / lower-alpha / disc
- list-style-position: inside / outside
### 표 스타일
- caption-side: top / bottom
- border: 두께 범위 색
	- 범위 / solid 표 테두리 / dotted 셀 테두리
- border-collapse: collapse 셀과 테두리 합치기 / separate 분리 - 기본값
- border-spacing: 수평 수직 / cell 내부 패딩

# 5/10 - 4교시
## 박스 모델
block 요소와 inline 요소
- block은 수직으로 쌓이고
- inline은 수평으로 쌓인다.
### 박스 모델의 기본 구성
- Contents : 안에 들어있는거
- Padding : 내부 여백
- Border : 테두리
- Margin : 외부 여백

box는 width height 지정이 가능하다.
box-sizing: border-box 테두리 포함 / content-box 콘텐츠 영역만
margin, border-width, padding의 값 적용 순서 :
- 4개: 상-우-하-좌
- 3개: 상-좌우-하
- 2개: 상하-좌우
- 1개: 상하좌우
# 5/20 - 4교시
border: 두께 선타입 색상;
border-radius: 모서리 둥글게
box-shadow: 가로 세로 blur 색상;
자동중앙배치 > margin: 0 auto;
### display
div : block
span : inline
input : inline-block
안보여 : none

float: left | right << 그쪽 방향으로 붙이기 **구조상** 부모 기준
요소에 float를 쓰면 none과 별개 판정이라서 요소가 있던 위치에 뒤에 있던게 들어가는데
clear: 방향 | both를 써서 그 상태를 없앨 수 있다.
# 5/22 - 4교시
position : 요소의 위치 지정
position 속성값
- static : 기본
- relative : 본인 기준 << 저거 붙은 부모가 **위치상** 부모가 됨 << 자식의 위치상 부모
- absolute : **위치상** 부모 요소를 기준 << 명시 안하면 body
- fixed : 브라우저를 기준
position이랑 같이 쓰는거
top, left .. << 저 방향애서 숫자만큼 떨구기
z-index << 숫자 높을수록 앞으로 나옴


# 5/24 - 4교시
## 요소 쌓임 순서(Stack order)
**어떤 요소가 사용자와 더 가깝게 있는지**
z-index 기본값: 0
z-index가 같으면 마지막으로 쓰인게 앞으로 간다
position은 z-index보다 우선됨 (z-index: 0에 position: relative가 z-index: 99999보다 앞)
숫자 높을수록 앞으로 나온다.
근데 숫자를 999이렇게 하면 어지러우니까
1부터 늘리는걸 추천한다.
그리고 기본값인 0보다 뒤에 두고싶으면 -1
### 쌓임 순서
1. position
2. z-index
3. 선언 순서

# 5/27 - 4교시
## 배경
background-color: 배경색
background-image: url(이미지주소)
background-repeat: 반복여부
background-position: 수평 수직 << center는 둘다 먹음
background-clip: 배경 범위
background-origin: 이미지 범위
background-attachment: 배경 고정여부
background-size: | contain(최소) | cover(최대) | 직접지정
background: url(body한테 쓰는용)

# 5/29 - 4교시
## Gradient
### 선형 그라데이션
background: **linear-grident(각도, ...색)**
- 각도의 단위는 deg
- 색 뒤에 % 붙이면 중지점을 정할 수 있다
### 원형 그라데이션
background: **radial-gradient(모양, ...색)**
- 모양 circle | ellipse

# 6/3 - 3교시
### 고급 선택자
**연결 선택자**
- 일치 선택자 : span.orange << span중 orange 클래스
- 자식 선택자 : span > .orange << span의 자식 중 orange 클래스
- 후손 선택자 : div .orange << div의 후손 중 orange 클래스
- 인접 형제 선택자 : div + p << div와 가까운 형제 p
- 형제 선택자 : div ~ p << div와 형제인 p
**가상 클래스**
- :hover << 마우스 올렸을 때
- :active << 눌렀을 때
- :link << 안눌린 a
- :visitied << 눌린 a
- :focus << input 사용중일 때
- :target << 문서 내부의 이동 타겟(앵커)
- :enabled << 쓸 수 있는
- :disabled << 못쓰는
- :cheched << 라디오, 체크박스
- :not(n) << 이거 빼고 (선택자 n)
- :only-child << 외동
- :first-child << 첫째
- :last-child << 막내
- :nth-child(n) << n째
	- n에는 odd, even 사용 가능
- :nth-last-child(n) << 뒤에서 n째
- tag :first-of-type << 첫번째 tag
- tag :nth-of-type(n) << n번째 tag
**가상 요소 선택자**
- ::before, ::after << content 속성에 string, 나머지는 content를 수식한다.

# 6/10 - 4교시
box-sizing: border-box 해야 border, padding이 적용된 float가 가능하다.
display: flex 막혔으니
margin: 0 auto, text-aligh: center, line-height: height 다 챙겨야 한다
### 선택자 우선순위
1. !important << 무한대로 발⭐산 999999999점
2. inline << 1000점
3. id << 100점
4. class << 가상 클래스 << 10점
5. tag << 가상 요소 선택자 << 1점
6. `*`, body, not << 0점

#### 우선순위 점수구하는법
``.list li:hover`` << .list(클래스) +10, li(태그) +1,  :hover(가상클래스) +10점 << 21점
# 6/12 - 4교시
수행 
# 6/14 - 4교시
## 전환, 변형
#### 전환
transition: 속성명 지속시간 타이밍함수 대기시간;
- transition-property: 속성명 나열
- transition-duration: 각 속성에 대한 지속시간
- transition-timing-function: ease, ease-in, ease-out
- transition-delay: 각 속성에 대한 대기시간
#### 변형
transform: 변환함수 나열;
transform: 원근법 이동 크기 회전 기울임;
- perspective(깊이)
- translate`XYZ`(이동거리)
- scale`XY`(크기)
- rotate`XYZ`(각도) - perspective와 연관
- skew`XY`(각도)
> perspective를 속성으로 사용하면 부모에게 적용되고, << 부모 중심
> 변형 함수로 사용하면 자신에게 적용된다. << 자신 중심
> 보통은 **부모 중심**을 사용한다.
# 6/17 - 4교시
### 변형 복습
변형은 ``transform: ...변형함수`` 로 사용할 수 있다.
**대표적인 변형 함수**
- perspective - 깊이(3차원)
- translate - 이동
- scale - 크기
- rotate - 회전
- skew - 기울임
### 애니메이션
애니메이션은 keyframes를 사용하며,
keyframes 선언은 두 종류가 있다.
**from-to**
```css
@keyframes identifier{
  from{
    left: 100px;
    background-color: #fff;
  }
  to{
    left: 300px;
    background-color: #999;
  }
}
```
[
**percentage**
```css
@keyframes identifier {
  0% {
    left: 100px;
    background-color: #fff;
  }
  100% {
    left: 300px;
    background-color: #999;
  }
}
```
#### animation
- animation: name duration << 뭔가 더 있는데 그냥 이것만 쓰자
	- animation-name: @keyframes 식별자
	- animation-duration: 애니메이션 지속 시간
# 6/19, 6/24, 6/26 - 4교시
숙제, 마무리문제, 자습
# 6/28 - 3교시
수행
