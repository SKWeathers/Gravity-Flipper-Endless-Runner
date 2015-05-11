#pragma strict

private var thisTransform : Transform;
private var moveSpeed : float;

function Start () 
	{
	thisTransform = this.transform;
	moveSpeed = Random.Range (0.1, 1);
	}

function Update () 
	{
	thisTransform.position.x -= moveSpeed * Time.deltaTime;
	}