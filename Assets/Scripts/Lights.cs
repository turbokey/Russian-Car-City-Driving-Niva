using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Lights : MonoBehaviour {
    public GameObject LightsObject;
    public GameObject LightsButton;
    public Sprite on;
    public Sprite off;
    bool isenabled;
    AudioSource sound;
    void Start()
    {
        sound = gameObject.GetComponent<AudioSource>();
    }
	public void Turn() {
        sound.Stop();
        sound.Play();
        if (isenabled)
        {
            LightsObject.SetActive(false);
            LightsButton.GetComponent<Image>().sprite = off;
        }
        else
        {
            LightsObject.SetActive(true);
            LightsButton.GetComponent<Image>().sprite = on;
        }
        isenabled = !isenabled;
	}
}
