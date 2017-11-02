// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //setting enemy initial location
    this.x = x;
    this.y = y;
    //setting the enemy speed
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //Update enemy location
    //Use dt!!
    this.x= this.x + this.speed;

    //Enemy's boundary for unit collision
    this.width =50;
    this.height =50; 


    //Handle collision

    //Reset the Enemy location when it reaches the end of the board
    if(this.x >= 505){
        this.x = 1;
    }

}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png'

    this.x = 200;
    this.y = 300;

    this.score = 0;
};

//Update user state
Player.prototype.update = function(dt){

   //handles collision with enemy
   var self = this;
   allEnemies.forEach(function(enemy){
   if( (self.x >= enemy.x - enemy.width && self.x <= enemy.x + enemy.width) &&(self.y >= enemy.y - 50 && self.y <= enemy.y + 50)){
        console.log("collision!!");
   }
    })

   //Update position and score of Player when he/she reaches water

   //this.score();
}

//Score updating method


// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Handle key interaction 
Player.prototype.handleInput = function(key) {

    //Read input from click event and update position of character accordingly
    if(key === 'left'){
        
        this.x = this.x - 101;
        
    }else if(key === 'right'){

        this.x = this.x + 101;


    }else if(key === 'up'){

         this.y = this.y - 83;

    }else if(key === 'down'){

        this.y = this.y + 83;

    }else{
        console.log("error");
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var Enemy1 = new Enemy(1,63,1);
var Enemy2 = new Enemy(1,143,2);
var Enemy3 = new Enemy(1,223,4);

allEnemies.push(Enemy1);
allEnemies.push(Enemy2);
allEnemies .push(Enemy3);


var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


