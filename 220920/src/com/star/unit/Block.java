package com.star.unit;

import com.star.input.Key;

public interface Block {
	public void Move(int v);
	public void Rotation();
	
	public void Move(Key k);
	public void setLineCheck(Block[] blocks);
}
