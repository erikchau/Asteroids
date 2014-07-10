function Ship() {
  Asteroids.MovingObject.call(this, [250,250], [0,0], Ship.RADIUS, Ship.COLOR); 
}

Ship.inherits(Asteroids.MovingObject);

Ship.prototype.power = function(impulse) {
  this.vel[0] = this.vel[0] + impulse[0];
  this.vel[1] = this.vel[1] + impulse[1];
};

Ship.RADIUS = 10;
Ship.COLOR = 'blue'

