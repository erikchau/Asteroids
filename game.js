(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Game = Asteroids.Game = function(ctx, numAsteroids) {
    this.ctx = ctx.getContext('2d');
    this.ship = new Ship()
    this.asteroids = this.addAsteroids(numAsteroids)
    this.bullets = []
    this.numAsteroids = numAsteroids;
  }
  
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.STEP_INTERVAL = 20;
  
  Game.prototype.addAsteroids = function(numAsteroids) {
    var asteroids = [];
    for (var i = 0; i < numAsteroids; i++) {
      asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y, this.ship))
    }
    return asteroids;
  }
  
  Game.prototype.replenishAsteroids = function() {
    while (this.asteroids.length < this.numAsteroids){
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y, this.ship))
    }
  }
  
  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var that = this;
    
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    })
    
    this.bullets.forEach(function(bullet) {
      bullet.draw(that.ctx);
    })
    
    this.ship.draw(that.ctx);
  };
  
  Game.prototype.removeAsteroid = function(asteroid){
    var i = this.asteroids.indexOf(asteroid)
    this.asteroids.splice(i,1);
  };
  
  Game.prototype.removeBullet = function(bullet){
    var i = this.bullets.indexOf(bullet)
    this.bullets.splice(i,1);
  };
  
  Game.prototype.move = function() {
    that = this
    this.asteroids.forEach(function(asteroid) {
      asteroid.move()
      if (asteroid.isOffGrid() == true) {
        that.removeAsteroid(asteroid);
      }
    });
    this.bullets.forEach(function(bullet) {
      bullet.move()
      if (bullet.isOffGrid() == true) {
        that.removeBullet(bullet);
      }
    });
    this.ship.move();
  };
  
  Game.prototype.step = function() {
    this.replenishAsteroids()
    this.move();
    this.draw();
    this.checkCollisions();
  };
  
  Game.prototype.start = function() {
    this.bindKeyHandlers();
    var game = this;
    game.timer = window.setInterval(function() {
      game.step()
    },
    Game.STEP_INTERVAL);
  }
  
  Game.prototype.checkCollisions = function() {
    var that = this
    this.asteroids.forEach(function(asteroid) {
      if (asteroid.isCollidedWith(that.ship)){
        alert("You lose");
        clearInterval(that.timer);
      }
    });
  };
  
  Game.prototype.bindKeyHandlers = function(){
    var that = this;
    key('w', function(){that.ship.power(true)});
    key('s', function(){that.ship.power(false)});
    key('d', function(){that.ship.angle += 10});
    key('a', function(){that.ship.angle -= 10});
    key('space', function(){that.fireBullet(); return false});
  }
  
  Game.prototype.fireBullet = function(pos, vel){
    this.bullets.push(this.ship.fireBullet(this));
  }
  
  
  
})(this);