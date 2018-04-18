// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(container, {
  strokeWidth: 10,
  easing: 'easeInOut',
  duration: 2000,
  color: '#9DA2A0',
  trailColor: '#eee',
  trailWidth: 5,
  svgStyle: {width: '100%', height: '100%', borderRadius: "10px"},
  from: {color: '#9DA2A0'},
  to: {color: '#3088BB'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0


function redirect(){
  setInterval(function(){
    window.location.href = "../lgz/belichting.html";
  }, 3000);
}
//redirect();
