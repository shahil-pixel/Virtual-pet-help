//Create variables here
var dog, happyDog, database, foodS, foodStock;
var feed,addFood;
var fedTime,lastFed;
var foodObj;

function preload(){
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(600, 600);
  database = firebase.database();
  Dog = createSprite(250,350,10,10);
  Dog.addImage(dog)
  Dog.scale = 0.2

  foodObj = new food();

feed = createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood = createButton("Add food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

}


function draw() { 
background(46,139,87);



fill(255,255,254);
textSize(15);

fedTime.database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed = data.val()

});

if(lastFed>=12){
  text("last Feed:"+ lastFed%12 + "PM",350,30)
}else if(lastFed==0){
  text("last Feed: 12 AM",350,30);
}else{
  text("last Feed:"+lastFed + "AM",350,30)
}

foodObj.display();


  drawSprites();
  //add styles here
  textSize(12);
  fill("white");
  stroke("white");
 text("Food remaining:"+foodS,200,250)

}

//function to read values from DB
function readStock(data){
foodS = data.val();
}

//function to write values from DB
function writeStock(x){
if(x<=0){
  x = 0;
}else{
 x = x-1;
}



database.ref('/').update({
Food : x

  })

}

function feedDog(){
dog.addImage(happyDog);

foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.red('/').update({
Food:foodObj.getFoodStock(),
FedTime:hour()

})


}

function addFoods(){
foodS++;
database.ref('/').update({
foodS:Food
  })
}