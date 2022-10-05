package spring.printer;

import spring.entity.Exam;

public class RowPrint implements Print {

	Exam _data;
	
	public RowPrint() {
		
	}
	
	public RowPrint(Exam _data) {
		
		this._data = _data;
	}
	
	@Override
	public void print() {
		// TODO Auto-generated method stub
		
		System.out.println("");
		System.out.printf("%d \n", this._data.Total());
		System.out.printf("%d \n", this._data.Average());
		
	}

	public void setData(Exam e) {
		// TODO Auto-generated method stub
		
		this._data = e;
		
	}

	
	
}
