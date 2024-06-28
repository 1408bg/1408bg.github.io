# [C언어 기초 프로그래밍 강좌 (C Programming Tutorial For Beginners 2017)](https://www.youtube.com/watch?v=dh4hdtZ00EU&list=PLRx0vPvlEmdDNHeulKC6JM25MmZVS_3nT)
## 1강 - Hello World
**컴파일러 : 고급언어로 쓰인 프로그램을 컴퓨터에서 실행될 수 있는 형태로 번역해주는 프로그램** << GCC가 그중 하나
c언어 개발 환경 : 코딩, 디버깅, 컴파일을 한 곳에서 처리할 수 있는 소프트웨어
강의 영상에서 사용된 개발 환경 : Dev C++ << 사용중이던 visual studio로 대체
visual studio의 컴파일러는 Microsoft Visual C++ Compiler 로 추정 << 홈페이지 문구

#### C 파일을 만든 직후 다음 코드 작성
```c
#include <stdio.h>			<< #(전처리기) include(헤더 파일을 포함) <stdio.h>(STanDardInputOutput.Headerfile) << 표준 입출력 헤더 파일
int main(void){				<< int(함수의 반환 자료형) main(프로그램이 최우선 실행시키는 함수 키워드) void(main이 파라미터를 받지 않음을 명시)
	printf("Hello World!");	<< printf(stdio.h에 포함된 표준 출력 함수) "Hello World!"(char[13])
	return 0;				<< return 0(main함수가 반환하는 값 0 << 프로그램의 종료 여부)
}
```
(해석 : 표준 입출력 라이브러리를 포함하여 출력 함수를 사용 가능하게 하고, 문자열을 출력한 뒤, main 함수를 정수 0 으로 반환하여 프로그램 종료)

코드 작성 후 compile and run 을 통해 실행 << **Hello World! 가 출력되는 프로그램**
## 2강 - 변수와 상수
변수 : 프로그램이 실행되는 동안 언제든지 저장된 값이 변경될 수 있는 공간 << 변하는 수
상수 : 한번 정해지면 값이 변경되지 않는 데이터 << 항상 변함없는 수
메모리 : 프로그램이 올라가 실행되는 공간, 프로그램의 모든 변수와 상수의 값을 저장
```c
int x;				<< 변수의 선언, 정수형 변수의 식별자 x 및 그 공간을 할당
x = 5;				<< 변수의 초기화, 정수형 변수 x의 값을 정수 5로 초기화 (대입 연산자 이용)
printf("%d", x);	<< 변수의 사용, printf에서 서식지정자 %d를 이용하여 정수형 변수 x 출력

printf("변수 x의 메모리 크기 : %d",sizeof(x)) << 정수형 변수의 크기, sizeof() 연산자를 사용하여 변수 x의 크기 출력 << 정수형 변수의 크기인 4byte 반환
printf("%d/n%d",x,x) << 문자열 내에서 특정 기능을 수행하는 이스케이프 문자 /n을 통해 개행
```
### C의 대략적 자료형

- **정수**
    - int 4byte
    - long 8byte
    - char 1byte
- **실수**
    - float 4byte
    - double 8byte
```c
float y = 1234.1234;
printf("%.2f");		 << 서식지정자 %.2f를 통해 실수형 변수 y의 값을 소수점 두번째 자리까지(1234.12) 출력
```
#### 오버플로우
자료형의 최댓값을 넘는 일종의 오류

```c
// limits.h 를 include하여 INT_MAX 와 같은 각 자료형의 최댓값 상수를 포함
int a = INT_MAX;	<< 정수형 변수 a를 선언하고 정수형의 최댓값을 초기화
printf("%d",a+1);	<< INT_MAX(정수형의 최댓값) + 1 을 정수형으로 출력 << 오버플로우로 인해 정수의 최솟값 출력
```
#### C의 두 숫자에 대한 연산자
```
+	더하기
-	빼기
*	곱하기
/	나누기 (정수의 경우 몫)
%	나머지 (모듈러)
```
## 3강 - 자료형
### C의 자료형 중 원시 자료형

- char 문자
- int 정수
- float,double실수
```c
#define MONTHS 12	<< 매크로상수, #(전처리자) MONTHS(상수의 식별자) 12(값)

double monthSalary = 1000.5;
printf("%.2f", monthSalary * MONTHS);	<< 실행 시 1000.5 * 12인 12006을 %.2f을 통해 12006.00 로 출력
```
char 는 작은따옴표를 통해 1byte 크기 안에 들어가는 문자 하나를 저장

실제로는 해당 문자에 대응하는 문자 테이블 ASCII 코드 값을 저장 (char는 내부적으로 숫자를 가진다)

그러므로
```c
int a = 65;
printf("%c",a)	<< 65 가 서식지정자 %c 를 통하여 char 'A' 출력
```
65 == 'A' 또한 true
### 서식지정자 %를 통한 정수 출력
%d 10진수
%o 8진수
%x 16진수
## 4강 - 연산자 (1)

1 + 2 에서 1, 2는 피연산자, +는 연산자

3강 노트의 "C의 두 숫자에 대한 연산자" 는 두 피연산자 사이에 들어가 사용되는 이항 연산자에 해당

### 나누기 연산자(/)와 나머지 연산자(%)의 활용

