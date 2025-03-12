# 예외
프로그램에서는 실행 중에 예기치 않은 문제가 발생할 수 있으며, 이를 예외(Exception)라고 한다.
Javascript에서는 Error 객체로 예외를 표현한다.

## 예외 객체
대부분의 언어는 Exception 객체로 예외를 표현하지만, Javascript의 경우에는 Error 객체로 예외를 표현한다.
예외 객체는 name과 message, stack 속성을 가지며, 각각 예외의 이름, 설명, 호출 스택(stacktrace)을 의미한다.
Javascript에서 Error 객체가 생성되는 것은 보통 예외 발생을 의미하며, 이를 통해 디버깅이 가능하다.

## 일반적인 예외 발생
Javascript가 브라우저에 의해 parsing될 때 발생할 수 있는 SyntaxError와 달리,
실행 도중에 발생하는 예외를 Runtime Error라고 한다.
예외 처리를 하지 않는다면 Uncaught Error라는 문구와 함께 스크립트 실행이 종료된다.

## 강제적인 예외 발생
문법을 일부러 틀려 SyntaxError를 발생시키는 것 외에도, Runtime Error를 강제로 발생시킬 수 있다.
throw 문법을 사용하면 원하는 값으로 Runtime Error를 발생시킬 수 있다.
예를 들어, 특정 조건에서 실행을 중단하고 싶은 경우 throw를 사용할 수 있다.
Javascript에서는 반드시 예외 객체를 던질 필요는 없지만, 일반적으로 Error 객체를 사용한다.

# 예외 처리
예외 처리는 예기치 못한 예외의 발생에 미리 대처하는 코드를 작성하는 것이다.
즉, 예외 처리는 Error 객체의 발생으로 인한 프로그램 중단을 대비하는 것뿐만 아니라,
parseInt에서 NaN이 반환되었을 때와 같이 의도와 다르게 동작한 경우를 대비하는 것 또한 포함된다.

## 값을 검증하여 의도대로 동작하도록 하기
parseInt는 주어진 문자열을 정수로 변환하려고 시도하며, 실패하면 NaN을 반환한다.
이와 같은 함수들은 실패 시 특정한 값을 반환하여 처리할 수 있도록 한다.

```javascript
const value = prompt("정수를 입력하세요");
const parsedValue = parseInt(value);

if (isNaN(parsedValue)) {
  console.log("정수가 입력되지 않음");
} else {
  console.log(입력된 수: ${parsedValue});
}
```

## try - catch 구문을 이용하여 의도대로 동작하도록 하기
try 문을 사용하면 예외가 발생할 가능성이 있는 코드를 실행하고,
catch 블록에서 발생한 예외를 처리할 수 있다.

```javascript
function riskyOperation() {
  if (!window.module) {
    throw "module이 포함되지 않음";
  } else {
    // 뭔가 하는중..
  }
}
try {
  let result = riskyOperation(); // 예외 발생 가능
} catch (error) {
  console.log("예외 발생:", error);
}
```

## finally 블록을 활용하기
finally 블록은 예외 발생 여부와 상관없이 항상 실행된다.
주로 정리 작업(파일 닫기, 리소스 해제 등)에 활용된다.

```javascript
class Stream {
  constructor() {
    this.isOpen = false;
  }
  read() {
    this.isOpen = true;
    throw '읽기 실패';
  }
  close() {
    this.isOpen = false;
  }
}

const stream = new Stream();

try {
  const data = stream.read();
  console.log(data);
} catch (error) {
  console.log("예외 발생:", error);
} finally {
  stream.close();
}
```

# 비동기 코드에서의 예외 처리
JavaScript의 비동기 함수에서는 예외가 즉시 catch되지 않고 콜백 함수나 Promise 체인 내에서 따로 처리해야 한다.
try - catch 구문은 실행 즉시 발생하는 예외를 처리하기에, 비동기 함수에서 호출 이후 발생하는 예외는 잡지 않는 것이다.
setTimeout, Promise, async/await을 사용할 때에는 특히 올바르게 예외 처리를 할 필요가 있다.

## setTimeout에서의 예외 처리
setTimeout은 실행이 비동기적으로 이루어지므로, try-catch 문을 감싸도 동작하지 않는다.
예외를 처리하려면 콜백 내부에서 try-catch를 사용해야 한다.

```javascript
setTimeout(() => {
  try {
    throw new Error("setTimeout 예외 발생!");
  } catch (error) {
    console.log("예외 처리됨:", error.message);
  }
}, 1000);
```

## Promise에서의 예외 처리
Promise 내부에서 발생한 예외는 자동으로 reject되며, catch 블록에서 이를 처리할 수 있다.

```javascript
new Promise((resolve, reject) => {
  throw new Error("Promise 내부 예외 발생!");
})
.catch(error => {
  console.log("예외 처리됨:", error.message);
});
```

## async/await에서의 예외 처리
async 함수 내부에서는 try-catch를 사용하여 예외를 잡을 수 있으며, catch 블록을 통해 처리할 수 있다.
또는, async 함수에서 reject된 Promise를 반환하면 외부에서 catch를 통해 예외를 처리할 수도 있다.

```javascript
async function riskyOperation() {
  throw new Error("async 함수 내부 예외 발생!");
}

async function run() {
  try {
    await riskyOperation();
  } catch (error) {
    console.log("예외 처리됨:", error.message);
  }
}

run();
```
