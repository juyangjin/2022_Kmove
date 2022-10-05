package spring.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.printer.ColPrint;
import spring.printer.Print;

public class program {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext ctx =
				new ClassPathXmlApplicationContext("classpath:/setting.xml"); 
		
		Print _col = ctx.getBean(ColPrint.class);
		_col.print();

	}

}

