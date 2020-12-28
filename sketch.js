var hrs, mins, secs;
function setup() {
  createCanvas(800,400); 

  hrs = createSprite(400,200,30,30)
  secs = createSprite(400,100,10,10)
  mins = createSprite(400,300,20,20)
  

  
  hr = hour()
  min = minute()
  sec = second()
}

function draw() {
  background(0,0,0); 
  secs.shapeColor = "red" 
  mins.shapeColor = "blue" 
  hrs.shapeColor = "green" 

  if(0<sec && sec<6){
secs.x = 70 }
  if(5<sec && sec<11){
secs.x = 128 }
  if(10<sec && sec<16){
secs.x = 186 }
  if(15<sec && sec<21){
secs.x = 224 }
  if(20<sec && sec<26){
secs.x = 252 }
  if(25<sec && sec<31){
secs.x = 340 }
  if(30<sec && sec<36){
secs.x = 398 }
  if(35<sec && sec<41){
secs.x = 456 }
  if(40<sec && sec<46){
secs.x = 514 }
  if(45<sec && sec<51){
secs.x = 572 }
  if(50<sec && sec<56){
secs.x = 630 }
  if(55<sec && sec<61){
secs.x = 688 }

    if(0<min && min<6){
  mins.x = 70 }
    if(5<min && min<11){
  mins.x = 128 }
    if(10<min && min<16){
  mins.x = 186 }
    if(15<min && min<21){
  mins.x = 224 }
    if(20<min && min<26){
  mins.x = 252 }
    if(25<min && min<31){
  mins.x = 340 }
    if(30<min && min<36){
  mins.x = 398 }
    if(35<min && min<41){
  mins.x = 456 }
    if(40<min && min<46){
  mins.x = 514 }
    if(45<min && min<51){
  mins.x = 572 }
    if(50<min && min<56){
  mins.x = 630 }
    if(55<min && min<61){
  mins.x = 688 }

  if(hr = 1){
    hrs.x = 70 }
      if(hr = 2){
    hrs.x = 128 }
      if(hr = 3){
    hrs.x = 186 }
      if(hr = 4){
    hrs.x = 224 }
      if(hr = 5){
    hrs.x = 252 }
      if(hr = 6){
    hrs.x = 340 }
      if(hr = 7){
    hrs.x = 398 }
      if(hr = 8){
    hrs.x = 456 }
      if(hr = 9){
    hrs.x = 514 }
      if(hr = 10){
    hrs.x = 572 }
      if(hr = 11){
    hrs.x = 630 }
      if(hr = 12){
    hrs.x = 688 }
  fill("white")
  stroke("green")
  text('Current hour:\n' + hr, 50, 30);
  fill("white")
  stroke("blue")
  text('Current minute:\n' + min, 325, 30);
  fill("white")
  stroke("red")
  text('Current second:\n' + sec, 650, 30);
  
  drawSprites();
}