function Ship() {
  Asteroids.MovingObject.call(this, [250,250], 0, [0,-1], Ship.RADIUS, Ship.COLOR);
  this.angle = 0;
}

Ship.inherits(Asteroids.MovingObject);

Ship.prototype.calcDirection = function(){
  var rads = (this.angle * Math.PI)/ 180;
  var x = Math.sin(rads);
  var y = Math.cos(rads) * -1;
  return [x,y];
};

Ship.prototype.power = function(impulse) {
  this.direction = this.calcDirection();
  if (impulse){
    this.vel += 2;
  } else {
    this.vel += -2;
  }
  
  if (this.vel > 2){
    this.vel = 2
  } else if (this.vel < -2){
    this.vel = -2
  }
};

Ship.prototype.fireBullet = function(game){
  var bullet = new Asteroids.Bullet(this.pos, 7, this.calcDirection(), game);
  return bullet;
}

Ship.prototype.move = function(){
  this.direction = this.calcDirection();
  var newX = this.pos[0] + (this.direction[0] * this.vel);
  var newY = this.pos[1] + (this.direction[1] * this.vel);
  this.pos = [newX, newY];
};

Ship.prototype.draw = function(ctx) {
  ctx.fillStyle = this.vel >= 0 ? Ship.COLOR : Ship.COLORREV;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath()
  ctx.moveTo(this.pos[0], this.pos[1]);
  ctx.lineTo(this.pos[0] + (this.direction[0] * 10), this.pos[1] + (this.direction[1] * 10));
  ctx.stroke();
};

Ship.prototype.fireBullet = function(game){
  var bullet = new Asteroids.Bullet(this.pos, 7, this.direction, game);
  return bullet;
}

Ship.RADIUS = 10;
Ship.COLOR = 'blue'
Ship.COLORREV = 'orange'

