#pragma strict

var deathExplosion : ParticleSystem;
var gameOverText : GUIText;

private var lives : int = 3;
private var distance : float;
private var longestDistance : float;
private var playerTransform : Transform;

function Start () 
	{
	playerTransform = GameObject.FindWithTag("Player").transform;
	}

function returnLives () : int
	{
	return lives;
	}
	
function returnDistance () : float
	{
	distance = playerTransform.position.x + 28;
	return distance;
	}

function returnLongestDistance () : float
	{
	return longestDistance;
	}
	
function Die()
	{
	if (longestDistance < distance)
		{
		longestDistance = distance;
		}
	var explosion = Instantiate (deathExplosion, playerTransform.position, playerTransform.rotation);
	Destroy (explosion, 1);
	playerTransform.position.y = 100;
	lives -= 1;
	if (lives <= 0)
		{
		GameOver();
		}
	else
		{
		yield WaitForSeconds (1);
		playerTransform.position.y = 5.12;
		playerTransform.position.x = -28;
		}
	}
	
function GameOver ()
	{
	playerTransform.gameObject.SetActive (false);
	gameOverText.gameObject.SetActive(true);
	if (PlayerPrefs.GetInt("Distance") < longestDistance)
		{
		PlayerPrefs.SetInt("Distance", longestDistance);
		}
	yield WaitForSeconds (1);
	Application.LoadLevel("Menu");
	}





