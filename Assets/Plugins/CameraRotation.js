 var target : Transform;
 
 private var x:float;
 private var y:float;
  
 var xSpeed:float;
 var ySpeed:float;
  
 var pinchSpeed:float;
  
 var distance:float = 10;
  
 var minimumDistance:float = 5;
 var maximumDistance:float = 100;
 
 var yMinLimit = 0; 
 var yMaxLimit = 60;
 
 var cameraSpeed =1.0; 
  
 private var touch:Touch;
 private var lastDist:float = 0;
 private var curDist:float = 0;
  
 private var gameCamera:Camera;
  
  
 function Start ()
 {
         gameCamera = Camera.main;
         
      var angles= transform.eulerAngles; 
         x = angles.y; 
          y = angles.x; 
      if (GetComponent.<Rigidbody>()) 
          GetComponent.<Rigidbody>().freezeRotation = true; 
 
 }
 
  
 function Update ()
 {
         if (Input.GetKeyDown(KeyCode.Escape))
         {
                 Application.Quit();
         }
        
         if (Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Moved)
         {
                 //One finger touch does orbit
                 touch = Input.GetTouch(0);
                 x += touch.deltaPosition.x * xSpeed * 0.02;
                 y -= touch.deltaPosition.y * ySpeed * 0.02;
         }
         if (Input.touchCount > 1 && (Input.GetTouch(0).phase == TouchPhase.Moved || Input.GetTouch(1).phase == TouchPhase.Moved))
         {
                 //Two finger touch does pinch to zoom
                 var touch1 = Input.GetTouch(0);
                 var touch2 = Input.GetTouch(1);
                 curDist = Vector2.Distance(touch1.position, touch2.position);
                 if(curDist > lastDist)
                 {
                     distance -= Vector2.Distance(touch1.deltaPosition, touch2.deltaPosition)*pinchSpeed/10;
                 }
                 else{
                     distance += Vector2.Distance(touch1.deltaPosition, touch2.deltaPosition)*pinchSpeed/10;
                 }
  
                 lastDist = curDist;
         }
        
         if(distance <= minimumDistance)
         {
                 //minimum camera distance
                 distance = minimumDistance;
         }
        
         if(distance >= maximumDistance)
         {
                 //maximum camera distance
                 distance = maximumDistance;
         }
        
         //Sets rotation
         var rotation = Quaternion.Euler(y, x, 0);
               
         //Applies rotation and position
         transform.rotation = rotation;
         
         //Sets zoom
         var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
          
          //smoth!!!!!!
         transform.position = Vector3.Lerp (transform.position, position, cameraSpeed*Time.deltaTime);
         transform.LookAt(target.position);
         
        y = ClampAngle(y, yMinLimit, yMaxLimit);
 }
  
 static function ClampAngle (angle : float, min : float, max : float) { 
  if (angle < -360) 
  angle += 360; 
  if (angle > 360) 
  angle -= 360; 
  return Mathf.Clamp (angle, min, max); 
 }