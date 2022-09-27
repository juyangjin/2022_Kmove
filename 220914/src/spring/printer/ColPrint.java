package spring.printer;

import spring.entity.Exam;

public class ColPrint implements Print{ //ColPrint가 Print를 실행

	private Exam _data; 

	public ColPrint()
	{
		
	}
	public ColPrint(Exam e)
	{
		this._data = e;
	}
	
		@Override
	public void print() {
		// TODO Auto-generated method stub
		System.out.printf("%d, %f",
				_data.Total(), this._data.Average());
	}

	@Override
	public void setData(Exam e) {
		// TODO Auto-generated method stub
		this._data = e;
	}



	
}
