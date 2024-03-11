//conexiones
enum Conn {
    CON1 = 1,//p8 p0
    CON2,//p12 p1
    CON3,//p16 p2
    CON4,//p6 p3
    CON5,//p7 p4
    CON6,//p9 p10
    CON7,//p13 p14
    CON8//p15 p11
};


enum namesRGB {
    //% block="Red"
    RED = 0,
    //% block="Green"
    GREEN,
    //% block="Blue"
    BLUE
};

enum namesColors {
    //% block="White"
    WHITE = 0,
    //% block="Brown"
    BROWN,
    //% block="Red"
    RED,
    //% block="Green"
    GREEN,
    //% block="Blue"
    BLUE,
    //% block="Violet"
    VIOLET,
    //% block="Yellow"
    YELLOW,
    //% block="Gray"
    GRAY,
    //% block="Black"
    BLACK,
    //% block="Other"
    OTHER
}

let valueColors: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//conexiones
/*enum conn_a {
    CON1 = 1,//p8 p0
    CON2,//p12 p1
    CON3,//p16 p2
    CON4,//p6 p3
    CON5,//p7 p4
    CON6,//p9 p10
}*/
//Comentario 1
//puertos de conexion para la interfaz de misladrillos
//si se necesitan analogicos usar getAnalogPin(DP)
// hola estoy haciendo un update......
let digitalCon: any = {
    1: { P0: DigitalPin.P8, P1: DigitalPin.P0 },
    2: { P0: DigitalPin.P12, P1: DigitalPin.P1 },
    3: { P0: DigitalPin.P16, P1: DigitalPin.P2 },
    4: { P0: DigitalPin.P6, P1: DigitalPin.P3 },
    5: { P0: DigitalPin.P7, P1: DigitalPin.P4 },
    6: { P0: DigitalPin.P9, P1: DigitalPin.P10 },
    7: { P0: DigitalPin.P13, P1: DigitalPin.P14 },
    8: { P0: DigitalPin.P15, P1: DigitalPin.P11 }
}

//Analog connectors 1, 2, 3, 4, 5, 6
/*let analogCon: any = {
    1: {P0: AnalogPin.P0}
    ,2: {P0: AnalogPin.P1}
    ,3: {P0: AnalogPin.P2}
    ,4: {P0: AnalogPin.P3}
    ,5: {P0: AnalogPin.P4}
    ,6: {P0: AnalogPin.P10}
}
*/
/*
//puertos de conexion para el gigglebot
let digitalCon: any = {//11 16 10 7
    1: { P0: DigitalPin.P12, P1: DigitalPin.P8 },
    2: { P0: DigitalPin.P16, P1: DigitalPin.P0 }
};
*/
enum direccionMotor {
    //% block="forward"
    FORWARD,
    //% block="backward"
    BACKWARD
}

enum bicolorStates {
    //% block="Red"
    RED = 1,
    //% block="Yellow"
    YELLOW,
    //% block="Green"
    GREEN,
    //% block="Turn off"
    BLACK
}

enum colors {
    //% block=red
    RED = 0xFF0000,
    //% block=orange
    ORANGE = 0xFFA500,
    //% block=yellow
    YELLOW = 0xFFFF00,
    //% block=green
    GREEN = 0x00FF00,
    //% block=blue
    BLUE = 0x0000FF,
    //% block=violet
    VIOLET = 0x8a2be2,
    //% block=purple
    PURPLE = 0xFF00FF,
    //% block=white
    WHITE = 0xFFFFFF,
    //% block=black
    BLACK = 0x000000
}

enum rgbColors {
    //% block=red
    RED = 0,
    //% block=green
    GREEN,
    //% block=blue
    BLUE,
    //% block=orange
    ORANGE,
    //% block=violet
    VIOLET,
    //% block=cyan
    CYAN,
    //% block=white
    WHITE,
    //% block=black
    BLACK
}