```c
#define SPM 60 << 메크로 상수

int input = 1000;
int minute = input / SPM; << 총합 초를 60으로 나눔(정수사이의 연산이므로 그 몫) ==  총합 분
int second = input % SPM; << 총합 초를 60으로 나눈 값의 나머지 == 60(분) 이 되지 않은 초 == 실제 초
printf("%d분 %d초",minute,second"); << 총합 초를 실제 초, 분으로 바꾸어 출력
```

### 대입 연산자

x = 5; 와 같이 사용하는 주로 변수에 값을 입력하기 위한 이항 연산자

변수, 해당 변수의 자료형 값 을 피연산자로 가지며 그 중간에 위치한다.

x = a; 의 경우 x의 값을 a로 변경(초기화) 한다.

상수를 정의할 때 쓰이기도 한다.

### 증감 연산자

변수 하나를 피연산자로 두어 그 앞 또는 뒤에 붙여 사용하는 단항 연산자

연산의 경우 피연산자에 대해 ++ 는 1을 더하며 -- 는 1을 뺀다.

피연산자를 기준으로 앞에 붙이면 전위, 뒤에 붙이면 후위로 기능한다.

전위의 경우 연산을 우선 실행한 후 해당 줄을 실행하고,

후위의 경우 해당 줄의 실행을 마친 이후 연산을 실행한다.

- -x, ++x 전위 연산자

x--, x++ 후위 연산자

### 복합 대입 연산자

변수의 값을 해당 변수에 기반하여 변경하는 경우

```c
x = x + 5;
x = x * 2;
```

이와 같이 대입 연산자의 양쪽에 해당 변수가 포함되어야 하는데

```c
x += 5;
x *= 2;
```

처럼 실행 연산자를 대입 연산자 앞에 붙여 같은 효과를 볼 수 있다.

증감 및 복합 대입 연산자는 코드의 길이를 줄일 수 있기에 효율적이다.

3강 노트의 "C의 두 숫자에 대한 연산자"의 모든 연산자가 복합 대입 연산자로 사용될 수 있다.

### "-" 연산자(단항 연산자)

```-x```

x * -1 을 반환한다.

## 5강 - 연산자 (2)

### 관계 연산자

- 단항 연산자의 경우a! << boolean 값 a에 대하여, 그 반대의 값을 반환한다. (true >> false, false >> true)
- 이항 연산자의 경우a (관계 연산자) b 에 대하여a, b 를 피연산자로 가지며, a에 대한 b의 관계를 boolean 값으로 반환

```c
int x = 50;
int y = 30;
printf("x == y : %d", x == y);
```

3번째 줄의 x == y는 x와 y가 같은가 에 대한 관계 연산자이다. (대입 연산자와 구별하기 위함)

관계 연산자는 이와 같이 두 값 사이의 관계를 boolean 값으로 반환한다.

boolean은 true 또는 false를 가지나 %d의 형식으로 출력할 경우 true는 1, false는 0으로 출력된다.

C는 boolean 값을 필요로 할 때 0은 false로, 0이 아닌 값은 true로 자동 형변환을 하여 사용할 수도 있기에 1 또는 0 으로 boolean 값을 대체할 수 있다.

### C의 관계 연산자

```
! (boolean 피연산자에 대하여) 아니다[부정]
== 같다
!= 다르다
<, > 크다, 작다
<=, >= 이상, 이하
&& (boolean 피연산자에 대하여) 그리고[논리곱]
|| (boolean 피연산자에 대하여) 또는[논리합]

```

### 조건 연산자(삼항 연산자)

(조건식) ? 값1 : 값2

의 형태로 (조건식) 이 참이면 값1을, 거짓이면 값2를 반환하는 연산자(조건문 if의 축소판)

(조건식) 의 자리에는 논리값을 가지는 관계 연산자, 혹은 boolean 값 자체가 들어간다.

하나의 식에서 짧은 조건문을 사용할 수 있기에 효율적이다.

```c
(x > 0) ? x : -x;
```

조건 연산자를 이용하여 절댓값을 구할 수 있다.

### pow() 함수 (연산자에 해당하지 않음)

```c
//math.h 를 include하여 abs()[절댓값], pow()[거듭제곱] 와 같은 수학 함수 포함
double x = pow(2.0,20.0); << 값 초과로 인한 overflow를 막기 위해 double 사용
printf("2²⁰ = %.0f",x); << %.0f 를 통하여 실수형인 double을 정수형 처럼 출력
```

pow() 함수는 두개의 파라미터(a,b)를 가지며, a의 b거듭제곱을 반환한다.

## 6강, 7강 (통합) - 조건문 & 반복문

조건문과 반복문은 프로그램의 실행 흐름을 조절하는 제어 함수이다.

조건문은 조건에 따라 일부 코드만 실행하여 나머지 코드의 실행을 생략하고

반복문은 조건에 따라 해당 코드를 반복한다.

반복문도 항상 조건식을 가진다는 점에서 조건문에 속한다 할 수 있으나,

조건에 따른 결정이 주 목적인 함수와, 반복 실행이 주 목적인 함수를 구별하기 위하여 따로 분리하 칭한다.

### 조건문

- if - else
    - if***if (조건식){실행문}***의 형태를 가지며, 조건식이 참이라면 실행문을 실행한다. 연결된 else, else if문을 생략한다.
    - else***else {실행문}***의 형태를 가지며, 앞의 if문을 필요로 한다. 앞의 if문이 거짓일 때, 실행문을 실행한다.
    - else if***else if (조건식){실행문}***의 형태를 가지며, 앞의 if문을 필요로 한다. 앞의 if문이 거짓일 때, 뒤의 if문을 실행한다.

