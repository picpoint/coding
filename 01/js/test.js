var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
  relativeInput: true,
  clipRelativeInput: false,
  hoverOnly: true,
  inputElement: document.getElementById('myinput'),
  calibrateX: false,
  calibrateY: true,
  invertX: false,
  invertY: true,
  limitX: false,
  limitY: 10,
  scalarX: 2,
  scalarY: 8,
  frictionX: 0.2,
  frictionY: 0.8,
  originX: 0.0,
  originY: 1.0,
  precision: 1,
  pointerEvents: false,
  onReady: function() { alert('ready!'); }
});



