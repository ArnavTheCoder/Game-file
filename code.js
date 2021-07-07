var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["403d54e0-cad5-47f0-8374-4d642ea331ef","7d6549cf-f16c-4766-8d3c-e85e016f2a10","ca626c63-0e71-42b0-a821-11b144ca7f0c","a4bbc053-8eb6-48d7-959d-03f33455c518","4616abd6-c2e1-449c-b84c-1de7d24ee2d5"],"propsByKey":{"403d54e0-cad5-47f0-8374-4d642ea331ef":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"7d6549cf-f16c-4766-8d3c-e85e016f2a10":{"name":"jet_1","sourceUrl":null,"frameSize":{"x":398,"y":298},"frameCount":1,"looping":true,"frameDelay":12,"version":"NiuL_xKQ4HzHdpsGQ_vaNHhM5B0gDJFi","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":298},"rootRelativePath":"assets/7d6549cf-f16c-4766-8d3c-e85e016f2a10.png"},"ca626c63-0e71-42b0-a821-11b144ca7f0c":{"name":"jet","sourceUrl":null,"frameSize":{"x":398,"y":298},"frameCount":1,"looping":true,"frameDelay":12,"version":"1CNQR3OK3QUuRS0EbID5fCtpK53r_0oV","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":298},"rootRelativePath":"assets/ca626c63-0e71-42b0-a821-11b144ca7f0c.png"},"a4bbc053-8eb6-48d7-959d-03f33455c518":{"name":"ghost","sourceUrl":"assets/api/v1/animation-library/gamelab/sGLFDy168GSBfI5ybuBb2KHSBqLUdc71/category_fantasy/ghost_standing.png","frameSize":{"x":72,"y":158},"frameCount":7,"looping":true,"frameDelay":2,"version":"sGLFDy168GSBfI5ybuBb2KHSBqLUdc71","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":504,"y":158},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sGLFDy168GSBfI5ybuBb2KHSBqLUdc71/category_fantasy/ghost_standing.png"},"4616abd6-c2e1-449c-b84c-1de7d24ee2d5":{"name":"ghost_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png","frameSize":{"x":51,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200)
b.setAnimation("bg")
var gameState 

var player = createSprite(45,353,40,40)
player.setAnimation("ghost")
player.scale = 0.5

var jet1 = createSprite(30,215,40,40)
jet1.setAnimation("jet_1")
jet1.scale = 0.2
jet1.velocityX =12

var jet2 = createSprite(400,80,20,20)
jet2.setAnimation("jet")
jet2.scale = 0.2
jet2.velocityX  = -12
var count = 0

 var ghost_1 = createSprite(204,20,40,40)
 ghost_1.setAnimation("ghost_1")
 ghost_1.scale = 0.5
playSound("assets/category_background/repitition.mp3")

function draw() {
  drawSprites()
    textSize(20)
  stroke("yellow")
text("Deaths: " + count,313,24);
  createEdgeSprites()
  jet1.bounceOff(rightEdge)
  jet1.bounceOff(leftEdge)
  
  jet2.bounceOff(rightEdge)
  jet2.bounceOff(leftEdge)
  player.bounceOff(bottomEdge)
  player.bounceOff(topEdge)
  player.bounceOff(rightEdge)
  player.bounceOff(leftEdge)
  
  if(keyDown(UP_ARROW) ){
    player.velocityY = -5
  }
    if(keyWentUp(UP_ARROW) ){
    player.velocityY = 0
  }
    if(keyDown(RIGHT_ARROW) ){
    player.velocityX = 5
  }
    if(keyWentUp(RIGHT_ARROW) ){
    player.velocityX = 0
  }
    if(keyDown(DOWN_ARROW) ){
    player.velocityY = 5
  }
    if(keyWentUp(DOWN_ARROW) ){
    player.velocityY = 0
  }
    if(keyDown(LEFT_ARROW) ){
    player.velocityX = -5
  }
    if(keyWentUp(LEFT_ARROW) ){
    player.velocityX = 0
  }
     if(player.isTouching(jet1) || player.isTouching(jet2)){
     count = count + 1
   player.x = 45
    player.y = 353
  }
  if(player.isTouching(ghost_1)){
    textSize(50)
    textFont("red")
    text("You Win!",100,200)
    player.velocityX = 0
    player.velocityY = 0
    jet1.velocityX = 0
    jet2.velocityX = 0
    
  }
  if(count === 5){
   textSize(50)
    textFont("red")
    text("You Lose!",100,200)
    player.velocityX = 0
    player.velocityY = 0
    jet1.velocityX = 0
    jet2.velocityX = 0
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