### 반복문

- while
    - while***while (조건식){실행문}***의 형태를 가지며, 조건식이 참이라면 실행문을 실행하고 해당 while문을 다시 실행 >> 조건문이 거짓일때까지 반복
    - do - while***do {실행문} while (조건식)***의 형태를 가지며, 실행문을 실행하고 조건문이 참이라면 do - while문을 다시 실행 >> 조건문과 상관 없이 실행문을 먼저 실행 후 일반 while문을 실행
- for
    - for (C++이 아닌 C에서는 유일)***for( 변수[피연산자]의 초기화식 ; 조건식 ; 증감식 ){실행문}***의 형태를 가진다.—***변수[피연산자]***는 이미 정의된 변수(전역변수)를 초기화하며 사용할 수 있으며, 새로 지역변수를 정의 및 초기화하여 사용할 수도 있다. (지역변수 사용이 일반적)—_**조건식**_은 보통 변수[피연산자]가 들어간다.—_**증감식**_은 변수[피연산자]에 대한 증감식이 대부분이다.—조건식이 참이라면 실행문을 실행하고, for문을 다시 실행한다. for문이 실행될 때 마다 증감식이 실행된다.
        
        ```c
        [main() 내에서 정의된 int a; 의 경우]
        변수[피연산자]는 (a = 0) 과 같이 초기화하여 사용
        /
        [새로 지역변수를 정의 및 초기화하는 경우]
        변수[피연산자]는 (int a = 0) 과 같이 정의 및 초기화하여 사용
        ```
        
        ### 기능
        
        ```c
        for(int i = 0 ; i < 5; i++){printf("%d ",i);}
        ```
        

```c
        위의 for문은 int i를 지역변수로 사용하고, i가 1씩 증가하여 출력 결과는
        [0 1 2 3 4 ] 가 된다.
```

- 7강 - 12:20 "C언어에서는 for문 내부에서 변수를 선언하는게 금지되어 있습니다."_**6년 전 영상이어서 안되는 것으로 추정**_

```c
	for (int i = 0; i < 5; i++) {
		printf("%d", i);
	}
```

- _**현재는 제대로 기능**_

### 기타 제어문

- _**break**_반복문 탈출 (조건식과 상관 없이 자신 밑의 실행문을 생략하고 반복문을 종료)
- _**continue**_건너뛰기 (자신 밑의 실행문을 생략하고 해당 반복문 재실행 [for문의 경우 증감식 실행] )

## 8강 - 기본 입출력

### 입력 함수 scanf()

scanf("(서식지정자)",&변수); 의 형태로 사용하며 (& 는 뒤 변수의 주소값에 해당)

서식지정자에 맞는 값을 입력받았을 때, 해당 값이 담긴 주소를 입력 변수 주소에 대입한다.

int x 의 경우

scanf("%d",&x);

### scanf()의 버퍼 처리

```c
getchar()
```

를 입력하여 쓰레기 값(공백문자) 처리 및 개행

### visual studio의 scanf() 경고 무시

```c
#define _CRT_SECURE_NO_WARNINGS
```

전처리기를 통해 경고를 무시한다.

### 출력 함수 printf()

printf("문자열 (서식지정자)",값); 의 형태로 사용하며, (서식지정자)와 같이 값은 생략 가능하다.

### 두 함수 모두 다수의 서식지정자를 사용할 수 있으며, 서식지정자의 수 만큼 해당 자료형의 값을 작성해야 한다.

### 표준 입출력을 통한 계산기

```c
char o;
int x, y;
while (1) {
	printf(">> ");
	scanf("%d %c %d", &x, &o, &y);
	if (o == '+') {
		printf("\\n%d", x + y);
	}
	else if (o == '-') {
		printf("\\n%d", x - y);
	}
	else if (o == '*') {
		printf("\\n%d", x * y);
	}
	else if (o == '/') {
		printf("\\n%d", x / y);
	}
	else {
		printf("잘못된 연산자\\n");
        continue;
	}
    break;
}
```

## 9강 - 사용자 정의 함수

### 전역변수

지역(함수) 바깥에서 정의되어 모든 지역에서 접근할 수 있는 변수

> 지금까지는 프로그램이 실행시키는 main 함수 내부에서만 코드를 작성했지만, main 함수 외부의 함수(사용자 정의 함수)에서 변수를 사용하기 위하여 전역변수를 선언한다.

### 사용자 정의 함수의 선언(정의)

- _**반환형 이름(매개변수){실행문}**_ 의 형태를 가진다.
    - _**반환형**_반환형이 void가 아닌 경우, 함수의 반환 값의 자료형이 반환형이 되어야 한다.
    - _**이름**_main 함수 내부에서 함수를 호출할때 쓰이는 식별자, 키워드는 사용될 수 없다.
    - _**매개변수**_함수 실행을 위해 필요한 변수이며, 생략(공백 혹은 void)가능하다. 받은 매개변수는 함수 내에서 정의한 식별자에 따라 지역변수로 사용되며, 함수 종료 시 사라진다.
    - _**실행문**_함수가 호출되었을 때 실행되는 코드로 프로그램이 main을 실행하듯, main에서 함수가 호출되었을 때 작동되는 내용이다.
    - _**~~주석**_함수의 선언 위에 주석을 달면 해당 함수를 호출할 때, 주석의 내용을 확인할 수 있다.~~

### 사용자 정의 함수의 사용(호출)

- _**함수명(매개변수)**_ 의 형태를 가진다.
    
    - 매개변수가 없는 경우, 함수명()의 형태이다.
