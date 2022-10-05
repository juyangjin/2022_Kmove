package spring.printer;

import spring.entity.Exam;

public class ColPrint implements Print{ //ColPrint가 Print를 실행

	private Exam _exam; 

	@Override
	public void Do() {
		// TODO Auto-generated method stub
		System.out.printf("total = %d, avg = %f",
				this._exam.Total(), this._exam.Average()); //_exam.Total값을 정수형으로, _exam.Average값을 실수형으로 출력한다.
	}

	@Override
	public void setData(Exam e) {
		// TODO Auto-generated method stub
		this._exam = e;
	}

	
}
