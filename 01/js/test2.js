var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
parallax.enable();
parallax.disable();
parallax.updateLayers(); // Useful for reparsing the layers in your scene if you change their data-depth value
parallax.calibrate(false, true);
parallax.invert(false, true);
parallax.limit(false, 10);
parallax.scalar(2, 8);
parallax.friction(0.2, 0.8);
parallax.origin(0.0, 1.0);
parallax.setInputElement(document.getElementById('newinput'));