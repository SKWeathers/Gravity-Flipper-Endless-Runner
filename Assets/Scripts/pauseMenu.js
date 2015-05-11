#pragma strict

var pauseSkin : GUISkin;

private var pauseArea : Rect;
private var pauseAreaNormalized : Rect;
private var pauseOpen : boolean;

function Start () 
	{
	pauseOpen = false;
	
	pauseArea = Rect(0.5, 0.5, 200, 155);
	pauseAreaNormalized = Rect(pauseArea.x * Screen.width - (pauseArea.width * 0.5),
		pauseArea.y * Screen.height - (pauseArea.height * 0.5),
		pauseArea.width, pauseArea.height);
	}

function Update () 
	{
	if (Input.GetButtonUp("Pause"))
		{
		if (pauseOpen == false)
			{
			pauseOpen = true;
			Time.timeScale = 0;
			}
		else if (pauseOpen == true)
			{
			pauseOpen = false;
			Time.timeScale = 1;
			}
		}
	}
	
function returnPaused () : boolean
	{
	return pauseOpen;
	}

function OnGUI () 
	{
	if (!pauseOpen)
		{
		return;
		}
		
	GUI.skin = pauseSkin;
	GUI.BeginGroup (pauseAreaNormalized);
	
	GUI.Label (Rect (0, 0, 200, 40), "Pause");
	if (GUI.Button (Rect (0,50,200,50), "Quit to Menu"))
		{
		Application.LoadLevel ("Menu");
		}
	if (GUI.Button (Rect (0,105,200,50), "Quit to Desktop"))
		{
		Application.Quit();
		}
		
	GUI.EndGroup ();
	}