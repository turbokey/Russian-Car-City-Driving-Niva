#pragma strict
var ChosenColor : int; //the playerPrefs integer for saving the number that represents the chosen color.
var savedDecal : int = 0; //the playerPrefs integer for saving our decal that was chosen.
var vehicle01 : Renderer; //the object with the material on it that contains the texture we want to change.
public var textures : Texture2D[]; // the array holding all of the possible textures for the vehicle.

var car : GameObject;
//these are separate textures for the GUI buttons...they don't have an alpha channel.
var btnTextureGreen : Texture;
var btnTextureBlue : Texture;
var btnTextureRed : Texture;
var btnTextureYellow : Texture;
var btnTextureHotPink : Texture;
var btnTexturePurple : Texture;
var btnTextureGray : Texture;
var btnTextureTeal : Texture;
var btnTextureWhite : Texture;
var btnTextureKhaki : Texture;

var decal01 : GameObject;

var decalBtnTexture01 : Texture;

function Start () {

	ChosenColor = PlayerPrefs.GetInt("ChosenColor");

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
	
	decal01.SetActiveRecursively(true);
}

function OnGUI() {

	//these are the buttons for the color palette.
    if (GUI.Button(Rect(10,40,64,32),btnTextureBlue))
    	{
		ChangeTexture(Color32(0, 45, 128, 255));
		PlayerPrefs.SetInt("ChosenColor", 0);
		Debug.Log("ChosenColor = Blue");
		} 
    if (GUI.Button(Rect(90,40,64,32),btnTextureRed))
    	{
    	ChangeTexture(Color32(128, 0, 0, 255));
    	PlayerPrefs.SetInt("ChosenColor", 1);
		Debug.Log("ChosenColor = Red");
     	}
 	if (GUI.Button(Rect(170,40,64,32),btnTextureGreen))
     	{
     	ChangeTexture(Color32(0, 73, 15, 255)); 
     	PlayerPrefs.SetInt("ChosenColor", 2);
		Debug.Log("ChosenColor = Green");
     	}
    if (GUI.Button(Rect(250,40,64,32),btnTextureYellow))
    	{
		ChangeTexture(Color32(235, 182, 0, 255));
		PlayerPrefs.SetInt("ChosenColor", 3);
		Debug.Log("ChosenColor = Yellow");
		}
		
	if (GUI.Button(Rect(330,40,64,32),btnTexturePurple))
		{
		ChangeTexture(Color32(91, 0, 176, 255));
		PlayerPrefs.SetInt("ChosenColor", 4);
		Debug.Log("ChosenColor = Purple");
		}
		
	if (GUI.Button(Rect(410,40,64,32),btnTextureTeal))
		{
		ChangeTexture(Color32(0, 76, 98, 255));
		PlayerPrefs.SetInt("ChosenColor", 5);
		Debug.Log("ChosenColor = Teal");
		}
		
	if (GUI.Button(Rect(490,40,64,32),btnTextureGray))
		{
		ChangeTexture(Color32(72, 72, 72, 255));
		PlayerPrefs.SetInt("ChosenColor", 6);
		Debug.Log("ChosenColor = Gray");
		}
		
	if (GUI.Button(Rect(570,40,64,32),btnTextureWhite))
		{
		ChangeTexture(Color32(255, 255, 255, 255));
		PlayerPrefs.SetInt("ChosenColor", 7);
		Debug.Log("ChosenColor = White");
		}
		
	if (GUI.Button(Rect(650,40,64,32),btnTextureHotPink))
		{
		ChangeTexture(Color32(0, 0, 0, 255));
		PlayerPrefs.SetInt("ChosenColor", 8);
		Debug.Log("ChosenColor = Black");
		}
	if (GUI.Button(Rect(730,40,64,32),btnTextureKhaki))
	{
	ChangeTexture(Color32(72, 59, 24, 255));
	PlayerPrefs.SetInt("ChosenColor", 9);
	Debug.Log("ChosenColor = Khaki");
	}
	if (GUI.Button(Rect(10,90,120,40), "Load Game Level"))
		{
		Application.LoadLevel ("Gorod");
		
		}
	//these are the buttons showing the different logos and decals that can be overlayed
	if (GUI.Button(Rect(10,600,128,64),decalBtnTexture01))
    	{
		Debug.Log("Chose Decal 01");
		decal01.SetActiveRecursively(true);
		//decal02.SetActiveRecursively(false);
		//decal03.SetActiveRecursively(false);
		//decal04.SetActiveRecursively(false);
		savedDecal = 1;
		PlayerPrefs.SetInt("savedDecal", (savedDecal));
		}
	/*if (GUI.Button(Rect(160,600,128,64),decalBtnTexture02))
    	{
		Debug.Log("Chose Decal 02");
		decal01.SetActiveRecursively(false);
		decal02.SetActiveRecursively(true);
		decal03.SetActiveRecursively(false);
		decal04.SetActiveRecursively(false);
		savedDecal = 2;
		PlayerPrefs.SetInt("savedDecal", (savedDecal));
		}
	if (GUI.Button(Rect(310,600,128,64),decalBtnTexture03))
    	{
		Debug.Log("Chose Decal 03");
		decal01.SetActiveRecursively(false);
		decal02.SetActiveRecursively(false);
		decal03.SetActiveRecursively(true);
		decal04.SetActiveRecursively(false);
		savedDecal = 3;
		PlayerPrefs.SetInt("savedDecal", (savedDecal));
		}
	if (GUI.Button(Rect(460,600,128,64),decalBtnTexture04))
    	{
		Debug.Log("Chose Decal 04");
		decal01.SetActiveRecursively(false);
		decal02.SetActiveRecursively(false);
		decal03.SetActiveRecursively(false);
		decal04.SetActiveRecursively(true);
		savedDecal = 4;
		PlayerPrefs.SetInt("savedDecal", (savedDecal));
		}*/
}


// Change texture function
function ChangeTexture(color : Color)
{
  // Change the material's texture
  vehicle01.material.SetColor("_CarColor", color);
}
