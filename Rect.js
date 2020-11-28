class Rect extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,1,height,angle);
    Matter.Body.setAngle(this.body, angle);
  }
}