- 반환값이 있는 경우(반환형이 void가 아닌 경우) 함수는 값을 대체할 수 있다.
    
    - 정수 두 값을 더하는 함수의 경우와 같이 값 -4로 대체되어 사용할 수 있다.
        
```c
int sum(int a, int b){
	return a + b;
}
```
        
```c
	int a = sum(1,2) - sum(3,4);
```
        
- 반환값이 없는 경우(반환형이 void인 경우)
    
    - 사용자 정의 함수 내부에서도 함수를 사용할 수 있으므로 특정 작업에 대한 코드를 모아 단순 작업을 간편화 하거나, 많은 양의 코드를 사용자 정의 함수로 정의하여 main함수 내부의 코드를 정리하고 가독성을 높이는 용도로 사용된다.

### 프로그램

금액을 각 화폐의 수로 변환하여 출력하는 프로그램 (배열을 사용하지 않아 효율과 가독성이 좋지 않다.)

```c
#include <stdio.h>
#define m1 50000
#define m2 10000
#define m3 5000
#define m4 1000
#define m5 500
#define m6 100

void m(int a) {
	int a1 = a / m1;
	a -= m1 * a1;
	int a2 = a / m2;
	a -= m2 * a2;
	int a3 = a / m3;
	a -= m3 * a3;
	int a4 = a / m4;
	a -= m4 * a4;
	int a5 = a / m5;
	a -= m5 * a5;
	int a6 = a / m6;
	printf("오만원 지폐 : %d장\\n일만원 지폐 : %d장\\n오천원 지폐 : %d장\\n일천원 지폐 : %d장\\n오백원 동전 : %d개\\n일백원 동전 : %d개\\n",a1,a2,a3,a4,a5,a6);

}

int main(void) {
	printf(">> ");
	int a;
	scanf("%d", &a);
	m(a);

	return 0;
}
```

## 10강 - 반복 함수와 재귀 함수

### 반복 함수

반복문(for 또는 while)을 이용하여 특정한 처리를 반복하는 함수

### 재귀 함수

함수 내부에서 자기 자신을 호출하여 특정한 처리를 반복하는 함수

### 반복 함수와 재귀 함수로 정의한 팩토리얼

```c
#include <stdio.h>

// 반복 함수
int f1(int a) {
	int r = 1;
	for (int i = 1; i <= a; i++) {
		r *= i;
	}
	return r;
}

//재귀 함수
int f2(int a) {
	if (a == 1) {
		return 1;
	}
	return a * f2(a - 1);
}

int main(void) {
	printf(">> ");
	int a;
	scanf("%d", &a);
	printf("f1 : %d / f2: %d", f1(a), f2(a));

	return 0;
}
```

## 11강 - 배열

### 배열

자료형에 대하여 연속적인 값을 저장할 수 있는 공간

### 배열의 선언

_**자료형 식별자[길이];**_ 의 형태를 가진다.

변수에 길이만 추가되었다는 듯이 선언하면 된다. (실제로 변수에 길이만 추가된거 아니다)

길이는 배열이 가지는 칸(인덱스)의 개수를 의미한다.

배열의 크기(용량)은 (자료형의 크기 x 길이)로 정해진다.

int a[3]; 의 경우 int의 크기인 4byte x 3이므로 12byte가 된다.

### 배열의 사용

int a[2]; 일때 a의 값은 a[0]의 주솟값이다.

사실 a 자체는 a의 인덱스 시작점(a[0]의 주솟값)을 가지고 있으며,

실제 값을 얻기 위해서는 _**식별자[번호]**_ 의 형식으로 [번호] 번째 인덱스의 값을 얻을 수 있다.

### 인덱스

배열의 각 칸에 해당하며 각각 번호를 0부터 차례로 가진다.

인덱스가 3개면 각 칸의 번호는 [0], [1], [2] 이 된다.

### 프로그램_2

배열을 이용하여 다시 만든 9강 노트의 프로그램

```c
#include <stdio.h>
int ms[6] = { 50000,10000,5000,1000,500,100 };
char mc[6][10] = { "오만원\\0","만원\\0","오천원\\0","천원\\0","오백원\\0","백원\\0" };

void m(int a) {
	int md[6];
	for (int i = 0; i < 6; i++) {
		md[i] = a / ms[i];
		a -= ms[i] * md[i];
	}
	for (int i = 0; i < 4; i++) {
		printf("%s 지폐 : %d장\\n", mc[i], md[i]);
	}
	for (int i = 4; i < 6; i++) {
		printf("%s 동전 : %d개\\n", mc[i], md[i]);
	}
}

int main(void) {
	printf(">> ");
	int a;
	scanf("%d", &a);
	m(a);

	return 0;
}
```

## 12강 - 다차원 배열

### 다차원 배열

2개 이상의 차원을 가진 배열

- 2차원배열 int a[3][2] 의 경우두칸의 배열을 3개 가지는 배열a[0]은 첫번째 [2]의 주소를 가진다.
    
    > 2차원 배열 a >> {a[0], a[1], a[2]}, 실제 값 >> a[0]의 주소
    > 
    > 1차원 배열 a[0] >> {a[0][0],a[0][1]}, 실제 값 >> a[0][0]의 주
    

### 2중 for문을 통한 일반적인 2차원 배열의 사용

