// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(container, {
  color: '#9DA2A0',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 5,
  svgStyle: {
        // Important: make sure that your container has same
        // aspect ratio as the SVG canvas. See SVG canvas sizes above.
        width: '100%',
        borderRadius: "10px"
    },
  //duration: 30000,
  from: { color: '#9DA2A0', width: 5 },
  to: { color: '#3088BB', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  }
});

bar.animate(1.0, {
    duration: 2000,
    easing: 'linear'
}, function() {
    console.log('Animation has finished');
});  // Number from 0.0 to 1.0

/*--------------------------------------------------------------------------------------------*/

function redirect(){
  setInterval(function(){
    window.location.href = "../lgz/belichting.html";
  }, 3000);
}
redirect();
