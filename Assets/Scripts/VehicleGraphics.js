#pragma strict

var ChosenColor : int;
var vehicle01 : Renderer; //the object with the material on it that contains the texture we want to change.
var savedDecal : int = 0;
public var textures : Texture2D[]; // the array holding all of the possible textures for the vehicle.
var decal01 : GameObject;

function Start () {
	//grabbing all other needed playerpref saves from the previous scene.
	ChosenColor = PlayerPrefs.GetInt("ChosenColor");
	savedDecal = PlayerPrefs.GetInt("savedDecal");
	
	//functionality to seek out and plug in all decals in the scene dynamically.
	decal01 = GameObject.Find ("Decal01");
	
	//grab the saved int for playerprefs color chosen and set the texture.
	if (ChosenColor == 0)
	{
		ChangeTexture(Color32(0, 45, 128, 255));
	}
	if (ChosenColor == 1)
	{
		ChangeTexture(Color32(128, 0, 0, 255));
	}
	if (ChosenColor == 2)
	{
		ChangeTexture(Color32(0, 73, 15, 255)); 
	}
	if (ChosenColor == 3)
	{
		ChangeTexture(Color32(235, 182, 0, 255));
	}
	if (ChosenColor == 4)
	{
		ChangeTexture(Color32(91, 0, 176, 255));
	}
	if (ChosenColor == 5)
	{
		ChangeTexture(Color32(0, 76, 98, 255));
	}
	if (ChosenColor == 6)
	{
		ChangeTexture(Color32(72, 72, 72, 255));
	}
	if (ChosenColor == 7)
	{
		ChangeTexture(Color32(255, 255, 255, 255));
	}		
	if (ChosenColor == 8)
	{
		ChangeTexture(Color32(0, 0, 0, 255));
	}
    if (ChosenColor == 9)
    {
        ChangeTexture(Color32(72, 59, 24, 255));
    }
	//grab the saved int for playerprefs decal saving and set the enabled/disabled decals here
	if (savedDecal == 0)
	{
		decal01.SetActiveRecursively(true);
		//decal02.SetActiveRecursively(false);
		//decal03.SetActiveRecursively(false);
		//decal04.SetActiveRecursively(false);	
	}
	if (savedDecal == 1)
	{
		decal01.SetActiveRecursively(true);
		//decal02.SetActiveRecursively(false);
		//decal03.SetActiveRecursively(false);
		//decal04.SetActiveRecursively(false);
		
	}
	/*if (savedDecal == 2)
	{
		decal01.SetActiveRecursively(false);
		decal02.SetActiveRecursively(true);
		decal03.SetActiveRecursively(false);
		decal04.SetActiveRecursively(false);
	}
	if (savedDecal == 3)
	{
		decal01.SetActiveRecursively(false);
		decal02.SetActiveRecursively(false);
		decal03.SetActiveRecursively(true);
		decal04.SetActiveRecursively(false);
	}
	if (savedDecal == 4)
	{
		decal01.SetActiveRecursively(false);
		decal02.SetActiveRecursively(false);
		decal03.SetActiveRecursively(false);
		decal04.SetActiveRecursively(true);
		
	}*/
}

// Change texture function
function ChangeTexture(color : Color)
{
  // Change the material's texture
  vehicle01.material.SetColor("_CarColor", color);
}