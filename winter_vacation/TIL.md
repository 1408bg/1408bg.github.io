# SSR과 SSG의 차이 + Next.js 적용

2024년 12월 20일

## 1. SSR (Server Side Rendering)

SSR은 각 요청마다 서버에서 페이지를 생성하여 클라이언트에 전달하는 방식이다. 실시간 데이터가 필요한 경우에 적합한 렌더링 방식이다.

```jsx
// pages/ssr-example.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default function Page({ data }) {
  return <div>{data.title}</div>
}
```

## 2. SSG (Static Site Generation)

SSG는 빌드 시점에 페이지를 미리 생성하여 정적 파일로 제공하는 방식이다. 콘텐츠 변경이 빈번하지 않은 경우에 적합한 렌더링 방식이다.

```jsx
// pages/ssg-example.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: {
      data,
    },
    // 선택적 재생성 간격 설정
    revalidate: 60, // 60초마다 재생성
  }
}

export default function Page({ data }) {
  return <div>{data.title}</div>
}
```

## 3. SSR과 SSG의 차이

- **데이터 갱신 시점:** SSR은 실시간 갱신, SSG는 빌드 시점 갱신
- **성능적 특징:** SSG가 일반적으로 더 높은 성능 제공 (사전 생성된 파일 제공)
- **서버 자원 활용:** SSR이 더 많은 서버 리소스를 필요로 함

## 4. 적용 사례

**SSR 적용이 적합한 경우:**

- 실시간 데이터를 표시하는 대시보드
- 개인화(맞춤형) 콘텐츠
- 검색 결과 페이지

**SSG 적용이 적합한 경우:**

- 마케팅 페이지
- 블로그 게시물
- 제품 문서화 페이지

## 5. 세줄 요약

1. SSR은 요청이 들어올 때 마다 서버에서 페이지를 만든다.
2. SSG는 빌드할 때 페이지 미리 만들어두고, 일정 시간마다 재 생성한다.
3. 상태가 자주 변하면 SSR, 그렇지 않다면 SSG 쓰자.

# DeepLink

2024년 12월 26일

## 1. DeepLink

DeepLink는 모바일 앱의 특정 화면이나 콘텐츠로 직접 이동할 수 있게 해주는 URL 링크이다. 웹에서의 URL처럼 앱 내부의 특정 위치로 사용자를 안내하는 기능을 한다.

## 2. DeepLink의 종류

