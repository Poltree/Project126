function setup(){
canvas = createCanvas(700,500)
camera = createCapture(VIDEO)
camera.hide()
canvas.center()

}
function draw(){
    image(camera,0,0,700,500);
    
}
