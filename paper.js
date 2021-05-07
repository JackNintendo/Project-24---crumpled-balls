class Paper {
   constructor(x,y,radius){
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      this.r = radius;
      this.body = Bodies.rectangle(x,y,radius, radius, options);
      World.add(world,this.body);
   }

   display(){
      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill("red");
      //for an ellipse: ellipse(x,y, major_axis, minor_axis)
      //when both major axis and minor axis are equal, then ellipse appears like a circle
      ellipse(0,0,this.r,this.r);
      pop();
   }

}