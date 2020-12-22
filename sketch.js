var Bati,database,position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    Bati = createSprite(250,250,10,10);
    Bati.shapeColor = "red";

    var BatiPosition = database.ref('ball/position');
    BatiPosition.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}



function writePosition(x,y){
    database.ref('ball/positon').set({

    'x': position.x + x,
    'y': position.y + y
})
}

function readPosition(data){
    position = data.val();
    console.log(position.x);

    Bati.x = position.x;
    Bati.y = position.y;
}

function showError(){
    console.log('there is Error')
}