var ballX = 0
var ballY = 0
var radius = 8
var ballColor = 'white'
var ballXSpeed = 5
var ballYSpeed = 5
var paddle1Y = 200
const PADDLE_HEIGHT = 80

function mousePosition(event){
    var rect = canvas.getBoundingClientRect()
    var root = document.documentElement
    var mouseX = event.clientX - rect.left - root.scrollLeft
    var mouseY = event.clientY - rect.top - root.scrollTop
    return {
        x:mouseX,
        y:mouseY
    }
}

window.onload = function(){
    canvas = document.getElementById('gameCanvas')
    canvasContext = canvas.getContext('2d')
    fps = 30
    
    setInterval(function(){
        draw()
        ballX += ballXSpeed
        ballY += ballYSpeed
    },10)
    canvas.addEventListener('mousemove',
    function(event){
        var mousePos = mousePosition(event)
        paddle1Y = mousePos.y-PADDLE_HEIGHT/2
    })
    
}

function draw(){
    canvasContext.fillStyle = 'black'
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    canvasContext.fillStyle = 'cyan'
    canvasContext.fillRect(10 , paddle1Y, 10, PADDLE_HEIGHT)
    drawCircle(ballX, ballY)
    
}

function resetBall(){
    ballXSpeed = -ballXSpeed
    ballX = canvas.width/2;
    ballY = canvas.height/2
}

function drawCircle(ballX, ballY){
    ballX += ballXSpeed
    ballY += ballYSpeed
    if(ballX > canvas.width-5)
        ballXSpeed = -ballXSpeed 
    if(ballY > canvas.height-5)
        ballYSpeed = -ballYSpeed
    if(ballX < 20)
    {
        console.log(paddle1Y,ballY)
        if((paddle1Y) <= (ballY)  && (paddle1Y+PADDLE_HEIGHT) >= ballY)
            ballXSpeed = -ballXSpeed
        else
        {
            resetBall()
        }
    }
    if(ballY < 5)
        ballYSpeed = -ballYSpeed
    colorCircle(ballX, ballY)

    
}
 
function colorCircle(centerX, centerY){
    canvasContext.fillStyle = ballColor
    canvasContext.beginPath()
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
    canvasContext.fill()
}