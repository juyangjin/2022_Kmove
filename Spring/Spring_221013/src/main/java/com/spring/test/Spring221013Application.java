package com.spring.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//static은 변하지 않는 고정 html파일 넣기
//templates은 여러가지 바꿀 수 있는 틀이라 생각하면 편리, 마찬가지로 html 파일

@SpringBootApplication //스프링 부트가 시작되는 어노테이션 
public class Spring221013Application {

	public static void main(String[] args) { //프로그램의 진입점
		SpringApplication.run(Spring221013Application.class, args); //run을 이용해서 해당 class 실행하라
	}//실행하면 tomcat이 돌아가고 있음을 알 수 있다. (웹서버, 기본적으로 8080포트가 설정되어 있다. 원래 웹사이트의 기본 포트는 80이다. 
	//만약에 해당 컴퓨터에서 웹서버를 사용하고 있을 가능성을 생각하여 테스트 서버를 위해 8080을 사용하는 것이다.
	//실행중에는 locathost:8080으로 접속 가능.

}
