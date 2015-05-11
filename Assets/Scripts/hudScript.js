#pragma strict

var hudSkin : GUISkin;

private var hudArea : Rect;
private var score : scoreScript;

function Start () 
	{
	hudArea = Rect(20, 5, 700, 50);
	score = this.transform.GetComponent(scoreScript);
	}

function OnGUI ()
	{
	GUI.BeginGroup (hudArea);
	GUI.skin = hudSkin;
	
	GUI.Label (Rect (0, 0, 150, 50), "Lives: " + score.returnLives());
	GUI.Label (Rect (150, 0, 200, 50), "Distance: " + score.returnDistance().ToString("0"));
	GUI.Label (Rect (350, 0, 350, 50), "Longest Distance: " + score.returnLongestDistance().ToString("0"));
	
	GUI.EndGroup ();
	}