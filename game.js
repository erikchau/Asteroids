(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Game = Asteroids.Game = function(ctx, numAsteroids) {
    this.ctx = ctx.getContext('2d');
    this.asteroids = this.addAsteroids(numAsteroids)
    this.ship = new Ship()
  }
  
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.STEP_INTERVAL = 30;
  
  Game.prototype.addAsteroids = function(numAsteroids) {
    var asteroids = [];
    for (var i = 0; i < numAsteroids; i++) {
      asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y))
    }
    return asteroids;
  }
  
  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var that = this;
    
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    })
    
    this.ship.draw(that.ctx);
  };
  
  Game.prototype.move = function() {
    that = this
    this.asteroids.forEach(function(asteroid) {
      asteroid.move()
      if (asteroid.isOffGrid() == true) {
        i = that.asteroids.indexOf(asteroid);
        that.asteroids.splice(i,1);
      }
    });
    this.ship.move();
  };
  
  Game.prototype.step = function() {
    this.move();
    this.draw();
    this.checkCollisions();
  }
  
  Game.prototype.start = function() {
    var game = this;
    game.timer = window.setInterval(function() {
      game.step()
    },
    Game.STEP_INTERVAL);
  }
  
  Game.prototype.checkCollisions = function() {
    that = this
    // this.asteroids.forEach(function(asteroid) {
//       if (asteroid.isCollidedWith(that.ship)){
//         alert("You lose");
//         clearInterval(that.timer);
//       }
//     });
  };
  

  
  
  
})(this);