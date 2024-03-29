## 서비스 소개

### Cigma

삼성청년소프트웨어아카데미 8기 자율프로젝트 - 오픈소스 도메인

---

### 개발 기간

2023년 4월 ~ 2023년 5월

---

### 대표 Contributers

`황진태` FE, BE, IDE FE, IDE BE 개발 담당

`안준홍` BE, 메인 서버 개발, k3s를 활용한 서버 구성 담당

`이윤진` FE, 메인 FE, IDE FE 개발 담당

`이한나` FE, 메인 FE, IDE FE 개발 담당

---

### 기획의도

오픈소스 도메인으로서 개발자들을 위한 서비스. 여러 명이서 함께 작업할 때 실시간으로 코드를 공유하여 협업을 용이하게 한다. 텍스트 작성 및 댓글 작성으로 사용자들간 실시간 소통이 활발하게 이루어지도록 한다.

---
### 기술스택

![KakaoTalk_Photo_2023-05-19-07-05-24 001.png](https://github.com/profitjean/profitjean/assets/59593223/f3e1b661-f60e-4405-9b73-b245483e5ade)

### 프로젝트 구조

![KakaoTalk_Photo_2023-05-19-07-05-25 002.png](https://github.com/profitjean/profitjean/assets/59593223/a7603949-d907-4b41-b371-01e67aeced7b)


### 기능소개

---

### 팀 생성

Cigma는 `팀` 과 `프로젝트`  로 구성되어있습니다. `팀` 은 자유롭게 생성 가능합니다. `프로젝트` 는 `팀` 당 최대 1개까지 생성가능합니다. 여러 개의 프로젝트를 생성하고 싶다면 팀을 새롭게 개설해야합니다.

여러 프로젝트 생성 기능은 추후 업데이트 예정입니다.

![Untitled](https://github.com/profitjean/profitjean/assets/59593223/3e9729b8-4c69-40a1-86e5-4ef6c31d88d6)

좌측 사이드바에서 팀 이름을 입력하면 새롭게 팀이 생성됩니다.

### 프로젝트 생성

![Untitled](https://github.com/profitjean/profitjean/assets/59593223/764c5763-7289-4b57-8013-633e518db351)

### 팀원 초대

![Untitled](https://github.com/profitjean/profitjean/assets/59593223/f1229599-1c93-4547-88cb-56b698d62e57)

최대 6명까지 한 팀에 초대하여 프로젝트 작업을 공유할 수 있습니다.

### 팀 삭제

![Untitled](https://github.com/profitjean/profitjean/assets/59593223/9bd47d28-cf68-4fe5-9136-8dc4091f74f9)

팀을 개설한 팀장만 팀 삭제가 가능합니다.

# IDE 관련

### 화면 구성 요소 설명

![Untitled](https://github.com/profitjean/profitjean/assets/59593223/eb154711-ba06-4449-93ff-1c4456befde4)

### 전체 IDE 화면

![Untitled](https://github.com/profitjean/profitjean/assets/59593223/f2776cf2-4658-464d-ae27-8b0375c3ae7a)

파일 탐색기

1. 프로젝트 다운로드
2. 전체 폴더 토글 열기
3. 전체 폴더 토글 닫기
4. 새 파일 생성
5. 새 폴더 생성

![Untitled](https://github.com/profitjean/profitjean/assets/59593223/33737df0-ada5-4638-8842-d8cedfa49cf0)

헤더 바

1. 파일/폴더 트리 사이드 표시 on/off
2. 텍스트 box 입력 on/off
3. 터미널 사이드 표시 on/off
4. 팀이름 및 프로젝트 이름 표시
5. 접속 중인 사용자 표시
6. 실행 버튼
7. 터미널

![Untitled](https://github.com/profitjean/profitjean/assets/59593223/7f10348c-69d7-4828-931c-a795063f76df)

코드 에디터

1. 코드 에디터 닫기
2. 코드 에디터 파일 이름
3. 코드 에디터 접기/열기
4. comment 표시 on/off
5. 코드 입력 부분

---

### 단축키 설명 및 키 사용방법

- space 키 누른 상태에서 drag : 워크스페이스 화면 이동
- ctrl 키 누른 상태에서 scroll : 워크스페이스 확대 / 축소
- shift 키 누른 상태에서 scroll : 워크스페이스 가로 스크롤
- t 키 : 텍스트 box 입력 모드 활성화
    - 워크 스페이스 클릭 : 텍스트 입력 box 생성
        - 텍스트 입력 후 외부 워크 스페이스 클릭 시 텍스트 box 생성
        - 내용이 없으면 텍스트 box 생성 안됨
    - esc : 텍스트 box 입력 모드 해제

## 워크 스페이스 관련 (메인)

- 텍스트 box 생성
    - 단축키 t 사용 관련 참고
    - 헤더의 텍스트 box 입력 버튼 클릭 후 워크 스페이스 클릭
        - 텍스트 입력 box 생성
            - 텍스트 입력 후 외부 워크 스페이스 클릭 시 텍스트 box 생성
            - 내용이 없으면 텍스트 box 생성 안됨
- 텍스트 box 수정
    - 기존에 생성된 텍스트 box 더블 클릭
- 텍스트 box 삭제
    - 기존에 생성된 텍스트 box 더블 클릭, 내용 제거 후 외부 워크 스페이스 클릭
- 코드 에디터 생성
    - 편집하고자 하는 파일을 파일 탐색기에서 더블 클릭
    - 코드 에디터는 지정된 위치에 생성됨
- 코드 에디터 삭제
    - 코드 에디터의 헤더 좌측 X 아이콘 클릭
- 코드 에디터 코드 수정
    - 코드 에디터의 에디터 영역을 더블 클릭 후 수정
- 코드 에디터 접기 / 열기
    - 코드 에디터의 헤더 좌측에 화살표 아이콘 클릭
- comment 입력 방법
    - 코드 에디터의 헤더 좌측 맨끝 아이콘 클릭 : 코멘트 창 표시
    - 코멘트 입력 영역 클릭 후 코멘트 내용 작성 후 enter

## 파일 탐색기 (좌측 사이드 바)

### 파일 / 폴더 생성

- 파일 생성
    - 탐색기 상단에 ‘파일 +’ 아이콘 클릭
    - 활성화된 파일 이름 입력창에 파일 이름 입력
        - 입력된 내용이 없을 경우 파일 생성 취소
        - esc 키 입력할 경우 파일 생성 취소
- 폴더 생성
    - 탐색기 상담에 ‘폴더 +’ 아이콘 클릭
    - 활성화된 폴더 이름 입력창에 폴더 이름 입력
        - 입력된 내용이 없을 경우 폴더 생성 취소
        - esc 키 입력할 경우 폴더 생성 취소

### 파일 / 폴더 이름 수정

- 파일 이름 수정
    - 수정하고자 하는 파일 우측에 연필 아이콘 클릭
    - 수정하고자 하는 파일 이름 입력
        - 입력된 내용이 없을 경우 파일 이름 수정 취소
        - esc 키 입력할 경우 파일 이름 수정 취소
- 폴더 이름 수정
    - 수정하고자 하는 폴더 우측에 연필 아이콘 클릭
    - 수정하고자 하는 폴더 이름 입력
        - 입력된 내용이 없을 경우 폴더 이름 수정 취소
        - esc 키 입력할 경우 폴더 이름 수정 취소

### 파일 / 폴더 이동

- 파일 이동
    - 파일을 클릭한 상태에서 원하는 위치에서 클릭 해제 (drag&drop)
- 폴더 이동
    - 폴더를 클릭한 상태에서 원하는 위치에서 클릭 해제 (drag&drop)

### 파일 / 폴더 업로드

- 파일 업로드
    - 파일을 클릭한 상태에서 파일 탐색기에 나타나는 Upload 위치에서 클릭 해제 (drag&drop)
- 폴더 업로드
    - 폴더를 클릭한 상태에서 파일 탐색기에 나타나는 Upload 위치에서 클릭 해제 (drag&drop)
    - 폴더 업로드 시 내부에 존재하는 모든 파일들이 업로드됨 (약간의 시간이 걸림)
    - 폴더 내부에 파일이 존재하지 않을 경우 업로드 안됨

## 터미널 (우측 사이드 바)

- 터미널 표시
    - 헤더 좌측의 터미널 아이콘 클릭
- 터미널 입력
    - 터미널 창 클릭 후 텍스트 입력


## 서버 포트

- 메인 포트 : 5000

---