```c
int a[9][9] = { {0,} };
printf(">> ");
int n = 0;
scanf("%d", &n);
for (int i = 1; i < n+1; i++) { << 입력(인덱스 개별 접근)
	for (int j = 1; j < 10; j++) {
		a[i-1][j-1] = i * j;
	}
}
for (int i = 0; i < n; i++) { << 출력
	for (int j = 0; j < 9; j++) {
		printf("%d\\t", a[i][j]);
	}
	printf("\\n");
}
```

## 13강 - 포인터

### 포인터

메모리의 주소를 가지는 변수

### 포인터의 선언

**_자료형_ 식별자;*** 의 형태를 가지며, 자료형 뒤에 * 기호를 꼭 붙여주어야 한다.

포인터는 보통 원시 자료형의 주소를 가지므로 예시로 int a = 0; 의 주소로 초기화하려면 &a와 같이 &를 붙여 해당 변수의 주소값으로 초기화하자.

> 고대 기록 (이전에 들었던 다른 강의 필기, ※가독성 떨어짐 주의)
> 
> 포인터 << 쉽게 설명하면 변수를 지켜보는 변수이다. int _p = &a 라면 p는 a를 지켜보는 << 이때 p의 값을 a2로 변경하면 p는 a2를 지켜보게 되고,_ p의 값을 5로 변경하면 지켜보고 있는 변수의 값을 5로 바꾸는 것
> 
> 선언 int _p << 앞에_ 를 붙인다.
> 
> 포인터 사용 printf("%p", &i); << 변수 i의 주솟값 출력
> 
> 예를 들어 변수 a를 선언하는 순간 메모리의 특정한 공간에 변수 a를 저장하는데, _a(포인터 a는) 변수 a가 저장된 메모리의 특정한 주소를 알려주는 것int a = 10; 일때 int_ p = &a; 이후 p를 보면 저장된 메모리의 주소가 나오지만 _p의 값을 보면 10이 나온다. 이는 원래 int a의 주소였던 p의 주소를 찾는것인데, 주소의 주소로 역으로 타고올라가 a의 값이 나오는 거 같다.위 상태에서_ p = 5 를 실행하면 p의 값인 &a의 주소인 a의 값이 5가 되는 것 << 한마디로 저건 a = 5**변수의 주소 = 포인터포인터의 주소 = 변수예를 들어 변수 a의 주소를 가진 포인터 p의 경우, p를 변경하는건 메모리에서 참조하는 주소의 위치를 변경하려는거고, _p를 변경하면 해당 메모리의 위치가 가진 값, a의 변수값이 변경된다._ p는 p의 주소, a의 주소의 주소가 되서 결국에 a가 된다는 것**
> 
> ```
> int a1 = 5;
> int a2 = 8;
> int* p;                 //공간이 정해지지 않은 포인터 p
> p = &a1;              //포인터 p에 a1의 주소를 넣어줌으로서 공간을 만들어주고 int* p = &a1의 효과를 준다. << 아직 공간이 정해지지 않았는데 그 공간에 값을 넣는 것은 불가능
> printf("%d \\n", *p); //p는 a1의 주소를 갖고 있는데 포인터 p의 주소를 물어 p의 값 &a1의 주소인 5가 나오는 것
> *p = a2;               //이제 p는 공간이 있어 이렇게 바로 주소에 대입할 수 있다. << p는 아직 a1의 주소를 가지는데, 이상태에서 p의 주소를 a2로 바꾸면 &a1의 주소인 a1을 a2로 바꾸는 것이다.
> printf("%d", a1);      //그러니까 여기선 a1이 8로 나온다.
> printf("%d \\n", *p);  //p는 아직도 a1의 주소를 담고있으니, p의 주소를 물으면 위에 대입한대로 *p = a1이니 a1인 8이 나온다.
> ```

## 14강 - 문자열

### 문자열

char 배열을 부르는 말 ~~char포인터~~

### 14강 - 3:00 char array[10]; 의 경우 "영어는 10자, 한글은 5자가 들어갈 수 있습니다."

- 문자열은 마지막 인덱스 값이 '\0'을 가져야하므로 설명이 참이 되려면 11개의 인덱스가 필요하다.
- 알파벳은 1byte, 한글은 2byte (char는 1byte이므로 한글은 한 글자당 char[2]의 용량)

### gets() 함수

char 배열이 있다면 gets(배열); 을 통해 엔터 이전까지의 문자열을 입력받을 수 있다. ~~이번 영상으로 처음 알았다.~~

```c
char str[100];
gets(str);
printf("%s", str);
```

### 문자열 비교 및 복사

```c
#include <string.h>

char s1[6] = "Hello";
char s2[6] = "Hello";
strcmp(s1,s2);
char s3[6];
strcpy(s3,s1);
```

문자열의 경우 배열이기에 변수명으로 비교하는 것이 불가능하다(변수 값 : 주소)

본래 인덱스에 접근해서 개별적으로 char가 동일한지 확인해야 하지만, strcmp() 함수를 사용하여 해결할 수 있다. (두 문자열이 동일하면 0, 다르다면 사전적으로 앞설 때 1, 아닐 때 -1 반환)

동일한 이유로 문자열 복사 역시 본래 개별적으로 인덱스의 char를 복사해야 했으나, strcpy() 함수를 사용하여 해결할 수 있다. (앞 배열에 뒷 배열의 문자열을 복사)

## 15강, 16강, 17강 (통합) - 구조체 & 구조체의 활용

### 구조체

~~커스텀자료형~~ 여러 값을 하나로 묶는 틀 (클래스의 모체)

