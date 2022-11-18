package com.example.test.controllor;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
	@ResponseBody
	@RequestMapping(value = "testRequestMapping", method = RequestMethod.GET)
	public String RequestMappingTest(@RequestParam String msg1, String msg2) {
		
		System.out.println(msg1);
		System.out.println(msg2);
		
		return msg2;
	}
}