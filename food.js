class Food{
    constructor(x, y) {
        this.image = loadImage("img/1/milk.png");
        this.foodStock = null; 
        this.lastFed = null;
    }

    getFoodStock() {
        return this.foodStock;
    }

    updateFoodStock(foodStock) {
        this.foodStock = foodStock;
    }

    deductFood() {
        if(this.foodStock > 0)  {
            this.foodStock = this.foodStock -1;
        }
    }

    Bedroom() {
        background(bedroom, 550, 500);
    }

    Garden() {
        background(garden, 550, 500);
    }

    Washroom() {
        background(washroom, 550, 500);
    }

    display() {
  
        
        var x=80, y=100;
      
        imageMode (CENTER);
        image (this.image, 720, 220, 70, 70);
      
        if(this.foodStock != 0 ) {
           for(var i=0; i<this.foodStock; i++) {
            console.log("error");
                if(i%10==0) {
                    x=80;
                    y=y+50
                }
                image(this.image, x, y, 50, 50);
                x=x+30;
           }
        }

      }
};