구조체 배열은 데이터베이스의 테이블과 비슷한 구조를 가지며, 체계적인 자료 관리가 가능하여 효율적.

### 구조체의 정의

main의 밖에서

```c
struct 식별자 {
	자료형 (개별)식별자;
};
```

- typedef를 이용한 커스텀 자료형_**typedef struct {자료형 (개별)식별자;}식별자;**_ 의 형태로int a 와 같이 자료형과 동일한 방식으로 선언이 가능하다.

```c
#include <stdio.h>

typedef struct {
	int x;
	int y;
}point;

int main(void) {
	point a[4];
	for (int i = 0; i < 4; i++) {
		printf("점 %d 좌표 >> ",i);
		scanf("%d %d", &a[i].x, &a[i].y);
	}
	for (int i = 0; i < 4; i++) {
		printf("%d번 좌표 : (%d,%d)\\n", i+1, a[i].x, a[i].y);
	}

	return 0;
}
```

### 구조체의 선언

main 안에서

```c
struct (정의된)식별자 식별자;
```

struct의 식별자는 int char와 같이 자료형을 쓰듯 사용하면 된다.

### 구조체의 사용

struct strA {int a;}; 의 경우

main에서 struct strA A; 로 선언 시

strA 안의 int a를 사용하는 경우

A.a로 사용 가능하다.

선언에서의 식별자와 정의에서의 (개별)식별자 사이의 . 기호를 붙여 사용

### 포인터를 통한 접근

```c
#include <stdio.h>

struct student {
	unsigned int num;
	int score;
	char* name;
};

void setStu(struct student* s, int a, int b, char c[]) {
	s->num = a;
	s->score = b;
	s->name = c;
}

void prStu(struct student s) {
	printf("학번 : %d\\n이름 : %s\\n상점 : %d", s.num, s.name, s.score);
}

int main(void) {
	struct student st;
	setStu(&st, 1101, 10, "asdf");
	prStu(st);

	return 0;
}
```

### 구조체 또한 내부로 들어가지 않으면 주소를 가지므로 직접적인 비교가 불가능하다. (개별 접근으로 비교)

## 18강 - 파일 입출력

> 처음 배우는 내용이라 적응까지 시간 필요 예상

### 텍스트파일 입출력

파일은 보통 FILE의 포인터를 이용하여 접근한다.

### 텍스트파일의 생성

```c
FILE* fp = NULL; << 파일 포인터 fp 선언 후 NULL로 초기화 하여 메모리에 공간 할당
fp = fopen("output.txt", "w"); << fopen()을 통한 파일 생성
if (fp == NULL) {
	printf("X");
    return -1; << 파일이 열리지 않았을 때 프로그램(main 함수) 종료
}
```

- fopen 함수_**fopen("경로 및 파일명","모드");**_ 의 형태를 가진다.
    - _**경로 및 파일명**_파일 탐색기에서의 파일 주소이며, 같은 경로에 있다면 생략 가능하다.쓰기 모드의 경우 해당 경로에 파일을 생성한다.
    - _**모드**_w(쓰기 모드), r(읽기 모드)가 있다. 읽기 모드가 input, 쓰기 모드가 output에 해당한다.

### 텍스트파일 입력

```c
int c; << ASCII 값을 받을 int c
FILE* fp = NULL;
fp = fopen("input.txt", "r"); << 읽기 모드
if (fp == NULL) {
	printf("X");
	return -1;
}
while ((c = fgetc(fp)) != EOF) { << 파일의 끝(EndOfFile)까지 읽기
	putchar(c); << 파일의 char를 차례로 반환하는 함수
}
fclose(fp); << 파일에 대한 작업 종료 시, 파일을 닫아 메모리에서 제거
```

### 텍스트파일 출력

```
FILE* fp = NULL;
char data[100]; << 출력할 문자열 char[100]
printf("내용 >> ");
scanf("%s", data);
fp = fopen("output.txt", "w");
if (fp == NULL) {
	fprintf(stderr, "X\\n");
	return -1;
}
fprintf(fp, data); << 파일 포인터 fp의 주소를 대상으로 문자열 data 출력
fclose(fp);

return 0;
```

### 프로그램

18강 - 12:00의 텍스트파일을 줄 단위로 읽어 해당 줄에 특정 단어가 있는지 확인하는 프로그램

```
#include <stdio.h>
#include <string.h>

int main(void) {
	FILE* fp = NULL;
	int fname[256];
	int buffer[256];
	int word[256];
	int line = 0;
	printf("파일명 >> ");
	scanf("%s", fname);
	printf("단어 >> ");
	scanf("%s", word);
	if ((fp = fopen(fname, "r")) == NULL) {
		fprintf(stderr, "%s X\\n", fname);
		return -1;
	}
	printf("%s가 있는 줄 :\\n", word);
	while (fgets(buffer, 256, fp)) {
		line++;
		if (strstr(buffer, word)) {
			printf("%d ", line);
		}
	}
	fclose(fp);

	return 0;
}
```

## 19강 - 동적 메모리