- **URL Scheme:** 가장 기본적인 형태의 딥링크 (예: myapp://product/123)
- **Universal Links (iOS):** 웹 URL을 앱 내부 경로와 연결
- **App Links (Android):** 안드로이드의 Universal Links 버전
- **Deferred Deep Links:** 앱이 설치되지 않은 경우 스토어로 이동 후 설치 완료시 특정 화면으로 이동

## 3. 구현 예시

```jsx
// iOS Universal Links 설정
{
  "applinks": {
    "apps": [],
    "details": [{
      "appID": "TEAM_ID.BUNDLE_ID",
      "paths": ["*"]
    }]
  }
}

// Android App Links
<activity android:name=".MainActivity">
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="https" 
              android:host="example.com" />
    </intent-filter>
</activity>
```

## 4. DeepLink의 장점

- **사용자 경험 향상:** 원하는 콘텐츠로 직접 이동 가능, 웹에서 앱으로 전환 가능
- **마케팅 효율성:** 특정 프로모션이나 캠페인과 직접 연결 가능

## 5. 주의사항

- iOS와 Android 플랫폼별 구현 방식이 다름
- 앱이 설치되지 않은 경우의 fallback 처리 필요
- 보안 고려사항 검토 필요 (링크 중복, webview 악용)

## 6. 세줄 요약

1. DeepLink는 앱의 특정 화면으로 바로 이동할 수 있는 링크다.
2. iOS는 Universal Links, Android는 App Links를 사용한다.
3. 사용자 경험 향상과 마케팅 효율성을 높일 수 있다.

# 소프트웨어 개발 방법론 및 폭포수와 애자일의 차이

2024년 12월 29일

## 1. 폭포수 모델 (Waterfall Model)

폭포수 모델은 소프트웨어 개발 과정을 순차적인 단계로 진행하는 전통적인 방법론이다. 각 단계는 이전 단계가 완료된 후에만 진행되며, 이전 단계로 돌아가기 어렵다는 특징이 있다.

- **장점:** 체계적이고 단계가 명확함
- **단점:** 요구사항 변경에 대응하기 어려움

**주요 단계:**

1. 요구사항 분석
2. 설계
3. 구현
4. 테스트
5. 유지보수

## 2. 애자일 방법론 (Agile Methodology)

애자일은 변화에 유연하게 대응하면서 반복적인 개발을 통해 소프트웨어를 점진적으로 완성해나가는 방법론이다.

**2.1 스크럼 (Scrum)**

스크럼은 가장 널리 사용되는 애자일 프레임워크로, 짧은 개발 주기(스프린트)를 통해 제품을 개발한다.

- **주요 특징:**
- 스프린트 (2-4주 단위의 개발 주기)
- 데일리 스크럼 (매일 진행되는 짧은 회의)
- 스프린트 리뷰 및 회고
- 스프린트 백로그 관리

**2.2 칸반 (Kanban)**

칸반은 작업 흐름을 시각화하고 진행 중인 작업량을 제한하여 효율성을 높이는 방법론이다.

- **주요 특징:**
- 작업 시각화 (칸반 보드 사용)
- WIP(Work In Progress) 제한
- 지속적인 개선과 최적화

## 3. 폭포수와 애자일의 비교

- **계획 및 요구사항:** 폭포수는 초기에 확정, 애자일은 유연한 변경 가능
- **개발 주기:** 폭포수는 단일 주기, 애자일은 반복적 주기
- **고객 참여:** 폭포수는 제한적, 애자일은 지속적 참여
- **변경 수용성:** 폭포수는 낮음, 애자일은 높음

## 4. 적용 사례

**폭포수 모델이 적합한 경우:**

- 요구사항이 명확하고 변경 가능성이 낮은 프로젝트
- 규제가 엄격한 산업의 프로젝트
- 대규모 시스템 개발

**애자일이 적합한 경우:**

- 요구사항 변경이 잦은 프로젝트
- 신속한 출시가 필요한 경우
- 고객 피드백이 중요한 프로젝트

## 5. 세줄 요약

1. 폭포수는 순차적, 체계적이지만 변경에 취약하다.
2. 애자일은 유연하고 반복적이며 고객 참여가 활발하다.
3. 스크럼은 복잡하고 불확실한 프로젝트에, 칸반은 지속적인 서비스 및 유지보수에 적합하다.

# Dart의 == 연산자와 hashCode

2024년 12월 31일 

## 1. `==` 연산자

Dart에서 `==` 연산자는 객체의 동등성을 비교하는 데 사용된다.
기본적으로 모든 객체는 자신의 메모리 주소를 비교하는 방식으로 동등성을 판단하지만,
`==` 연산자를 override(재정의)하면 객체의 실제 값이나 상태를 기준으로 동등성을 비교할 수 있다.

**기본 비교 방식**:

- `==` 연산자는 객체가 같은 메모리 주소를 가리키는지 비교한다. 즉, `a == b`가 참이려면 `a`와 `b`가 동일한 객체여야 한다.

## 2. `hashCode`

Dart에서 `hashCode`는 객체를 해시 기반의 컬렉션(예: `Set`, `Map`)에서 효율적으로 저장하고 검색하기 위한 값이다. 객체의 해시 값은 객체가 동일한지 비교하는 데 사용되는 중요한 요소로, 두 객체가 동일하다고 판단되면 그들의 `hashCode` 값도 동일해야 한다.

**기본 해시 코드**:

- `hashCode`는 객체의 메모리 주소를 기반으로 한 해시 값을 반환한다. 따라서 기본적으로는 객체의 참조를 비교하는 방식으로 동작한다.

## 3. `==`와 `hashCode`의 관계

Dart에서는 `==` 연산자와 `hashCode`가 서로 밀접하게 연결되어 있다.
객체의 동등성을 비교할 때 `==` 연산자를 사용하고, 그 객체를 해시 기반 컬렉션에 넣거나 검색할 때는 `hashCode`를 사용한다.
이때의 지켜야 할 규칙이 있다:

1. `==` 연산자가 두 객체를 같다고 판단하면, 그들의 `hashCode` 값도 반드시 같아야 한다.
2. `hashCode` 값이 같다고 해서 두 객체가 반드시 같다고 할 수는 없다. `hashCode`는 동등성 판단의 보조적인 역할을 하며, 실제 비교는 `==` 연산자가 담당한다.

따라서 `==` 연산자를 override하면, `hashCode`도 반드시 override하여 두 값이 일관성을 갖도록 해야 한다.

## 4. `==`와 `hashCode`의 동시 override

- **컬렉션 사용에서의 일관성**: `Set`이나 `Map`과 같은 해시 기반 컬렉션은 객체를 비교할 때 `==` 연산자와 `hashCode` 값을 모두 사용한다. 만약 `==` 연산자는 두 객체가 같다고 판단하는데, `hashCode`가 다르면, 컬렉션에서 두 객체가 다른 객체로 취급되어 잘못된 동작을 할 수 있다.
- **동등성의 정의**: 두 객체가 동등하다고 판단될 때, 두 객체의 `hashCode`가 동일해야만 `Set`과 `Map`에서 정확하게 동작한다. 이를 위해서는 `==` 연산자와 `hashCode`를 일관성 있게 오버라이드해야 한다.

## 5. 세줄 요약

1. `==` 연산자는 객체의 동등성을 정의하며, `hashCode`는 객체의 해시 값을 반환한다.
2. `==` 연산자와 `hashCode`는 반드시 일관성 있게 오버라이드해야 한다.
3. 해시 기반 컬렉션에서 `==`와 `hashCode`의 일관성은 객체 비교 및 저장에 중요한 역할을 한다.

# Web Server와 WAS의 차이

2025년 1월 3일 

## 1. Web Server (웹 서버)

웹 서버는 클라이언트의 HTTP 요청을 받아서 해당 요청에 맞는 정적 콘텐츠를 반환하는 서버이다.
웹 서버는 기본적으로 정적 파일을 처리하는 역할을 하며, 클라이언트가 요청한 리소스를 찾고 이를 응답으로 전송한다.
그러나 동적 콘텐츠를 처리하려면 별도의 서버 애플리케이션(예: WAS)과 연동해야 한다.

웹 서버의 주요 기능은 요청을 처리하고, 정적 파일을 제공하는 것 외에도, 로드 밸런싱, SSL 처리, 캐싱 등을 지원한다.

```xml
<!-- 예시: Apache 웹 서버 설정 (Apache HTTP Server) -->

<VirtualHost *:80>
	DocumentRoot "/var/www/html"
	ServerName [example.com](http://example.com/)
</VirtualHost>
```

## 2. WAS (Web Application Server)

WAS는 웹 애플리케이션을 실행하고 관리하는 서버로, 웹 서버에서 처리한 HTTP 요청을 기반으로 동적 콘텐츠를 생성한다.
WAS는 데이터베이스와의 연동, 비즈니스 로직 처리, 세션 관리 등을 담당하며, 주로 서버 측의 애플리케이션 로직을 실행한다.

WAS는 웹 서버와 협력하여 HTTP 요청을 처리하며, 동적 콘텐츠를 클라이언트에 제공한다.
주로 Spring, ASP.NET, Django와 같은 프레임워크에서 동작한다.

```java
// 예시: Spring Boot를 이용한 간단한 WAS 설정 (java)

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class WebApplication {
	public static void main(String[] args) {
		SpringApplication.run(WebApplication.class, args);
	}
}

@RestController
class HelloController {
	@GetMapping("/hello")
	public String hello() {
		return "Hello World!";
	}
}
```

## 3. Web Server와 WAS의 차이

- **역할:** 웹 서버는 정적 콘텐츠 제공, WAS는 동적 콘텐츠 처리 및 서버 비즈니스 로직 처리
- **기술:** 웹 서버는 HTTP 요청/응답 처리 및 정적 파일 제공, WAS는 비즈니스 로직 처리, 데이터베이스 연동, 세션 관리
- **통신 방식:** 웹 서버는 클라이언트와의 HTTP 요청/응답을 처리, WAS는 웹 서버와 연동하여 동적 처리 (웹 서버가 리버스 프록시 역할 수행)

## 4. 적용 사례

**Web Server 적용이 적합한 경우:**

- 정적 콘텐츠 제공 (예: 마케팅 사이트, 블로그)
- 간단한 요청에 대한 빠른 응답이 필요한 경우

**WAS 적용이 적합한 경우:**

- 동적 콘텐츠 생성 및 비즈니스 로직 처리 (예: 쇼핑몰, SNS)
- 복잡한 데이터 처리와 서버 측 연산이 필요한 경우

## 5. 세줄 요약

1. 웹 서버는 정적 콘텐츠를 제공하는 역할을 한다.
2. WAS는 동적 콘텐츠를 생성하고 비즈니스 로직을 처리하는 서버이다.
3. 웹 서버는 콘텐츠 제공, WAS는 동적 처리와 서버 로직을 담당하며,
둘은 유기적으로 연결되어 서버 환경을 구성한다.

# 프록시 서버 및 포워드, 리버스 프록시

2025년 1월 4일 

## 1. 프록시 서버 (Proxy Server)

프록시 서버는 클라이언트와 서버 사이에서 중계 역할을 하는 서버이다.
클라이언트가 요청을 보내면 프록시 서버가 이를 받아 대신 서버에 요청을 전달하고, 서버의 응답을 클라이언트에게 전달한다.
주로 보안, 로드 밸런싱, 캐싱 등을 목적으로 사용된다.

```python
# 예시: Python을 이용한 간단한 프록시 서버 (Flask)

from flask import Flask, request, redirect
import requests

app = Flask(__name__)

@app.route('/proxy')
def proxy():
		path = request.args.get('path')
    response = requests.get(path)
    return response.text

if __name__ == "__main__":
    app.run(debug=True)

```

## 2. 포워드 프록시 (Forward Proxy)

포워드 프록시는 클라이언트의 요청을 대신하여 외부 서버에 전달하는 프록시 서버이다.
클라이언트가 인터넷에 직접 접근하지 않고, 포워드 프록시를 통해 요청을 보내면 프록시 서버는 이를 외부 서버에 전달하고 그 응답을 다시 클라이언트로 전달한다.

포워드 프록시는 주로 외부 인터넷 접근을 통제하거나, 캐싱을 통해 성능을 최적화하는 데 사용된다.

## 3. 리버스 프록시 (Reverse Proxy)

리버스 프록시는 클라이언트의 요청을 직접 서버로 전달하는 것을 막고, 대신 응답하거나 요청을 처리할 서버를 지정하여 요청을 전달하는 프록시이다.
클라이언트는 리버스 프록시와만 통신하고, 리버스 프록시는 요청에 맞는 서버로 요청을 전달한다.

리버스 프록시는 로드 밸런싱, 보안 강화, SSL 종료 등의 목적으로 사용되며, 실제 서버와의 직접적인 통신을 숨기기 때문에 보안상의 장점이 있다.

```groovy
// 예시: Nginx를 이용한 리버스 프록시 설정
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://backend_server;
    }
}

```

## 4. 포워드 프록시와 리버스 프록시의 차이

- **포워드 프록시:** 클라이언트가 요청을 보낼 때, 프록시 서버가 요청을 대신하여 외부 서버로 전달한다.
응답이 프록시 → 클라이언트로 흐르는 것이 중점
- **리버스 프록시:** 클라이언트는 리버스 프록시와만 통신하고, 프록시가 여러 서버 중 하나로 요청을 전달하여 처리한다.
요청이 프록시 → 서버로 흐르는 것이 중점

## 5. 적용 사례

**포워드 프록시 적용이 적합한 경우:**

- 클라이언트의 인터넷 사용을 통제할 때
- 외부 API 요청을 관리하고, 캐싱을 통해 성능을 개선할 때

**리버스 프록시 적용이 적합한 경우:**

- 여러 서버에 로드 밸런싱을 적용할 때
- 클라이언트와 실제 서버 간의 보안을 강화하고자 할 때
- SSL 인증서를 리버스 프록시에서 처리할 때

## 6. 세줄 요약

1. 프록시 서버는 클라이언트와 서버 간의 중계 역할을 한다.
2. 포워드 프록시는 클라이언트의 요청을 대신 외부 서버에 전달하고,
리버스 프록시는 클라이언트 요청을 여러 서버 중 하나로 전달한다.
3. 포워드 프록시는 클라이언트 보호, 리버스 프록시는 서버 보호와 로드 밸런싱에 유용하다.

# 포트포워딩과 사설, 공인 IP

2025년 1월 8일 

## 1. 포트포워딩 (Port Forwarding)

포트포워딩은 네트워크 내의 특정 장치나 서버를 외부에서 접근할 수 있도록, 라우터가 특정 포트를 외부 IP에서 내부 IP로 전달하는 방식이다.
이를 통해 외부에서 내부 네트워크의 서비스나 서버에 접근할 수 있게 된다.

일반적으로 라우터가 가지는 외부 IP는 공인 IP이고, 접근하고자 하는 내부 IP는 사설 IP이다.

## 2. 사설 IP와 공인 IP

### 사설 IP (Private IP)

사설 IP는 일반적으로 인터넷에 직접 연결되지 않고, 내부 네트워크에서만 사용되는 IP 주소다. 사설 IP는 대개 가정이나 기업 네트워크에서 사용되며, NAT(Network Address Translation)를 통해 공인 IP와 연결된다. 사설 IP는 외부에서 직접 접근할 수 없다.

**사설 IP 대역 (RFC 1918):**

- 10.0.0.0 ~ 10.255.255.255
- 172.16.0.0 ~ 172.31.255.255
- 192.168.0.0 ~ 192.168.255.255

### 공인 IP (Public IP)

공인 IP는 인터넷 상에서 유일한 주소로, 외부에서 인터넷을 통해 직접 접근할 수 있는 IP 주소다.
공인 IP는 인터넷 서비스 제공자(ISP)로부터 할당받으며, 이를 통해 외부와의 통신이 이루어진다.

**공인 IP의 특징:**

- 전 세계에서 유일한 IP
- NAT 없이 외부와 직접 연결 가능
- 서버나 웹 서비스가 외부 사용자에게 제공될 때 필요

## 3. 사설 IP와 공인 IP의 차이

- **사용 범위:** 사설 IP는 내부 네트워크에서만 사용되고, 공인 IP는 외부 네트워크(인터넷)와 연결된다.
- **접근성:** 사설 IP는 외부에서 직접 접근할 수 없고, 공인 IP는 인터넷을 통해 접근 가능하다.
- **공유 여부:** 여러 장치가 동일한 공인 IP를 공유하고, 각 장치는 고유한 사설 IP를 가진다.

## 4. 포트포워딩 적합 사례

**포트포워딩 적용이 적합한 경우:**

- 웹 서버나 FTP 서버와 같이 외부에서 접근해야 하는 서비스
- CCTV와 같은 외부 접근이 가능한 모니터링 서비스
- 클라우드나 P2P 네트워크 서비스

**사설 IP와 공인 IP 적용이 적합한 경우:**

- 사내 네트워크에서만 사용되는 서버나 장치에는 사설 IP
- 인터넷을 통해 접속해야 하는 웹 서비스나 서버에는 공인 IP

## 5. 세줄 요약

1. 포트포워딩은 외부의 특정 포트와 내부 장치의 특정 포트를 연결하는 설정이다.
2. 사설 IP는 내부 네트워크에서만 사용되고, 공인 IP는 인터넷 상에서 유일하며 외부에서 접근할 수 있다.
3. 외부에서 접근이 필요한 서비스는 포트포워딩을 통해 공인 IP와 연결하자.

# 디자인 시스템

2025년 1월 10일

## 1. 디자인 시스템의 개념

디자인 시스템은 일관된 사용자 경험을 제공하기 위해 디자인 요소, 규칙, 스타일을 체계적으로 정의하고 관리하는 일련의 규칙과 구성 요소들의 모음이다.
이를 통해 제품의 UI/UX를 효율적이고 일관되게 구성할 수 있으며, 다양한 팀 간의 협업을 용이하게 한다.

## 2. 디자인 시스템의 주요 구성 요소

### Foundation

디자인 시스템의 **Foundation**은 시스템을 구성하는 기초적인 요소들로, 색상, 타이포그래피, 간격 등 기본적인 스타일 규칙을 포함한다.
이를 통해 브랜드의 시각적 일관성을 유지하며, UI 요소가 일관되게 표현될 수 있도록 한다.

**요소**

- **컬러 팔레트**: 주 색상, 보조 색상, 배경 색상 등
- **타이포그래피**: 기본 폰트 스타일, 폰트 크기, 줄 간격 등
- **간격**: 마진, 패딩 등의 간격 규칙

### Component

**Component**는 UI의 기본 구성 요소들로, 버튼, 입력 필드, 카드 등과 같은 재사용 가능한 인터페이스 요소를 말한다.
이 컴포넌트들은 **Foundation**에서 정의된 스타일을 기반으로 만들어지며, 일관되게 사용할 수 있도록 설계된다.
디자인 시스템에서는 컴포넌트를 모듈화하여 재사용성을 극대화한다.

**요소**

- **버튼**: 기본 버튼, 아이콘 버튼 등
- **입력 필드**: 텍스트 필드, 체크박스, 라디오 버튼 등
- **카드**: 정보 카드, 이미지 카드 등
- **네비게이션 바**: 하단 네비게이션, 사이드 메뉴 등

### Page

**Page**는 **Component**의 조합으로 페이지 레이아웃을 구성하는 구조이다.
여러 컴포넌트들이 결합하여 실제 사용자가 볼 수 있는 형태의 페이지를 구성한다.

**요소**

- **홈 페이지**: 네비게이션 바, 배너, 추천 콘텐츠 등 다양한 컴포넌트들이 결합된 전체적인 레이아웃
- **대시보드 페이지**: 실시간 데이터, 통계 차트와 같은 컴포넌트들이 조합되어 하나의 대시보드 화면을 구성
- **상세 페이지**: 제품 설명, 이미지 갤러리, 구매 버튼 등이 포함된 상세 페이지 레이아웃

## 3. 디자인 시스템의 중요성

- **일관성 유지**: 디자인과 기능의 일관성을 유지할 수 있어, 사용자 경험을 향상시킨다.
- **효율성 증대**: 재사용 가능한 컴포넌트를 통해 개발자와 디자이너의 효율성을 높인다.
- **협업 용이**: 구성원이 동일한 기준을 사용하여 효율적으로 협업할 수 있다.

## 4. 세줄 요약

1. 디자인 시스템은 일관된 사용자 경험을 제공하기 위해 기초 스타일, 컴포넌트, 페이지 레이아웃 등의 구성 요소를 정의한다.
2. Foundation은 기본적인 스타일 규칙을, Component는 재사용 가능한 UI 요소들을, Page는 이들을 조합하여 최종적인 레이아웃을 만든다.
3. 디자인 시스템을 사용하면 일관성, 효율성, 협업 용이성을 개선할 수 있다.

# 동기/비동기, 블로킹/논블로킹 IO

2025년 1월 12일 

## 1. 동기(Synchronous)와 비동기(Asynchronous)

### 동기(Synchronous)

동기 방식은 요청을 보낸 후 그 작업이 완료될 때까지 기다리는 방식이다.
실행 흐름에서, 해당 동작의 시작과 끝 사이에 다른 동작이 없다.

### 비동기(Asynchronous)

비동기 방식은 요청을 보낸 후 작업 완료를 기다리지 않고, 다른 작업을 동시에 수행할 수 있는 방식이다.
콜백 함수를 등록하거나, 이벤트를 통해 상태 변경을 감지한다.
작업 자체를 반환 받는 경우도 있다.

## 2. 블로킹(Blocking)과 논블로킹(Non-blocking) IO

### 블로킹(Blocking) IO

블로킹 IO는 작업이 완료될 때까지 프로그램의 제어권을 반환하지 않는 방식이다. 작업 도중에 스레드는 다른 작업을 수행할 수 없다.

### 논블로킹(Non-blocking) IO

논블로킹 IO는 작업을 요청한 후 즉시 제어권을 반환받아 다른 작업을 수행할 수 있는 방식이다.

## 3. 동기/비동기와 블로킹/논블로킹의 차이

### 이론적 구분

**동기/비동기의 관점**

- 동기/비동기는 **작업 완료의 통지 방식**에 초점
- 동기: 작업 완료를 호출한 함수가 직접 확인
- 비동기: 작업 완료를 콜백이나 이벤트로 전달

**블로킹/논블로킹의 관점**

- 블로킹/논블로킹은 **제어권의 반환 시점**에 초점
- 블로킹: 작업 완료까지 제어권을 반환하지 않음
- 논블로킹: 작업 요청 후 즉시 제어권을 반환

| 구분 | 동기/비동기 | 블로킹/논블로킹 |
| --- | --- | --- |
| 초점 | 작업 완료 통지 방식 | 제어권 반환 시점 |
| 처리 | 순차적/병렬적 실행 | 대기/비대기 |
| 구현 | 함수 호출 방식 | IO작업 방식 |

### 조합의 특징

```jsx
// 동기-블로킹
const result = fs.readFileSync('file.txt');// 제어권을 가지고 결과를 직접 반환

// 동기-논블로킹
while(!isComplete()) { // 완료될 때까지 계속 체크
	// 다른 작업 가능
}

// 비동기-블로킹
const result = await someAsyncOperation(); // 제어권은 없지만 완료 통지를 받음

// 비동기-논블로킹
fs.readFile('file.txt', (err, data) => { // 제어권을 반환하고 콜백으로 완료 통지
    console.log(data);
});
```

## 4. 적용 사례

**동기-블로킹 적용이 적합한 경우:**

- 간단한 스크립트 실행
- 설정 파일 로드
- 초기화 과정

**비동기-논블로킹 적용이 적합한 경우:**

- 네트워크 요청 처리
- 대용량 파일 처리
- 실시간 데이터 처리

## 5. 세줄 요약

1. 동기는 순차적, 비동기는 병렬적 작업 처리 방식이다.
2. 블로킹은 작업 완료를 기다리고, 논블로킹은 기다리지 않는다.
3. 성능이 중요하면 비동기-논블로킹, 단순성이 중요하면 동기-블로킹을 사용하자.

# MVVM

2025년 1월 15일 

## 1. MVVM 이론

MVVM은 소프트웨어를 **Model**, **View**, **ViewModel**로 나누어 개발하는 아키텍처 패턴으로, 주로 UI와 비즈니스 로직의 분리를 목적으로 한다. 이 패턴을 사용하면 UI를 쉽게 변경할 수 있고, 코드의 유지보수성이 향상된다.

- **View**: 사용자 인터페이스(UI)를 담당한다. UI 요소를 화면에 표시하고 사용자와 상호작용을 처리한다.
- **ViewModel**: 뷰(View)의 상태 및 로직을 관리한다. 비즈니스 로직을 포함하며, 뷰에 필요한 데이터를 제공한다.
- **Model**: 비즈니스 로직과 데이터 입출력을 처리한다. 애플리케이션의 핵심 데이터 구조와 데이터 처리 로직을 포함한다.

### DataBinding 관계

- View와 ViewModel은 ****`DataBinding` 관계로 연결된다.
    - ViewModel은 View를 직접 갱신하지 않으며, View는 스스로 데이터를 반영한다.
    - **ViewModel은 View에 대해 의존하지 않는다**.
    → ViewModel은 뷰와 관련된 코드가 없으므로 View 변경에 따른 `SideEffect`가 줄어든다.

## 2. MVVM의 특징

- **분리된 관심사**: View, ViewModel, Model이 각자의 역할을 명확히 하여, 코드가 더 깔끔하고 유지보수하기 쉬워진다.
- **데이터 바인딩**: ViewModel은 데이터와 UI를 연결하는 중간자 역할을 한다. 데이터 변화는 자동으로 View에 반영된다.
- **유연성**: View가 변경되더라도 ViewModel과 Model은 영향을 받지 않으므로, UI 변경이 용이하다.
- **테스트 용이성**: ViewModel은 UI와 분리되어 있기 때문에, UI가 없이도 비즈니스 로직을 테스트할 수 있다.

## 3. 적용 사례

**MVVM 적용이 적합한 경우:**

- **데이터 바인딩이 중요한 애플리케이션**: 실시간 데이터 갱신이 필요한 대시보드, 주식 거래 앱.
- **UI와 비즈니스 로직을 분리하고 싶은 경우**: 애플리케이션의 UI와 비즈니스 로직을 분리하여 더 깔끔한 구조로 관리하고 싶은 경우.
- **UI 상태 변화가 복잡한 경우**: 여러 UI 상태가 상호작용하며 변화하는 애플리케이션에서 유용하다.

## 4. 세줄 요약

1. MVVM은 소프트웨어의 UI와 로직을 분리하여 유지보수성을 높이는 아키텍처 패턴이다.
2. View와 ViewModel은 `DataBinding`을 통해 데이터를 자동으로 동기화하며, ViewModel은 View에 의존하지 않는다.
3. 데이터 바인딩을 활용해 UI 상태 관리 및 변화를 효율적으로 처리한다.

# Clean Architecture

2025년 1월 17일 

## 1. 클린 아키텍처 개요

클린 아키텍처는 시스템을 구조화하여 유지보수성과 확장성을 높이고, 비즈니스 로직과 기술적인 구현을 분리하려는 접근 방식이다.
시스템의 각 구성 요소가 독립적으로 동작하도록 만들어, 테스트와 유지보수를 용이하게 한다.

## 2. 아키텍처의 주요 원칙

클린 아키텍처는 크게 네 가지 주요 계층으로 나뉜다:

- **Entities (엔티티)**: 애플리케이션의 핵심 비즈니스 규칙을 포함한다. 데이터베이스의 테이블, 도메인 객체 등과 관련된 데이터와 규칙을 다룬다.
- **Use Cases (유스케이스)**: 애플리케이션의 비즈니스 로직을 처리한다. 엔티티를 활용하여 실제 시스템의 비즈니스 요구사항을 수행한다.
- **Interface Adapters (인터페이스 어댑터)**: 외부 인터페이스(예: 웹, API, DB 등)와 유스케이스 및 엔티티를 연결한다. 컨트롤러, 프레젠터, 데이터베이스와의 상호작용을 담당한다.
- **Frameworks & Drivers (프레임워크 및 드라이버)**: 데이터베이스, UI 프레임워크, 외부 API 등 실제 구현을 담당하는 부분이다. 시스템의 외부와의 상호작용을 담당하며, 클린 아키텍처에서 가장 바깥쪽 계층에 위치한다.

### 계층 간 의존성 규칙

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/84db4e05-3460-45ad-af90-8461303a52f8/dea37b33-e45a-4f02-b92d-ca6bd64199c0/image.png)

