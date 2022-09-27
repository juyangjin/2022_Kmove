package com.star.main;

import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.star.input.Key;
import com.star.unit.Block;
import com.star.unit.TBlock;

public class main {
	
	static Block current;
	
	public static void main(String[] args) {
		
		ApplicationContext ctx = new 
				ClassPathXmlApplicationContext("com/star/main/setting.xml");
	
		current = new TBlock();
		
	//	Block t = new TBlock();
	//	Block o = new OBlock();
	//	Block i - new IBlock();
		
		Timer timer = new Timer();
		TimerTask task = new TimerTask() {
			
			
			public void run() {
				System.out.println("블럭을 만들었다.");
			}
		};
		
		timer.schedule(task, 2000, 1000);
		
		while(true) 
		{
			int keyCode;
			
			try {
				keyCode = System.in.read();
				//System.out.println(keyCode);
				
				if(keyCode == 97)
					current.Move((Key)ctx.getBean("a"));
				if(keyCode == 100)
					current.Move((Key)ctx.getBean("d"));
				if(keyCode == 115)
					current.Move((Key)ctx.getBean("s"));
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
