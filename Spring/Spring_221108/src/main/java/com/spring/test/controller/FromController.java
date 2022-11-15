package com.spring.test.controller;

import org.springframework.stereotype.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class FromController {
	
	@GetMapping("/registerpage")
	public String FormRegister()
	{
		//System.out.println("FormRegister");
		return "form/register";
	}
	
	@PostMapping("/register_try")
	public String TryRegister()
	{
		return "form/register";
	}
}
