﻿#pragma strict

function Start () {

}

function Update () {
	transform.position.z = 0;
	transform.Translate(Vector3(0,-5,0) * Time.deltaTime);
	
	if (!GetComponent.<Renderer>().isVisible){
		Destroy(gameObject);
	}
}