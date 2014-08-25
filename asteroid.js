(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Asteroid = Asteroids.Asteroid = function(pos, vel, direction){
    Asteroids.MovingObject.call(this, pos, vel, direction, randomRadius(),
      Asteroid.COLOR);
  };
  
  Asteroid.COLOR = 'grey';
  
  Asteroid.RADIUS = 50;
  
  Asteroid.inherits(Asteroids.MovingObject);
  
  Asteroid.randomAsteroid = function(dimX, dimY, ship) {
    var asteroid = new Asteroid (
      [dimX * Math.random(), dimY * Math.random()],
      randomInitialVec(), randomInitialDirection());
    while (asteroid.isCollidedWith(ship)) {
      var asteroid = new Asteroid (
        [dimX * Math.random(), dimY * Math.random()],
        randomInitialVec(), randomInitialDirection());
    } 
    return asteroid;
  };
  
  var randomInitialVec = function() {
    return Math.ceil(Math.random() * 1);
  };
  
  var randomInitialDirection = function() {
    var dx = (Math.random() * 2) - 1;
    var dy = (Math.random() * 2) - 1;
    return [dx, dy];
  };
  
  var randomRadius = function(){
    var radius = Math.random()*Asteroid.RADIUS;
    if (radius < 10){
      radius = 10;
    }
    return radius;
  };

 })(this);