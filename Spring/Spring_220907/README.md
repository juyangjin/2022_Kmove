### <2022 09월 07일 수업>

## entity
- Midexam, Finalexam 클래스 파일과 Exam 인터페이스 파일을 생성하고, Exam에 total과 Average를 선언한다.  
- Midexam과 Finalexam 클래스는 Exam 인터페이스를 도구로 사용하며, Finalexam에 art,spring,java를 정수형으로 선언한다.  
- Finalexam에서 정수형 Total은 art,spring,java를 합친 값으로 리턴하며, 실수형 average는 this.Total을 이용하여 현재 클래스 내부에 있는 Total값을 불러와서 나누기 3.0f를 해서 평균값을 리턴하도록 한다.  

## main
- program파일에는 "처음 파일 스프링"을 출력
- xml을 절대경로로 설정했을 때 에러가 발생했었기 때문에 경로 내부에 setting.xml 파일을 옮기고 "classpath:/setting.xml"로 경로를 설정
- setting.xml 파일에서는 Finalexam의 bean id를 exam으로 설정하고, Colprint의 bean id는 print로 설정한다.
- ctx.getBean으로 xml에서 정의된 bean id인 exam을 불러오고, 같은방식으로 print도 불러온다. 

## printer
- Print 인터페이스에서는 Do()와, setData(exam e)를 정의함
- Colprint에서는 Print 인터페이스를 도구로 사용하고, 해당 인터페이스에 정의된 Do에 total값과 avg값을 각각 this._exam을 사용하여 정수형과 실수형으로 저장하고 출력한다. 그리고 setData도 this._exam = e로 값을 정의하여서 main에서 ctx.getBean으로 불러온 Finalexam에 저장값을 저장 
- printer에서는 Print 인터페이스를 도구로 사용하고 Exam클래스의 _exam을 정의함.
- Colprint의 Do에서는 저장된 this._exam.Total과 this._exam.Average를 출력함, setData에서는 this._exam = e로 저장

- **복습하다보니 getBean에 대한 이해도가 부족함, 이 부분 개인적으로 조금 더 공부할 것**
