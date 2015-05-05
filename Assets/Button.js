#pragma strict
var WhatButton: int = 1;
var object: Transform;
var piston1: Transform;
var piston2: Transform;
var piston3: Transform;
var piston4: Transform;
var SoundError: GameObject;
var SoundRight: GameObject;
var Sparks: GameObject;

function Start () {
	piston1 = GameObject.Find("piston1").transform;
	piston2 = GameObject.Find("piston2").transform;
	piston3 = GameObject.Find("piston3").transform;
	piston4 = GameObject.Find("piston4").transform;
	if ( WhatButton == 1){
		object = GameObject.Find("RedNoteButton").transform;
	}
	if ( WhatButton == 2){
		object = GameObject.Find("YellowNoteButton").transform;
	}
	if ( WhatButton == 3){
		object = GameObject.Find("BlueNoteButton").transform;
	}
	if ( WhatButton == 4){
		object = GameObject.Find("GreenNoteButton").transform;
	}
	Debug.Log("Button starts");
}

function Update () {
	if (Input.GetButtonDown ("1")) {
				piston1.position.y=-4;
		if ( WhatButton == 1 ) {
			if (transform.position.y <= object.position.y+1)
			{
				Instantiate(SoundRight, transform.position + Vector3(-1.5, 4, 0), Quaternion.Euler(0,0,0) );
				Instantiate(Sparks, transform.position + Vector3(-0.8, 0, -2), Quaternion.Euler(0,0,0) );
				MainCode.score += 100;
				Destroy(gameObject);
			}
		}
		Debug.Log("Piston1 up");
	}
	if (Input.GetButtonDown ("2")) {
			piston2.position.y=-4;
		if ( WhatButton == 2 ) {
			if (transform.position.y <= object.position.y+1)
			{
				Instantiate(SoundRight, transform.position + Vector3(-0.5, 4, 0), Quaternion.Euler(0,0,0) );
				Instantiate(Sparks, transform.position + Vector3(-0.5, 0, -2), Quaternion.Euler(0,0,0) );
				MainCode.score += 100;
				Destroy(gameObject);
			}		
		}
	}
	if (Input.GetButtonDown ("3")) {
		piston3.position.y=-4;
		if ( WhatButton == 3 ) {
			if (transform.position.y <= object.position.y+1)
			{
				Instantiate(SoundRight, transform.position + Vector3(0.5, 4, 0), Quaternion.Euler(0,0,0) );
				Instantiate(Sparks, transform.position + Vector3(0.5, 0, -2), Quaternion.Euler(0,0,0) );
				MainCode.score += 100;
				Destroy(gameObject);
			}		
		}
	}
	if (Input.GetButtonDown ("4")) {
		piston4.position.y=-4;
		if ( WhatButton == 4 ) {
			if (transform.position.y <= object.position.y+1)
			{
				Instantiate(SoundRight, transform.position + Vector3(1.5, 4, 0), Quaternion.Euler(0,0,0) );
				Instantiate(Sparks, transform.position + Vector3(0.8, -0.5, -2), Quaternion.Euler(0,0,0) );
				MainCode.score += 100;
				Destroy(gameObject);
			}		
		}
	}
}