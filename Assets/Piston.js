#pragma strict
var object1: Transform;
var object2: Transform;
var object3: Transform;
var object4: Transform;
function Start () {
	object1 = GameObject.Find("piston1").transform;
	object2 = GameObject.Find("piston2").transform;
	object3 = GameObject.Find("piston3").transform;
	object4 = GameObject.Find("piston4").transform;
}

function Update () {
		if (object1.position.y>-5.5){
			object1.transform.Translate(Vector3(0,-5,0) * Time.deltaTime);
		}
		if (object2.position.y>-5.5){
			object2.transform.Translate(Vector3(0,-5,0) * Time.deltaTime);
		}
		if (object3.position.y>-5.5){
			object3.transform.Translate(Vector3(0,-5,0) * Time.deltaTime);
		}
		if (object4.position.y>-5.5){
			object4.transform.Translate(Vector3(0,-5,0) * Time.deltaTime);
		}
}