package spring.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.entity.Exam;
import spring.printer.ColPrint;
import spring.printer.Print;
import spring.printer.RowPrint;

public class Program {
	
	public static void main(String[] args) {
		
		System.out.println("처음 자바 스프링"); //출력
		
		ApplicationContext ctx = 
				new ClassPathXmlApplicationContext("spring/main/setting.xml");  //xml 경로 설정
		
		Exam _exam = (Exam) ctx.getBean("exam"); 
		
		Print _print = (Print) ctx.getBean("print");
		//Print _print = new RowPrint();
		_print.setData(_exam);
		_print.Do();
	}

}