> 고대 기록 (이전에 들었던 다른 강의 필기, ※가독성 떨어짐 주의)
> 
> **c 언어의 메모리 구조**
> 
> 프로그램을 실행하면 "운영체제가 프로그램 실행을 위한 메모리 공간을 만든다"
> 
> CPU(중앙처리장치)가 프로그램에 필요한 연산을 하려면 데이터를 받아야 하는데
> 
> HDD(저장장치)는 너무 느리다. 그래서 CPU속도에 맞춰줄 수 있는 속도인
> 
> RAM(메모리)를 사용하는 것
> 
> 저장장치가 왜 느리냐면 기계식이기 때문, 데이터를 찾고 옮길때 스스로 돌면서 데이터를 일일이 훍으면서 찾는다.
> 
> 메모리는 전자식이라 빠르지만 전원을 끄면 기껏 모아둔거 다 사라져버린다는 단점이 있다.
> 
> 그렇기 때문에 메모리의 크기는 작다. << 메모리 관리가 중요한 이유
> 
> 메모리를 잘 쓰기 위해서 **운영체제가 나눈 메모리 공간의 영역**
> 
> 코드 영역 << 컴파일된 코드를 저장하는 공간
> 
> 데이터 영역 << 전역변수, 컴파일중인 문자열을 저장하는 공간 // 프로그램이 시작할때부터 끝날때까지 유지된다 // main() 외의 영역 << 이전에 선언한 변수 등
> 
> 스택 영역 << 지역변수, 매개변수, 함수를 저장하는 공간 // main() 내의 영역
> 
> 힙 영역 << 원하는 시점에 만들고 없애는 동적 할당 공간
> 
> **스택이 왜 스택인가**
> 
> 스택은 생긴게
> 
> |ㅤ | << 이렇게 생겼는데
> 
> |ㅤ | 이 때 데이터를 저장하면
> 
> |ㅤ | 밑에서부터 차례대로 쌓인다.
> 
> |ㅤ | 그래서 데이터를 뺄때 나중에 넣은 것 부터 차례대로 빼야된다. (FILO)
> 
> |___|

### 동적 메모리 할당

프로그램 실행 도중에 동적으로 메모리를 할당받는 것 (값을 힙 영역에 할당하는 것)

필요할 때 필요한 만큼 할당하고, 원할 때 반납 가능하므로 메모리를 효율적으로 관리 가능

**할당받은 메모리는 프로그램 종료 이전에 반드시 반납해야 한다.**

### malloc 계열의 함수

- malloc(포인터 자료형)malloc(크기);heap 영역에서 크기byte 만큼의 영역을 할당하여 포인터 자료형의 형태로 반환한다.
    
- calloc(포인터 자료형)calloc(크기1, 크기2)heap 영역에서 (크기 * 크기)byte 만큼의 영역을 할당하여 포인터 자료형의 형태로 반환한다.
    
- realloc(포인터 자료형)realloc(포인터, 크기)heap 영역에서 포인터 안의 값을 유지한 채, 크기byte 만큼의 새 영역을 할당하여 포인터 자료형의 형태로 반환한다.
    
- 덧붙임malloc 계열 함수는 stdlib.h를 inclulde 하여 사용할 수 있다.두 코드의 기능은 동일하다.~~그래서 그냥 malloc 쓰자는 것이 학계의 정설이다.~~
    
    ```
    int* pi; << 공간에 접근할 매게가 되는 포인터
    pi = (int*)malloc(sizeof(int)); << sizeof(int) == 4만큼의 공간을 할당한다.
    if (pi == NULL) { << 할당 실패에 대한 예외처리 << 지금까지 실패한 적은 없었지만..
    	printf("X");
    	return -1;
    }
    *pi = 100; << 이제 포인터는 할당받은 heap영역의 주소를 가지므로 해당 값은 특정 변수가 아닌 동적 영역에 저장된다.
    printf("%d\\n", *pi);
    free(pi); << heap영역의 값은 프로그램 종료 이전에 무조건 반납해야 한다.
    ```
    
    ```
    (int*)malloc(sizeof(int)*2);
    (int*)calloc(sizeof(int),2);
    ```
    

### 동적 메모리 사용

```
int size;
printf("크기 >> "); << 배열에서는 불가능한 동적 크기 (배열 크기는 상수여야만 한다)
scanf("%d",&size);
int* p = (int*)malloc(sizeof(int)*size); << 정수 size개 크기의 메모리 할당 (4 * size byte)
int c;
for(int i = 0; i < size; i++){
	scanf("%d",(p+i)); << int 포인터이므로 주소에 +1을 더하면 다음 칸의 주소를 가지게 된다.
}
for(int i = 0; i < size; i++){
	printf("%d",*(p+i));
}
free(p); << 메모리 반납
```

## 20강 - 동적 메모리의 활용

### 구조체 포인터

(*구조체 식별자)malloc(sizeof(*구조체 식별자))를 통하여 구조체 포인터에 동적 메모리 할당이 가능하다.

구조체 포인터의 경우, ' . ' 기호가 아닌 **'->' 기호를 통해 내부 자료형에 접근 가능**하다.

### 포인터 포인터

```
int** pp = (int**)malloc(sizeof(int*)*3);
```

포인터 3개의 주소를 가지는 포인터 포인터 (int*[3]..?)

pp의 각 주소는 포인터의 주소이므로, 포인터 포인터가 참조하는 포인터의 크기를 다르게 할 수 있다.

```
*pp = (int*)malloc(sizeof(int)*2);
*(pp+1) = (int*)malloc(sizeof(int)*4);
*(pp+2) = (int*)malloc(sizeof(int)*3);
```

개인적으로 자바의 2차원 배열과 같은 형식이라 생각한다.

### 19강 수준의 예제