- 내부 계층은 외부 계층에 의존할 수 있지만, 그 반대는 절대 안 된다.
- 엔티티와 유스케이스는 프레임워크 및 드라이버와 독립적이어야 한다.

## 3. 클린 아키텍처의 특징

- **유지보수성**: 비즈니스 로직을 외부 구현에서 분리하여, 변화가 있을 때 외부 시스템에 영향을 미치지 않는다.
- **테스트 용이성**: 핵심 비즈니스 로직이 외부 시스템으로부터 독립적이기 때문에, 유닛 테스트가 용이하다.
- **확장성**: 새로운 기술이나 프레임워크를 추가하더라도, 기존 비즈니스 로직에 최소한의 변경만 필요하다.
- **독립성**: 비즈니스 로직이 다른 계층과 독립적이므로, 시스템 전체를 수정하거나 확장할 때 다른 부분에 미치는 영향이 적다.

## 4. 적용 사례

**클린 아키텍처 적용이 적합한 경우:**

- 대규모 애플리케이션: 애플리케이션이 커지고 복잡해질수록, 비즈니스 로직을 잘 분리하여 관리할 수 있는 클린 아키텍처가 유리하다.
- 팀 개발: 여러 명이 협업하는 프로젝트에서는 각 계층의 역할을 명확히 하여 개발 속도와 코드 품질을 높일 수 있다.
- 유연한 시스템 요구 사항: 시스템이 외부 시스템과 상호작용하며, 다른 기술 스택을 도입할 때 유연하게 대처할 수 있다.

## 5. 세줄 요약

1. 클린 아키텍처는 비즈니스 로직과 외부 시스템을 분리하여 유지보수성과 확장성을 높이는 아키텍처 패턴이다.
2. 내부 계층(엔티티, 유스케이스)은 외부 계층(프레임워크, 드라이버)에 의존하지 않는다.
3. 클린 아키텍처는 유닛 테스트, 유지보수, 확장성을 용이하게 만든다.

# 소프트웨어 테스트

2025년 1월 19일 

## 1. 소프트웨어 테스트 개념

소프트웨어 테스트는 개발된 소프트웨어가 요구사항을 충족하는지, 버그나 오류가 없는지 확인하기 위한 과정이다.
이 과정은 소프트웨어 품질을 보장하고, 문제를 조기에 발견하여 유지보수 비용을 줄이는데 중요한 역할을 한다.

## 2. 테스트 종류

### 1. 유닛 테스트 (Unit Test)

유닛 테스트는 애플리케이션의 각 기능이나 모듈이 독립적으로 제대로 동작하는지 확인하는 테스트이다.

### 2. 통합 테스트 (Integration Test)

통합 테스트는 여러 모듈이나 컴포넌트가 결합되었을 때, 서로 잘 상호작용하는지 확인하는 테스트이다.
시스템 내에서의 데이터 흐름과 상호작용을 점검한다.

### 3. 기능 테스트 (Functional Test)

기능 테스트는 시스템이 요구사항에 맞게 기능을 수행하는지 검증하는 테스트이다.
사용자가 실제로 시스템을 어떻게 사용하는지와 동일한 방식으로 기능을 테스트하며, 주로 시나리오 기반으로 진행된다.

## 3. 테스트의 중요성

- **버그 발견**: 테스트는 소프트웨어에서 발생할 수 있는 다양한 오류를 미리 찾아내어, 실제 운영 환경에서 발생하는 문제를 줄인다.
- **품질 보증**: 소프트웨어가 예상대로 작동하는지 확인하여 품질을 보장한다.
- **비용 절감**: 문제를 일찍 발견하여 수정하는 것이, 문제 발생 후 수정하는 것보다 비용이 적게 든다.

## 4. 적용 사례

**소프트웨어 테스트가 적합한 경우:**

- **복잡한 시스템**: 많은 모듈과 상호작용이 있는 복잡한 시스템에서 테스트는 필수적이다.
- **빈번한 업데이트**: 소프트웨어가 자주 업데이트되거나 유지보수되는 경우, 테스트를 통해 빠르고 정확한 검증이 가능하다.
- **높은 품질 요구**: 미션 크리티컬한 시스템이나 높은 품질이 요구되는 소프트웨어에서 철저한 테스트는 필수적이다.

