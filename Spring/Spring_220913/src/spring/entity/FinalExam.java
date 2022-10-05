package spring.entity;

public class FinalExam implements Exam { 
	//alt + shift + s 단축키로 getter setter를 생성, 또는 Source에서 생성
	
	int 미술 = 10, 음악 = 20, 체육 = 50; //setting에서 property로 value값을 바꿔주면 
	
	@Override
	public String toString() {
		return "FinalExam [미술=" + 미술 + ", 음악=" + 음악 + ", 체육=" + 체육 + "]";
	}							  //선언된 값과 무관하게 출력값은 바뀌게 된다.

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
		return 미술+음악+체육;
	}

	@Override
	public float Average() {
		// TODO Auto-generated method stub
		return this.Total()/ 3.0f;
	}


}
