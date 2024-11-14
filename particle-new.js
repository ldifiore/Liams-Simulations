class Particle {

    constructor (position,velocity) {
        this.position = position;
        this.velocity = velocity; 
        this.mass = 0;
        this.charge = 0;
        this.spin = 0;
        this.energy = 0;
        this.drawFillColor = '';
        this.drawBoarderColor = '';


    }

}

    class Fermion extends Particle {

        constructor (position,velocity){
            super(position,velocity);
            this.spin = 1/2 ;
        }

    }

        class Quark extends Fermion {

            constructor (position,velocity){
                super(position,velocity);
                this.colorCharge = [0,0,0];
            }

        }

            class Up extends Quark {

                constructor (position,velocity){
                    super(position,velocity);
                    this.charge = 2/3;
                    this.mass = 2.3 * 10^6
                }

            }

            class Down extends Quark {

                constructor (position,velocity){
                    super(position,velocity);
                    this.charge = -1/3;
                    this.mass = 4.8 * 10^6
                }

            }



        class Lepton extends Fermion{

            constructor (position,velocity){
                super(position,velocity);
            }

        }
    
            class Electron extends Lepton {

                constructor (position,velocity){
                    super(position,velocity);
                    this.charge = -1;
                    this.mass = 0.511 * 10^6
                }

            }
        
            class Neutrino extends Lepton {
                
                constructor (position,velocity){
                    super(position,velocity);
                    this.charge = 0;
                    this.mass = 2.2
                }

            }



            

    class Boson extends Particle {

        constructor (position,velocity){
            super(position,velocity);
            this.spin = 1 ;
        }

    }

        class Photon extends Boson {
            constructor (position,velocity){
                super(position,velocity);
                this.charge = 0;
                this.mass = 0;
            }
        }

        class Gluon extends Boson {
            constructor (position,velocity){
                super(position,velocity);
                this.charge = 0;
                this.mass = 0;
            }
        }

        class ZBoson extends Boson {

            constructor (position,velocity){
                super(position,velocity);
                this.charge = 0;
                this.mass = 9.1 * 10^9;
            }

        }

        class PWBoson extends Boson {

            constructor (position,velocity){
                super(position,velocity);
                this.charge = 1;
                this.mass = 81.4 * 10^9;
            }

        }

        class NWBoson extends Boson {

            constructor (position,velocity){
                super(position,velocity);
                this.charge = -1;
                this.mass = 81.4 * 10^9;
            }

        }