## 5. 세줄 요약

1. 소프트웨어 테스트는 소프트웨어가 요구사항을 충족하는지 확인하는 중요한 과정이다.
2. 유닛 테스트, 통합 테스트, 기능 테스트를 통해 시스템을 종합적으로 검증한다.
3. 테스트는 버그를 발견하고 품질을 보장하며, 비용 절감에 중요한 역할을 한다.

# MaterialApp Custom

2025년 1월 22일 

## 1. MaterialApp 기본 역할

`MaterialApp`은 Flutter 애플리케이션의 전역 설정을 관리하는 루트 위젯으로, 다음과 같은 역할을 수행한다:

- **테마 관리:** 앱의 전반적인 색상, 글꼴 스타일 등을 정의
- **라우팅 관리:** 화면 전환 및 네비게이션 경로 설정
- **위젯 트리 제공:** 애플리케이션의 위젯 트리를 루트에서부터 생성
- **지역화 지원:** 다국어 및 지역화 처리 기능 제공

## 2. 테마 커스터마이징

`MaterialApp`의 `theme`와 `darkTheme` 속성을 활용하여 앱의 색상과 스타일을 설정한다. 이를 통해 사용자 환경에 맞춘 밝은 테마와 어두운 테마를 제공할 수 있다.

### 2.1 기본 테마 설정

`theme` 속성에서 앱의 전반적인 색상, 텍스트 스타일 등을 설정한다.

```dart
MaterialApp(
  theme: ThemeData(
    primaryColor: Colors.green,
    textTheme: const TextTheme(
      bodyText1: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
    ),
  ),
);
```

### 2.2 다크 모드 지원

`darkTheme` 속성을 추가하여 다크 모드를 지원할 수 있다.

```
MaterialApp(
  darkTheme: ThemeData(
    brightness: Brightness.dark,
    primaryColor: Colors.teal,
  ),
);
```

## 3. 라우팅 관리

Flutter에서는 `MaterialApp`의 라우팅 관련 속성을 통해 화면 전환을 제어할 수 있다. 정적 및 동적 경로를 모두 지원하며, 초기 화면도 지정할 수 있다.

### 3.1 정적 라우팅

`routes` 속성을 활용하여 명명된 라우트를 정의한다.

```
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => const HomePage(),
    '/about': (context) => const AboutPage(),
  },
);
```

### 3.2 동적 라우팅

`onGenerateRoute`를 사용하면 동적으로 경로를 생성할 수 있다.

```
MaterialApp(
  onGenerateRoute: (settings) {
    if (settings.name == '/profile') {
      return MaterialPageRoute(
        builder: (context) => const ProfilePage(),
      );
    }
    return null;
  },
);
```

## 4. 지역화 지원

다국어 및 지역화를 지원하기 위해 `localizationsDelegates`, `supportedLocales` 등의 속성을 설정할 수 있다.

### 4.1 기본 설정

다양한 언어를 지원하려면 다음과 같이 설정한다.

```
MaterialApp(
  localizationsDelegates: [
    GlobalMaterialLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
  ],
  supportedLocales: const [
    Locale('en', ''),
    Locale('ko', ''),
  ],
);
```

### 4.2 기본 언어 설정

`locale` 속성으로 기본 언어를 설정한다.

```
MaterialApp(
  locale: const Locale('ko'),
);
```

## 5. 고급 설정

`MaterialApp`을 활용하면 다양한 고급 설정도 가능하다.

### 5.1 디버깅 정보 숨기기

`debugShowCheckedModeBanner` 속성을 `false`로 설정하면 디버깅 배너를 숨길 수 있다.

```
MaterialApp(
  debugShowCheckedModeBanner: false,
);
```

### 5.2 빌더 함수

`builder` 속성을 통해 전역적으로 위젯을 감쌀 수 있다.

```
MaterialApp(
  builder: (context, child) {
    return MediaQuery( // 예시) 모든 텍스트 크기 1.2배 증가
      data: MediaQuery.of(context).copyWith(textScale: TextScaler(factor: 1.2)),
      child: child!,
    );
  },
);
```

## 6. 세줄 요약

1. `MaterialApp`은 Flutter 앱의 루트 위젯으로, 테마, 라우팅, 지역화 설정을 관리한다.
2. 주요 속성으로 `theme`, `routes`, `localizationsDelegates`, `builder`, `debugShowCheckedModeBanner` 등을 활용하여 커스터마이징이 가능하다.
3. `MaterialApp`은 루트 위젯이므로 사이드 이펙트를 신경쓰면서 커스텀하자.

# 키보드로 인한 UI 변경 Troubleshooting

2025년 1월 24일 

## 1. 문제점

Flutter 앱에서 키보드가 화면에 나타나면 UI가 변경되는 문제가 발생할 수 있다.

- 텍스트 필드에 포커스가 생기면 화면이 밀려 올라감
- 중요한 UI 요소가 키보드에 의해 가려짐

이러한 문제를 해결하려면 적절한 위젯과 속성을 사용해야 한다.

## 2. FocusManager로 키보드 닫기

`FocusManager`를 사용하면 현재 포커스를 제거하여 키보드를 닫을 수 있다.
일반적으로 빈 화면을 터치했을 때 키보드를 닫는 동작을 구현한다.

### 2.1 구현 방법

```dart
GestureDetector(
  onTap: () {
	  FocusManager.instance.primaryFocus?.unfocus();
  },
  child: Scaffold(
    body: Center(
      child: TextField(),
    ),
  ),
);
```

## 3. Scaffold의 resizeToAvoidBottomInset

`Scaffold`의 `resizeToAvoidBottomInset` 속성을 `false`로 설정하면 키보드가 나타나더라도 UI가 변경되지 않는다.

### 3.1 기본 설정

```dart
Scaffold(
  resizeToAvoidBottomInset: false,
  body: Column(
    children: [
      Expanded(
        child: ListView(
          children: [
            TextField(),
          ],
        ),
      ),
    ],
  ),
);
```

## 4. SingleChildScrollView 활용

`SingleChildScrollView`는 화면이 키보드로 인해 가려질 때 스크롤을 가능하게 만들어 준다.

### 4.1 구현 방법

```dart
Scaffold(
  body: SingleChildScrollView(
    child: Padding(
      padding: EdgeInsets.all(16.0),
      child: Column(
        children: [
          TextField(),
          SizedBox(height: 500),
          TextField(),
        ],
      ),
    ),
  ),
);
```

## 5. MediaQuery 활용

`MediaQuery`를 사용하면 화면 크기를 동적으로 계산하여 키보드가 차지하는 영역을 파악할 수 있다.

### 5.1 키보드 높이 계산

```dart
final bottomInset = MediaQuery.viewInsetsOf(context).bottom;
```

### 5.2 예제

```dart
Padding(
  padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
  child: TextField(),
);
```

## 6. 세줄 요약

1. `FocusScope.of(context).unfocus()`로 포커스를 제거하여 키보드를 닫을 수 있다.
2. `resizeToAvoidBottomInset`, `SingleChildScrollView` 등을 활용해 UI가 키보드로 인해 깨지지 않도록 설정한다.
3. `MediaQuery`를 통해 키보드 크기를 동적으로 계산하여 세밀한 UI 제어가 가능하다.

# Provider를 통한 ViewModel 구현

2025년 1월 25일 

## 1. ViewModel과 View의 재사용

Flutter의 MVVM 패턴에서 ViewModel과 View의 재사용을 통해 코드의 중복을 줄이고 유지보수를 간소화할 수 있다. 이를 위해 `Provider`를 사용하여 상태를 관리하고, 상속 가능한 ViewModel 및 View 구조를 설계할 수 있다.

## 2. ViewModel 설계

### 2.1 기본 ViewModel 정의

`ChangeNotifier`를 확장하여 상태 변경 알림 기능을 추가한다.

```dart
import 'package:flutter/material.dart';

class ViewModel with ChangeNotifier {}

class CounterViewModel extends ViewModel {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}
```

### 2.2 Provider 설정

`ChangeNotifierProvider`를 사용하여 ViewModel을 위젯 트리에 주입한다.

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CounterViewModel()),
      ],
      child: const MyApp(),
    ),
  );
}
```

## 3. 재사용 가능한 View 설계

View는 제네릭으로 ViewModel 타입을 받아 `Consumer`를 통해 상태를 관리한다.

### 3.1 기본 View 정의

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

abstract class View<T extends ViewModel> extends StatelessWidget {
  const View({super.key});

  Widget buildView(BuildContext context, T viewModel);

  @override
  Widget build(BuildContext context) {
    return Consumer<T>(
      builder: (context, viewModel, child) {
        return buildView(context, viewModel);
      },
    );
  }
}
```

### 3.2 CounterView 구현

`CounterViewModel`을 사용하는 View를 정의한다.

```dart
class CounterView extends View<CounterViewModel> {
  const CounterView({super.key});

  @override
  Widget buildView(BuildContext context, CounterViewModel viewModel) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(
        child: Text('Count: ${viewModel.count}'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: viewModel.increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## 4. Provider 위치와 생명주기

Provider의 위치에 따라 상태의 범위와 생명주기가 결정된다.

### 4.1 전역 상태 관리

앱 전체에서 공유해야 하는 상태는 `MaterialApp` 상위에 배치한다.

```
MultiProvider(
  providers: [
    ChangeNotifierProvider(create: (_) => CounterViewModel()),
  ],
  child: const MyApp(),
);
```

### 4.2 로컬 상태 관리

특정 화면에서만 필요한 상태는 하위 트리에 `Provider`를 배치한다.
해당 화면이 제거되면 ViewModel또한 같이 사라지기에, 상태가 초기화된다.

```
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => ChangeNotifierProvider(
      create: (_) => LocalViewModel(),
      child: const LocalScreen(),
    ),
  ),
);
```

## 5. 세줄 요약

1. ViewModel은 `with ChangeNotifier`로 구현하며, View는 제네릭을 활용해 재사용 가능하도록 설계한다.
2. 상태의 범위에 따라 Provider를 전역 또는 로컬로 배치하여 생명주기를 관리한다.
3. 재사용 가능한 구조를 통해 MVVM 패턴의 유지보수성을 향상시킨다.

# 인공지능, 머신러닝, 딥러닝

2025년 1월 30일 

## 1. 인공지능(AI)

인공지능(Artificial Intelligence)은 인간의 학습, 추론, 문제 해결 능력을 모방하는 기술이다.
AI는 다양한 방식으로 구현될 수 있으며, 크게 두 가지로 나눌 수 있다.

- **약인공지능:** 특정 작업을 수행하도록 설계된 AI (예: 챗봇, 이미지 생성)
- **강인공지능:** 인간과 동등한 수준의 사고 능력을 갖춘 AI (이론적 개념)

## 2. 머신러닝(ML)

머신러닝(Machine Learning)은 AI의 한 분야로, 데이터를 기반으로 패턴을 학습하고 예측하는 기술이다.
대표적인 머신러닝의 학습 방법은 다음과 같다.

- **지도 학습(Supervised Learning):** 입력과 정답(라벨)이 주어진 데이터로 학습 (예: 스팸 메일 분류)
- **비지도 학습(Unsupervised Learning):** 정답이 없는 데이터에서 패턴을 찾음 (예: 고객 세분화)
- **강화 학습(Reinforcement Learning):** 보상 기반 학습을 통해 최적의 행동을 찾아가는 방식 (예: 알파고, 유전 알고리즘)

## 3. 딥러닝(DL)

딥러닝(Deep Learning)은 머신러닝의 한 분야로, 인간의 뇌를 모방한 인공신경망(ANN)을 기반으로 한다.
기존 머신러닝과의 차이점은 다음과 같다.

|  | 머신러닝 | 딥러닝 |
| --- | --- | --- |
| 특징 | 특징을 사람이 직접 정의 | 특징을 자동으로 학습 |
| 데이터 | 비교적 적은 데이터로 가능 | 대량의 데이터 필요 |
| 성능 | 단순한 문제에 적합 | 복잡한 문제 해결 가능 |

## 4. 딥러닝의 핵심 개념

- **뉴런(Neuron)과 신경망:** 인간의 뉴런을 모방한 계산 단위로, 여러 층(Layer)이 쌓여 복잡한 패턴을 학습한다.
- **활성화 함수(Activation Function):** 신경망의 비선형성을 도입하여 복잡한 문제 해결 가능 (ReLU, Sigmoid)
- **역전파(Backpropagation):** 모델이 학습할 수 있도록 가중치를 조정하는 과정

## 5. 딥러닝의 주요 모델

- **CNN(합성곱 신경망):** 이미지 처리에 특화된 신경망 구조 (예: 얼굴 인식, 자율 주행)
- **RNN(순환 신경망):** 시퀀스 데이터(텍스트, 음성) 처리에 적합한 구조
- **Transformer:** 기존 RNN의 한계를 극복한 모델, NLP 및 이미지 처리에서도 활용

## 6. 세줄 요약

1. AI는 인간의 사고를 모방하는 기술이며, 머신러닝과 딥러닝이 포함된다.
2. 머신러닝은 데이터를 기반으로 패턴을 학습하며, 지도/비지도/강화 학습이 있다.
3. 딥러닝은 인공신경망을 활용한 머신러닝 기법으로, 복잡한 데이터 처리에 강력한 성능을 발휘한다.

# Transformer기반 모델(DeepSeek) 활용

2025년 1월 31일 

## 1. 사용할 모델 개요

DeepSeek-R1-Distill-Qwen-1.5B는 자연어 처리(NLP)에 최적화된 Transformer기반 모델로, 대화형 AI 및 텍스트 생성에 활용할 수 있다.
비교적 적은 파라미터와 가벼운 구조로, CPU에서도 실행이 가능하다.

## 2. 모델 실행 환경 준비

### 2.1 라이브러리 설치

```bash
pip install transformers torch
```

### 2.2 모델 로드 및 사용 (CPU 실행)

```python
import torch  # PyTorch 라이브러리, 데이터 타입 설정을 위해 사용
from transformers import AutoModelForCausalLM, AutoTokenizer  # Transformer 모델과 토크나이저 로드

