class UI { constructor(world) { this.constructor(world) } }

UI.prototype.constructor = function (world) {

  this.world = world;

  // Scene
  this.scene = new THREE.Scene();

  // Camera
  this.camera = new THREE.OrthographicCamera(
    - window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, - window.innerHeight / 2, 1, 10);
  this.camera.position.z = 10;

  this.science_yield = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.drawText("0") }));
  this.science_yield.center.set(0.0, 1.0);
  this.science_yield.scale.set(125, 65, 1);
  this.scene.add(this.science_yield);

  this.science = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.world.textureloader.load("./assets/yields/science.png") }));
  this.science.center.set(0.0, 1.0);
  this.science.scale.set(16, 16, 1);
  this.scene.add(this.science);

  this.gold_yield = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.drawText("0") }));
  this.gold_yield.center.set(0.0, 1.0);
  this.gold_yield.scale.set(125, 65, 1);
  this.scene.add(this.gold_yield);

  this.gold = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.world.textureloader.load("./assets/yields/gold.png") }));
  this.gold.center.set(0.0, 1.0);
  this.gold.scale.set(16, 16, 1);
  this.scene.add(this.gold);

  this.left_bottom = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.world.textureloader.load("./assets/sprites/wheat.png") }));
  this.left_bottom.center.set(0.0, 0.0);
  this.left_bottom.scale.set(175, 175, 1);
  this.scene.add(this.left_bottom);

  this.updateHUD();

}

UI.prototype.onWindowResize = function () {

  this.camera.aspect = window.innerWidth / window.innerHeight;
  this.camera.updateProjectionMatrix();
  // this.camera.left = - window.innerWidth / 2;
  // this.camera.right = window.innerWidth / 2;
  // this.camera.top = window.innerHeight / 2;
  // this.camera.bottom = - window.innerHeight / 2;
  // this.camera.updateProjectionMatrix();

  // this.updateHUD();

  this.renderer.setSize(window.innerWidth, window.innerHeight);

}

UI.prototype.drawText = function (message) {

  var fontsize = 36;

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = "Bold " + fontsize + "px Verdana";

  var msg = message.split('\n');

  context.fillStyle = "rgba(0, 0, 0, 1.0)";

  for (var i = 0; i < msg.length; i++) {
    context.fillText(msg[i], fontsize, fontsize * 1.4);
  }

  var texture = new THREE.Texture(canvas)
  texture.needsUpdate = true;

  return texture;

}

UI.prototype.updateHUD = function () {

  this.science_yield.position.set(- window.innerWidth / 2, window.innerHeight / 2, 1);
  this.science.position.set(- window.innerWidth / 2 + 32, window.innerHeight / 2 - 8, 1);

  this.gold_yield.position.set(- window.innerWidth / 2 + 48, window.innerHeight / 2, 1)
  this.gold.position.set(-window.innerWidth / 2 + 80, window.innerHeight / 2 - 8, 1)

  this.left_bottom.position.set(-window.innerWidth / 2, -window.innerHeight / 2, 1);

}

export default UI;