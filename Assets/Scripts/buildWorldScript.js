#pragma strict

//instantiates new tiles and destroys old ones as player moves forward

//array of all tile prefabs
var tileArray : Transform[];
var cloudArray : Transform[];

private var nextTileX : float = 0;
private var bottomTile : int;
private var topTile : int;
private var tileSize : float = 10.24; //the width of the tile, which is the distance between each instantiated tile

function Start () 
	{
	InvokeRepeating ("AddTiles", 1, 0.75);
	}
	
function AddTiles ()
	{
	bottomTile = SelectBottomTile();
	topTile = SelectTopTile (bottomTile);
	Instantiate (tileArray[bottomTile], Vector2(nextTileX, 0), Quaternion.identity);
	Instantiate (tileArray[topTile], Vector2(nextTileX, 10.24), Quaternion.Euler(0, 0, 180));
	var cloud : Transform = Instantiate (cloudArray[Random.Range(0, cloudArray.length)], Vector2(nextTileX, Random.Range(6, 9)), Quaternion.identity);
	cloud.localScale.x = Random.Range(-1, 1);
	nextTileX += tileSize;
	}
	
function SelectBottomTile () : int
	{
	return Random.Range (0, tileArray.length);
	}
	
function SelectTopTile (bottomTile : int) : int
	{
	var tileOption : int = Random.Range (0, tileArray.length);
	
	switch (bottomTile)
		{
		case 0 :
			break;
		case 1 :
			//can't be 1, 4, 5
			while (tileOption == 1 || tileOption == 4 || tileOption == 5)
				{
				tileOption = Random.Range (0, tileArray.length);
				}
			break;
		case 2 :
			//can't be 4, 5
			while (tileOption == 4 || tileOption == 5)
				{
				tileOption = Random.Range (0, tileArray.length);
				}
			break;
		case 3 :
			break;
		case 4 :
			//can't be 1, 2, 4, 5, 7
			while (tileOption == 1 || tileOption == 2 || tileOption == 4 || tileOption == 5 || tileOption == 7)
				{
				tileOption = Random.Range (0, tileArray.length);
				}
			break;
		case 5 :
			//can't be 1, 2, 4, 5, 6, 7
			while (tileOption == 1 || tileOption == 2 || tileOption == 4 || tileOption == 5 || tileOption == 6 || tileOption == 7)
				{
				tileOption = Random.Range (0, tileArray.length);
				}
			break;
		case 6 :
			//can't be 5
			while (tileOption == 5)
				{
				tileOption = Random.Range (0, tileArray.length);
				}
			break;
		case 7 :
			//can't be 4, 5
			while (tileOption == 4 || tileOption == 5)
				{
				tileOption = Random.Range (0, tileArray.length);
				}
			break;
		}
	return tileOption;
	}