model_name = "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B"
tokenizer = AutoTokenizer.from_pretrained(model_name)  # 텍스트를 모델이 이해할 수 있는 형태로 변환
model = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype="auto", device_map="cpu")  
# Transformer 기반 언어 모델을 로드하고, CPU에서 실행하도록 설정
```

## 3. 텍스트 생성 예제

```python
def generate_text(prompt):
    inputs = tokenizer(prompt, return_tensors="pt")  # 입력 텍스트를 모델이 처리할 수 있는 형태의 텐서로 변환
    outputs = model.generate(**inputs, max_length=100)  # 주어진 입력(언패킹)을 기반으로 최대 100 토큰 길이의 텍스트 생성
    return tokenizer.decode(outputs[0], skip_special_tokens=True)  # 생성된 토큰을 사람이 읽을 수 있는 문자열로 변환
```

## 4. 챗봇으로 활용하기

```python
while True:
    buf = input("user: ")
    if buf.lower() == "quit":
        break
    res = generate_text(user_input)
    print("bot:", res)
```

## 5. 세줄 요약

1. Transformer는 텍스트 생성 및 다양한 자연어 처리 태스크에 사용되는 모델이다.
2. CPU에서도 실행 가능하며, 챗봇 및 텍스트 생성에 활용할 수 있다.
3. `transformers` 라이브러리를 사용하여 다양한 Transformer 모델을 로드하고 사용할 수 있다.

# 온디바이스 AI의 개념과 활용

2025년 2월 1일 

## **1. 온디바이스 AI**

온디바이스 AI는 클라우드나 서버에 의존하지 않고 스마트폰, 태블릿, IoT 기기 등 로컬 디바이스에서 직접 AI 모델을 실행하는 기술이다.
이는 데이터 프라이버시와 실시간 처리 능력을 향상시키는 접근 방식이다.

```python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

local_model_path = "./local-model"

tokenizer = AutoTokenizer.from_pretrained(local_model_path, trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(
    local_model_path,
    torch_dtype=torch.float16,
    trust_remote_code=True
).to("cpu")

tokenizer.pad_token = tokenizer.eos_token

input_text = input()
inputs = tokenizer(input_text, return_tensors="pt").to("cpu")

outputs = model.generate(**inputs, max_length=128)

print(tokenizer.decode(outputs[0], skip_special_tokens=True))

```

## **2. 클라우드 AI와 온디바이스 AI의 차이**

- **데이터 처리 위치:** 온디바이스 AI는 로컬에서, 클라우드 AI는 원격 서버에서 처리
- **대기 시간:** 온디바이스 AI가 일반적으로 더 낮은 대기 시간 제공
- **프라이버시:** 온디바이스 AI가 더 높은 데이터 프라이버시 보장
- **리소스 활용:** 온디바이스 AI는 제한된 로컬 리소스를 사용

## **3. 온디바이스 AI의 장단점**

**장점:**

- 실시간 처리 가능
- 오프라인 작동
- 개인정보 보호 강화

**단점:**

- 제한된 연산 능력
- 모델 크기와 복잡성에 제약
- 업데이트와 유지보수의 어려움

## **4. 적용 사례**

- 얼굴 인식 잠금 해제
- 웨어러블 기기의 건강 모니터링
- 자율주행 차량의 실시간 객체 감지
- 스마트 음성 명령 처리

## **5. 세줄 요약**

1. 온디바이스 AI는 로컬 기기에서 직접 AI 모델을 실행한다.
2. 낮은 대기 시간, 높은 프라이버시가 장점이지만, 제한된 리소스가 단점이다.
3. 실시간 처리와 개인정보 보호가 중요한 애플리케이션에 적합하다.

# 프로세스와 멀티 스레딩 + Java 적용

2025년 2월 3일 

## 1. 프로세스 (Process)

프로세스는 실행 중인 프로그램의 인스턴스로, 독립된 메모리 공간과 시스템 자원을 할당받는다.
각 프로세스는 다른 프로세스와 독립적으로 실행되며, 자체적인 메모리 영역을 가진다.

- **주요 특징:**
- 독립된 메모리 공간 (코드, 데이터, 힙, 스택)
- 프로세스 간 통신(IPC)이 필요함
- 컨텍스트 스위칭 비용이 큼

```java
// 프로세스 생성
ProcessBuilder builder = new ProcessBuilder("notepad.exe");
Process process = builder.start();
```

## 2. 스레드 (Thread)

스레드는 프로세스 내에서 실행되는 작업의 단위로, 같은 프로세스 내의 스레드들은 메모리 공간을 공유한다.
Java는 멀티 스레드 프로그래밍을 위한 다양한 기능을 제공한다.

- **주요 특징:**
- 프로세스의 자원 공유
- 가벼운 컨텍스트 스위칭
- 동기화 이슈 고려 필요

```java
// 스레드 생성
// 1. Thread 클래스 상속
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

// 2. Runnable 인터페이스 구현
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable is running");
    }
}
```

## 3. Java의 멀티스레딩 기능

스레드 객체를 생성하여 멀티스레딩을 할 수 있고, ExecutorService에 Runnable, Callable을 주어 ThreadPool에서 실행할 수 있다.

```java
// Thread 클래스 사용
Thread thread = new Thread(() -> {
    // 스레드에서 실행할 코드
});
thread.start();

// ExecutorService 사용
ExecutorService executor = Executors.newFixedThreadPool(5);
executor.submit(() -> {
    // 실행할 작업
});
```

- synchronized 키워드
- Lock 인터페이스
- volatile 키워드
- Atomic 클래스들

## 4. 동시성 문제와 해결방안

**4.1 주요 동시성 문제:**

- 경쟁 상태(Race Condition): 여러 스레드가 공유 자원에 동시에 접근하여 결과가 실행 순서에 따라 달라지는 상황
- 교착 상태(Deadlock): 두 개 이상의 스레드가 서로가 가진 자원을 기다리며 무한히 대기하는 상황
- 스레드 기아(Thread Starvation): 특정 스레드가 필요한 자원을 계속 할당받지 못하는 상황

**4.2 해결 방안:**

```java
// synchronized 사용
synchronized void method() {
    // 동기화가 필요한 코드
}

// Lock 사용
Lock lock = new ReentrantLock();
lock.lock();
try {
    // 임계 영역
} finally {
    lock.unlock();
}
```

## 5. 세줄 요약

1. 프로세스는 독립적인 실행 단위이고, 스레드는 프로세스 내의 경량 실행 단위이다.
2. Java는 Thread 클래스와 Runnable 인터페이스를 통해 멀티스레딩을 지원한다.
3. 멀티스레드 프로그래밍에서는 동기화와 동시성 문제 해결이 중요하다.

# OAuth와 인증/인가

2025년 2월 7일

## 1. OAuth란?

OAuth는 인터넷 사용자들이 비밀번호를 제공하지 않고 다른 웹사이트 상의 자신들의 정보에 대해 웹사이트나 애플리케이션의 접근 권한을 부여할 수 있는 공통적인 수단으로서 사용되는 접근 위임을 위한 개방형 표준이다.

- **주요 특징:**
- 사용자 인증 정보 노출 없이 권한 위임 가능
- 제한된 접근 권한 부여
- 사용자가 언제든 권한 취소 가능

## 2. OAuth 2.0 구성요소

OAuth 2.0은 다음과 같은 주요 구성요소들로 이루어져 있다:

- **Resource Owner:** 보호된 자원에 대한 접근 권한을 가진 사용자
- **Client:** Resource Owner를 대신하여 보호된 자원에 접근하려는 애플리케이션
- **Authorization Server:** 인증과 권한 부여를 담당하는 서버
- **Resource Server:** 보호된 자원을 호스팅하는 서버

## 3. OAuth 2.0 인증 흐름

```
1. Client -> Resource Owner: 권한 요청
2. Resource Owner -> Client: 권한 승인
3. Client -> Authorization Server: 승인 코드로 액세스 토큰 요청
4. Authorization Server -> Client: 액세스 토큰 발급
5. Client -> Resource Server: 액세스 토큰으로 자원 요청
6. Resource Server -> Client: 보호된 자원 제공
```

## 4. OAuth 2.0 권한 부여 방식

- **Authorization Code Grant:** 서버 사이드 애플리케이션에 적합한 표준 방식으로, 보안성이 가장 뛰어나다.
클라이언트가 authorization code를 먼저 받고, 이를 통해 액세스 토큰을 얻는 2단계 인증 방식을 사용한다.
- **Implicit Grant:** 클라이언트 사이드 애플리케이션에 적합한 간소화된 방식으로, 별도의 authorization code 교환 없이 바로 액세스 토큰을 받는다.
SPA(Single Page Application)에서 주로 사용된다.
- **Resource Owner Password Credentials Grant:** 리소스 소유자의 자격증명(아이디/패스워드)을 직접 사용하는 방식으로, 클라이언트가 완전히 신뢰할 수 있는 경우에만 사용해야 한다.
- **Client Credentials Grant:** 클라이언트가 자신의 자격증명으로 액세스 토큰을 얻는 방식으로, 사용자 컨텍스트가 필요 없는 서버-서버 간 통신에서 주로 사용된다.

## 5. 세줄 요약

1. OAuth는 제3자 애플리케이션에게 제한된 접근 권한을 부여하는 표준 프로토콜이다.
2. 사용자의 민감한 인증 정보를 직접 공유하지 않고도 권한 위임이 가능하다.
3. 다양한 권한 부여 방식을 통해 서로 다른 사용 사례에 대응할 수 있다.

# 모바일 애플리케이션 알림 + Flutter 적용

2025년 2월 8일

## 1. 모바일 알림 기본 개념

모바일 알림은 크게 로컬 알림과 실시간 알림으로 나눌 수 있다. 각각의 알림은 사용자에게 중요한 정보를 전달하는 역할을 한다.

- **로컬 알림:** 앱 내부에서 예약되고 트리거되는 알림
- **실시간 알림:** 서버에서 SSE(Server-Sent Events)를 통해 전송되는 알림

## 2. Flutter에서의 로컬 알림 구현

Flutter에서는 `flutter_local_notifications` 패키지를 사용하여 로컬 알림을 구현할 수 있다.

```dart
// 알림 초기화
final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin = 
    FlutterLocalNotificationsPlugin();