/**
* Different modes for RGB or RGB+W NeoPixel strips
*/
enum NeoPixelMode {
    // block="RGB (GRB format)"
    RGB = 1,
    // block="RGB+W"
    RGBW = 2,
    // block="RGB (RGB format)"
    RGB_RGB = 3
}

enum HueInterpolationDirection {
    Clockwise,
    CounterClockwise,
    Shortest
}

//% weight=5 color=#ff8000 icon="\uf2db"
//% groups="['Miscellaneous','Leds', 'Motors','Buzzer','Sensors', 'Actuators']"
namespace probots{

    /**
     * Get actual extension version.
     */
    //% blockId=getVersion
    //% block="Version"
    //% group="Miscellaneous"
    //% weight=20
    export function version(): string{
        return "1.24.03";
    }

    /*************************************************
     * Motors 
     ******************************************************/


    export class Motor {

        pin1: DigitalPin;
        pina1: AnalogPin;
        pin2: DigitalPin;
        pina2: AnalogPin;
        velocity: number;


        setVelocity(vel: number): void {
            let OutputVal = Math.clamp(0, 100, vel) * 10;
            this.velocity = OutputVal;
        }

        setpins(pin1: DigitalPin, pin2: DigitalPin): void {
            this.pin1 = pin1;
            this.pina1 = getAnalogPin(pin1);
            this.pin2 = pin2;
            this.pina2 = getAnalogPin(pin2);
        }

        //% weight=50
        //% block="%motor| on direction %dir| speed %speed"
        //% speed.min=0 speed.max=100
        //% group="Motors"
        motorOn(dir: direccionMotor, speed: number): void {
            this.setVelocity(speed);
            switch (dir) {
                case direccionMotor.FORWARD:
                    pins.analogWritePin(this.pina1, this.velocity);
                    pins.digitalWritePin(this.pin2, 0);
                    break
                case direccionMotor.BACKWARD:
                    pins.analogWritePin(this.pina2, this.velocity);
                    pins.digitalWritePin(this.pin1, 0);
                    break
            }
        }

        //%block="%motor|turn off"
        //% group="Motors"
        //% weight=20
        motorOff(): void {
            pins.digitalWritePin(this.pin1, 0);
            pins.digitalWritePin(this.pin2, 0);
        }
    }

    function getAnalogPin(pin: DigitalPin): any {
        switch (pin) {
            case DigitalPin.P0:
                return AnalogPin.P0;
                break;
            case DigitalPin.P1:
                return AnalogPin.P1;
                break;
            case DigitalPin.P2:
                return AnalogPin.P2;
                break;
            case DigitalPin.P3:
                return AnalogPin.P3;
                break;
            case DigitalPin.P4:
                return AnalogPin.P4;
                break;
            case DigitalPin.P5:
                return AnalogPin.P5;
                break;
            case DigitalPin.P6:
                return AnalogPin.P6;
                break;
            case DigitalPin.P7:
                return AnalogPin.P7;
                break;
            case DigitalPin.P8:
                return AnalogPin.P8;
                break;
            case DigitalPin.P9:
                return AnalogPin.P9;
                break;
            case DigitalPin.P10:
                return AnalogPin.P10;
                break;
            case DigitalPin.P11:
                return AnalogPin.P11;
                break;
            case DigitalPin.P12:
                return AnalogPin.P12;
                break;
            case DigitalPin.P13:
                return AnalogPin.P13;
                break;
            case DigitalPin.P14:
                return AnalogPin.P14;
                break;
            case DigitalPin.P15:
                return AnalogPin.P15;
                break;
            case DigitalPin.P16:
                return AnalogPin.P16;
                break;
            case DigitalPin.P19:
                return AnalogPin.P19;
                break;
            case DigitalPin.P20:
                return AnalogPin.P20;
                break;
        }
    }

    //%block="Probot on %cone=conexiones_ret"
    //%blockSetVariable=motor
    //% group="Motors"
    //% weight=100
    export function createMotor(cone: any): Motor {
        let motor = new Motor();
        motor.setpins(cone.P0, cone.P1);
        motor.setVelocity(0);
        return motor;
    }
}