#pragma strict

var menuSkin : GUISkin;

private var menuArea : Rect;
private var menuAreaNormalized : Rect;
private var menuPage : String = "main";

function Start ()
	{
	menuArea = Rect(0.5, 0.5, 200, 160);
	menuAreaNormalized = Rect(menuArea.x * Screen.width - (menuArea.width * 0.5),
		menuArea.y * Screen.height - (menuArea.height * 0.5),
		menuArea.width, menuArea.height);
	}

function OnGUI () 
	{
	GUI.skin = menuSkin;
	GUI.BeginGroup (menuAreaNormalized);
	
	if (menuPage == "main")
		{
		if (GUI.Button (Rect (0, 0, 200, 50), "Play"))
			{
			ButtonAction ("World 1");
			}
		if (GUI.Button (Rect (0, 55, 200, 50), "High Scores"))
			{
			menuPage = "highScores";
			print ("You pressed Settings");
			}
		if (GUI.Button (Rect (0, 110, 200, 50), "Quit"))
			{
			ButtonAction ("quit");
			}
		}
	else if (menuPage == "highScores")
		{
		GUI.Label (Rect (0, 0, 200, 25), "Longest Distance: " + PlayerPrefs.GetInt("Distance"));
		if (GUI.Button (Rect (0, 110, 200, 50), "Back"))
			{
			menuPage = "main";
			}
		}
		
	GUI.EndGroup ();
	}
	
function ButtonAction (levelName : String)
	{
	if (levelName != "quit")
		{
		Application.LoadLevel (levelName);
		}
	else
		{
		Application.Quit();
		print ("Quitter");
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	