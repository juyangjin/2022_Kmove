package spring.printer;

import spring.entity.Exam;

public class RowPrint implements Print {

	Exam _exam;
	public void Do() {
		// TODO Auto-generated method stub
		
		System.out.printf("total = %d.\n" , this._exam.Total());
		System.out.printf("avg = %f\n" , this._exam.Average());
	}

	public void setData(Exam e) {
		// TODO Auto-generated method stub
		
		this._exam = e;
		
	}
	
}
