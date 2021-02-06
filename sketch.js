let myShader;
let img;

function preload() {
  myShader = loadShader('shader/shader.vert', 'shader/shader.frag');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
  img = loadImage('img.jpg');
  
  shader(myShader);
  
  myShader.setUniform('tex', img);
  noStroke();
}

function draw() {
  background(255,0,0);
  // lets map the mouseX to frequency and mouseY to amplitude
  // try playing with these to get a more or less distorted effect
  // 10 and 0.25 are just magic numbers that I thought looked good
  let freq = map(mouseX, 0, width, 0, 10.0);
  let amp = map(mouseY, 0, height, 0, 0.25);

  myShader.setUniform('frequency', freq);
  myShader.setUniform('amplitude', amp);
  myShader.setUniform('time', frameCount * 0.01);

  rect(0,0,width, height);
}