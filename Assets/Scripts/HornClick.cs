using UnityEngine;
using System;
using UnityEngine.UI;
using UnityEngine.EventSystems;

namespace UnityStandardAssets.Vehicles.Car
{
    public class HornClick : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
    {
        private CarController m_CarController;
        public void OnPointerDown(PointerEventData eventData)
        {
            Some();
        }
        public void OnPointerUp(PointerEventData eventData)
        {
            Some();
        }
        private void Some()
        {
            m_CarController = GameObject.FindGameObjectWithTag("car").GetComponent<CarController>();
            m_CarController.changeHornState();
        }
    }
}
