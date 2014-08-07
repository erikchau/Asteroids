(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Bullet = Asteroids.Bullet = function(pos, vel, game){
    Asteroids.MovingObject.call(this, pos, vel, Bullet.RADIUS, 
      Bullet.COLOR);
      this.game = game
  };
  
  Bullet.COLOR = 'red';
  
  Bullet.RADIUS = 5;
  
  Bullet.inherits(Asteroids.MovingObject);
  
  Bullet.prototype.hitAsteroids = function(){
    var that = this
    this.game.asteroids.forEach(function(asteroid){
      if (that.isCollidedWith(asteroid)) {
        that.game.removeAsteroid(asteroid);
        that.game.removeBullet(that);
      }
    })
  };
  
  Bullet.prototype.move = function(){
    var newX = this.pos[0] + this.vel[0];
    var newY = this.pos[1] + this.vel[1];
    this.pos = [newX, newY];
    this.hitAsteroids();
  }
  

 })(this);