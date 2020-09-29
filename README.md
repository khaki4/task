# 해결 전략

### `Typing Game` 구현 전략
#### 게임에 필요한 구성요소 모델링

---
```
Clock
    # timeLeft: 남은 시간 계산
```
```
WordItem
    # isExpired: 시간을 초과상태
    # start: 해당 단어의 시간을 흐르게 함
    # compareWith: 사용자 입력값과 문제단어 비교
    # pass: 문제 성공/실패 설정
    # reset: 초기화
    # value
      {
        second:         문제 남은 시간
        text:           문제 단어
        timeConsumed:   사용 시간
        isPassed:       해결 유무   
      }
```
```
WordItemQueue 
    # size:     현재 남아있는 WordItem 개수
    # list:     WordItem[] 리턴
    # dequeue:  0번째 인덱스의 WordItem 리턴
```
```
GameStat.service
    # total:                총 점수
    # consumedAverageTime:  단어 당 해결 시간
    # isFinished:           게임 종료 유무
    # clear:                게임 초기화
    # setWordItems:         게임 데이터 설정 
```
```
WordData.service
    # get: fetch api를 통해 게임 데이터를 가져온다.
```

### 게임 구현

---
#### 시작
```
    - wordData.service를 이용해 게임 데이터를 가져온다.
    - 가져온 데이터를 이용해 WordItemQueue를 생성한다. 
    - WordItemQueue dequeue를 통해 첫 WordItem을 가져와 화면에 update한다.
```
#### 초기화
```
    - gameStatService clear()를 이용하여 게임을 초기화 한다.
    - 화면을 update한다.
```

#### 남은시간
```
    100ms에 한번씩 WordItem의 isExpired를 체크 
    - 시간 초과라면 WordItemQueue에서 새로운 WordItem을 꺼내 단어를 update한다.
    - 시간 초과가 아니라면 WordItem의 second을 가져와 남은 시간을 update한다.
```
#### 점수
```
    GameStat total을 이용하여 WordItem 중 pass=true 의 총 개수를 구한다.
```
#### 단어해결
```
    사용자가 단어입력후 enter를 눌렀을 때의 값을 WordItem의 compareWith를 통해 해결 유무를 판단한다.
    - 성공이라면 pass(true) -> 화면을 update한다.
    - 실패라면 사용자 단어입력 데이터를 초기화 한다. -> 화면을 update한다.
```
#### 결과화면으로 라우팅
```
    WordItemQueue 의 size = 0 일 경우
    AppRouter route()를 이용 '/complete'로 이동한다.
```
#### 단어 평균 답변 시간
```
   GameStat.service consumedAverageTime을 이용. 성공한 문제의 사용시간을 필터링하여 평균시간을 구한다.
```
#### 다시시작
```
    gameStatService clear()를 이용 게임을 초기화 하고 '/'으로 라우팅한다.
```

### 라우터
- `window.history.pushState` 를 이용해 화면 reload없이 url만 변경하고 해당 url에 맵핑되는 컴포넌트를 Render한다.
- `webpack.config.js` devServe option `historyApiFallback`을 이용하여 지정하지 않은 url로 진입했을 경우 `index.html`을 서빙하도록 한다.
   ```javascript
  devServer: {
     ...
     historyApiFallback: true
   }
  ```

### 테스트
- 단위 테스트는 [Jest](https://jestjs.io/) 를 사용한다.
- UI 보다는 `Model`과 `Service` 테스트에 주력한다.
