class Sim {

    static currentTime = 0;
    static deltaTime = 0;
    static Fps = 0;
    static lastTime = 0 ;
    static particles = [];
    static kineticEnergy = 0;   
    static potentialEnergy = 0;
    static timsecale;
    static fpsCount = 0;
    static totSimTime = 0;



//  TEST ENVIRONMENT    
    static InitTimsecale = -9;

//  SYSTEM INTIAL CONDITIONS
    static InitSimulation(){

        Sim.particles = [];

        if (!repeat){


//  PARTICLE SETUP
        //  Sim.particles.push(position (Picometre 10e-12) ,velocity (m/s) ,acceleration (m/s^2) ,force (N) ,mass,charge (fundamental charge 1.602176634e-19 C),size (M),color){

        /* for (let y = -5 ; y < 5 ; y++){
            for (let x = -5 ; x < 5 ; x++){
                Sim.particles.push(new Particle('custom',new Vector2((x * .1) + .05 ,(y * .1) + .05),new Vector2(0,0),9.1093837e-31,-1,.006,`rgba(120, 174, 225, 1)`));

            }
        } */


        //Sim.particles.push(new Particle(new Vector2(0,0),new Vector2(0,0),new Vector2(0,0),new Vector2(0,0),1.67262192e-27,1,.003,`rgba(255, 88, 73, 1)`))
        //Sim.particles.push(new Particle('custom',new Vector2(.01,.01),new Vector2(0,0),9.1093837e-31,-1,.0003,`rgba(120, 174, 225, 1)`));
        //Sim.particles.push(new Particle('custom',new Vector2(-.1,.01),new Vector2(100,0),9.1093837e-31,-1,.0003,`rgba(120, 174, 225, 1)`));
        //Sim.particles.push(new Particle(new Vector2(.17,.08),new Vector2(0,0),new Vector2(0,0),new Vector2(0,0),1.67262192e-27,1.602176634e-19,.003,`rgba(255, 88, 73, 1)`))
        //Sim.particles.push(new Particle(new Vector2(.14,.08),new Vector2(0,92),new Vector2(0,0),new Vector2(0,0),9.1093837e-31,-1.602176634e-19,.0003,`rgba(120, 174, 225, 1)`));    
        //Sim.particles.push(new Particle('custom',new Vector2(-0.001,0),new Vector2(0,0),9.1093837e-31,-1,.0003,`rgba(120, 174, 225, 1)`));
        //Sim.particles.push(new Particle('custom',new Vector2(0.01,0),new Vector2(-100,0),9.1093837e-31,-1,.003,`rgba(120, 174, 225, 1)`));
        //Sim.particles.push(new Particle('custom',new Vector2(-0.01,0),new Vector2(0,100),9.1093837e-31,1,.003,`rgba(120, 174, 225, 1)`));




//  CIRCLE OF ORBITING PARTICLES (FOR SPRING FORCE)
/*
        for (let i  = 0 ; i < 500 ; i++ ){

            let theta = Math.random()*Math.PI*2;
            let radiusRand = Math.sqrt(Math.random());
        //DISTRUBUTION FUNCTION
            radiusRand = radiusRand;  

            let x = Math.cos(theta)*radiusRand;
            let y = Math.sin(theta)*radiusRand;
        //RADIUS
            x *= .05;
            y *= .05;

        //RANDOM PARTICLE
            let charge = (Math.random ()* 2) - 1.5

        //NEW PARTICLE

        if (charge > 0){
            Sim.particles.push(new Particle('custom',new Vector2(x,y),new Vector2(0,0),1.67262192e-27,1,.001,`rgba(255, 88, 73, 1)`));
        }else{
            Sim.particles.push(new Particle('custom',new Vector2(x,y),new Vector2(0,0),9.1093837e-31,-1,.001,`rgba(120, 174, 225, 1)`));
        }

        //Sim.particles.push(new Particle('custom',new Vector2(x,y),new Vector2(0,0),(charge > 0)? 1.67262192e-27 : 9.1093837e-31,(charge > 0)? 1 : -1,.001,(charge > 0)? `rgba(255, 88, 73, 1)` :`rgba(120, 174, 225, 1)`));
        }
        */

        for (let i  = 0 ; i < 5 ; i++ ){

            let theta = Math.random()*Math.PI*2;
            let radiusRand = Math.sqrt(Math.random());
        //DISTRUBUTION FUNCTION
            radiusRand = radiusRand;  

            let x = Math.cos(theta)*radiusRand;
            let y = Math.sin(theta)*radiusRand;
        //RADIUS
            x *= .05;
            y *= .05;

        //SIZE 
            let size = Math.random() * .005;
            let mass = Math.PI * size * size ;

        //COLOR
            

        //NEW PARTICLE
            Sim.particles.push(new Particle('custom',new Vector2(x,y),new Vector2(((Math.random()*2) -1 )*10e-12,((Math.random()*2) -1 )*10e-12),mass,0,size,`rgb(255, 255, 153)`));
        }


/*
        //  CIRCLE OF ORBITING PARTICLES (FOR SPRING FORCE)
        for (let i  = 0 ; i < 250 ; i++ ){

            let theta = Math.random()*Math.PI*2;
            let radiusRand = Math.sqrt(Math.random());
        //DISTRUBUTION FUNCTION
            radiusRand = radiusRand;  

            let x = Math.cos(theta)*radiusRand;
            let y = Math.sin(theta)*radiusRand;
        //RADIUS
            x *= .01;
            y *= .01;
        //NEW PARTICLE
        Sim.particles.push(new Particle('custom',new Vector2(x + .07,y),new Vector2(-y*100000000000,x*100000000000-10000000000),9.1093837e-31,-1,.0003,`rgba(255, 174, 120, 1)`));
        }
*/


        }else{  
            //Sim.particles = lodash.cloneDeep(currentSim); 
        }
        

        //currentSim = lodash.cloneDeep(Sim.particles);        
        c.fillStyle = 'rgba(0, 0, 0, 1)';
        c.fillRect(0,0,canvas.width,canvas.height);
    }




//  UPDATE SIMULATION
    static Update(){

        Sim.timsecale = Math.pow(10,Sim.InitTimsecale - timeSlider);
        
        
        document.getElementById("dataTimeScale").innerHTML = "10e" + (-1*(Sim.InitTimsecale-timeSlider)).toFixed(2) ;
        
        Sim.currentTime = performance.now() / 1000;

        document.getElementById("dataTotTime").innerHTML = Sim.currentTime.toFixed(2);

        Sim.deltaTime = Sim.currentTime - Sim.lastTime;

        if(Sim.fpsCount > .2){
            document.getElementById("fpsBar").value = Sim.Fps;
            Sim.fpsCount = 0
        }else{
            Sim.fpsCount += Sim.deltaTime;
        }

        Sim.Fps = 1/Sim.deltaTime;
        Sim.deltaTime /= Sim.timsecale;
        Sim.totSimTime += Sim.deltaTime;

        document.getElementById("dataTotSimTime").innerHTML = Sim.totSimTime.toExponential(3);

        Sim.lastTime = Sim.currentTime;

        

        let num_particles = Sim.particles.length;

        if (!pause){
            for(let p = 0; p < num_particles; p++){
                Sim.particles[p].PrepForCalcs();
            }
    
            
            //Sim.potentialEnergy = 0;
            for(let p1 = 0; p1 < num_particles; p1++){
    
                let particle1 = Sim.particles[p1];
    
                for(let p2 = p1+1; p2 < num_particles; p2++){
                    let particle2 = Sim.particles[p2];
                    Particle.RunCalc(particle1, particle2);               //calculations
                                //Sim.potentialEnergy += Particle.addPotentialEnergy(particle1, particle2);
                }
            }
    
            for(let p = 0; p < num_particles; p++){
                Sim.particles[p].ApplyCalcs();
            }
    
            //Sim.kineticEnergy = 0;
            for(let p = 0; p < num_particles; p++){
                
                Sim.particles[p].Update(Sim.deltaTime);
                            //Sim.kineticEnergy += Sim.particles[p].addKineticEnergy();
            }
        }
        

        Sim.Draw();

    }
    

//  DRAW SIMULATION FRAME
    static Draw(){
        c.fillStyle = 'rgba(0, 0, 0, .2)';
        c.fillRect(0,0,canvas.width,canvas.height);

        //DrawUtillsMeter.drawAxes('rgba(100, 100, 100, 1)');
        //sDrawUtillsMeter.drawLine(new Vector2(.1,.1),new Vector2(.1,-.1),'red')

        let num_particles = Sim.particles.length;
        for(let p = 0; p < num_particles; p++){
            let particle = Sim.particles[p];
            particle.Draw();
            
        }


        /* DrawUtillsMeter.drawText(new Vector2(-.16,-.07),20,'white','wheelDragStartPosition: [' + wheelDragStartPosition[0] + ', ' + wheelDragStartPosition[1] + ']');
        DrawUtillsMeter.drawText(new Vector2(-.16,-.06),20,'white','wheelDragDelta: [' + wheelDragDelta[0] + ', ' + wheelDragDelta[1] + ']');
        DrawUtillsMeter.drawText(new Vector2(-.16,-.05),20,'white','lastWheelDragDelta: [' + lastWheelDragDelta[0] + ', ' + lastWheelDragDelta[1] + ']');
        DrawUtillsMeter.drawText(new Vector2(-.16,-.04),20,'white','totalWheelDragDelta: [' + totalWheelDragDelta[0] + ', ' + totalWheelDragDelta[1] + ']');
        DrawUtillsMeter.drawText(new Vector2(-.16,-.03),20,'white','mouseButtons: [' + mouseButtons[0] + ', ' + mouseButtons[1] + ', ' + mouseButtons[2] + ', ' + mouseButtons[3] + ', ' + mouseButtons[4] +']');
        */DrawUtillsMeter.drawText(new Vector2(-.16,-.07),20,'white','FPS: ' + Sim.Fps.toFixed(2));
 
    }
}




