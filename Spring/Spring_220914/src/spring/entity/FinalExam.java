package spring.entity;

public class FinalExam implements Exam {  //FinalExam이 exam을 실행
	
	int 미술 = 10, 음악 = 20, 체육 = 50;
	
	public int get미술() {
		return 미술;
	}
	public void set미술(int 미술) {
		this.미술 = 미술;
	}
	public int get음악() {
		return 음악;
	}
	public void set음악(int 음악) {
		this.음악 = 음악;
	}
	public int get체육() {
		return 체육;
	}
	public void set체육(int 체육) {
		this.체육 = 체육;
	}
	@Override
	public int Total() {
		// TODO Auto-generated method stub
		return 미술+음악+체육;  //art,spring,java를 return한다.
	}
	@Override
	public float Average() {
		// TODO Auto-generated method stub
		return  this.Total() / 3.0f; //this.Total의 평균값을 return한다.
	}

}
