package com.spring.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.spring.test.dto.*;
import com.spring.test.entity.UserRepository;
import com.spring.test.entity.entityUser;

@Controller
public class TemplateController {
	
	@Autowired
	UserRepository repo;
	
	@GetMapping("/hi")  //웹에서 해당 문자열로 맵핑하면 페이지가 호출됨
	public String TemplateHello(Model m)
	{
		m.addAttribute("value","hahaha"); //value에 hahaha가 저장된다.
		m.addAttribute("value1","juyang_jin");
		m.addAttribute("value2","https://www.google.com/" 
		+ "images/branding/googlelogo/1x/" 
		+ "googlelogo_color_272x92dp.png");
		
		String[] titles = {"네이버","link","회원가입","그외1","그외2"}; //배열에 타이틀값들을 저장
		String[] links = {"https://www.naver.com/", //배열에 하이퍼링크들을 저장 
							"#",
							"https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR&cpno=",
							"#",
							"#"};
		
		m.addAttribute("titles", titles); //배열값이 저장됨
		m.addAttribute("links", links); //배열값이 저장됨
		
		return "hello"; //hello.html 페이지를 불러옴
	}
	
	@GetMapping("/login")  //웹에서 해당 문자열로 맵핑하면 페이지가 호출됨
	public String Templatelogin()
	{
		return "login/login.html";
	}
	
	@PostMapping("/form/form1")
	public String PostFrom (Form1 dto) //클래스(함수)
	{
		if(dto.getEmail() =="") {	
		}
		
		if(dto.getName() =="") {	
		}
		
		System.out.println(dto.toString());
		
		return "login/login.html";
	}
	
	@GetMapping("/user")  //웹에서 해당 문자열로 맵핑하면 페이지가 호출됨
	public String dtoUser()  {
		
		return "login/user";
	}
	
	@PostMapping("/controller/user") //GetMapping과 달리 호출 주소가 아님, html과 연결부분이니 착각하지 말것.
	public String TemplateControllUser (dtoUser dto) //클래스(함수)
	{	
		System.out.println(dto.toString());
		
		entityUser entity = new entityUser(null, dto.getName(), dto.getAge(), dto.getAddress());
		
		System.out.println(entity.toString());
		
		entityUser saved = repo.save(entity);
		
		System.out.println(saved.toString());
		
		return "login/User";
	}
	
//    Iterable<Product> product = productRepository.findAll();
//    product.findAll
	
	@GetMapping("/findall")
	public String findAll(Model m) {
		
		Iterable<entityUser> product = repo.findAll();
		product.forEach((p) -> {
			m.addAttribute(p.getId().toString(),p.getName()); //Long타입을 toString으로 문자열캐스팅
			//System.out.println(p.getName());
		});
		//repo.findAll();
		
		m.addAttribute("result","");
		return "findall";
	}
	
}
