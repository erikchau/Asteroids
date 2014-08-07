(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Asteroid = Asteroids.Asteroid = function(pos, vel){
    Asteroids.MovingObject.call(this, pos, vel, (Math.random()*Asteroid.RADIUS), 
      Asteroid.COLOR);
  };
  
  Asteroid.COLOR = 'grey';
  
  Asteroid.RADIUS = 50;
  
  Asteroid.inherits(Asteroids.MovingObject);
  
  Asteroid.randomAsteroid = function(dimX, dimY, ship) {
    var asteroid = new Asteroid (
      [dimX * Math.random(), dimY * Math.random()],
      randomInitialVec());
    while (asteroid.isCollidedWith(ship)) {
      var asteroid = new Asteroid (
        [dimX * Math.random(), dimY * Math.random()],
        randomInitialVec());
    } 
    return asteroid;
  };
  
  var randomInitialVec = function() {
    var dx = (Math.random() * 2) - 1;
    var dy = (Math.random() * 2) - 1;
    return [dx, dy];
  } ;

 })(this);