using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class CameraChange : MonoBehaviour, IPointerDownHandler
{
    GameObject Camera;
    void Awake()
    {
        Camera = GameObject.FindGameObjectWithTag("MainCamera");
    }
    
    public void OnPointerDown(PointerEventData data)
    {
        Camera.GetComponent<CarCameraScript2>().enabled = !Camera.GetComponent<CarCameraScript2>().enabled;
        Camera.GetComponent<CameraRotation>().enabled = !Camera.GetComponent<CameraRotation>().enabled;
    }
}
