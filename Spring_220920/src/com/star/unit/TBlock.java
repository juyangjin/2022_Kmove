package com.star.unit;

import com.star.input.Key;

public class TBlock implements Block {
	
	int x, y;
	int degree = 0;
	
	public TBlock()
	{
		System.out.println("TBlock");
	}
	
	@Override
	public void Move(int v) {
		// TODO Auto-generated method stub
		if(v == 97) {
			x -= 1;
			System.out.println("왼쪽으로 이동");
		}
			
		else if(v == 100) {
			x += 1;
			System.out.println("오른쪽으로 이동");
		}
			
		else if(v == 115) {
			y += 1;
			System.out.println("아래로 이동");
		}
		
		System.out.println(x + "/" + y);
		
	}
	
	@Override
	public void Rotation() {
		// TODO Auto-generated method stub
			
			degree += 90;
			degree = (degree + 90) % 360;
			
			System.out.println("현재 각도는" + degree);			
	}

	@Override
	public void setLineCheck(Block[] blocks) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void Move(Key k) {
		// TODO Auto-generated method stub
		this.Move(k.getkey());
		
	}

}
