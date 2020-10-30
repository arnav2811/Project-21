function hit(a, b, c, d, e, f){
    if(b.x - a.x < (b.width/2 +a.width/2)){
        a.velocityX= 0;
        c = ((0.5*d*e*e)/(f*f*f))
       console.log("damage: "+ c)
        if(c<=10){
            b.shapeColor = "green"
        }else if(c>10){
            b.shapeColor = "red";
        }
    }
}