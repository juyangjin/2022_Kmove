package spring.entitiy;

public class FinalExam implements Exam {  //FinalExam이 exam을 실행
	
	int art = 5;
	int spring;
	int java;
	
	@Override
	public int Total() {
		// TODO Auto-generated method stub
		return art+ spring + java;  //art,spring,java를 return한다.
	}
	@Override
	public float Average() {
		// TODO Auto-generated method stub
		return  this.Total() / 3.0f; //this.Total의 평균값을 return한다.
	}

}
