package spring.printer;

import spring.entity.Exam;

public class ColPrint implements Print {
 
	Exam _data;
	
//	public ColPrint(Exam e) { //생성자를 통한 인젝션도 가능하고, 세터게터로도 인젝션이 가능하다.
//		this._data = e;
//	}
	
	@Override
	public void print() {
		// TODO Auto-generated method stub
		System.out.printf("%d, %f",_data.Total(), this._data.Average());
		
	} 

	@Override
	public void setData(Exam e) {
		// TODO Auto-generated method stub
		this._data = e;
		
	}

}
