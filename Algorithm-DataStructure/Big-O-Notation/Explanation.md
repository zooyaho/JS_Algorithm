# 빅오란(Big O)

- 코드의 성능을 확인할때는 코드가 실행될 때 걸리는 정확한 시간을 초로 측정하는 것보다는 컴퓨터가 처리해야하는 연산 갯수를 세면 된다.
- 빅오는 대략적으로 숫자를 세는 것의 붙인 공식적인 표현이다.
- 정식으로 입력된 내용이 늘어날 수록 알고리즘에 실행시간이 어떻게 변하는지 설명하는 공식적인 방식이다.
- 입력의 크기와 실행시간의 관계를 말한다.
- 시간복잡도: 알고리즘이 얼마나 빠르게 실행하는지, 입력이 커질수록 알고리즘의 실행 속도가 어떻게 바뀌는지
- 공간복잡도: 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지 하는지(사용되는 메모리에 주목한다.)

## 빅오 표현의 단순화(시간 복잡도)

- n^2, n, 1
- 산수는 상수이다.

## 공간복잡도

- 보조 공간복잡도: 입력되는 것을 제외한 알고리즘 자체가 필요로 하는 공간을 의미
- number, boolean, null, undefined은 JS에서 입력 크기와 상관없이 불변 공간이다. O(1) 공간
- string, array, object 대부분 O(n)이며, n은 배열의 길이거나 객체의 키 갯수이다.

```js
// 1
function add1() {
  return (n * (n + 1)) / 2;
}
console.log(add1(6));

// o(n) : n이 커질수록 실행시간도 비례하게 증가한다.
function add2(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}
console.log(add2(6));

// 중첩 루프 => o(n^2) : n이 커질수록 실행시간이 곱으로 증가한다.
function add3(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      answer += i + j;
    }
  }
  return answer;
}
console.log(add3(6));
```

## 객체와 배열에서의 Big O

### Big O of Objects

- 삽입, 제거, 접근 ➡️ O(1)
- 검색 ➡️ O(n) // 모든 값들에 접근하여 검색하기 때문!

### 메서드

- Object.keys ➡️ O(N)
- Object.values ➡️ O(N)
- Object.entries ➡️ O(N)

👉🏻 객체의 요소 개수에 따라 해당 연산의 개수가 정해지기 때문

- hasOwnProperty ➡️ O(1)

### Big O of Array

- 접근 ➡️ O(1)
- 검색 ➡️ O(N) // 모든 값들에 접근하여 검색하기 때문!

### 메서드

- push, pop ➡️ O(1)
- shift, unshift, slice, splice ➡️ O(N), index를 다시 정의해야하기 때문!
- sort ➡️ O(N \* logN)
