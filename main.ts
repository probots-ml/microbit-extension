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

    
}