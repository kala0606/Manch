let myModel;
let saveBtn;
let iSet;
let iPlus;

function setup() {
  createCanvas(400, 400, WEBGL);
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
    box(200,200,3.0);
  });

  saveBtn = createButton('Save .obj');
  saveBtn.mousePressed(() => myModel.saveObj());

//   describe('A few spheres rotating in space');
}

function draw() {
  background(0);
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
          let nF = noise(x/10,y/10)
            
            if(noise(x,y)>0.7){
                translate(x,y,100*nF);
                fc = 200;
                floNo = 200;
            }
            else {
                translate(x,y,15*nF);
                fc = 200;
                floNo = 30
            }
            fill(fc);
            
            box(size,size, floNo*nF);
            
          pop();
           }
      }
    }
    
  }