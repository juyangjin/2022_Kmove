package com.spring.test.dto;

public class Form1 {
	private String id;
	private String pswd1;
	private String name;
	
	public Form1(String id, String pswd1, String name) {
		super();
		this.id = id;
		this.pswd1 = pswd1;
		this.name = name;
	}

	@Override
	public String toString() {
		return "Form1 [id=" + id + ", pswd1=" + pswd1 + ", name=" + name + "]";
	}

	
}
