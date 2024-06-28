# META
```
대덕소프트웨어마이스터고등학교
1학년 1학기 전공교과 [프로그래밍]
학습 내용을 정리한 것

<h1양식>
월/일 - 교시

<h2양식>
이론 구분용 혹은 모든 실습, 활동

<h3양식>
이론 내용, 사소한 활동
```
# 3/6 - 2교시

## Visual Studio 설치

- [다운로드 링크](https://drive.google.com/file/d/1yNGkb12x6URjspEJ_Npz5Tqw70tgOj8T/view?usp=drive_link)
- C, C++을 통한 데스크탑 개발 체크 (수업에서는 아무것도 체크하지 않음)
- 로그인 X

### 다운로드 중..

- [한컴타자](https://tt.hancomtaja.com/)
- 한컴타자 들어가서 한국어, 영어 빠르기 체크

## 스타트업 코드

**프로그램의 구조**

> Start up Code

**파일이 실행되면**

Start up Code에서 스택과 힙 영역을 초기화한다. 메인 메모리가 스택과 힙을 수용할 만한 충분한 공간을 가지고 있는지에 대한 테스트를 진행한다.

Start up Code에서 main 함수를 호출한다.

전처리기 (#)를 최우선 실행한다.

include의 경우 라이브러리 루틴에서 헤더파일을 가져온다.

main 함수가 호출되면 Compiled Code에 있는 main 함수가 실행되며,

main 함수가 끝나면 Start up Code에서 return 0을 통해 OS에 0을 반환한다. (프로그램 종료)

~~명칭모름~~

'+' 1 이상

'*' 0 이상 (void 포함)

C는 무조건 void 또는 하나의 반환값을 가질 수 있다.

``#include``는 함수가 아니라 아니라 헤더파일을 가져오는 것.

### 프로토타입

**함수가 밑에 있다는 것을 명시하는 것**, a(){};의 형식

include하는 파일에 있는(라이브러리 루틴)건 전부 프로토타입

**프로토타입의 모임이 헤더파일**

# 3/6 - 3교시

## 앞으로 영어 빠르기를 매 수업마다 측정하여 그래프로 기록 할 것

## 이론

### 프로그램이란?

사람이 원하는 동작을 기계가 수행할 수 있도록 구체적으로 실행 가능한 명령들을 순서대로 작성한 것

### 프로그래밍? (좁은 의미)

사람이 원하는 작업을 컴퓨터가 수행할 수 있도록 실행 가능한 명령어들의 순서를 설계, 작성, 테스트하는 것

### 프로그래밍? (넓은 의미)

프로그램이 원하는 작업을 수행하지 못한 경우 오류를 찾는 디버깅, 프로그램 개선, 보안 등의 작업을 포함하는 것 (유지보수 : SI)

> 남의 코드를 참고하는것이 좋다.

### 개발방법론

**요구분석 > 설계 > 구현(코딩) > 검사(테스트) > 개선 및 보완(디버깅) > 소프트웨어 개발 및 유지보수**

### 프로그래밍 언어?

프로그래밍에 사용되는 언어로 컴퓨터와 대화하기 위한 언어

> OS 다양하게 써라

### 통합 개발 환경 (IDE)

소프트웨어 개발에 사용되는 링커, 컴파일러, 디버거, 인터프리터, 텍스트 에디터 등의 집합 << 실행 순서는 반대

- Visual Studio는 IDE << 고사양필요 << 렘 2기가
- VSCode는 플랫폼 << 저사양에서도 가능 << 렘 1기가

### 프로그래밍 언어의 역사

기게어 > 어셈블리어 > Baisc > C > Python

### 프로그래밍 언어의 분류

### 기계친화 : ``[고급언어 / 저급언어]``

기계어에 가까울수록 저급언어

자연어에 가까울수록 고급언어

### 목적 : ``[시스템 / 응용프로그램 / 웹 / 게임 / 범용 / 교육용]``

### 방법 : ``[절차지향 / 객체지향 / 이벤트 기반 / 데이터 흐름]``

> 절차지향을 추천한다. 이벤트 기반에서의 이벤트는 마우스 클릭 등이 있다.

**절차지향은** 분기가 생기지 않는 한 **차례로 실행** << 절차지향인 C는 어렵더라도 객체지향을 만들 수 있다. << **(절차지향 != 객체지향) == False**

**객체지향은 객체가 속성과** 객체의 행위인 **메서드를 가지고 데이터를 주고받는다, 기본적으로 절차지향에 속한다.**

절차지향 : 빠르다

객체지향 느리다, 코드 재활용이 가능하다, 디버깅이 쉽다, ~~유지보수가 쉽다~~(선생님이 동의 안함)

### 프로그래밍의 절차

주어진 문제 상황을 파악하고, 문제를 해결할 수 있는 알고리즘을 생각하여 프로그래밍 언어로 작성하는 문제 해결 과정

프로그래밍 언어를 활용한 문제 해결 과정은 정확한 결과가 나오는 프로그램이 작성될 때까지 컴파일, 테스트, 디버깅의 작업이 반복되는 과정 << AI가 대체하고 있는 것

> AI의 결과물은 완성본이 아니다, 그것을 참조하여 작품 제작의 도구로 사용하여 내가 제작의 主가 되어야 한다.

### 알고리즘의 조건

일반적인 알고리즘의 경우 : ``[입력, 출력, 명확성, 유한성]``

입력, 출력 : 1 이상의 인수가 이동되어야 한다. << 선생님은 0 이상이라 하셨으나 교과서 중시

명확성 : 명확하고 구체적이어야 한다. << 대부분의 언어는 예약어를 사용하기에 큰 걱정 X

유한성 : 언젠가 종료되어야한다. << while True의 경우에도, 종료되는 분기 존재 필요

> 좋은 알고리즘인지 판단하는 방법

### 문법적 오류와 논리적 오류

### 문법적 오류 : 오타나거나 형식(괄호, 세미콜론 등)을 지키지 않는 경우

- 대부분의 에디터에서 표기해주며 찾기 쉽다. << 당연히 고쳐야 하는것

### 논리적 오류 : 참조, 호출을 잘못하거나 목적에 맞지 않는 값을 반환하는 경우

- 일반적으로 말하는 오류로, 잘 못찾는다. << 고치는 역량을 키울 필요 존재

## 비주얼 스튜디오 실행

- ~~(현재상황)선생님이 그냥 깔으라고 해서 C++ 선택 안했다가 헤매는중~~
- 새 프로젝트 -> 빈 프로젝트 -> C드라이브 밑에 StudyC 폴더 만들기

## 단축키 (애용 예정)

컴파일(저장) = Ctrl + S

실행 = Ctrl + F5

# 3/7 - 5교시

## 이론

### 소프트코딩

- 만약 생년월일을 작성한다면그냥 2008을 쓰면 된다.하지만 나이를 작성할때 17을 쓰게 된다면내년, 1000명의 생년월일이 저장되었을 때1000명에게 변경을 요청하거나,1000번의 변경 작업을 해야한다.그런 작업은 비효율적이다.
- 출생년도 A를 입력받았을 때, (현재 연도) - A가 나이가 된다. 그러면 현재 날짜를 실행할때마다 바꾸어야 하느냐 하면 그것은 또 아니다. 라이브러리, 서버의 데이터를 이용하면 된다. now() date() 이런 사용자 지정 함수를 응용하면 다양한 작업을 효율적으로 처리할 수 있다.

### 대입연산자 =, 비교연산자 ==

a = 값1

위 코드를 a와 값1이 같다 라고 해석하는 사람이 있다.

그러나 컴퓨터에서의 같다는 == 이다.

= 는 대입연산자로, 왼쪽 변수의 값을 오른쪽 값으로 변경한다.

대입연산자 = 와 비교연산자 == 는 에디터가 잘 읽지 못하는 문법적 오류이기에 헷갈리지 않게 알아둘 필요가 있다.

### 변수의 선언, 초기화

int a;

위 코드는

메모리공간에

많은 저장할 공간중

?12345678......

......?1234356.

...?...........

칸당 1byte일때, a를 할당하기 위하여 임의의 4칸을 확보한다.

**?는 delete = 완전히 지워지지않은값 << 쓰레기값**

각 칸마다 f00, f01, f02, f03... 같이 이름을 부여하면

f03부터 시작해서 f06까지 a의 공간으로 할당(연결)되는 작업.

만약 a = 0이라고하면

저 공간을 깨끗하게 지우고 0으로 초기화한다.

### C와 Python에서의 대입연산자 차이

C는 b = a를 쓰게 되면 b의 값인 0이 a의 값이 되는 식으로 대입 연산자가 기능한다면,

Python은 b = a를 쓰게 되면 b는 값 0을 가지는게 아니라 a가 참조하던 0이라는 객체의 주소를 b가 가지게된다.

### 연산자 *, &

a = b를 _&b라고 생각해야된다.&는 변수의 주소값을 가지고,_ 는 주소가 참조하는 변수값을 가진다.scanf("%d",&b) 저게 받은걸 b의 주소에 저장하는것int _p에서의_ 과는 다르다.int_은 정수 포인터 자료형을 나타내는 것이고,b가 주솟값이면_ 연산자를 붙였을때 b주소에 있는 값을 지정하는 것이다.

- 설명 인용[출처](https://www.tcpschool.com/c/c_pointer_intro)
    
    ```
    [주소 연산자 **&**]
    변수 이름 앞에 사용하여, 해당 변수의 주소 값을 반환
    [참조 연산자 *****]
    포인터의 이름이나 주소 앞에 사용하여,포인터에서 가리키는 주소에 저장된 값을 반환
    ```
    

> 어제

### 함수의 주소

printf()는 ()안에 값을 받아서 출력하는 함수이다.

그러나 printf만 호출해버리면

> 다시보는 프로그램의 구조

printf는 Library루틴에서의 함수 선언 위치를 가진다.

### 배열 식별자의 값

a[3]이면

총 3칸의 공간을 가지고 그곳에 주소를 저장하는데,

(a)(a+1)(a+2)의 형태이다.

a는 첫번째 칸의 주소를 가지기에 첫번째 칸의 값을 *a로 얻을 수 있다.

### main 함수의 주소

main(){}은 함수인데

main만 쓰면

main을 쓰는 메모리의 첫번째 값만 return받을 수 있다.

### 포멧

포멧할때 빠른포멧은 앞에 ?만 달아서 뒤의 값을 지웠다고 대충 처리하는거고,

느린포멧은 일일히 지우는 것이다.

### 컴퓨터의 단위 - 2진수

10진수 값으로

[][]

10의자리 1의자리 두 칸이 있으면

100가지 경우가 나오듯이

컴퓨터에서 사용하는 2진수도 1칸인 bit는 2가지 경우를 가지는데,

[][][][]

4칸으로 16가지 경우가 나오는게 **니블**

[][][][][][][][]

8칸으로 256가지 경우가 나오는게 **바이트**

바이트를 파일 크기의 기준으로 잡아

바이트 1024개는 키로바이트(KB)이며

이후 메가 기가 테라 전부 1024배씩 증가한다.

10000은 10,000같이 콤마를 찍어 사용한다.

1,000,000은 백만

1,000,000,000은 십억

사람은 만단위로 세는 단위가 바뀌지만

콤마는 천단위로 찍기에 보기에 익숙해져야 한다.

> 2의 8승은 2562의 16승은 65,5362의 32승은 4,294,967,296 = 42억

위의 숫자는 외워두어야 한다.

### 컴퓨터의 단위 - 16진수

16진수를 쓸때는 한 자리에

0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

의 값이 들어간다.

_A부터는 10을 의미한다._

### 2진수 TMI..

- 부호를 나타내는 수12(10) / C(16)는 양수를 의미 1100(2)13(10) / D(16)는 음수를 의미 1101(2)
- 2진수를 쉽게 외우는 법?1010 10 A << 11이 A라 착각하지 않게 주의1011 11 B1100 12 C1101 13 D1110 14 E << 선생님 : 뒤집으면 비슷하다1111 15 F << 뒤에서 1등 : F10101010은16진수로 바꿀때4개씩 잘라서A(1010)A(1010)AA가 된다.8진수는 3개씩 자른다.
- 2진수 특징[][][][][][][][]2의 0승부터 2의 7승까지1,2,4,8,16,32,64,128인데(2의 0승 자리값)이 1이면 홀수 0이면 짝수그리고 하나랑 두칸 뒤를 더하면 5,10,20,40,80,160과 같이 나오는데이 조합을 외워뒀다가빼면서 쓰고 겹치면 자리올림해서 2진수 변환을 할 수 있다.

# 3/11 - 6, 7교시

> Vim 에디터같이 h,j,k,l이 방향키인 텍스트 에디터를 사용할 때, 손가락을 한칸씩 옮겨서 사용하면 편하다.

## 이론

### 정보

- 명령어
    - 0~3주소 명령어
- 자료
    - 비수치자료
        - 코드는 전부 비수치자료
    - 수치자료
        - 정수표현
            - 10진 데이터형식
                - 팩 10진
                - 언팩 10진
            - 고정소수점 데이터형식
                - 부호화 절대값
                - 부호화 1의 보수
                - 부호화 2의 보수
        - 실수표현
            - 부동소수점 데이터형식

### 보수

음수를 계산하기 위해 생겨난 개념

0을 1로, 1을 0으로 변환한 것.

1111 -> 0000

### 고정소수점

- **부호화 절대값**
    
    양수와 음수를 구별하기 위하여 생겨났다.
    
    (부호부 1비트, 정수부 7비트) 의 경우
    
    정수부의 값에 부호부가 0이면 1, 1이면 -1을 곱하여 해석한다.
    
    - **가산 방법**부호화 절대값은 컴퓨터에서 연산할 수 없다.
- **부호화 1의 보수**
    
    음수를 계산하기 위해 생겨났다.
    
    (부호부 1비트, 정수부 7비트) 의 경우
    
    부호부가 0이면 정수부의 값 그대로, 1이면 정수부의 보수의 값에 -1을 곱하여 해석한다.
    
    - **가산 방법**00000001(1) + 11111110(-1)의 연산 과정
        1. 00000001 + 11111110 (a+b) [clock 1]
        2. 11111111 + 1 (+1) [clock 2]
        3. 00000000 (Overflow)
- **부호화 2의 보수**
    
    부호화 1의 보수에서 계산 과정을 단순화 하기 위하여 생겨났다.
    
    (부호부 1비트, 정수부 7비트) 의 경우
    
    부호부가 0이면 정수부의 값 그대로, 1이면 (부호화 1의 보수)의 값에 -1을 더하여 해석한다.
    
    - **가산 방법**00000001(1) + 11111111(-1)의 연산 과정
        1. 00000001 + 11111111 (a+b) [clock 1]
        2. 00000000 (Overflow) (Overflow)

> 카페인은 마약의 일종이지만 8시간 안에 분해되기에 마약 취급을 하지 않는다.

### 부동소수점

실수값을 표현하기 위하여 생겨났다.

(부호부 1비트, 지수부 8비트, 가수부 바이오스 23비트)

1의자리는 이미 있는 취급

정수값을 가수부 앞에 넣고 나머지를 0으로 << 이해못했다.

# 3/13 - 2교시

## 밖으로 나가 햇살을 쬐며

> 적절히 자는 것이 중요하다.

### 뇌 속에서 프로그래밍

```c
#include <stdio.h>

int main(void) {
	printf("아침햇살");
}
```

## 교실에서 프로그래밍

```c
#include <stdio.h>

int main(void) {
	printf("GoodMorning");
    return 0;
}
```

## if문 사용

1. 임의의 변수 선언
2. 변수에 정수값 입력
3. 입력받은 값이 1이면 1, 2면 2 출력 (if문 사용)

```c
#include <stdio.h>
#define _CRT_SECURE_NO_WARNINGS
#pragma warning(disable:4996)

void inputData() {
	int n;
	printf("정수값 입력 (1,2) >> ");
	scanf("%d", &n);
	if (n == 1) {
		printf("값 : 일");
	}
	else if (n == 2) {
		printf("값 : 이");
	}
	else {
		printf("OutOfRange");
	}
}

int main(void) {
	inputData();
    return 0;
}
```

## 돌아다니면서 다른사람 코드 보고 인용하기

```c
#include <stdio.h>
#define _CRT_SECURE_NO_WARNINGS
#pragma warning(disable:4996)

void inputInt(int* n) {
	scanf("%d", n);
}

int main(void) {
	int n;
	inputInt(&n);
	if (n == 1 || n == 2) { printf("입력 : %s", ((n == 1) ? "일" : "이")); }
	else { printf("범위 밖"); }
    return 0;
}
```

> if, for문의 block을 지우지 않는다. << block이 없으면 포함관계를 착각할 수 있다.

# 3/13 - 3교시

## 조언 반영

```
#include <stdio.h>
#define _CRT_SECURE_NO_WARNINGS
#pragma warning(disable:4996)

void inputInt(int* n) {
	scanf("%d", n);
}

int main(void) {
	unsigned int n;
	inputInt(&n);
	if (n == 1)
	{
		printf("%d 입력", n);
	}
	else if (n == 2)
	{
		printf("%d 입력", n);
	}
	else
	{
		printf("잘못된 값 입력, 재입력");
	}

	return 0;
}
```

## 오늘 짠 코드에 들어간 것

- 변수 선언
- 메모리 접근
- 전처리기를 통한 stdio.h 포함
    - scanf를 통한 변수의 주소 접근, 초기화
    - printf를 통한 문자열 출력
- 조건문 if 사용
    - 조건 3개
    - 1일때, 2일때, (1 또는 2)가 아닐때

## 내용 지우고 다시 짜기

```
#include <stdio.h>

int main(void) {
	int n;
	scanf_s("%d", &n);
	if (n == 1) {
		printf("1 입력");
	}
	else if (n == 1) {
		printf("2 입력");
	}
	else {
		printf("범위 외 값");
	}

	return 0;
}
```

## 이론

### 디버깅

### 버그

작성한 소스 코드가 컴파일 되지 않거나 실행 결과에 오류가 있는 경우

### 디버그

오류를 찾아내어 제거하는 것

# 3/14 - 4교시

> scanf 쓰기

## scanf의 실행

```
int a;
```

메모리에 int크기(4byte)의 공간을 할당하고 공간의 식별자를 a로 지정

a는 해당 공간의 주소 위치의 값에 연결 == &a는 a에 연결된 주소의 값

```
scanf("%d",&a);
```

scanf를 통하여 a의 주소에 입력받은 10진수 정수 값을

scanf로 a 주소에 값을 10진수로 초기화한다.

## 서식지정자 %

```
int a,b;
scanf("%d %d", &a, &b);
printf("%d",a);
// 변수 값을 사용하는만큼 자료형에 맞는 서식지정자를 사용해야하며, 서식지정자의 수 만큼, 변수를 매개변수로 주어야한다.
```

### 서식지정자의 종류

%d - int(10진수)

%o - int(8진수)

%x - int(16진수)

%f - float

%c = char

%p = 주소(16진수)

%s = String(문자열)

[참조](https://hackerpark.tistory.com/entry/C%EC%96%B8%EC%96%B4-%EC%84%9C%EC%8B%9D-%EC%A7%80%EC%A0%95%EC%9E%90%EC%9D%98-%EB%AA%A8%EB%93%A0%EA%B2%83-%EC%84%9C%EC%8B%9D%EB%AC%B8%EC%9E%90)

## 새 프로젝트 만들기

한 프로젝트에는 main함수가 하나만 존재해야하기 때문에, 여러 c파일을 작업하기 위하여 프로젝트를 생성한다.

**파일 - 새로 만들기 - 프로젝트 - 빈 프로젝트 - 솔루션 - 솔루션에 추가**

솔루션 탐색기에 프로젝트가 하나 더 생기는데

**프로젝트 우클릭 - 시작 프로젝트로 설정**을 통해 해당 프로젝트의 c파일을 실행할 수 있다.

### 이스케이프 문자 \

/n - 개행

/t - 탭

# 3/18 - 4교시

## 이론

### ``#include <stdio.h>``

StartUpCode가 main함수를 호출하려면 main의 주소가 필요하다.

이와 같이 printf를 쓸 때, 프로토타입의 함수가 필요하다.

printf의 주소에 접근해야 하기 때문.

그래서 **stdio.h의 printf 프로토타입을 불러와 사용**한다.

### 컴파일 실행 과정

컴파일을 통해 기계어로 바꾸고 링커로 실행파일 exe를 만들어서 실행된다.

### 변수 식별자

변수를 만들면 메모리에 공간을 할당하는데

할당된 공간에는 변수값만 존재하고

변수의 식별자와 주소를 데이터로 가지는 main.table의 데이터베이스가 만들어져 변수가 관리된다.

만약 함수 f의 프로토타입이 있으면 f.table이 만들어지고 그 안에 지역변수, 매개변수 등의 데이터가 관리된다.

main 안의 변수 a는 main.a고

f 안의 매개변수 a는 f.a이다.

> 함수 안에 변수가 선언되면 함수이름.변수명으로 생각해라. 구조체랑 헷갈릴 수 있다.

## if문 재사용

```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void) {
	int a = 0;
	scanf("%d", &a);
	if (a == 1) {
		printf("1");
	}
	else if (a == 2) {
		printf("2");
	}
	else {
		printf("제대로 써");
	}

	return 0;
}
```

## 이론

### for문에서의 초기화

for(int i = 0; i < 10; i++)

C에서는 허용되지 않는 형태이다.

C++ 컴파일러라서 봐주는건데

해당 코드는 컴파일 과정에서 main.i로 선언해서 사용된다.

### 변수(식별자) 선언 규칙

- 변수 이름은 알파벳, 숫자, 언더바로 구성된다.
    - 언더바로 시작되는 변수명은 대부분 시스템이 사용하는 변수이다.ex) Pthon의 **init**
- 대소문자를 구분한다.
- 숫자로 시작할 수 없고 키워드도 사용할 수 없다.
- 이름 사이에 공백이 삽입될 수 없다.

> if, else if, else

## 가위 바위 보

```c
#include <stdio.h>
#pragma warning(disable:4996)
#include <random>

int main(void) {
	char d[3][20] = {
		{"가위\\0"},
		{"바위\\0"},
		{"보\\0"}
	};
	int com = int(rand()%3);
	int me;
	printf("안 내면 진다 가위(0), 바위(1), 보(2) >> ");
	scanf("%d", &me);
	if (me > 2 || me < 0) {
		printf("안 내서 짐");
		return 0;
	}
	bool win;
	if ((me == 1 && com == 3) || (me == 2 && com == 1) || (me == 3 && com == 2)) {
		win = true;
	}
	else {
		win = false;
	}
	printf("\\n\\n====================\\n나\\t: %s\\n컴\\t: %s\\n결과\\t: %s\\n====================", d[me], d[com], me == com ? "비김" : win ? "이김" : "짐");

	return 0;
}
```

# 3/18 - 6교시

## ✯가위✯바위✯보✯

```c
#include <stdio.h>
#pragma warning(disable:4996)
#include <time.h>

int main(void) {
	int times = 0;
	int w = 0;
	char d[3][10] =
	{
		{"가위\\0"},
		{"바위\\0"},
		{"보\\0"}
	};
	int com;
	int me;
	while (true) {
		com = int(time(NULL) % 3);
		printf("안 내면 진다 가위(0), 바위(1), 보(2) >> ");
		scanf("%d", &me);
		times++;
		if (me > 2 || me < 0)
		{
			printf("안 내서 짐");
			return 0;
		}
		bool win;
		if ((me == 1 && com == 3) || (me == 2 && com == 1) || (me == 3 && com == 2))
		{
			w++;
			win = true;
		}
		else
		{
			win = false;
		}
		printf("\\n\\n====================\\n나\\t: %s\\n컴\\t: %s\\n결과\\t: %s\\n승률\\t: %.0f\\%\\n====================\\n\\n", d[me], d[com], me == com ? "비김" : win ? "이김" : "짐", (float(w)/times)*100);
	}

	return 0;
}
```

# 3/20 - 2, 3교시

### 라이브러리를 include하지 않고는 연속된 random값을 구할 수 없다.

## 논리 연산자

a && b / and연산자 - 조건 a, b가 참인가

a || b / or연산자 - 조건 a랑 b중 하나라도 참인가

!a / not연산자 - 조건 a가 거짓인가

```c
#include <stdio.h>
#pragma warning(disable:4996)
#include <time.h>

int main(void) {
	int times = 0;
	int w = 0;
	char d[3][10] =
	{
		{"가위\\0"},
		{"바위\\0"},
		{"보\\0"}
	};
	int com;
	int me;
	while (true) {
		com = int(time(NULL) % 3);
		printf("안 내면 진다 가위(1), 바위(2), 보(3) >> ");
		scanf(" %d", &me);
		times++;
		if (me > 3 || me < 1)
		{
			printf("안 내서 짐");
			printf("\\n\\n====================\\n%d판 중 %d판 승리\\n승률\\t: %.0f\\%\\n====================\\n\\n", times, w, (float(w) / times) * 100);
			return 0;
		}
		bool win;
		if ((me == 1 && com == 2) || (me == 2 && com == 0) || (me == 3 && com == 1))
		{
			w++;
			win = true;
		}
		else
		{
			win = false;
		}
		printf("\\n\\n====================\\n나\\t: %s\\n컴\\t: %s\\n결과\\t: %s\\n승률\\t: %.0f\\%\\n====================\\n\\n", d[(me-1)], d[com], (me-1) == com ? "비김" : win ? "이김" : "짐", (float(w)/times)*100);
	}

	return 0;
}
```

## 반복문

### while

```c
int i = 0;

int num = 5;

while (i < num)

{

    printf("while 문이 %d 번째 반복 수행중입니다.\\n", i + 1);

    i++; // 이 부분을 삭제하면 무한 루프에 빠지게 됨

}

printf("while 문이 종료된 후 변수 i의 값은 %d입니다.\\n", i);
```

[참조](https://www.tcpschool.com/c/c_control_loop)

붙여넣을 때, main함수나 include 같은 기본 코드는 남긴다.

> while문을 쓸 때 어떻게 탈출할지를 생각해라 << 탈출 조건

무한 반복을 할 때 == 조건식이 항상 참일 때 (참 그룹)

## 숙제

### '\0' NULL 누가 false인가

C 에서 NULL은 false에 해당한다.

[참조](https://stackoverflow.com/questions/459743/is-null-always-false)

C 에서 char null은 false이나, string(char*) null은 true이다.

string은 참조형 변수이고, NULL을 가질 수 있기에 string에서의 false는 NULL이므로 string null은 값을 가진 경우인 true에 해당한다.

[참조](https://stackoverflow.com/questions/36950552/0-evaluates-false-0-evaluates-true)

### while문을 사용하여 5판 3선승제로 바꾸기

```c
#include <stdio.h>
#pragma warning(disable:4996)
#include <time.h>

int main(void) {
	int times = 0;
	char d[3][10] =
	{
		{"가위\\0"},
		{"바위\\0"},
		{"보\\0"}
	};
	int com;
	int me;
	int comc = 0;
	int mec = 0;
	while ((comc != 3) && (mec != 3) && (times != 5)) {
		com = int(time(NULL) % 3);
		printf("안 내면 진다 가위(1), 바위(2), 보(3) >> ");
		scanf(" %d", &me);
		times++;
		if (me > 3 || me < 1)
		{
			printf("안 내서 짐\\n");
			comc++;
			continue;
		}
		bool win;
		if ((me == 1 && com == 2) || (me == 2 && com == 0) || (me == 3 && com == 1))
		{
			mec++;
			win = true;
		}
		else
		{
			if (com != (me-1)) { comc++; }
			win = false;
		}
		printf("\\n\\n====================\\n나\\t: %s\\n컴\\t: %s\\n결과\\t: %s\\n현황\\t: %d / %d\\n====================\\n\\n", d[(me - 1)], d[com], (me - 1) == com ? "비김" : win ? "이김" : "짐", mec, comc);
	}
	if (times == 5) {
		printf("무승부");
	}

	return 0;
}
```

# 3/21 - 4교시

## 이론

### 연산자 - 좌항을 기준으로

`a == b` 에서

`==`는 연산자

`a, b`는 피연산자에 해당한다.

### 숫자연산자

합 `+`

곱 `*`

차 `-`

몫 `/`

나머지 `%`

### 논리연산자

논리합 `||`

논리곱 `&&`

논리부정 `!`

### 비교연산자

초과 `>`

이상 `>=`

미만 `<`

이하 `<=`

일치 `==`

## if문을 사용하여 정렬

```c
#include <stdio.h>
#pragma warning(disable:4996)

void swap(int* a, int* b) {
	int temp = *a;
	*a = *b;
	*b = temp;
}

void sort(int* l, int len) {
	for (int i = 0; i < len-1; i++) {
		for (int j = 0; j < len-1; j++) {
			if (l[j] > l[j+1]) {
				swap((l + j), (l + j + 1));
 			}
		}
	}
}

int main(void) {
	int l[3] = { 0, };
	for (int i = 0; i < 3; i++) {
		printf("%d번째 값 >> ", i+1);
		scanf("%d", (l + i));
	}
	sort(l, 3);
	for (int i = 0; i < 3; i++) {
		printf("%d ", l[i]);
	}

	return 0;
}
```

## 옆사람 코드 보고 수정

```c
#include <stdio.h>
#pragma warning(disable:4996)

void swap(int* a, int* b) {
	int temp = *a;
	*a = *b;
	*b = temp;
}

// 되다만 버블 정렬
void sort(int* l, int len, bool reverse = false) {
	for (int i = 0; i < len-1; i++) {
		for (int j = 0; j < len-1; j++) {
			if (!reverse ? (l[j] > l[j+1]) : (l[j] < l[j + 1])) {
				swap((l + j), (l + j + 1));
 			}
		}
	}
}

int main(void) {
	int l[3] = { 0, };
	for (int i = 0; i < 3; i++) {
		printf("%d번째 값 >> ", i+1);
		scanf("%d", (l + i));
	}
	sort(l, 3);
	for (int i = 0; i < 3; i++) {
		printf("%d ", l[i]);
	}

	return 0;
}
```

## if문으로 성인 판독기

```c
#include <stdio.h>
#include <time.h>
#pragma warning(disable:4996)

int main(void) {
	time_t t = time(NULL);
	struct tm* time = localtime(&t);
	int nowYear = time->tm_year+1900;
	int nowMonth = time->tm_mon+1;
	int nowDay = time->tm_mday;
	int data;
	printf("현재 날짜 : %d년 %d월 %d일\n", nowYear, nowMonth, nowDay);
	e:
	printf("생년월일 입력 ex)20240321 >> ");
	scanf("%d", &data);
	int age = nowYear - (data / 10000);
	int month = (data % 10000) / 100;
	int day = (data % 100);
	if (month > 12 || day > 31 || data < 10000000) {
		printf("\n날짜 다시쓰세요.\n\n");
		goto e;
	}
	if (age >= 19) {
		if (age == 19 && month < nowMonth) {
			printf("%d달 부족합니다.", nowMonth - month);
			return 0;
		}
		if (age == 19 && month == nowMonth && day < nowDay) {
			printf("%d만큼 아까운 청년", nowDay - day);
			return 0;
		}
		printf("성인입니다.");
	}
	else {
		printf("%d년 남았습니다.", 19 - age);
	}
    
    return 0;
}
```
# 3/25 - 5, 6교시

### Ctrl + H 찾기 및 바꾸기

가독성 좋게 if ( a == 가위 && b == 보) 대충 이렇게 써놓고 가위를 0으로, 보를 2로 바꾸면 정상적으로 작동

while문 뚫기 (반복 탈출) 조건을 거짓으로 만들 수 있는 증감식 쓰기, break문 쓰기

모르면 [https://tcpschool.com/c/c_control_loop](https://tcpschool.com/c/c_control_loop)

## 가위 바위 보 3선승제

```c
#include <stdio.h>
#pragma warning(disable:4996)
#include <time.h>

int main(void) {
	int t__ = 0;
	int times = 0;
	char d[3][10] =
	{
		{"가위\\0"},
		{"바위\\0"},
		{"보\\0"}
	};
	int com;
	int me;
	int comc = 0;
	int mec = 0;
	while ((comc != 3) && (mec != 3))
	{
		com = int(time(NULL) % 3);
		printf("%d회\\n안 내면 진다 가위(1), 바위(2), 보(3) >> ",times+1);
		// 예외처리 못함
		t__ = scanf(" %d", &me);
		times++;
		if (me > 3 || me < 1)
		{
			printf("안 내서 짐\\n");
			comc++;
			continue;
		}
		bool win;
		if ((me-com == -1) || (me-com == 2))
		{
			mec++;
			win = true;
		}
		else
		{
			if (com != (me-1)) { comc++; }
			win = false;
		}
		printf("\\n\\n====================\\n나\\t: %s\\n컴\\t: %s\\n결과\\t: %s\\n현황\\t: %d / %d\\n====================\\n\\n", d[(me - 1)], d[com], (me - 1) == com ? "비김" : win ? "이김" : "짐", mec, comc);
	}
	if (times == 5)
	{
		printf("무승부");
	}

	return 0;
}
```

---

for문은 for(초기화식, 조건식, 증감식){실행문}의 구조를 가진다.

모르면

[https://tcpschool.com/c/c_control_loop](https://tcpschool.com/c/c_control_loop)

## Up/Down

```c
#include <stdio.h>
#include <time.h>
#pragma warning(disable:4996)

int main(void)
{
	int n = (time(NULL) % 100) + 1;
	int h;
	for (int i = 1; i < 8; i++)
	{
		printf("기회 : %d/7\\n>>", (8 - i));
		scanf("%d", &h);
		if (n == h)
		{
			printf("성공, %d회 시도\\n", i);
			return 0;
		}
		printf((h < n ? "Up\\n" : "Down\\n"));
	}
	printf("실패, 난수 : %d\\n", n);

	return 0;
}
```

# 3/27 - 2,3교시
## 프로토타입
```c
#include <stdio.h>

void myF(void); // 프로토타입

int main(void)
{
	myF();

	return 0;
}

void myF(void)
{
	printf("Cloud");
}
```

# 4/1 - 6,7교시
## 삼항연산자
``` (조건식) ? A : B``` 조건식이 참이면 A, 거짓이면 B 반환

## switch-case
```
switch(X){
	case(a):
		(실행문1)
		break;
	case(b):
		(실행문2)
		break;
	default:
		(실행문3)
}
```
X를 대상으로 값이 a면 실행문1, b면 실행문2, 전부 아니면 실행문3 실행

### IP주소 클래스
A클래스
``10.`` 으로 시작한다.

C클래스 - 주로 사용한다.

``CMD``에서 ``ipconfig -all`` 을 통해 확인할 수 있다.

IPv4 주소 : 192.168.x.x
서브넷 마스크 : 255.255.0.0

IPv4주소와 서브넷 마스크를 AND연산(&)하면 위의 두 수만 살아남는데
그걸로 게이트웨이가 구성된다.
기본 게이트웨이 : 192.168.1.1
# 4/3 - 2, 3교시

``char a[] = "a"``
에서 ``a[]``는 뭘까

``[]``는 뒤에 쓰인 값에 따라 배열의 공간을 동적 할당하는 역할을 지닌다.

``char a[]``는
일차원 배열로
값이 ``[a,b,c]``와 같이 들어간다.

``char a[][]``는
이차원 배열로
값이
```
a[0] : [a,b,c]
a[1] : [d,e,f]
a[2] : [g,h,i]
```
와 같이 들어간다.

``a[][]``에서 ``[]``를 앞으로 넘길 수 있는데,
그러면 ``**a``가 된다. (배열 -> 포인터)

``char a[4] = "abc"`` 를 출력할 때

```
서식/연산자		| a					| &a					| *a
%d				| -2139948892		| -2139948892 			| 97
%c				| ?					| ?						| a
%s				| abc				| abc					| 강제종료
```
#### 나머지 이해 못하겠다..
그래서 대충 이론 요약
```
연산자	| 연산			| 피연산자
&		| 참조 연산자	| 식별자
*		| 역참조 연산자	| 주소값
```
``""`` 큰 따옴표 안에 넣으면 String으로 인식
``''`` 작은 따옴표 안에 넣으면 char로 인식
char 자료형은 실제로 정수값을 가지기에 int 또한 문자 출력이 가능하다. (실제로 저장된 값이 같다)
```
서식지정자	｜ 자료형
‰ｐ			｜ １６진수 숫자（주소값）
‰ｃ 		｜ ａｓｃｉｉ코드（ｃｈａｒ）
‰ｄ			｜ １０진수 정수（ｉｎｔ）
‰ｓ 		｜ 문자열（Ｓｔｒｉｎｇ）
```

# 4/4 - 4교시
### 저번에 했던 성인판독기
```
#include <stdio.h>
#include <time.h>
#pragma warning(disable:4996)

int main(void) {
	time_t t = time(NULL);
	struct tm* time = localtime(&t);
	int nowYear = time->tm_year+1900;
	int nowMonth = time->tm_mon+1;
	int nowDay = time->tm_mday;
	int data;
	printf("현재 날짜 : %d년 %d월 %d일\n", nowYear, nowMonth, nowDay);
	e:
	printf("생년월일 입력 ex)20240321 >> ");
	scanf("%d", &data);
	int age = nowYear - (data / 10000);
	int month = (data % 10000) / 100;
	int day = (data % 100);
	if (month > 12 || day > 31 || data < 10000000) {
		printf("\n날짜 다시쓰세요.\n\n");
		goto e;
	}
	if (age >= 19) {
		if (age == 19 && month < nowMonth) {
			printf("%d달 부족합니다.", nowMonth - month);
			return 0;
		}
		if (age == 19 && month == nowMonth && day < nowDay) {
			printf("%d만큼 아까운 청년", nowDay - day);
			return 0;
		}
		printf("성인입니다.");
	}
	else {
		printf("%d년 남았습니다.", 19 - age);
	}
    
    return 0;
}
```
### 성별 판독기
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void) {
	int d;
	char gender[2][10] = { "여자", "남자" };
	printf("주민등록번호 7번째 값 입력 >> ");
	scanf("%d", &d);
	(d > -1 && d < 10) ? printf("%s입니다.", gender[d % 2]) : printf("잘못된 입력");

	return 0;
}
```


# 4/8  - 2교시
함수는 매개변수로 배열, 주소를 받으면 **실제로는 포인터로 처리**한다.
## 오늘 미세먼지가 심하다.
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void)
{
	printf("fine dust is strong.");
	
	return 0;
}
```
## char배열로 string 구현
`char arr[] = "abcd";`
`arr`의 자료형은 `char[5]`이다. << c의 string은 널 문자 이전의 값까지 인식하기에 마지막에 `'\0'` 입력이 필요하다.

`arr[0]`은 값이고 `arr`는 주소다
문자열 서식지정자 `%s`는 배열의 주소가 필요하다. << `arr`를 써야한다.

## sizeof 함수
`sizeof()` 함수를 통하여 해당 변수의 크기를 구할 수 있다. (byte단위)
`sizeof(n[0])`는 해당 자료형의 크기를 반환하고
`sizeof(n) / sizeof(n[0])`로 해당 배열의 길이를 구할 수 있다.

## for문을 통한 배열 접근
`int n[3] = { 1,2,3 };` 배열이 있고
길이를 모르는 채, 각 요소를 출력하려면
```c
for (int i = 0; i < sizeof(n) / sizeof(n[0]); i++)
{
	printf("%d ", n[i]);
}
```
와 같이 반복문을 사용하여 접근할 수 있다.
# 4/8  - 4교시
## 이차원배열
```c
int n[4][3] =
{	{10, 11, 12},
	{20, 21, 22},
	{30, 31, 32},
	{40, 41, 42}
};
```
## 이중 for문으로 n 접근
```c
for (int i = 0; i < sizeof(n)/sizeof(n[0]); i++)
{
	for (int j = 0; j < sizeof(n[0])/sizeof(n[0][0]); j++)
	{
		printf("%d ", n[i][j]);
	}
	printf("\n");
}
```
출력
```
10 11 12
20 21 22
30 31 32
40 41 42
```
**i는 column(열), j는 row(행)을 뜻한다.** << 반대로 생각하지 않도록 주의
![[Pasted image 20240415145046.png]]

### 저장용
```c
#include <stdio.h>
#pragma warning(disable:4996)
#include <time.h>

int getRandInt(int, int);
void inputInt(int*);
bool game();

int com;
int me;
int comc = 0;
int mec = 0;
int times = 0;

char d[3][10] =
{
	{"가위\0"},
	{"바위\0"},
	{"보\0"}
};

int main(void) {
	bool run = true;
	while (run)
	{
		times++;
		run = game();
	}

	return 0;
}

int getRandInt(int start, int end) {

	return int(time(NULL) % (end-start)+start);
}

void inputInt(int* d) {
	scanf(" %d", d);
}

bool game() {
	com = getRandInt(0, 3);
	printf("%d회\n안 내면 진다 가위(1), 바위(2), 보(3) >> ", times);
	inputInt(&me);
	if (me > 3 || me < 1)
	{
		printf("안 내서 짐\n");
		comc++;
		return true;
	}
	bool win;
	if ((me - com == -1) || (me - com == 2))
	{
		mec++;
		win = true;
	}
	else
	{
		if (com != (me - 1)) { comc++; }
		win = false;
	}
	printf("\n\n====================\n나\t: %s\n컴\t: %s\n결과\t: %s\n현황\t: %d / %d\n====================\n\n", d[(me - 1)], d[com], (me - 1) == com ? "비김" : win ? "이김" : "짐", mec, comc);
	if (mec == 3 || comc == 3) {
		return false;
	}
	return true;
}
```

# 4/12 - 5교시
## 성적산출프로그램
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void) {
	int n;
	char r;
	printf("성적 >> ");
	scanf("%d", &n);
	switch (n / 10) {
		case(10):
		case(9):
			r = 'A';
			break;
		case(8):
			r = 'B';
			break;
		case(7):
			r = 'C';
			break;
		case(6):
			r = 'D';
			break;
		default:
			r = 'E';
	}
	printf("성적 : %c", r);

	return 0;
}
```
## 다음 달까지 남은 날짜
```c
#include <stdio.h>
#include <time.h>
#pragma warning(disable:4996)

int main(void) {
	time_t t = time(NULL);
	struct tm tm = *localtime(&t);
	int y = tm.tm_year+1900;
	int m, d;
	int dayL[12] = { 31, (y % 400 == 0 || ((y % 4 == 0) && (y % 100 != 0))) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
	printf("날짜 입력 ex)4/1 >> ");
	scanf("%d/%d", &m, &d);
	if (m < 1 || m > 12) {
		printf("입력 오류");
		return -1;
	}
	else if (d < 1 || d > dayL[m - 1]) {
		printf("입력 오류");
		return -1;
	}
	printf("%d월 까지 남은 날짜 : %d일", m != 12 ? m + 1 : 1, dayL[m - 1] - d);

	return 0;
}
```
## 학번으로 학과출력
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void) {
	int g, c, b;
	char text[4][30] = { "공통과정", "소프트웨어개발과", "임베디드소프트웨어과", "인공지능소프트웨어과" };
	printf("학번 입력 ex)1101 >> ");
	scanf("%d", &b);
	if (b < 1000 || b > 3499) {
		printf("입력 오류");
		return -1;
	}
	g = b / 1000;
	c = (b / 100) % 10;
	if (c > 4) {
		printf("입력오류");
		return -1;
	}
	printf("%s", g == 1 ? text[0] : text[c]);

	return 0;
}
```

# 4/15 - 6, 7교시
## 비 내리는 것을 보며
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void)
{
	int n;
	scanf("%d", &n);
	if (!n) // (n == 0)과 같다.
	{
		printf("rain");
	}
	
	return 0;
}
```
조건은 괄호 안에 넣어 명시적으로 표시해주자
## scanf에 구분자 사용
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void)
{
	int a, b, c;
	scanf("%3d%*c%4d%*c%4d", &a, &b, &c); // %*c는 아무 문자나 받고 버린다
	printf("%03d, %d, %d", a, b, c); // %03은 정수를 3자리, 빈자리는 0으로 때운다.
	
	return 0;
}
```
### 버퍼처리하는법
``while(getchar() != \n);`` << 엔터 다 없애기
``%*c`` << 한 문자 날리기, ``%*s`` << 한 줄 날리기
> 서식 지정자는 어떤 자료형으로 표현할지 알려주는 것만이 아니라, 어떤 형식으로 값을 나타낼지, 메모리에서 값을 어떤 방식으로 가져올지 정하기도 한다. 그래서 선생님은 형식 매개변수라고 부른다.

## 다차원 배열의 자동 할당
```c
int a[3][4] =
{
	{10, 11, 12, 13},
	{20, 21, 22, 23},
	{30, 31, 32, 33}
};
int b[][4] =
{
	{40, 41, 42, 43},
	{50, 51, 52, 53},
	{60, 61, 62, 63}
};
```
b도 괄호를 비워두고 초기화하면 일차원 배열처럼 자동 할당이 된다.

## 여러 배열의 순회
```c
for (int i = 0; i < 24; i++) {
	printf("%d\t", (i < 12) ? a[i / 4][i % 4] : b[(i / 4) - 3][i % 4]);
	if (i % 4 == 3) {
		printf("\n");
	}
	if (i % 12 == 11) {
		printf("\n");
	}
}
```
사실 삼항 연산자 쓰면 안되고 포인터 써야 된다.
## 배열 쓰는 이유
int 100개를 입력할때
``int n1 = 1; int n2 = 2 ... `` 하는거보다
``int n[100];`` 이게 더 낫다.
그리고 저걸
``int n[10][10];`` 처럼 범위를 쪼갤 수 있다.

참고로 같은 자료형이 정해진 크기로 연속되는게 배열, 아니면 리스트다.
## 또 다시 하는 sizeof 함수를 통한 배열의 순회
```c
for (int i = 0; i < (sizeof(a) / sizeof(a[0])); i++)
{
	for (int j = 0; j < (sizeof(a[0]) / sizeof(a[0][0])); j++)
	{
		printf("%d\t", a[i][j]);
	}
	printf("\n");
}
```
## void 포인터를 통한 배열 순회
```c
int a[3][4] =
{
	{10, 11, 12, 13},
	{20, 21, 22, 23},
	{30, 31, 32, 33}
};
void *p = a;
for (int i = 0; i < 12; i++)
{
	printf("%d\t", *((int*)p + i));
	if (i % 4 == 3) {
		printf("\n");
	}
}
```

# 4/17 - 2, 3교시
## 오늘도 어김없이
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void)
{
	printf("초미세먼지");

	return 0;
}
```
### 다차원 배열의 값
``int a[2][2] = {1,2,3,4};`` 에서
`a`, `a[0]`, `&a[0][0]`은 서로 같다. (시작 주소)
## 개선된 순회
```c
int a[3][2] =
{
	{10, 11},
	{20, 21},
	{30, 31}
};
int* p = &a[0][0]; // 또는 a[0] << 포인터는 일차원 배열을 담을 수 있다.
for (int i = 0; i < sizeof(a) / sizeof(int); i++) {
	printf("%d\t", *(p + i));
	if (i % 2 == 1) {
		printf("\n");
	}
}
```
### 역참조 연산의 우선순위
```c
int a[3][2] =
{
	{10, 11},
	{20, 21},
	{30, 31}
};
int* p = a[0]; // 해당 포인터를 통하여 a[1][1]을 출력하는 것이 목표다.
printf("1. %d\n2. %d", *p + 3, *(p + 3)); // 1번은 13, 2번은 21이 나온다.
```
```
해석
1. *p (a[0][0] == 10에) + 3 (3을 더한다) >> 13
2. *((p+3)(p(&a[0][0])에 int단위(4)로 3을 더한 후))(그것을 역참조한다) >> 21
```
역참조 연산은 사칙연산보다 우선된다.

### 10진수 표현 방식
- 고정소수점
	부호부 1비트
	나머지 데이터

- 부동소수점
	부호부 1비트
	지수부 x비트
	실수부 x비트

두 수를 표현하는 방법이 달라
연산도 다르다
3/2 == 1
float(3/2) == 1.0 << 나누기 연산 우선
float(3)/2 == 1.5
3/folat(2) == 1.5

둘 다 고정소수점이면 결과도 고정소수점이 나오고
둘 중 하나라도 부동소수점이면 결과도 부동소수점이 나온다.
![[Pasted image 20240421210127.png]]
# 4/22 - 6, 7교시
## for문 몸풀기
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void)
{
	for (int i = 0; i < 10; i++)
	{
		printf("%d", i);
	}
	
	return 0;
}
```
## break와 continue
둘 다 반복문에서 쓴다.

### 삼항 연산자
삼항 연산자는 동작을 시킬수도, 값을 반환할 수도 있다.
삼항 연산자는 단순히 if문을 대신하는 것 만이 아닌
함수와 비슷한 용도로 동작한다.
앞으로 배울 람다식과 비?슷하다.

^ 비트를 통한 동등 연산
NXOR 연산을 이용하면 == 연산을 할 수 있다.
!(2^n) << n이 2일 때만 참
# 4/24 - ??
이날뭐했지
# 4/25 -  4교시
### 비트 연산
```
& and - 다 1일 때
| or - 하나라도 1일 때
~ not - 0일 때
^ xor - 서로 다를 때
```
- 빠르고 효율적이어서 좋다.
### 배열
동일한 자료형을 가진 여러개의 메모리를 연속적으로 할당한 것
자세한거 4/3, 4/8 참고
## 2의 n승 구하기
```c
int n;
printf("n 입력 >> ");
scanf("%d", &n);
printf("2의 %d승 : %d", n, 1 << n);
```

## 피보나치 배열넣기
```c
#include <stdio.h>
#pragma warning(disable:4996)

int main(void) {
	int f[47] = { 0, 1, };
	int size;
	printf("input size >> ");
	scanf("%d", &size);
	if (size > 47) {
		printf("48 이상은 안됨 << int 범위 초과");
		exit(-1);
	}
	for (int i = 0; i < size-2; i++) {
		f[i + 2] = f[i] + f[i + 1];
	}
	for (int i = 0; i < size; i++) {
		printf("%d\n", f[i]);
	}

	return 0;
}
```
# 5/1 - 2교시
## 2차원 배열 활용
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#pragma warning(disable:4996)

int getRandInt() {
	return rand() % 100;
}

int main(void) {
	double sum;
	int temp;
	double sungjuk[5][5] = { 0, };
	for (int i = 0; i < 5; i++) {
		sum = 0;
		for (int j = 0; j < 4; j++) {
			temp = getRandInt();
			sum += temp;
			sungjuk[i][j] = temp;
		}
		sungjuk[i][4] = sum/(double)4;
	}
	double vud[5] = {0,};
	printf("국\t수\t영\t프로\t평균\n");
	for (int i = 0; i < 5; i++) {
		printf("\n%d번째 학생\n", i + 1);
		for (int j = 0; j < 5; j++) {
			vud[j] += sungjuk[i][j];
			printf((j != 4) ? ("%.0f\t") : ("%.2f\t"), sungjuk[i][j]);
		}
	}
	printf("\n\n과목별 평균\n");
	for (int i = 0; i < 5; i++) {
		vud[i] /= (double)5;
		printf("%.2f\t", vud[i]);
	}

	return 0;
}
```

# 5/8 - 2교시
```c
printf("%c", "Hello world"[1]); // e 출력

char a[5] = {'a', 'b', 'c', 'd'};
printf("%s", a); // abcd 출력
```
## 포인터
```c
char a[5] = "asdf";
a = "qwer"; // 이거는 안되는데

char* a = "abcd";
a = "wxyz"; // 이거는 되는 이유
```
``char* a`` 가 포인터 **변수**이기 때문이다.

``int a``는 메모리에서 4byte만큼 값을 읽어오라는 의미라면
``char* a``는 메모리에서 a의 크기만큼 char단위로 값을 읽어오라는 의미이기 때문

#### ``int a``의 실제 a는 ``*&a``와 같다.
그러니까 기본적으로 a는 주소가 있으며,
식별 되었을 때에는 역참조 되어 메모리에서 해당 주소의 
값에서 읽기, 쓰기를 하는 것이다.

#### ``int* a``의 실제 a는 ``&a``와 같다.
``a``는 본래 ``*&a``이지만, `int*`에서 `*`를 가져감으로서
`*`가 옮겨져, 실제 값은 주소가 되는 것이다.
그러므로 a의 값은 주소이다.

``int* a``의 해석
int* << 4byte단위로 주소를 읽는다. << 주소 연산에서도 4 단위로 연산
a << 해당 정수 포인터 변수의 식별자를 a로 지정한다.
# 5/9 - 4교시
### 포인터
``int* a;`` == ``int *& a`` -> ``int* &a``
원래 int a의 경우에는 실제 값이 ``*&``이므로 상쇄되어 정수 값을 가졌으나,
int* a의 경우에는 역참조 연산이 넘어가 a의 실제 값이 `&`이므로 주소값을 가지게 된다.
또한 앞의 자료형은 포인터가 역참조를 통하여 값을 읽어올 때, 주소 연산을 할 때 사용할 범위이다.

포인터의 크기는
현재 64bit OS를 쓰고 있기에
8byte(8 * 8byte) 16진수를 가진다.


# 5/13 - 4, 5, 6교시
```c
char c = 0;
printf("ASCII | VALUE\n");
for (c; c < 127; c++) {
	printf("%d\t%c\n", c, c);
}
printf("%d\t%c\n", c, c);

return 0;
```

선언      | L-value
``* 변수``   값
``[] 상수`` 값
그러므로 배열은 상수이다.

``int &n`` << n으로 가면 4byte 정수가 있음을 의미
``int *&n`` << 그 값을 읽어 << ``*&``는 상쇄
그러니 ``int n`` 은 사실 ``int *&n``에 해당
그래서 ``int* n``은 ``int* &n``에 해당
``int* n`` << n으로 가면 4byte 정수가 있음을 의미 << 주소 연산 또한 4 단위로 진행
그러니 포인터에는 주소값이 들어간다.

``char* p1 = (char*)"abcd";``
``*(p1+2)``의 값을 변경하려 하면 쓰기 오류가 난다
``p1 = (char*)"abfd";`` 새로 만들어서 대입하자
# 5/20 - 6, 7교시
#### ``*``가 쓰이는 경우
- 곱하기
- 포인터 선언
- 역참조 연산
함수 이름은 주소다.
dll에는 함수만 정의되어 있다. (프로토타입)
### 함수 포인터
``반환형 (*func)(인수1, 인수2)``의 형태로 사용하며
반환형, 인수가 동일한 함수의 주소를 가질 수 있다.
괄호 쓰면 호출된다.
변수가 가지는 것은 8byte의 시작 주소
그래서 포인터 선언할 때 자료형을 붙여서 얼마나 읽을지 정하는 것
```c
int a[] = {0,1};
const int* const p = a;
```
### swap
```c
// 진짜 temp << 값의 변경
void swap(int* a, int* b){
	int temp = *a;
	*a = *b;
	*b = temp;
}
// 가짜 temp << 참조의 변경
void swap(int* a, int* b){
	int* temp = a;
	a = b;
	b = temp;
}
```
## 함수 포인터 예제
```c
#define INVOKE(a) a()

typedef void (*FUNC)(void);

void hi() {
	printf("hi\n");
}

int a[] = { 1,2,3 };

int next() {
	static int i = 0;
	return a[i++];
}

FUNC get() {
	return hi;
}

void* encode(FUNC f) {
	return f;
}

FUNC decode(void* p) {
	return (FUNC)p;
}

void exec(bool con, FUNC fun) {
	if (con) {
		fun();
	}
}

int main()
{
	void (*func)(void) = NULL;
	func = get();

	void* p = encode(func);
	p = (char*)p - 10;
	func = decode(((char*)p + 10));

	INVOKE(func);
	
	for (int i = 0; i < 3; i++) {
		printf("%d\t", next());
	}

	exec(1 == 1, hi);

	return 0;
}
```
# 5/22 - 3교시
``*(arr+1)`` == ``arr[1]``이다
참조를 간단하게 표현하기 위해 사용하는 것인데,
그렇기에 struct도
``(*struct1).a`` == ``struct1->a``이다.
결국 C의 자료형은 전부 포인터다.

현재는 대부분 메모리 주소를 구분하기 위해서 8byte를 쓰는 컴퓨터를 쓴다.

``int i``에서 `i`는 값이 시작되는 주소만 알고 있고,
`int`에서 해당 주소로부터 몇 byte를 읽을 지 알게 된다.
### Call by value, Call by reference
```c
// call by value
int f1(int);

// call by reference 
void f2(int*);

int main(void) {
	int n = 2;
	n = f1(n);
	f2(&n);
	printf("%d", n);

	return 0;
}

int f1(int n) { return n * 2; } // 받은 인자를 2배로 하여 반환
void f2(int* n) { *n *= 2; } // 받은 주소를 역참조하여 2배로 함
```

# 5/27 - 6, 7교시
stack 변수
data 상수
heap 동적 할당
## ``char[], char*``의 차이
``char str[] = "hello";``의 경우 (stack영역)
초기화 도중 h, e, l, l, o를 각각의 char로 변환해서 내부 값이 수정 가능하지만
``char* str = "hello";``의 경우 (data영역)
(리터럴 상수) 데이터 영역에 초기화된 hello의 주소를 가지기에 수정 불가하다.
#### call by reference로 문자열 출력
```c
#include <stdio.h>
#pragma warning(disable:4996)

void f(char*);

int main(void)
{
	char str[10] = "hello";
	f(str);

	printf("%s", str);

	return 0;
}

void f(char* str)
{
	printf("%s\n", str);
}
```
#### call by value로 문자열 출력..?
```c
#include <stdio.h>
#pragma warning(disable:4996)

void f(char);

int main(void)
{
	char str[10] = "hello";
	int i = 0;
	while(1) {
		f(str[i]);
		if (str[i++] == '\0') {
			break;
		}
	}

	return 0;
}

void f(char str)
{
	static char value[100];
	static char len = 0;
	if (str == '\0') {
		printf("%s", value);
		len = 0;
		return;
	}
	value[len++] = str;
}
```

`



# 5/29 - 2, 3교시
A : ``char str[] = "hello";``
B : ``char* str = "hello"``
### A와 B의 차이

| 비교/대상   | A     | B    |
| ------- | ----- | ---- |
| 수정(주소)  | X     | O    |
| 수정(값)   | O     | X    |
| 값 저장 영역 | Stack | Data |
### 출력
```c
#include <stdio.h>

void f(char[]);

typedef void (*FUNC)(char[]);

int main(void) {
	char arr[15] = "hello world!";
	FUNC fpr = f;
	fpr(arr);
	printf("%s", arr);

	return 0;
}

void f(char arr[]){
	printf("%s\n", arr);
}
```

### `char*`의 값 변경
```c
#include <stdio.h> 
  
void f1(char**);  
  
typedef void (*FUNC)(char**);  
  
int main(void) {  
	char* arr = (char*)"hello world!";  
	FUNC fpr = f1;  
	fpr(&arr);  
	printf("%s", arr);  
	  
	return 0;  
}  
  
void f1(char** arr) {  
	*arr = (char*)"hell world!";  
}
```
# 6/3 - 6교시
지옥의 수행평가
# 6/3 - 7교시
## 메모리의 구조
### 코드 영역
실행되는 코드가 저장된다. (exe)
### 데이터 영역
**LowData 영역** (l-value)
- 리터럴 상수 << "123" 과 같이 식별자가 없는 상수
**상수 영역**
### 힙 영역
동적으로 썼다 지웠다 할 수 있는 영역
### 스택 영역
스코프마다 가지는 변수 저장 영역
#### char 배열의 생성 과정
``char a[10] = "hello";``
1. "hello" >> **데이터 영역**(LowData)
2. "hello" >> {'h', 'e', 'l', 'l', 'o'} >> **스택 영역**
3. {'h', 'e', 'l', 'l', 'o'} >> const char* a >> **데이터 영역**(상수)
"hello"의 각 요소를 복사하여 스택 영역에 할당하고, a를 그 주소로 초기화한다.
### malloc 사용자의 3가지 습관
1. malloc 쓰는만큼 free 쓴다.
2. malloc은 pointer로 받는다
3. malloc이 NULL인지 예외처리를 한다.

# 6/5 - 2, 3교시
## 동적 할당
### malloc
heap 영역에 매개변수(byte)크기의 영역을 할당하여 그것을 void* 형태로 반환한다.
```c
char* str = (char*)malloc(4); // malloc의 반환 결과는 void* 이므로 형변환이 필요하다.
printf("%p", str);
free(str); // 매개변수가 가리키는 heap영역을 사용 가능하게 비운다.
str = (char*)"123"; // 이후 str은 데이터 영역을 가리키므로 free가 불가능하다.
```
## 구조체
`struct 이름 { 변수 } 변수명` 형태로 변수를 선언 가능하다.
이름을 비우면 익명 구조체가 되고
해당 struct의 크기는 변수 중 크기가 가장 큰 변수를 단위로 하며, 나머지는 패팅으로 채운다.
```c
struct { char a; int b; } c; // char a와 int b를 가지는 struct를 변수 c로 사용
c.b = 10; // c의 멤버인 b의 값을 10으로 초기화
printf("%d", sizeof(c)); // c의 크기인 8이 출력 (int의 크기인 4byte 단위)
```
# 6/12 - 2, 3교시
Visual Studio의 실행 종류로는
Debug와 Release가 있다.
- Debug - 오류 추적을 위해 추가 프로그램을 실행하며, 디버거가 동작한다.
- Release - 오류 무시하고 컴파일-링킹 한다.
### 디버깅하는법
브레이크 포인트 - 해당 줄 실행 직전에 멈춘다.
식별자 hover로 해당 시점에서의 변수값을 알 수 있다.
브레이크 포인트 간의 이동 -  F10
하단의 창을 이용하면
디버깅 도중에 변수값을 바꾸거나, 실행문 작성이 가능하다.
함수 작동 디버깅 - F11 << 브레이크 포인트에 있는 함수의 작동을 디버깅한다.
컴파일된 어셈블리어 확인 - Alt+G
돌아가려면 우클릭 후 - go to source code
메모리 보기 - ctrl + alt + f1
실행 - Ctrl + f5
실행 중지 - Shift + f5
더블 클릭 해서 하단의 창에 띄우고 조작 가능하다.
실행되는 라인은 표시가 되는데
그걸 끌어서 옮기면, 현재 상태로 해당 라인부터 재 실행 된다.
CallStackWindow에서는 스택이 어떻게 활용되는지 표시된다.

### 구조체
다음은 구조체의 템플릿이다.
```c
struct name {
	...members;
};

struct name i = { ...members };
```
typedef를 사용하면 타입명을 변경할 수 있다.
```c
typedef int N;
N i = 0;

typedef struct {
	...members;
} name;
name i = { ...members };
```
typedef 없이 구조체를 사용한다면 괄호 내에 연속해서 값을 입력하는 것으로 초기화할 수 없다.

# 6/13 - 4, 6, 7교시
## 프로그램이 사용하는 메모리
```
코드 영역
- 실행 파일 (exe, bin)

데이터 영역
- 전역변수
- static 변수
- 배열 (상수)
- 리터럴 상수
- 구조체

힙 영역
- 동적 할당 영역

스택 영역
- 지역변수
- 매개변수
- 복귀 주소
```
### 전역 변수와 static 변수
전역 변수
- 어디서나 접근 가능
- 프로그램 종료 까지 유지
static 변수
- 지역 내에서 접근 가능
- 프로그램 종료 까지 유지
#### 함수를 호출하면
```
main에서 void f(int a)를 f(1)로 호출했을 때

스택
1. 복귀 주소(호출된 위치) 저장
2. 매개변수 할당 (int a = 1)
3. 실행
4. 매개변수 제거
5. 복귀
6. pop
```
### C는 단순한 언어이다.
```
변수 선언 (포인터 또한 변수) + 타입
제이문
함수 선언
파일 입출력
모듈화 (헤더 파일)
```
이 정도 하면 끝난다.

> 구조체를 자꾸 전역으로 사용하는데, 지역 변수로 사용해라

#### 배열 선언
```c
char a[][3] = { 0,0,0,0,0,0,0,0,0 };
char b[3][] = { 0,0,0,0,0,0,0,0,0 }; // 오류
```
변수 a는 선언에 문제가 없으나, 변수 b는 선언이 불가능하다.
배열은 연속적인 메모리의 할당이어서 a의 경우 자르는 단위가 주어져 컴퓨터가 할당할 수 있으나, b의 경우 자르는 단위가 없기에 컴퓨터가 배열 한 칸의 크기를 할 수 없다.
#### 포인터 배열, 배열 포인터
```c
int *p[3]; // int 포인터 3칸의 배열
int (*p)[3]; // 3칸의 int배열 포인터
```
### 구조체 포인터
```c
typedef struct {
	char title[30];
	char author[30];
	int price;
} book;
book* my_book = (*book)malloc(sizeof(book));
```
``sizeof(book)``이 8이 아닌 다른 값을 반환하는 것을 보고 알 수 있듯이,
구조체 변수는 주소가 아닌, 멤버로 접근하기 위한 값을 지닌다.
그렇기에 구조체 포인터에 할당 할 때에는 변수값이 아니라, 변수의 주소를 주어야 한다.

구조체 포인터의 경우 구조체의 구조를 지닌다.
그러므로 구조체의 멤버에 접근하려면
``*(my_book).title``과 같이 작성해야 하는데
위 구문은 ``my_book->title``과 같다.

전에 말했던 ``p[i]``와 같은 점은
- 둘 다 포인터 대상의 연산자라는 점
- 역참조가 생략되었다는 점
이 있으며, 이로 인하여 개발자에게 혼란을 줄 수 있다.

# 6/17 - 6교시
## 변수, 상수, 리터럴
- 변수 : 변수명, 주소, 공간, 형식 등의 요소를 갖는다.
- 상수 : 변수에서 쓰기 연산이 금지된 것
- 리터럴 : 상수에서 변수명도 없는 것
## 프로세스 메모리 영역
### 커널 영역
운영체제가 사용하는 공간
- 단일 공간으로 모든 프로세스에서 공유된다.
- RAM에 존재한다.
**생명 주기 : 운영체제가 동작하는 동안**
### 코드 영역
함수, 제어문에 대한 기계어 코드가 저장되는 공간
- 문자열 상수를 제외한 리터럴 상수가 기계어로 저장
- 작성한 소스코드가 저장
**생명 주기 : 프로그램이 동작하는 동안**
### 데이터 영역
rowdata
- 읽기 전용으로 초기화 되는 영역 (const)
- 전역, 정적 변수, 배열, 구조체, 문자열 저장
data
- 0이 아닌 값으로 초기화된 전역 변수, 정적 변수를 저장하는 영역
- 읽기 쓰기가 가능한 영역
bss
- 0으로 초기화나, 초기화 되지 않은 전역 변수 혹은 정적 변수를 저장하는 영역
- 이곳에 startup 함수 존재 (모든 값을 NULL로 초기화)
**생명 주기 : 프로그램이 동작하는 동안**
### 스택 영역
- 지역 변수(매개 변수, const 포함)
- LIFO
- 높은 주소 -> 낮은 주소
**생명 주기 : 필드 시작 ~ 필드 종료 ``{}``**
### 힙 영역
- 동적 할당 변수(malloc)
- 프로그램 동작 중 사용자가 원할 때 생성하고 삭제하는 동적으로 생성되는 변수 저장
- 낮은 주소 -> 높은 주소
**생명 주기 : 사용자 원할 때 ~ 사용자 원할 때**
## 프로세스 실행에 대한 메모리 추적
### 코드
```c
#include <stdio.h> // 1

int calc(int, int); // 2

int main(void){ // 3
	typedef struct{ // 4
		int x;
		int y;
	} Point;
	
	int sum; // 5
	Point p = {100, 40}; // 6

	sum = calc(p.x, p.y); // 7, 10
	printf("x: %d, y: %d, sum: %d", p.x, p.y, sum); // 11

	return 0; // 12
}

int calc(int x, int y){ // 8
	return (x+y); // 9
}
```
### 메모리 추적
1. 코드 영역에 ``stdio.h``의 함수 추가
2. 코드 영역에 calc 함수 추가
3. 스택 영역에 main 변수 테이블 생성
4. 데이터.rodata 영역에 struct 템플릿 저장
5. 스택.main 영역에 sum 저장
6. 스택.main 영역에 p 저장, 스택.main.p 영역에 x, y 할당
7. 스택 영역에 calc 변수 테이블 생성
8. 스택.calc 영역에 x, y 저장
9. 데이터.rodata 영역에 x+y 저장, 스택.calc 제거
10. 스택.main.sum에 데이터.rodata 영역의 x+y 할당, 데이터.rodata 영역에 x+y 제거
11. 스택 영역에 printf 변수 테이블 생성, 이하 생략
12. 반환, 스택.main 제거
#### 반환 값의 데이터 위치
main 함수의 반환 값은 start up code에서 stack 영역에 return 0을 추가함으로서 stack 영역에 존재한다.
사용자 정의 함수의 경우
ACC(누산기)에 저장되는 경우와 Data.rodata 영역에 저장되는 경우로 갈린다.
# 6/19 - 2, 3교시
### 구조체 배열
```c
// struct array의 경우
// 다음 접근은 동일한 의미를 갖는다.
p[i].name
(*(p+1)).name
(p+1)->name
```
### 자기 참조 구조체
```c
typedef struct list {
	int num;
	struct list* next;
} node;
// next가 node* 가 아닌 struct list* 로 쓰인 이유는
// typedef는 뒤에 있는 자료형의 이름을 변경하는 것인데
// 해당 자료형인 struct list가 먼저 정의되어야
// node로 사용할 수 있게 된다.
// 그러므로 next를 선언하는 시점에서는 정의되지 않은 node를 사용할 수 없다.
```
#### 함수 호출 동작
함수를 호출하면 호출한 위치가 스택에 저장되는데
함수가 끝나면
스택에 있던 주소를 PC에 넣어서
함수를 호출한 위치로 돌아간다.
#### 스택 포인터
실행문을 실행할 때 마다 그 실행문의 주소가 스택에 할당되는데, 그 주소를 스택 포인터가 가리킨다. 함수를 호출하면 스택 포인터의 값이 스택에 추가되고, 호출된 함수로 넘어간다.
#### 함수 세그먼트
실행문은 값의 크기가 정해져 있는데, 그 크기를 스택 포인터에 더하면 다음 실행문의 주소를 얻을 수 있다. << PC의 값
# 6/20 - 2교시
함수가 받는 인자는 매개변수, 함수 내에서 선언된 지역변수는 스택에 저장된다고 알고 있으나, 사실은 for문처럼 스코프 단위로 지역이 설정된다. `{}`
# 6/24 - 6교시
### 자기 참조 구조체
```c
// link 구조체를 정의하고 node라는 이름을 붙임
typedef struct link {
	int n; // 실제로 저장될 값
	struct link* next; // 다음 link를 가져오기 위한 변수
} node;
// node라는 별명으로 link 구조체를 선언
node a1, a2, a3;
// 각 node의 n값을 설정
a1.n = 10, a2.n = 20, a3.n = 30;
// 각 node가 서로 연결되게 설정
a1.next = &a2, a2.next = &a3, a3.next = &a1;

// 다음 node를 순회하며 출력
printf("a1 : %d\n", a1.n);
printf("a2 : %d\n", a1.next->n); // next는 node의 주소를 담고 있으므로 구조체 포인터
printf("a3 : %d\n", a1.next->next->n);
```

# 6/26 - 2, 3교시
### 구조체 포인터 동적 할당
```c
typedef struct student {
	int id;
	char* name;
} student;

student* class; // 포인터 연산 단위 : sizeof(student)
class = (student*)malloc(sizeof(student) * 2)); // 2칸 배열과 같다.
class[0].id = 8; class[0].name = "me";
class[1].id = 9; class[1].name = "mo";
for (int i = 0; i < 2; i++){
	printf("%d. %s\n", class[i].id, class[i].name);
}

free(class);

return 0;
```

## 구조체 학습지 요약
**구조체의 필요성**

그룹을 형성하는 데이터들을 묶어서 관리할 수 있다.

**구조체의 정의** - 템플릿

```c
struct name {
	member_type member_name;
};
```

**구조체 변수 선언**
```c
struct name a;
```
멤버 : 구조체 내부의 변수
멤버 접근 : 구조체변수명.멤버명

**익명 구조체**

익명 구조체를 통한 변수 선언
```c
struct {
	member_type member_name;
} 변수명;
```

**구조체에 별칭 사용**
```c
typedef struct {
	int a;
} my_struct;
```
익명 구조체를 선언하는 경우 반드시 별칭이 있어야 한다.

**구조체 변수의 활용**
```c
my_struct a, b;
a.a = 1;
b = a;
// b.a == 1
// a - b << error
```
a의 모든 값이 b에 복사되었다.
구조체 변수를 이용한 사칙연산은 불가능하다.

**구조체 포인터**
```c
my_struct* p;
// p.a << error
p = (my_struct*)malloc(sizeof(my_struct)*2);
```
주소를 할당 해야 사용할 수 있다.

**구조체 포인터 멤버의 접근**
```c
// 배열 표현
p[i].a;
// 포인터 표현
(*(p+i)).a;
// 연산자 표현
(p+i)->a;
```
구조체 타입을 인자로 넘기면 call by value이므로, 함수 내에서 값을 변경해도 실제 값은 바뀌지 않는다.
# 6/28 - 5교시
### 재귀 함수
**Recursive call funcion**

함수 내에서 자기 자신을 호출하는 함수

재귀 함수는 중복 코드를 줄일 수 있다.
재귀 함수는 호출을 중단할 수 있는 종료 조건이 필요하며, 옳지 않은 종료 조건을 사용하면 함수 호출이 종료되지 않은 상태로 함수 호출이 되는 경우가 반복되어 스택 오버플로우를 유발한다.

#### 차례로 출력하기
```c
void resum(size_t num, bool reverse) {
	if (!reverse) {
		if (num == 0) { // 명확한 종료 조건을 설정해야 한다.
			return;
		}
		resum(num-1, reverse);
		printf("%d\t", num);
	}
	else {
		printf("%d\t", num);
		if (num == 1) {
			return;
		}
		resum(num-1, reverse);
	}
}
```

#### 피보나치
```c
int f(int n) {
	if (n < 2) {
		return n;
	}
	return f(n - 1) + f(n - 2); // 값을 반환하는 함수의 경우, 연산이 가능하다.
}
```
