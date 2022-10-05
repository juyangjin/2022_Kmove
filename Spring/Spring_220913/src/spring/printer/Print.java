package spring.printer;

import spring.entity.Exam;

public interface Print {
	public void print(); //void는 아무것도 리턴하지 않는다는 의미 
	public void setData(Exam e); //

}
