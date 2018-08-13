#pragma strict
// Make the script also execute in edit mode.
@script ExecuteInEditMode()

var vehicle01 : Renderer; //the object with the material on it that contains the texture we want to change.
public var textures : Texture2D[]; // the array holding all of the possible textures for the vehicle.
var ChosenColor : int;

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

function Start () {

	ChosenColor = PlayerPrefs.GetInt("ChosenColor");

	if (ChosenColor == 0)
	{
		ChangeTexture(0);
	}
	if (ChosenColor == 1)
	{
		ChangeTexture(1);
	}
	if (ChosenColor == 2)
	{
		ChangeTexture(2);
	}
	if (ChosenColor == 3)
	{
		ChangeTexture(3);
	}
	if (ChosenColor == 4)
	{
		ChangeTexture(4);
	}
	if (ChosenColor == 5)
	{
		ChangeTexture(5);
	}
	if (ChosenColor == 6)
	{
		ChangeTexture(6);
	}
	if (ChosenColor == 7)
	{
		ChangeTexture(7);
	}		
	if (ChosenColor == 8)
	{
		ChangeTexture(8);
	}
}

function OnGUI() {

    if (GUI.Button(Rect(10,40,64,32),btnTextureBlue))
    	{
		ChangeTexture(0);
		PlayerPrefs.SetInt("ChosenColor", 0);
		Debug.Log("ChosenColor = Blue");
		} 
    if (GUI.Button(Rect(90,40,64,32),btnTextureRed))
    	{
    	ChangeTexture(1);
    	PlayerPrefs.SetInt("ChosenColor", 1);
		Debug.Log("ChosenColor = Red");
     	}
 	if (GUI.Button(Rect(170,40,64,32),btnTextureGreen))
     	{
     	ChangeTexture(2); 
     	PlayerPrefs.SetInt("ChosenColor", 2);
		Debug.Log("ChosenColor = Green");
     	}
    if (GUI.Button(Rect(250,40,64,32),btnTextureYellow))
    	{
		ChangeTexture(3);
		PlayerPrefs.SetInt("ChosenColor", 3);
		Debug.Log("ChosenColor = Yellow");
		}
		
	if (GUI.Button(Rect(330,40,64,32),btnTexturePurple))
		{
		ChangeTexture(4);
		PlayerPrefs.SetInt("ChosenColor", 4);
		Debug.Log("ChosenColor = Purple");
		}
		
	if (GUI.Button(Rect(410,40,64,32),btnTextureTeal))
		{
		ChangeTexture(5);
		PlayerPrefs.SetInt("ChosenColor", 5);
		Debug.Log("ChosenColor = Teal");
		}
		
	if (GUI.Button(Rect(490,40,64,32),btnTextureGray))
		{
		ChangeTexture(6);
		PlayerPrefs.SetInt("ChosenColor", 6);
		Debug.Log("ChosenColor = Gray");
		}
		
	if (GUI.Button(Rect(570,40,64,32),btnTextureWhite))
		{
		ChangeTexture(7);
		PlayerPrefs.SetInt("ChosenColor", 7);
		Debug.Log("ChosenColor = White");
		}
		
	if (GUI.Button(Rect(650,40,64,32),btnTextureHotPink))
		{
		ChangeTexture(8);
		PlayerPrefs.SetInt("ChosenColor", 8);
		Debug.Log("ChosenColor = Hot Pink");
		}
		
	if (GUI.Button(Rect(10,90,120,40), "Load Game Level"))
		{
		Application.LoadLevel ("WorldScene");
		}
}


// Change texture function
function ChangeTexture(colors : int)
{
  // Just make a small check, that we don't try to grab a non-existing texture
  if (colors >= textures.Length)
    return;
 
  // Change the material's texture
  vehicle01.GetComponent.<Renderer>().sharedMaterial.mainTexture = textures[colors];
}
