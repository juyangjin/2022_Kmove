package spring.entity;

public class MidExam implements Exam {
	 
	
	int 국어, 영어, 수학;

	@Override
	public int Total() {
		// TODO Auto-generated method stub
		return 국어+영어+수학;
	}

	public float Average() {
		return this.Total() /3.0f;
	}

	@Override
	public String toString() { //국어, 영어, 수학을 이용해서 문자열로 반환할 수 있는 함수를 만듦.
		return "MidExam [국어=" + 국어 + ", 영어=" + 영어 + ", 수학=" + 수학 + "]";
	}


}
