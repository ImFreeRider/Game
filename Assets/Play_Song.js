#pragma strict
var Redobject : GameObject;
var Blueobject : GameObject;
var Greenobject : GameObject;
var Yellowobject : GameObject;
var Whatpart: int = 0;
var Music: AudioClip;

function Start () {
if (Whatpart<=10){
	SongStart();
	//GetComponent.<AudioSource>().PlayOneShot(Music,0.7);
	Debug.Log("Song play Start");
	
	return;
	}
}
function SongStart() {
	Debug.Log("Note 1 drop");
	yield WaitForSeconds(1);
	Instantiate(Greenobject, transform.position + Vector3(1.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.4);
	Debug.Log("Note 2 drop");
	Instantiate(Greenobject, transform.position + Vector3(1.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.4);
	Instantiate(Blueobject, transform.position + Vector3(0.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.4);
	Instantiate(Yellowobject, transform.position + Vector3(-0.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.4);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 5, 0), Quaternion.Euler(0,0,0) );
	Instantiate(Yellowobject, transform.position + Vector3(-0.5, 5, 0), Quaternion.Euler(0,0,0) );
	for (var i:int=0;i<3;i++){
	yield WaitForSeconds(2.35);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.25);
	Instantiate(Yellowobject, transform.position + Vector3(-0.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.5);
	Instantiate(Greenobject, transform.position + Vector3(1.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 5, 0), Quaternion.Euler(0,0,0) );
	Instantiate(Yellowobject, transform.position + Vector3(-0.5, 5, 0), Quaternion.Euler(0,0,0) );}
	yield WaitForSeconds(3.6);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 5, 0), Quaternion.Euler(0,0,0) );
	Instantiate(Yellowobject, transform.position + Vector3(-0.5, 5, 0), Quaternion.Euler(0,0,0) );
	for (i=0;i<11;i++){
	yield WaitForSeconds(2.35);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.25);
	Instantiate(Yellowobject, transform.position + Vector3(-0.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.5);
	Instantiate(Greenobject, transform.position + Vector3(1.5, 5, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 5, 0), Quaternion.Euler(0,0,0) );
	Instantiate(Yellowobject, transform.position + Vector3(-0.5, 5, 0), Quaternion.Euler(0,0,0) );}
	Whatpart+=1;
	Debug.Log("SongStartEnd");
	return;
}
