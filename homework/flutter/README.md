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
## EBookReader - 시작
### 목적 : api 활용 능력 향상, FutureBuilder 및 ListView 위젯 사용, 위젯 생명주기의 이해
### 제출 기한 : 6/11 ~ 6/20
여러분은 온라인 책을 소개하는 어플리케이션 제작을 의뢰받았습니다.

지금의 요구사항은 단순하고 명확합니다.

**요구사항**
- https://1408bg.github.io/assets/dummy.json 링크에 책의 데이터가 있습니다.
- 책 데이터의 각 key는 다음과 같습니다. { "title", "author", "description" }
- 책 데이터를 리스트로 보여주세요.
## 결과 화면
![output1](https://1408bg.github.io/homework/flutter/output1.png)
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

보통은 future에 비동기 작업을 곁들여 사용합니다. (예시로는 Future.delayed, http.get 등이 있지요.)

builder는 context, snapdata를 필요로 하며 각각 자신의 상위 위젯, future의 실행 결과를 의미합니다.

snapdata의 connectionState 값으로 future의 실행 상황에 맞는 반환이 가능하겠지요?
### ListView.builder
이 위젯은 리스트에 대한 builder를 지닙니다.

itemCount의 개수와, itemBuilder의 실행 횟수가 맞아야 합니다.

itemBuilder는 context, index를 필요로 하며 각각 자신의 상위 위젯, 현재 인덱스를 의미합니다.

builder가 꼭 ListTile를 반환해야하는 것은 아니니 상황에 맞는 위젯을 반환하세요.
### Expanded
이 위젯은 child의 overflow를 막아줍니다.

하위 위젯이 부모 위젯의 크기를 넘을 때 유용하지요.

Text 위젯의 overflow 속성 또한 잊지 마세요.
# 두 번째 숙제
## Chat with Model - View 및 UI
### 목적 : 모듈화 경험 및 필요성 체감, 사용자 정의 위젯 사용, 코드 이해능력
### 제출 기한 : 9/19 ~ 9/26
저번 숙제에서 모든 것을 처음부터 구현하자니 막막하셨나요?

이번에는 대부분의 UI와 기능이 이미 구현된 환경을 제공합니다.

**요구사항**
- https://drive.google.com/file/d/1iKVjWPCa2-6uEdGYeEB3oUn7VIwFwsBd/view?usp=sharing 에 숙제 파일이 있습니다.
- 각 파일의 구조는 다음과 같습니다.
  - lib/
    -  main.dart
    -  views/
      -  chat_page.dart
    - models/
      -  message.dart
    - widgets/
      -  message_bubble.dart
-  각 파일에 비어있는 부분을 주석에 맞게 채워주세요.
-  답장은 마음대로 채워주세요.
## 결과 화면
![output2](https://1408bg.github.io/homework/flutter/output2.png)
## 핵심 위젯
_이전 숙제에 나왔던 위젯들은 알고 있을 것이라 생각합니다._
### Padding
이 위젯은 child를 기준으로 상하좌우의 padding을 제공합니다.

padding은 child의 크기를 기준으로 width와 height를 증가시키기에 위젯이 여유롭게 보일 수 있도록 합니다.

padding은 Edgeinsets 클래스를 사용하여 지정할 수 있지요.
### Align
이 위젯은 child의 위치를 정렬할 수 있도록 합니다.

Align 위젯은 child를 부모 위젯 내에서 원하는 위치에 배치할 수 있게 해주며, alignment 속성을 통해 세밀하게 제어할 수 있습니다.

alignment는 Alignment 클래스를 사용하여 지정할 수 있습니다.
### SelectableText
이름만 봐도 기능이 예상되지 않나요?

이 위젯은 Text위젯과 거의 유사한 인자를 받지만, 유저가 드래그하여 선택 가능합니다.

그저 그것 뿐인 매우 간단한 위젯이지요.
### Container
SizedBox 위젯을 기억하시겠지요?

이 위젯은 위 설명에서 말했듯이 width와 height를 지정할 수 있습니다.

그러나 실제로 Container를 사용하는 이유는 위젯에 많은 style을 적용할 수 있기 때문이지요.

decoration 속성으로 BoxDecoration 객체를 받아 다양한 style을 적용할 수 있으며, padding 속성과 같이 다른 위젯에서 제공하는 기능들도 제공하고 있지요.

제공하는 기능이 많은 만큼 무거운 위젯이어서, 크기만 정하는 경우에는 SizedBox 위젯을 사용하도록 합시다.
### Flexible
이 위젯은 child의 크기를 유동적으로 조정하여, 화면의 남은 공간을 적절히 차지할 수 있도록 합니다.

Flexible 위젯은 주로 Row나 Column 같은 Flex 계열의 위젯 안에서 사용되며, child의 크기가 남은 공간에 맞게 늘어나거나 줄어들게 해줍니다.

flex 속성을 통해 차지할 비율을 설정할 수 있습니다.
## 마무리하며..
저 또한 숙제가 조금 어려울 수 있다고 생각합니다.

그러나 프로젝트에서 제 역할을 다하고, 협업을 하려면 최소 이정도는 해야 한다고 생각합니다.

구글링은 개발자 기본 소양이며, ChatGPT 사용 또한 환영합니다.

궁금한 점이 있으면 언제든 카톡으로 연락하십시오.

[Notion](https://1408bg.notion.site/Flutter-b02feb72e56644c5b19a0dad6d7ebc95)에 유용한 위젯이 많으니 구경해보시고, 과제 제출은 카톡으로 하시면 됩니다.
