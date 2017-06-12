window.onload = function() {


  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var current;
  var past;
  var mouse_down =false;
  var penColor = 'red';


  var canvasjq = $('canvas');
  var h = canvasjq.height();
  var w = canvasjq.width();

  canvasjq.attr('height',h);
  canvasjq.attr('width',w);

  canvas.addEventListener('mousedown', function (event) {
    mouse_down = true;
  });
  canvas.addEventListener('mouseup', function (event) {
    mouse_down = false;
    past = null;
  });
  canvas.addEventListener('mousemove', function (event) {
    if (mouse_down) {
      current = [event.offsetX, event.offsetY];
      if (past) {
        //draw(past, current);
        server.emit('draw-line',{past:past,current:current, color : penColor});
      }
      past = [event.offsetX, event.offsetY];
    }
  });


  function draw (past, current, color) {
    ctx.strokeStyle = color;
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(past[0], past[1]);
    ctx.quadraticCurveTo(
      past[0], past[1],
      current[0], current[1]
    );
    ctx.stroke();
    ctx.closePath();
  }

  var server = io();

  server.on('connect',function(s){
    console.log('connected');
  });

  server.on('line-broadcast',function(msg){
    draw(msg.past, msg.current,msg.color);
  });

}
