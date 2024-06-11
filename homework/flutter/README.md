## APP 개발 팀의 팀원들에게
Flutter로 원하는 앱을 개발하는 것은 쉬우며 또한 어려운 일입니다.

강력한 프레임워크를 이용하면 뛰어난 결과를 창출할 수 있으나, 그만큼 제한적이기 때문이지요.

만약 바닐라JS같은 이론만이 중요한 상황에서의 개발이었다면,

저는 여러분에게 숙제를 내지 않았을 겁니다.

그러나, 저희 프레임워크의 특징 상 실습 경험은 무엇보다도 중요하다고 생각되네요.

그렇기에 저희 프로젝트에 도움이 되는 기능만을 추린 알짜배기 숙제를 구성하였습니다.

어떤 위젯의 어떤 기능을 활용하였는지 상세히 서술하였으니, 반드시 기간 내에 제출해야겠지요?

그럼 즐거운 개발 되십시오 ^^
# 첫 번째 숙제
## 주제 : EBookReader - 시작
### 목적 : api 활용 능력 향상, FutureBuilder, ListView 위젯 사용, 위젯 생명주기의 이해
### 제출 기한 : 6/11 ~ 6/20
여러분은 온라인 책을 소개하는 어플리케이션 제작을 의뢰받았습니다.

지금의 요구사항은 단순하고 명확합니다.

**요구사항**
- https://1408bg.github.io/assets/dummy.json 링크에 책의 데이터가 있습니다.
- 책 데이터의 각 key는 다음과 같습니다. { "title", "author", "description" }
- 책 데이터를 리스트로 보여주세요.
## 결과 화면
![output](https://1408bg.github.io/homework/flutter/output.png)
## 핵심 위젯
_MaterialApp, Scaffold, Text는 기본 소양입니다._
### Center
이 위젯의 child는 화면의 가운데에 배치됩니다.

간단하지만 매우 강력한 위젯이지요.
### Row, Column
이 위젯은 children을 각각 가로/세로 방향으로 나열합니다.

mainAxisAlignment로 모든 children의 간격을 조절할 수 있지요.
### SizedBox
위젯의 크기를 정할 수 없어 당황스러우실 겁니다.

이 위젯은 child의 width, height를 지정합니다.

단순 크기 지정이라면 Container보다 훨씬 가볍고 효율적이지요.
### FutureBuilder
데이터를 가져오는 동안 비어있는 자리는 무엇으로 채울까요?

이 위젯은 Builder의 작업을 비동기로 수행합니다.

언제 완성될지 모르는 builder에 사용하세요.

보통은 future에 비동기 작업을 곁들여 사용합니다.

builder는 context, snapdata를 필요로 하며 각각 자신의 상위 위젯, future의 실행 결과를 의미합니다.

snapdata의 connectionState 값으로 future의 실행 상황에 맞는 반환이 가능하겠지요?
### ListView.builder
이 위젯은 리스트에 대한 builder를 지닙니다.

itemCount의 개수와, itemBuilder의 실행 횟수가 맞아야 합니다.

itemBuilder는 context, index를 필요로 하며 각각 자신의 상위 위젯, 현재 인덱스를 의미합니다.

builder가 꼭 ListTile를 반환해야하는 것은 아니니 상황에 맞는 위젯을 반환하세요.
### Expanded
이 위젯은 child의 overflow를 막아줍니다.

하위 위젯이 크기를 자꾸 넘을 때 유용하지요.
## 마무리하며..
첫 번째 숙제 치고는 조금 어려운 느낌이 있습니다.

그러나 프로젝트에서 제 역할을 다하고, 협업을 하려면 최소 이정도는 해야 한다고 생각합니다.

구글링은 개발자 기본 소양이며, ChatGPT 사용 또한 환영합니다.

궁금한 점이 있으면 언제든 카톡으로 연락하십시오.

[Notion](https://1408bg.notion.site/Flutter-b02feb72e56644c5b19a0dad6d7ebc95)에 유용한 위젯이 많으니 구경해보시고, 과제 제출은 카톡으로 하시면 됩니다.
