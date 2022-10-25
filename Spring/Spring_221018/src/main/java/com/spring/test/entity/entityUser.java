package com.spring.test.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class entityUser {
	
	@Id
	@GeneratedValue
	private Long id; //id
	@Column
	private String name;
	@Column
	private String age;
	@Column
	private String address; //테이블을 하나씩 이루고 있는 컬럼이다.
	
	public entityUser(){
		
	}
	public entityUser(Long id, String name, String age, String address) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.address = address;
	}
	
	

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	@Override
	public String toString() {
		return "entityUser [id=" + id + ", name=" + name + ", age=" + age + ", address=" + address + "]";
	}	

}
