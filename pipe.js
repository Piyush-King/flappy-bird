class Pipe {

    constructor(){
   this.body = createSprite(200,300,100,100)
   this.body2=createSprite(200,400,100,100)
   this.body.scale=3
   this.body2.scale=3

   this.body.addImage(pipeImg)
   this.body2.addImage(pipe2Img)
    }


}