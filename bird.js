class Bird {

    constructor(){
   this.body = createSprite(100,100,100,100)
   this.body.scale=0.2

   this.body.addImage(birdImg)
    }
    gravity(){
        this.body.velocityY +=1.5
    }
    moveUp(){
        this.body.velocityY -= 5.5
    }

}