// 알림 설정
const AndroidInitializationSettings initializationSettingsAndroid =
    AndroidInitializationSettings('@mipmap/ic_launcher');
    
const DarwinInitializationSettings initializationSettingsIOS =
    DarwinInitializationSettings();

// 알림 보내기
Future<void> showNotification() async {
  const AndroidNotificationDetails androidDetails =
      AndroidNotificationDetails(
    'channel_id',
    'channel_name',
    importance: Importance.max,
    priority: Priority.high,
  );
  
  const NotificationDetails platformDetails =
      NotificationDetails(android: androidDetails);
      
  await flutterLocalNotificationsPlugin.show(
    0,
    '알림 제목',
    '알림 내용',
    platformDetails,
  );
}
```

## 3. SSE를 이용한 실시간 알림 구현

Server-Sent Events(SSE)를 사용하여 서버에서 클라이언트로 단방향 실시간 알림을 구현할 수 있다.

- **서버 측 구현 (Express.js):**

```jsx
const express = require('express');
const app = express();

app.get('/notifications', (req, res) => {
  // SSE 헤더 설정
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 클라이언트에게 알림 전송
  const sendNotification = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // 예시: 주기적으로 알림 전송
  const intervalId = setInterval(() => {
    sendNotification({
      title: '새로운 알림',
      message: '실시간 알림 내용'
    });
  }, 5000);

  // 연결 종료 시 정리
  req.on('close', () => {
    clearInterval(intervalId);
  });
});
```

- **Flutter 클라이언트 측 구현:**

```dart
class NotificationService {
  final _notificationController = StreamController<NotificationData>.broadcast();
  Stream<NotificationData> get notificationStream => _notificationController.stream;

  void connectToSSE() {
    final client = http.Client();
    final request = http.Request('GET', Uri.parse('http://your-server/notifications'));
    
    client.send(request).then((response) {
      response.stream
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen((line) {
        if (line.startsWith('data: ')) {
          final data = line.substring(6);
          final notification = NotificationData.fromJson(jsonDecode(data));
          _notificationController.add(notification);
        }
      });
    });
  }
}

// 알림 데이터 모델
class NotificationData {
  final String title;
  final String message;
  
  NotificationData({required this.title, required this.message});
  
  factory NotificationData.fromJson(Map<String, dynamic> json) {
    return NotificationData(
      title: json['title'],
      message: json['message']
    );
  }
}
```

Flutter 위젯에서 스트림 사용:

```dart
class NotificationWidget extends StatelessWidget {
  final NotificationService _service = NotificationService();

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<NotificationData>(
      stream: _service.notificationStream,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          final notification = snapshot.data!;
          return ListTile(
            title: Text(notification.title),
            subtitle: Text(notification.message),
          );
        }
        return Container();
      },
    );
  }
}
```

## 4. 알림 권한 처리

로컬 알림을 위한 권한 처리가 필요하다.

```dart
Future<void> requestNotificationPermissions() async {
  if (Platform.isIOS) {
    await flutterLocalNotificationsPlugin
    .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
    ?.requestPermissions(
      alert: true,
      badge: true,
      sound: true,
    );
  }
  
  if (Platform.isAndroid) {
    await flutterLocalNotificationsPlugin
    .resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()
    ?.requestPermission();
  }
}
```

## 5. 세줄 요약

1. 모바일 알림은 로컬 알림과 SSE를 통한 실시간 알림으로 구현할 수 있다.
2. Flutter에서는 StreamController와 StreamBuilder를 사용하여 실시간 알림을 효과적으로 처리할 수 있다.
3. SSE는 서버에서 클라이언트로의 단방향 실시간 통신을 제공하며, 웹소켓보다 구현이 간단하다.

# 타입스크립트의 고급 타입과 유틸리티 타입

2025년 2월 10일

## 1. 조건부 타입 (Conditional Types)

타입 시스템에서 조건문을 사용할 수 있게 해주는 기능이다.

```tsx
type ConvertToUpperCase<T> = T extends string ? Uppercase<T> : "Not a string";

type A = ConvertToUpperCase<"hello">;  // "HELLO"
type B = ConvertToUpperCase<42>;       // "Not a string"
```

## 2. 매핑된 타입 (Mapped Types)

기존 타입을 기반으로 새로운 타입을 생성할 수 있는 방법이다.

```tsx
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

interface User {
    name: string;
    age: number;
}

type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
```

## 3. 유틸리티 타입 활용

TypeScript는 일반적인 타입 변환을 쉽게 할 수 있도록 여러 유틸리티 타입을 제공한다.

- **Pick<T, K>:** 특정 타입에서 몇 개의 속성을 선택하여 타입을 구성
- **Omit<T, K>:** 특정 타입에서 지정된 속성을 제외한 타입을 구성
- **Record<K, T>:** 속성 키가 K이고 값이 T인 타입을 구성

```tsx
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;
type TodoInfo = Omit<Todo, 'completed'>;

type ConfigSettings = Record<'darkMode' | 'notifications', boolean>;
```

## 4. 실제 활용 사례

실제 프로젝트에서 유용하게 사용할 수 있는 예시들이다.

```tsx
// API 응답 타입 정의
interface APIResponse<T> {
    data: T;
    status: number;
    message: string;
}

// 부분적 업데이트를 위한 타입
type PartialUpdate<T> = {
    [P in keyof T]?: T[P] extends object
        ? PartialUpdate<T[P]>
        : T[P];
};

// 실제 사용 예시
interface User {
    id: number;
    name: string;
    settings: {
        theme: string;
        notifications: boolean;
    };
}

type UserUpdate = PartialUpdate<User>;
```

## 5. 세줄 요약

1. TypeScript의 고급 타입 시스템은 타입 안전성과 코드 재사용성을 크게 향상시킨다.
2. 조건부 타입과 매핑된 타입을 통해 동적이고 유연한 타입 정의가 가능하다.
3. 유틸리티 타입들을 활용하면 반복적인 타입 정의를 줄이고 코드를 더 깔끔하게 유지할 수 있다.

# 컴파일러의 기본 단계와 구현

2025년 2월 13일

## 1. 어휘 분석 (Lexical Analysis)

소스 코드를 구분하여 의미 있는 토큰으로 분리하는 단계이다.

```c
// 소스 코드
int result = 10 + 20;

// 토큰화
[INT] [IDENTIFIER:result] [EQUALS] [NUMBER:10] [PLUS] [NUMBER:20] [SEMICOLON]
```

## 2. 구문 분석 (Syntax Analysis)

토큰들을 문법 규칙에 따라 파싱하여 추상 구문 트리(AST)를 생성한다.

```
Assign (=)
  ├── Identifier: result
  └── Add (+)
      ├── Number: 10
      └── Number: 20
```

## 3. 의미 분석 (Semantic Analysis)

변수의 타입, 범위, 선언 여부 등을 검사한다.

```
int x = "hello";  // 타입 오류: 문자열을 정수에 할당 불가
int y = z + 1;    // 선언 오류: z가 정의되지 않음
```

## 4. 중간 코드 생성 (IR Generation)

컴파일러가 최적화하기 쉬운 중간 표현(IR)으로 변환한다.
IR의 경우, CPU 아키텍처에 독립적이므로 최적화와 변환이 쉽다.

```llvm
define i32 @main() {
  %1 = add i32 10, 20
  ret i32 %1
}
```

## 5. 최적화 (Optimization)

중간 코드를 분석하여 성능을 개선한다.

- **상수 폴딩:** 컴파일 시점에 계산 가능한 표현식을 미리 계산
- **루프 최적화:** 반복문의 효율성 개선
- **사용하지 않는 코드 제거:** 데드 코드 제거

## 6. 코드 생성 (Code Generation)

최적화된 중간 코드를 목적 기계의 어셈블리어나 기계어로 변환한다.

```nasm
section .text
    global main
main:
    mov eax, 30    ; 상수 폴딩
    ret
```

## 7. 세줄 요약

1. 컴파일러는 소스 코드를 토큰화하고 구문 분석하여 AST를 생성한다.
2. 의미 분석을 통해 코드의 정확성을 검증하고 중간 코드를 생성한다.
3. 최적화 과정을 거쳐 최종적으로 효율적인 기계어를 생성한다.

# 인터프리터의 동작 원리와 특징

2025년 2월 15일

## 1. 토큰화 (Tokenization)

소스 코드를 의미 있는 최소 단위인 토큰으로 분리하는 과정이다.

```python
# 소스 코드
x = 10 + 20

# 토큰화 결과
[IDENTIFIER:x] [EQUALS] [NUMBER:10] [PLUS] [NUMBER:20]
```

## 2. 파싱 (Parsing)

토큰화된 코드를 문법 규칙에 따라 AST로 변환한다.

```
Assignment
  ├── Target: x
  └── Operation: Add
      ├── Left: 10
      └── Right: 20
```

## 3. 심볼 테이블 생성

변수, 함수 등의 식별자 정보를 저장하는 심볼 테이블을 생성하고 관리한다.

```python
symbol_table = {
    'x': {'type': 'variable', 'value': None},
    'print': {'type': 'function', 'params': 1},
}
```

## 4. 직접 실행 (Direct Execution)

구문 트리를 순회하면서 각 노드를 즉시 실행한다.

```python
def execute_node(node):
    if node.type == 'assignment':
        value = evaluate(node.value)
        symbol_table[node.target] = value
    elif node.type == 'operation':
        return perform_operation(node)
```

## 5. 메모리 관리

실행 중인 프로그램의 변수와 객체들의 메모리를 관리한다.

- **가비지 컬렉션:** 더 이상 사용되지 않는 메모리 자동 해제
- **스택 관리:** 함수 호출과 지역 변수 관리
- **힙 관리:** 동적으로 할당된 객체 관리

## 6. 에러 처리

실행 중 발생하는 다양한 에러를 감지하고 처리한다.

```python
try:
    result = evaluate_expression()
except SyntaxError:
    print("구문 오류 발생")
except NameError:
    print("정의되지 않은 변수 사용")
except TypeError:
    print("타입 불일치 오류")
```

## 7. 세줄 요약

1. 인터프리터는 코드를 토큰화하고 파싱하여 구문 트리를 생성한다.
2. 구문 트리를 순회하며 한 줄씩 해석하고 즉시 실행한다.
3. 실행 중 심볼 테이블을 관리하고, 메모리와 에러 처리를 수행한다.

# RESTful API와 HTTP 메서드

2025년 2월 18일

## 1. RESTful API 개요

REST(Representational State Transfer)는 웹 서비스를 위한 아키텍처 스타일로, 자원을 URI로 표현하고 HTTP 메서드를 통해 자원을 조작하는 방식이다.

**주요 특징:**

- 클라이언트-서버 구조
- 무상태성 (Stateless)
- 캐시 가능성
- 인터페이스 일관성

## 2. HTTP 메서드

HTTP 메서드는 클라이언트가 서버에 요청하는 동작을 정의한다.
각 메서드는 특정한 목적과 의미를 가진다.

- **GET**: 리소스 조회
- **POST**: 리소스 생성
- **PUT**: 리소스 전체 수정
- **PATCH**: 리소스 부분 수정
- **DELETE**: 리소스 삭제

```
GET /api/users/1 HTTP/1.1
Host: example.com

POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com"
}
```

## 3. RESTful API 설계 원칙

효과적인 RESTful API 설계를 위해 따라야 할 주요 원칙들이 있다.

- **URI는 리소스를 나타내야 함**: 동사보다는 명사 사용
- **행위는 HTTP 메서드로 표현**: URI에 행위를 포함하지 않음
- **계층 관계는 슬래시(/)로 표현**: /users/posts
- **하이픈(-)은 URI 가독성을 위해 사용**: user-posts
- **언더스코어(_)는 사용하지 않음**

## 4. HTTP 상태 코드

서버의 응답 상태를 나타내는 3자리 숫자 코드이다.

- **2xx (성공)**: 200 OK, 201 Created, 204 No Content
- **3xx (리다이렉션)**: 301 Moved Permanently, 304 Not Modified
- **4xx (클라이언트 오류)**: 400 Bad Request, 401 Unauthorized, 404 Not Found
- **5xx (서버 오류)**: 500 Internal Server Error, 503 Service Unavailable

## 5. 세줄 요약

1. RESTful API는 HTTP 메서드를 사용하여 리소스를 조작하는 웹 서비스 아키텍처이다.
2. 주요 HTTP 메서드는 GET, POST, PUT, PATCH, DELETE이며 각각 고유한 목적을 가진다.
3. 올바른 상태 코드 사용과 URI 설계는 RESTful API의 품질을 결정하는 중요한 요소이다.

# 백그라운드 프로세스 + Flutter 적용

2025년 2월 21일

## 1. 백그라운드 프로세스

백그라운드 프로세스는 사용자 인터페이스와 직접적인 상호작용 없이 백그라운드에서 실행되는 프로세스를 의미한다.
모바일 앱에서는 위치 추적, 음악 재생, 데이터 동기화 등의 작업을 백그라운드에서 처리한다.

**주요 특징:**

- 사용자 인터페이스가 보이지 않는 상태에서도 실행
- 시스템 리소스 관리 필요
- 배터리 소비 고려

## 2. Flutter Background Service

Flutter Background Service는 Flutter 앱에서 백그라운드 작업을 수행할 수 있게 해주는 플러그인이다.

```yaml
// pubspec.yaml
dependencies:
  flutter_background_service: any
  flutter_background_service_android: any
  flutter_background_service_ios: any
```

```dart
// 기본 설정 및 초기화
Future<void> initializeService() async {
  final service = FlutterBackgroundService();
  
  await service.configure(
    androidConfiguration: AndroidConfiguration(
      autoStart: true,
      onStart: onStart,
      isForegroundMode: true
    ),
    iosConfiguration: IosConfiguration(
      autoStart: true,
      onForeground: onStart,
      onBackground: onIosBackground
    )
  );
}
```

## 3. 주요 기능과 사용 사례

- **위치 추적:** 사용자의 위치를 지속적으로 모니터링
- **데이터 동기화:** 서버와 주기적인 데이터 동기화 수행
- **알림 처리:** 푸시 알림 수신 및 처리
- **센서 모니터링:** 디바이스 센서 데이터 수집

```dart
// 백그라운드 작업 정의
@pragma('vm:entry-point')
void onStart(ServiceInstance service) async {
  while (service.isRunning()) {
    // 주기적인 작업 수행
    await Future.delayed(const Duration(seconds: 1));
    
    // 데이터 처리 또는 API 호출
    service.invoke('work');
  }
}
```

## 4. 플랫폼별 고려사항

**4.1 Android:**

- Foreground Service 권한 필요
- 배터리 최적화 예외 처리
- 서비스 생명주기 관리

**4.2 iOS:**

- 백그라운드 모드 제한적 지원
- 특정 백그라운드 모드 활성화 필요
- 시스템의 백그라운드 실행 시간 제한

```xml
<!-- Android Manifest 설정 -->
<manifest>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
</manifest>
```

## 5. 세줄 요약

1. 백그라운드 프로세스는 앱의 UI가 보이지 않는 상태에서도 작업을 수행하는 프로세스이다.
2. Flutter Background Service는 Flutter 앱에서 백그라운드 작업을 쉽게 구현할 수 있게 해준다.
3. 플랫폼별 제약사항과 배터리 소비를 고려한 최적화가 필요하다.

# 웹 접근성(Web Accessibility) + HTML 적용

2025년 2월 23일

## 1. 웹 접근성이란?

웹 접근성은 장애인, 고령자 등이 웹 사이트에서 제공하는 정보를 비장애인과 동등하게 접근하고 이용할 수 있도록 보장하는 것을 말한다.

**주요 원칙:**

- 인식의 용이성 (Perceivable)
- 운용의 용이성 (Operable)
- 이해의 용이성 (Understandable)
- 견고성 (Robust)

## 2. HTML에서의 웹 접근성 구현

시맨틱 마크업과 ARIA(Accessible Rich Internet Applications) 속성을 활용하여 웹 접근성을 향상시킬 수 있다.

```html
<!-- 시맨틱 마크업 예시 -->
<header>
  <h1>웹사이트 제목</h1>
  <nav>
    <ul>
      <li><a href="#home">홈</a></li>
    </ul>
  </nav>
</header>

<!-- 이미지 접근성 -->
<img src="logo.png" alt="회사 로고" />

<!-- ARIA 레이블 사용 -->
<button aria-label="메뉴 열기">
  <span class="icon-menu"></span>
</button>
```

## 3. 주요 접근성 요소

- **대체 텍스트:** 이미지, 비디오 등 시각적 콘텐츠에 대한 텍스트 설명 제공
- **키보드 접근성:** 모든 기능을 키보드로 사용 가능하도록 구현
- **명확한 구조:** 제목 태그(h1-h6)의 적절한 계층 구조 사용
- **충분한 색상 대비:** 텍스트와 배경색 간의 적절한 대비 보장

```html
<!-- 폼 접근성 예시 -->
<form>
  <label for="username">사용자 이름</label>
  <input 
    type="text" 
    id="username" 
    name="username" 
    aria-required="true"
    aria-describedby="username-help"
  />
  <p id="username-help">영문과 숫자 조합으로 입력해주세요.</p>
