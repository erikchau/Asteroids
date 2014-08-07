function Ship() {
  Asteroids.MovingObject.call(this, [250,250], [0,0], Ship.RADIUS, Ship.COLOR); 
}

Ship.inherits(Asteroids.MovingObject);

Ship.prototype.power = function(impulse) {
  this.vel[0] = this.vel[0] + impulse[0];
  this.vel[1] = this.vel[1] + impulse[1];
  if (this.vel[0] > 4){
    this.vel[0] = 4
  }
  if (this.vel[0] < -4){
    this.vel[0] = -4
  }
  if (this.vel[1] > 4){
    this.vel[1] = 4
  }
  if (this.vel[1] < -4){
    this.vel[1] = -4
  }
};

Ship.prototype.fireBullet = function(game){
  if (this.vel[0] > 0 && this.vel[1] === 0) {
    var vel = [7,0];
  } else if (this.vel[0] === 0 && this.vel[1] > 0) {
    var vel = [0,7];
  } else if (this.vel[0] < 0 && this.vel[1] === 0) {
    var vel = [-7,0];
  } else if (this.vel[0] === 0 && this.vel[1] < 0) {
    var vel = [0,-7];
  } else if (this.vel[0] > 0 && this.vel[1] > 0) {
    var vel = [7,7];
  } else if (this.vel[0] > 0 && this.vel[1] < 0) {
    var vel = [7,-7];
  } else if (this.vel[0] < 0 && this.vel[1] > 0) {
    var vel = [-7,7];
  } else if (this.vel[0] < 0 && this.vel[1] < 0) {
    var vel = [-7,-7];
  }
  
  
  var bullet = new Asteroids.Bullet(this.pos, vel, game);
  return bullet;
}

Ship.RADIUS = 10;
Ship.COLOR = 'blue'

