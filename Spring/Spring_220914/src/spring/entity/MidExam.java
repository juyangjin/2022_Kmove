package spring.entity;

public class MidExam implements Exam {
	
	int 국어, 영어, 수학;

	@Override
	public int Total() {
		// TODO Auto-generated method stub
		return 국어+영어+수학;
	}

	@Override
	public float Average() {
		// TODO Auto-generated method stub
		return this.Total()/ 3.0f;
	}

	@Override
	public String toString() {
		return "MidExam [국어=" + 국어 + ", 영어=" + 영어 + ", 수학=" + 수학 + "]";
	}
	
}
