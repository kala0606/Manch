let myModel;
let saveBtn;
let iSet;
let iPlus;

function setup() {
  createCanvas(500, 500, WEBGL);
  iSet = int(random(5,15));
  iPlus= int(random(5,15));
  myModel = buildGeometry(() => {
    // for (let i = 0; i < 5; i++) {
    //   push();
    //   translate(
    //     random(-75, 75),
    //     random(-75, 75),
    //     random(-75, 75)
    //   );
    //   sphere(random(5, 50));
    //   pop();
    // }
    // translate(width/2, height/2, -10);

    for(let i = iSet; i <= 65; i+=iPlus){
      drawCube(i*4, i); 
    }
    fill(200);
    box(200,200,1.0);
  });

  saveBtn = createButton('Save .obj');
  saveBtn.mousePressed(() => myModel.saveObj());

//   describe('A few spheres rotating in space');
}

function draw() {
  background(255);
  noStroke();
  lights();
  
  orbitControl();

  model(myModel);
}

function drawCube( side,  size) {
    for(let x = -side/2; x <= side/2; x+=size){
      for(let y = -side/2; y <= side/2; y+=size){
        if(x==-side/2 || x == side/2 || y==-side/2 || y==side/2){
          let fc, floNo;
          push();
          let nF = noise(x/10,y/10,size)
            
            if(noise(x,y)>0.5){
                translate(x,y,size/30*15*nF);
                fc = 245;
                floNo = 30;
            }
            else {
                translate(x,y,size/30*5*nF);
                fc = 20;
                floNo = 10;
            }
            fill(fc);
            
            box(size,size, size/30*floNo*nF);
            
          pop();
           }
      }
    }
    
  }