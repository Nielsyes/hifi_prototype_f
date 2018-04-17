// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(container, {
  color: '#000000',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  //duration: 30000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#EAEAEA', width: 5 },
  to: { color: '#000000', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('1&#37;');
    } else {
      circle.setText(value + '&#37;');
    }

  }
});
bar.text.style.fontFamily = 'Helvetica';
bar.text.style.fontSize = '25px';

bar.animate(1.0, {
    duration: 10000,
    easing: 'linear'
}, function() {
    console.log('Animation has finished');
});  // Number from 0.0 to 1.0
