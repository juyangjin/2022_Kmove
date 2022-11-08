# 2022년 09월 13일 수업

## entity
### Exam
- 정수형으로 Total, 실수형으로 Average 정의
### FinalExam
- 정수형으로 미술,음악,체육을 각각 초기값을 포함하여 선언함.
- alt+shift+s 또는 source로 getter setter을 자동 생성하고, 같은 방식으로 toString도 생성함.
- Total에 미술+음악+체육을 합한 값을 리턴하고, Average에서 Total값을 3.0f로 나눈 값을 리턴함
### MidExam
- 정수형으로 국어,영어,수학을 선언함
- Total에서 국어+영어+수학을 합한 값을 리턴하고, Average에서 Total값을 3.0f로 나눈 값을 리턴함
- alt+shift+s 또는 source로로 toString을 자동 생성함

## main
### program
- program 클래스에서는 저번과 같이 "classpath:/setting.xml"로 xml 경로 설정
- getBean은 object를 리턴하므로 Exam클래스로 강제로 형변환을 시킨다.(xml에서 id로 가져온 것)
- 리스트형으로 Exam을 getBean함.
- `_mid1 = _list.get(0)`은 `_list`의 0번째 인덱스값을 호출하라는 의미임
- for문을 사용하여 Exam e를 `_list` 인덱스값만큼 반복

## printer
### Colprint
- print에서 `_data.Total()과 _data.Average()`를 출력`
- setData에서 `this._data = e;`를 저장
### Print
- print는 리턴값 없이 ()로 저장
- setData는 (Exam e)를 리턴
### RowPrint
- `Exam _data;` 선언
- print에서 Total과 Average값 출력
- setData에서 `this._data = e;` 리턴

**setData값에 대한 부분이 잘 이해되지 않음, 복습 필요**