</form>
```

## 4. 접근성 테스트 도구

- **자동화 도구:** WAVE, aXe, Lighthouse
- **스크린 리더:** NVDA, VoiceOver, JAWS
- **키보드 테스트:** Tab 키를 이용한 탐색 테스트
- **색상 대비 검사:** WebAIM Contrast Checker

## 5. 세줄 요약

1. 웹 접근성은 모든 사용자가 웹 콘텐츠에 동등하게 접근할 수 있도록 보장하는 것이다.
2. 시맨틱 HTML과 ARIA 속성을 활용하여 접근성을 향상시킬 수 있다.
3. 다양한 테스트 도구와 방법을 통해 접근성 준수 여부를 확인해야 한다.

# 가상화

2025년 2월 25일

## 1. 가상화의 배경과 필요성

가상화 기술은 컴퓨터 자원을 더 효율적으로 활용하기 위한 필요성에서 시작되었다.

- **자원 활용도 문제**: 이전의 일반적인 서버 환경에서는 하나의 물리적 서버가 하나의 운영체제와 애플리케이션만 실행하는 방식이었으며, 이로 인해 서버 자원의 상당 부분은 유휴 상태로 남아있었다.
- **비용 효율성**: 하드웨어 비용, 전력 비용, 공간 비용 등 인프라 유지 비용의 증가로 자원을 효율적으로 사용해야 할 필요성이 커졌다.
- **격리 필요성**: 여러 애플리케이션이 동일한 시스템에서 실행될 때 발생할 수 있는 충돌과 보안 문제를 해결하기 위해 격리된 환경이 필요했다.

## 2. 가상화의 정의와 유형

가상화는 물리적 하드웨어의 기능을 추상화하여 여러 개의 가상 환경으로 분할하는 기술이다.

### 2.1 하드웨어 가상화 (Hardware Virtualization)

물리적 하드웨어를 가상화하여 여러 운영체제가 동시에 실행될 수 있게 하는 기술이다.

- **1형 하이퍼바이저**: 베어메탈 하이퍼바이저라고도 불리며, 하드웨어 위에 직접 설치된다.
시스템의 자원을 직접 사용하기에, 빠른 편이지만 조작하기 상대적으로 어렵다.
(예: VMware ESXi, Microsoft Hyper-V, Xen)
- **2형 하이퍼바이저**: 호스트 OS 위에서 실행되는 하이퍼바이저로, 일반 애플리케이션처럼 설치된다.
OS와 자원 할당을 조정하므로, 느린 편이다.
(예: VMware Workstation, Oracle VirtualBox)

### 2.2 운영체제 가상화 (OS Virtualization)

하나의 운영체제 커널을 공유하면서 여러 격리된 사용자 공간 인스턴스를 제공하는 기술이다.

- **컨테이너 기술**: Docker, LXC(Linux Containers)와 같은 기술이 이 범주에 속한다.
네임스페이스, 컨트롤 그룹을 이용하여 환경을 격리한다.
- **호스트 OS형 가상화**: 2형 하이퍼바이저에 해당, 호스트 OS를 통해 하드웨어 리소스에 접근하므로 운영체제 수준의 가상화에도 해당된다.

### 2.3 애플리케이션 가상화 (Application Virtualization)

애플리케이션이 로컬에 설치되지 않고도 실행될 수 있게 하는 기술이다.
온라인 컴파일러, colab과 같은 사용자가 원격으로 이용하는 독립된 환경을 구축한다.

- **예시**: Microsoft App-V, VMware ThinApp 등이 있다.
- **이점**: 애플리케이션 간 충돌 방지, 배포 간소화, 보안 강화 등이 있다.

### 2.4 네트워크 가상화 (Network Virtualization)

물리적 네트워크 자원을 논리적으로 분할하여 가상 네트워크를 생성하는 기술이다.

- **NFV(Network Functions Virtualization)**: 물리적인 네트워크 장비의 기능을 가상화하는 접근 방식이다.
방화벽, 라우터, 로드밸런서와 같은 장비에서 가지는 네트워크 기능을 소프트웨어로 구현하여 사용할 수 있다.
- **SDN(Software-Defined Networking)**: 네트워크 제어 기능과 전달 기능을 분리하는 접근 방식이다.
제어 플레인에서 전송 플레인에 전역적으로 접근하여 효율적으로 관리할 수 있다.
- **이점**: 네트워크 구성의 유연성, 확장성, 보안성 향상이 있다.

## 3. 가상화의 주요 이점

- **자원 최적화**: 하드웨어 자원을 더 효율적으로 활용하여 자원 낭비를 줄인다.
- **비용 절감**: 하드웨어, 전력, 공간, 관리 비용 등 인프라 비용을 절감할 수 있다.
- **유연성과 민첩성**: 시스템 환경을 빠르게 프로비저닝(자원 준비)하고 확장할 수 있다.
- **재해 복구 간소화**: 가상 시스템은 쉽게 백업하고 복구할 수 있어 비즈니스 연속성을 보장한다.
- **개발 및 테스트 환경 개선**: 개발자와 테스터가 다양한 환경을 쉽게 구성하고 사용할 수 있다.

## 4. 현대 IT 환경에서의 가상화

현대 IT 환경, 특히 클라우드 컴퓨팅은 일반적으로 가상화 기술 없이는 불가능하다.

- **클라우드 컴퓨팅**: AWS, Azure, Google Cloud 등 모든 주요 클라우드 제공업체는 가상화 기술을 기반으로 서비스를 제공한다.
- **DevOps 환경**: 가상화는 DevOps 실천에 필수적인 요소로, CI/CD 파이프라인과 인프라스트럭처 자동화(IaC)를 지원한다.
- **하이브리드 및 멀티 클라우드**: 가상화 기술은 다양한 환경 간의 워크로드 이동성을 제공한다.
- **엣지 컴퓨팅**: 엣지 환경에서도 가상화 기술을 활용해 제한된 자원을 효율적이고 안전하게 활용한다.

## 5. 세줄 요약

1. 가상화는 하드웨어 자원의 비효율적 사용과 증가하는 인프라 비용 문제를 해결하기 위해 발전했으며, 물리적 자원을 논리적으로 분할하여 효율성을 높이는 기술이다.
2. 가상화는 하드웨어, 운영체제, 애플리케이션, 네트워크 등 여러 수준에서 구현될 수 있으며, 각각 다른 목적과 장점을 가진다.
3. 현대 IT 환경에서 가상화는 필수적인 기술로, 클라우드 컴퓨팅, DevOps, 마이크로서비스 아키텍처의 기반을 제공하며 자원 최적화, 비용 절감, 유연성 향상에 기여한다.

# Docker와 VM의 차이

2025년 2월 26일

> VM은 2형 하이퍼바이저를 기준으로 한다.
> 

## 1. Docker

Docker는 애플리케이션을 컨테이너라는 표준화된 단위로 감싸 어떤 환경에서든 일관되게 실행할 수 있게 해주는 컨테이너 기술이다.

- **컨테이너 기반 가상화**: Docker는 OS 수준의 가상화를 사용하여 호스트 OS 커널을 공유하면서도 격리된 환경을 제공한다.
- **이미지와 컨테이너**: Docker는 애플리케이션과 그 의존성을 포함한 이미지를 생성하고, 이미지를 실행하여 컨테이너를 생성한다.
- **DockerHub**: 다양한 이미지를 공유하고 다운로드할 수 있는 Docker 이미지 레지스트리로, 재사용성을 높인다.

## 2. Docker와 VM의 아키텍처 비교

Docker와 VM(가상 머신)은 모두 가상화 기술이지만, 설계 방식과 자원 활용에 큰 차이가 있다.

### 2.1 VM 아키텍처

VM은 하이퍼바이저를 통해 하드웨어 수준에서 가상화를 구현한다.

- **전체 OS 포함**: 각 VM은 완전한 OS 사본과 필요한 바이너리, 라이브러리를 포함한다.
- **무거운 구조**: 각 VM은 수 GB 크기의 디스크 공간을 차지하며, 부팅 시간도 길다(수 분).
- **완전한 격리**: 각 VM은 하드웨어 수준에서 완전히 격리되어 있어 보안성이
높다.

### 2.2 Docker 아키텍처

Docker는 컨테이너 기술을 통해 OS 커널 수준에서 가상화를 구현한다.

- **커널 공유**: 모든 컨테이너는 호스트 OS의 커널을 공유하여 자원을 효율적으로 사용한다.
- **경량화**: 컨테이너는 애플리케이션과 필요한 최소한의 라이브러리만 포함하여 수 MB 크기로도 충분하다.
- **빠른 시작**: 컨테이너는 수 초 내에 시작할 수 있어 빠른 배포와 확장이 가능하다.

## 3. Docker와 VM의 주요 차이점

- **리소스 사용**: Docker는 VM보다 적은 리소스를 사용하며, 더 많은 애플리케이션을 같은 하드웨어에서 실행할 수 있다.
- **성능**: Docker 컨테이너는 호스트 OS 커널에 직접 접근하므로 VM보다 성능 오버헤드가 적다.
- **격리 수준**: VM은 하드웨어 수준에서 격리되어 더 높은 보안성을 제공하지만, Docker는 프로세스 수준의 격리로 약간 낮은 격리 수준을 갖는다.
- **호환성**: VM은 완전한 OS를 포함하므로 다른 OS를 실행할 수 있지만, Docker 컨테이너는 호스트와 동일한 커널을 사용해야 한다(Linux 커널).
- **이식성**: Docker는 "한 번 만들면 어디서든 실행할 수 있다"는 철학으로 높은 이식성을 제공한다.

## 4. 사용 사례 비교

**VM에 적합한 경우:**

- **다양한 OS 실행**: Windows와 Linux를 동시에 실행해야 하는 경우
- **완전한 격리 필요**: 높은 수준의 보안이 필요한 금융, 의료 등의 애플리케이션
- **레거시 시스템**: 오래된 시스템을 운영체제 종속성과 같은 이유로 보존해야 하는 경우

**Docker에 적합한 경우:**

- **마이크로서비스**: 작고 독립적인 서비스로 구성된 아키텍처
- **CI/CD 파이프라인**: 지속적 통합/배포 환경에서 일관된 개발, 테스트, 배포 환경
- **확장 가능한 애플리케이션**: 트래픽에 따라 빠르게 확장해야 하는 서비스
- **개발 환경**: "내 컴퓨터에서는 작동했는데"를 해결하기 위한 일관된 개발 환경 구축

## 5. Docker 명령어

**기본 명령어**

| **명령어** | **설명** | **예시** |
| --- | --- | --- |
| **`docker pull`** | 이미지 다운로드 | **`docker pull nginx`** |
| **`docker run`** | 컨테이너 실행 | **`docker run -d -p 8080:80 nginx`** |
| **`docker ps`** | 실행 중인 컨테이너 목록 확인 | **`docker ps`** |
| **`docker stop`** | 컨테이너 중지 | **`docker stop [CONTAINER_ID]`** |
| **`docker build`** | Dockerfile을 사용한 이미지 빌드 | **`docker build -t myapp .`** |

**추가적으로 유용한 명령어**

| **명령어** | **설명** | **예시** |
| --- | --- | --- |
| **`docker images`** | 로컬에 저장된 이미지 목록 확인 | **`docker images`** |
| **`docker rm`** | 컨테이너 삭제 | **`docker rm [CONTAINER_ID]`** |
| **`docker rmi`** | 이미지 삭제 | **`docker rmi [IMAGE_ID]`** |
| **`docker exec`** | 실행 중인 컨테이너에 명령 실행 | **`docker exec -it [CONTAINER_ID] /bin/bash`** |
| **`docker logs`** | 컨테이너 로그 확인 | **`docker logs [CONTAINER_ID]`** |

## 6. 세줄 요약

1. Docker는 OS 수준의 가상화를 통해 호스트 OS 커널을 공유하는 컨테이너 기술로, VM보다 가볍고 빠르지만 격리 수준이 낮다.
2. VM은 하드웨어 수준의 가상화로 완전한 OS를 포함하여 높은 격리성을 제공하지만, 리소스 사용이 많고 시작 시간이 길다.
3. Docker는 마이크로서비스, CI/CD, 개발 환경에 적합하며, VM은 다양한 OS 실행, 완전한 격리가 필요한 경우에 적합하다.

# MSA(Microservice Architecture) 이해하기

2025년 2월 28일

## 1. MSA란 무엇인가?

MSA(Microservice Architecture)는 하나의 큰 애플리케이션을 여러 개의 작은 독립적인 서비스로 분리하여 개발하는 소프트웨어 아키텍처 방식이다. 각 서비스는 특정 비즈니스 기능을 담당하며, 독립적으로 개발, 배포, 확장이 가능하다.

**주요 특징:**

- 각 서비스는 독립적인 프로세스로 실행됨
- 서비스 간 통신은 가벼운 메커니즘(HTTP/REST, 메시지 큐 등)을 사용
- 각 서비스는 자체 데이터베이스를 가질 수 있음
- 기술 스택을 서비스별로 다르게 선택할 수 있음

## 2. MSA와 모놀리식 아키텍처의 비교

모놀리식 아키텍처는 전통적인 방식으로, 모든 기능이 하나의 애플리케이션에 통합되어 있다. MSA는 이러한 모놀리식 방식의 단점을 해결하기 위해 등장했다.

| **항목** | **모놀리식 아키텍처** | **마이크로서비스 아키텍처** |
| --- | --- | --- |
| 개발 복잡도 | 초기에는 단순함 | 초기에는 복잡함 |
| 배포 | 전체 애플리케이션 배포 | 개별 서비스 독립 배포 가능 |
| 확장성 | 전체 애플리케이션 확장 | 필요한 서비스만 확장 가능 |
| 기술 다양성 | 한 가지 기술 스택 사용 | 서비스별 다양한 기술 스택 적용 가능 |
| 장애 격리 | 부분 장애가 전체에 영향 | 서비스 간 장애 격리 가능 |

## 3. MSA 구현 기술 및 패턴

**주요 구현 기술:**

- **API Gateway:** 클라이언트 요청을 적절한 마이크로서비스로 라우팅 (예: Netflix Zuul, Spring Cloud Gateway)
- **서비스 디스커버리:** 서비스 인스턴스의 동적 등록 및 발견 (예: Netflix Eureka, Consul)
- **컨테이너 기술:** Docker, Kubernetes 등을 활용한 서비스 패키징 및 오케스트레이션
- **메시지 큐:** 비동기 통신을 위한 메시지 브로커 (예: Kafka, RabbitMQ)

**주요 패턴:**

- **서킷 브레이커 패턴:** 장애 전파 방지 (예: Netflix Hystrix)
- **CQRS:** 명령과 조회 책임 분리
- **Saga 패턴:** 분산 트랜잭션 관리
- **BFF(Backend for Frontend):** 특정 프론트엔드를 위한 전용 백엔드 API

```java
// 서킷 브레이커 패턴 예시 (Spring Cloud Circuit Breaker)
@CircuitBreaker(name = "orderService", fallbackMethod = "getOrderFallback")
public Order getOrder(Long orderId) {
    return orderServiceClient.getOrder(orderId);
}

public Order getOrderFallback(Long orderId, Exception e) {
    return new Order(orderId, "Unknown", OrderStatus.UNKNOWN);
}
```

## 4. MSA의 장단점

**장점:**

- 독립적인 개발과 배포로 개발 속도 향상
- 서비스별 확장성 확보 (필요한 서비스만 확장 가능)
- 새로운 기술 도입이 용이함
- 장애 격리 (한 서비스의 장애가 전체 시스템에 영향을 미치지 않음)
- 작은 코드베이스로 유지보수 용이

**단점:**

- 분산 시스템의 복잡성 증가
- 서비스 간 통신 오버헤드
- 트랜잭션 관리의 어려움
- 테스트 복잡도 증가
- 운영 및 모니터링 난이도 상승

## 5. MSA 도입 사례

- **Netflix:** 빠른 확장에 따른 가용성 문제로 MSA 도입, 2008년부터 7년에 걸쳐 모놀리식 아키텍처에서 마이크로서비스로 전환하여 서비스 장애 시간 감소와 확장성 대폭 향상
- **Amazon:** 초기 모놀리식 시스템의 확장성 한계와 개발 속도 저하 문제를 해결하기 위해 MSA 도입, 현재 수천 개의 독립적인 마이크로서비스로 운영되어 빠른 기능 출시와 대규모 트래픽 처리 가능
- **Uber:** 사용자 기반이 급증하면서 모놀리식 구조의 확장성 문제 발생, MSA 도입으로 지역별 서비스 독립 운영 및 신규 기능 출시 시간 단축
- **Spotify:** 음악 스트리밍 서비스의 복잡성 증가로 자율적인 팀 구조(Squad 모델)와 함께 MSA 채택, 개발 속도 향상 및 서비스 안정성 개선

## 6. 세줄 요약

1. MSA는 애플리케이션을 독립적으로 개발, 배포, 확장 가능한 작은 서비스들로 분리하는 아키텍처이다.
2. API Gateway, 서비스 디스커버리, 컨테이너 기술 등을 활용하여 MSA를 구현한다.
3. 개발 속도와 확장성 향상이라는 장점이 있지만, 분산 시스템의 복잡성과 운영 난이도가 증가하는 단점이 있다.