```
#include <stdio.h>
#include <stdlib.h>

// 본래 목적은 class 외부에서 접근제한자가 private인 LIST를 사용하는 것 입니다.
int* LIST;
int size = 0;
int now = 0;

// LIST의 첫 공간을 할당합니다.
void set(int a) {
	if (LIST != NULL) {
		printf("이미 할당된 list\\n");
		return;
	}
	if (a <= 0) {
		printf("잘못된 값\\n");
		return;
	}
	size = a;
	LIST = (int*)malloc(sizeof(int) * a);
}

// LIST의 인덱스 요소를 가져옵니다.
int get(int a) {
	if (LIST == NULL) {
		printf("할당되지 않은 list\\n");
		return -1;
	}
	if (a > now-1 || a < 0) {
		printf("범위 이탈\\n");
		return -1;
	}

	return LIST[a];
}

// LIST의 요소를 추가합니다. 필요에 따라 확장합니다.
void add(int a) {
	if (now == size) {
		int temp;
		int* l = malloc(sizeof(int)*size);
		for (int i = 0; i < size; i++) {
			temp = LIST[i];
			l[i] = temp;
		}
		LIST = (int*)realloc(LIST, sizeof(int));
		for (int i = 0; i < size; i++) {
			temp = l[i];
			LIST[i] = temp;
		}
		size++;
		LIST[size - 1] = a;
	}
	else {
		LIST[now] = a;
	}
	now++;
}

// LIST의 마지막 요소를 제거합니다. << 몇일동안 시도한 오류 해결에 실패했습니다.
void del() {
	if (LIST == NULL) {
		printf("할당되지 않은 list\\n");
		return;
	}
	if (now == 0) {
		printf("비어있는 list\\n");
		return;
	}
	now--;
}

void end() {
	free(LIST);
}

// list가 class의 private 요소 일때의 app.class의 함수
int main() {
	int c;
	printf("크기 설정\\n>> ");
	scanf("%d", &c);
	getchar();
	set(c);
	while (1) {
		printf("리스트_______\\n1. 추가\\n2. 출력\\n3. 제거\\n4. 종료\\n>> ");
		scanf("%d", &c);
		getchar();
		if (c == 1) {
			printf(">> ");
			scanf("%d", &c);
			add(c);
		}
		else if (c == 2) {
			for (int i = 0; i < now; i++) {
				printf("%d\\t", get(i));
			}
			printf("\\n");
		}
		else if (c == 3) {
			del();
		}
		else if (c == 4) {
			end();
			break;
		}
		else {
			printf("잘못된 값\\n");
		}
	}

	return 0;
}
```

### 아직도 이해하지 못한 구조체 포인터

본래 연결형 리스트가 목적이었으나...

```
struct str {
	char* data;
	struct str* next;
};

typedef struct str st;

void set(st* a) {
	a->data = "";
	a->next = NULL;
}

void read(st* a) {
	if (a == NULL) {
		printf("비어있는 구조체\\n");
		return;
	}
	while (a->next != NULL) {
		printf("?");
		printf("%s",a->data);
		a = a->next;
	}
}

void add(st* a, char* d) {
	if (a == NULL) {
		printf("비어있는 구조체\\n");
		return;
	}
	if (a->next == NULL) {
		printf("!");
		st* n;
		n = malloc(sizeof(st));
		n->data = d;
		a->next == (st*)n;
	}
	else {
		printf("a");
		add(a->next, d);
	}
}

int main() {
	struct st* head;
	head = malloc(sizeof(st));
	set(head);
	add(head, "hello");
	add(head, "world");
	read(head);
	free(head);

	return 0;
}
```

### 또 다른 버전

더욱 이상한 실패

```
#include <stdio.h>
#define _CRT_SECURE_NO_WARNINGS
#pragma warning(disable:4996)
#include <stdlib.h>

typedef struct {
	char* data;
	struct st* next;
}st;

// 연결된 모든 배열 출력하기
void f(st* a) {
	while (a != NULL) {
		printf("%s", a->data);
		a = a->next;
	}
	printf("\\n");
}

// 뒤쪽에 문자열을 가진 새로운 배열 추가하기
void p(st* a, char* s) {
	while (a->next != NULL) {
		a = a->next;
	}
	st* n = (st*)malloc(sizeof(st));
	a->next = n;
	n->data = s;
	n->next = NULL;
}

// 가장 뒤쪽 배열 지우기
void d(st* a) {
	if (a->next == NULL) {
		return;
	}
	st* b = a->next;
	while (b->next != NULL) {
		a = a->next;
		b = a->next;
	}
	a->next = NULL;
	free(a->next);
}

// 맨 앞 제외하고 지우기
void delete(st* a) {
	while (a->next != NULL) {
		d(a);
	}
}

int main() {
	st* head = malloc(sizeof(st));
	head->data = "";
	head->next = NULL;
	int a = 0;
	char* n = NULL;
	while (1) {
		printf("___________\\n\\n연결형리스트\\n1. 추가\\n2. 출력\\n3. 제거\\n4. 전체 제거\\n5. 종료\\n>> ");
		scanf("%d", &a);
		if (a == 1) {
			printf("입력 >> ");
			scanf("%s", &n);
			getchar();
			p(head, &n);
		}
		else if(a == 2) {
			printf("출력\\n");
			f(head);
		}
		else if (a == 3) {
			d(head);
			printf("제거됨\\n");
		}
		else if (a == 4) {
			delete(head);
			printf("제거됨\\n");
		}
		else if (a == 5) {
			printf("종료");
			break;
		}
		else {
			printf("잘못된 값\\n");
			continue;
		}
	}
	delete(head);
	free(head);

	return 0;
}
```
