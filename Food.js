class food {
   constructor(){
   this.image = image("Js/Milk.png");
   var foodStock
   var lastFed

   }
   getFoodStock(){
    foodStock = database.ref('Food');
    foodStock.on("value",readStock);
   }

   //}

  // updateFoodStock(Stock){
    //database.ref('/').update({
      // foodStock:Stock
       // })
   //}
  

   //deductFood(){



   //}

   display(){
  var x = 80,y = 100;

  imageMode(CENTER);
  image(this.image,720,220,70,70)

  if(this.foodStock!=0){
    for(var i = 0;i<this.foodStock;i++){
       if(i%10 == 0){
            x = 80;
            y = y+50;
       


           }
           image(this.image,x,y,50,50);
           x = x+30
        }
     }

   }


}