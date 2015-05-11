#pragma strict

private var player : Transform;
private var thisTransform : Transform;

function Start () 
	{
	player = GameObject.FindWithTag("Player").GetComponent(Transform);
	thisTransform = this.transform;
	}

function Update () 
	{
	thisTransform.position.x = player.position.x;
	}