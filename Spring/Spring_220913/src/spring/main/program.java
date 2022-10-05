package spring.main;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.entity.Exam;
import spring.entity.FinalExam;
import spring.entity.MidExam;
import spring.printer.ColPrint;
import spring.printer.Print;
import spring.printer.RowPrint;


public class program {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		ApplicationContext ctx =
				new ClassPathXmlApplicationContext("classpath:/setting.xml"); //인터페이스이기 때문에 new를 이용해 인스턴스화 불가, 선언만 되어있는 상태이기 때문
																		      //그래서 ClassPathXmlApplicationContext를 이용해 경로설정
		Exam _mid = (Exam) ctx.getBean("mid"); //getbean은 obj를 리턴하므로, Exam으로 강제 형변환을 시킨다.
		Print _col = (Print) ctx.getBean("colPrint"); // setting에서 가져옴
		
		_col.print();
		List<Exam> _list = (List<Exam>) ctx.getBean("_list");
		
		Exam _mid1 = _list.get(0); //_list에 있는 0번째(첫번째) 인덱스 값 호출
		
		for(Exam e : _list) //_list 배열의 인덱스값 만큼 반복됨.
		{
			System.out.println("\n" + e); //_list 인덱스값만큼 연속으로 출력됨.\n으로 다음줄로 넘김설정 
		}
		

	}

}
