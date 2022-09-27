package spring.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.entity.Exam;
import spring.entity.FinalExam;
import spring.entity.MidExam;
import spring.printer.ColPrint;
import spring.printer.Print;
import spring.printer.RowPrint;

public class Program {
	
	public static void main(String[] args) {
		
		ApplicationContext ctx = new ClassPathXmlApplicationContext("spring/main/setting.xml");  //xml 경로 설정 
		
		Print _col = ctx.getBean(ColPrint.class);
		_col.print();

	}

}
