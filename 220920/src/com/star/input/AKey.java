package com.star.input;

public class AKey implements Key {
	
	int keycode = 97;
//	public void Akey(int code) {
//		keycode = code;
//	}

	@Override
	public void setKey(int code) {
		// TODO Auto-generated method stub
		keycode = code;
	}

	@Override
	public int getkey() {
		// TODO Auto-generated method stub
		return 0;
	}

}
