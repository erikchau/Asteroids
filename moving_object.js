(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function(){
    var newX = this.pos[0] + this.vel[0];
    var newY = this.pos[1] + this.vel[1];
    this.pos = [newX, newY];
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
  
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var x = Math.abs(otherObject.pos[0] - this.pos[0]);
    var y = Math.abs(otherObject.pos[1] - this.pos[1]);
    var side = Math.sqrt((x * x) + (y * y));
  
    if (side < (this.radius + otherObject.radius)){
      return true;
    } else {
      return false;
    }
  };
  
  
  MovingObject.prototype.isOffGrid = function() {
    if (this.pos[0] <= 0 || this.pos[0] >= 500) {
      return true;
    } else if (this.pos[1] <= 0 || this.pos[1] >= 500) {
      return true;
    } else {
      return false;
    }
  };

 })(this);
 
