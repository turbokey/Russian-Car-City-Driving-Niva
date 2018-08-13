using System;
using UnityEngine;
using UnityEngine.EventSystems;

public class CarReset : MonoBehaviour, IPointerDownHandler
    {
        public GameObject Car;
        public void OnPointerDown(PointerEventData data)
        {
            //transform.rotation.z = 0;
            Car.transform.rotation = new Quaternion(0, transform.rotation.y, 0, transform.rotation.w);
            Car.transform.Translate(0, 1, 0);
        }


        public void OnPointerUp(PointerEventData data)
        {
            
        }
    }