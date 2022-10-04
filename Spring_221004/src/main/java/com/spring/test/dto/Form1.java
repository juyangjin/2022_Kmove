package com.spring.test.dto;

public class Form1 {
	private String name;
	private String email;
	
	public Form1(String name, String email) {
		
		this.name = name;
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Form1 [name=" + name + ", email=" + email + "]";
	}
	
}
