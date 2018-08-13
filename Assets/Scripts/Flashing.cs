using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Flashing : MonoBehaviour {
    public GameObject RightLights;
    public GameObject LeftLights;
    public GameObject RightFlashButton;
    public GameObject LeftFlashButton;
    public Sprite l;
    public Sprite l1;
    public Sprite r;
    public Sprite r1;
    public bool Right;
    public bool Left;
    AudioSource sound;
    float timer = 1;

    public void SetRight()
    {
        Right = !Right;
        RightLights.SetActive(false);
        RightFlashButton.GetComponent<Image>().sprite = r1;
    }

    public void SetLeft()
    {
        Left = !Left;
        LeftLights.SetActive(false);
        LeftFlashButton.GetComponent<Image>().sprite = l1;
    }
    void Start()
    {
        sound = gameObject.GetComponent<AudioSource>();
    }
	void Update ()
    {
        timer -= Time.deltaTime;
        if (timer < 0) 
            timer = 1;
        if (timer > 0.5)
        {
            if (Left)
            {
                LeftLights.SetActive(true);
                LeftFlashButton.GetComponent<Image>().sprite = l;
            }        
            if (Right)
            {
                RightLights.SetActive(true);
                RightFlashButton.GetComponent<Image>().sprite = r;
            }
            if (Right || Left)
                sound.Play();
        }
        if (timer < 0.5)
        {
            if (Right)
            {
                RightLights.SetActive(false);
                RightFlashButton.GetComponent<Image>().sprite = r1;
            }
            if (Left)
            {
                LeftLights.SetActive(false);
                LeftFlashButton.GetComponent<Image>().sprite = l1;
            }
        }
    }
}
