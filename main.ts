// Enum data to use in microphone
enum soundIntensity {
    //% block="low"
    LOW,
    //% block="medium"
    MEDIUM,
    //% block="high"
    HIGH
}

//Functions for helping with reading and writing registers of different sizes
namespace RegisterHelper {

    /**
     * Write register of the address location
     */
    export function writeRegister(addr: number, reg: number, dat: number): void {
        let _registerBuffer = pins.createBuffer(2);
        _registerBuffer[0] = reg;
        _registerBuffer[1] = dat;
        pins.i2cWriteBuffer(addr, _registerBuffer);
    }

    /**
     * Read a 8-byte register of the address location
     */
    export function readRegister8(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
    }

    /**
     * Read a (UInt16) 16-byte register of the address location
     */
    export function readRegisterUInt16(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt16LE);
    }

    /**
     * Read a (Int16) 16-byte register of the address location
     */
    export function readRegisterInt16(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int16LE);
    }

}

/* #region Enums for Modes, etc */

// Parameters for setting the internal integration time of the RGBC clear and IR channel.
enum TCS34725_ATIME {
    TIME_2_4_MS = 0xFF,    // 1 2.4 ms 1024
    TIME_24_MS = 0xF6,     // 10 24 ms 10240
    TIME_100_MS = 0xD5,    // 42 101 ms 43008
    TIME_154_MS = 0xC0,    // 64 154 ms 65535
    TIME_700_MS = 0x00     // 256 700 ms 65535
}

// Parameters for setting the wait time register.
enum TCS34725_WTIME {
    WTIME_2_4_MS = 0xFF,    // 1 2.4 ms 0.029 sec
    WTIME_204_MS = 0xAB,    // 85 204 ms 2.45 sec
    WTIME_614_MS = 0x00     // 256 614 ms 7.4 sec
}

// Parameters for...
enum RGB {
    RED,
    GREEN,
    BLUE,
    CLEAR
}

// Parameters for setting the persistence register. The persistence register controls the filtering interrupt capabilities of the device.
enum TCS34725_APERS {
    APERS_0_CLEAR = 0b0000,      // Every RGBC cycle generates an interrupt
    APERS_1_CLEAR = 0b0001,      // 1 clear channel value outside of threshold range
    APERS_2_CLEAR = 0b0010,      // 2 clear channel consecutive values out of range
    APERS_3_CLEAR = 0b0011,      // 3 clear channel consecutive values out of range
    APERS_5_CLEAR = 0b0100,      // 5 clear channel consecutive values out of range
    APERS_10_CLEAR = 0b0101,     // 10 clear channel consecutive values out of range
    APERS_15_CLEAR = 0b0110,     // 15 clear channel consecutive values out of range
    APERS_20_CLEAR = 0b0111,     // 20 clear channel consecutive values out of range
    APERS_25_CLEAR = 0b1000,     // 25 clear channel consecutive values out of range
    APERS_30_CLEAR = 0b1001,     // 30 clear channel consecutive values out of range
    APERS_35_CLEAR = 0b1010,     // 35 clear channel consecutive values out of range
    APERS_40_CLEAR = 0b1011,     // 40 clear channel consecutive values out of range
    APERS_45_CLEAR = 0b1100,     // 45 clear channel consecutive values out of range
    APERS_50_CLEAR = 0b1101,     // 50 clear channel consecutive values out of range
    APERS_55_CLEAR = 0b1110,     // 55 clear channel consecutive values out of range
    APERS_60_CLEAR = 0b1111,     // 60 clear channel consecutive values out of range
}

// Parameters for setting the gain of the sensor.
enum TCS34725_AGAIN {
    GAIN_1X = 0x0,      // 1x gain
    GAIN_4X = 0x1,      // 4x gain
    GAIN_16X = 0x2,      // 16x gain
    GAIN_60X = 0x3       // 60x gain
}

/* #endregion */

//conexiones
enum conn {
    CON1 = 1,   //p8    p0
    CON2,       //p12   p1
    CON3,       //p16   p2
    CON4,       //p6    p3
    CON5,       //p7    p4
    CON6,       //p9    p10
    CON7,       //p13   p14
    CON8        //p15   p11
};

//puertos de conexion para la interfaz de mis ladrillos
//si se necesitan analogicos usar getAnalogPin(DP)
let digitalCon: any = {
    1: { P0: DigitalPin.P8,     P1: DigitalPin.P0 },
    2: { P0: DigitalPin.P12,    P1: DigitalPin.P1 },
    3: { P0: DigitalPin.P16,    P1: DigitalPin.P2 },
    4: { P0: DigitalPin.P6,     P1: DigitalPin.P3 },
    5: { P0: DigitalPin.P7,     P1: DigitalPin.P4 },
    6: { P0: DigitalPin.P9,     P1: DigitalPin.P10 },
    7: { P0: DigitalPin.P13,    P1: DigitalPin.P14 },
    8: { P0: DigitalPin.P15,    P1: DigitalPin.P11 }
}

enum DireccionMotor {
    //% block="forward"
    Adelante,
    //% block="backward"
    Atras
}

enum joystickAction{
    //%block="X Axis"
    X_AXIS,
    //%block="Y Axis"
    Y_AXIX,
    //%block="Button"
    BUTTON
}

enum Names_rgb {
    //% block="Red"
    Red = 0,
    //% block="Green"
    Green,
    //% block="Blue"
    Blue
};

enum Names_colors {
    //% block="White"
    White = 0,
    //% block="Brown"
    Brown,
    //% block="Red"
    Red,
    //% block="Green"
    Green,
    //% block="Blue"
    Blue,
    //% block="Violet"
    Violet,
    //% block="Yellow"
    Yellow,
    //% block="Gray"
    Gray,
    //% block="Black"
    Black,
    //% block="Other"
    Other
}

let valueColors: number[][] = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ,   [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ,   [0, 0, 0, 0, 0, 0, 0, 0, 0]
];


enum Estados_bicolor {
    //% block="Red"
    Red = 1,
    //% block="Yellow"
    Yellow,
    //% block="Green"
    Green,
    //% block="Turn off"
    Black
}

enum Colors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

enum Colors_rgb {
    //% block=red
    Red = 0,
    //% block=green
    Green,
    //% block=blue
    Blue,
    //% block=orange
    Yellow,
    //% block=yellow
    Orange,
    //% block=violet
    Violet,
    //% block=cyan
    Cyan,
    //% block=white
    White,
    //% block=black
    Black
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
//% groups="['Miscellaneous','Leds', 'Motors','Buzzer','Sensors', 'Actuators', 'Screens']"
namespace probots {

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
        motorOn(dir: DireccionMotor, speed: number): void {
            this.setVelocity(speed);
            switch (dir) {
                case DireccionMotor.Adelante:
                    pins.analogWritePin(this.pina1, this.velocity);
                    pins.digitalWritePin(this.pin2, 0);
                    break
                case DireccionMotor.Atras:
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
    //%group="Motors"
    //%weight=100
    export function createMotor(cone: any): Motor {
        let motor = new Motor();
        motor.setpins(cone.P0, cone.P1);
        motor.setVelocity(0);
        return motor;
    }

    //% block="Servo $con=conexiones_ret | degrees | %grados"
    //% group="Motors"
    //% grados.min=0 grados.max=180
    export function servoProbot(con: any, grados: number) {
        return pins.servoWritePin(getAnalogPin(con.P0), grados)
    }

    /*****************************************
     * Music
     *******************************************/

    //%block="Play frecuency $frecuencia|by %duracion|ms on %cone=conexiones_ret"
    //%group="Buzzer"
    //% frecuencia.shadow="note_freq"
    export function reproducirTono(frecuencia: number, duracion: number, cone: any): void {
        pins.analogSetPitchPin(cone.P1)
        let frequency = frecuencia < 0 ? 0 : frecuencia;
        let duration = duracion < 0 ? 0 : duracion;
        pins.analogPitch(frequency, duration)
    }

    //%block="Play melody %melodyArray=devuelveMelodia on %cone=conexiones_ret"
    //%group="Buzzer"
    export function beginMelody(melodyArray: string[], cone: any) {
        pins.analogSetPitchPin(cone.P1)
        music.beginMelody(melodyArray, MelodyOptions.Once)
    }

    /**
     * 
     * INFRARROJO
     * 
     */
    //%block="Infrared on %cone=conexiones_ret"
    //%group="Sensors" weight=71 color=#2b64bc
    // nota* cada conexion tiene dos pines en este caso se lee el de uno solo
    export function infrarrojo(cone: any): number {
        return pins.digitalReadPin(cone.P0);
    }

    //%block="Infrared is ON on %cone=conexiones_ret"
    //%group="Sensors" weight=70 color=#2b64bc
    // nota* cada conexion tiene dos pines en este caso se lee el de uno solo
    export function infrarrojoOn(cone: any): boolean {
        return  pins.digitalReadPin(cone.P0) === 1 ? true: false ;
    }

    /*
        LED BICOLOR
    */
    //%block="LED  bicolor on %cone=conexiones_ret| show as %est"
    //%group="Leds"
    export function bicolor(cone: any, est: Estados_bicolor) {
        switch (est) {
            case Estados_bicolor.Black:
                pins.digitalWritePin(cone.P0, 0);
                pins.digitalWritePin(cone.P1, 0);
                break;
            case Estados_bicolor.Red:
                pins.digitalWritePin(cone.P0, 1);
                pins.digitalWritePin(cone.P1, 0);
                break;
            case Estados_bicolor.Yellow:
                pins.digitalWritePin(cone.P0, 1);
                pins.digitalWritePin(cone.P1, 1);
                break;
            case Estados_bicolor.Green:
                pins.digitalWritePin(cone.P0, 0);
                pins.digitalWritePin(cone.P1, 1);
                break;
        }
    }


    //%block="Probot on $pin=conexiones_ret| of $cantidad_leds|leds"
    //%cantidad_leds.defl=8
    //%blockSetVariable=leds_neopixel
    //%group="Leds"
    //% weight=100
    export function newStripNeopixel(pin: any, cantidad_leds: number): Strip {
        //        export function create(pin: DigitalPin, numleds: number, mode: NeoPixelMode): Strip {
        let strip = new Strip();
        let stride = 3;
        strip.buf = pins.createBuffer(cantidad_leds * stride);
        strip.start = 0;
        strip._length = cantidad_leds;
        strip._mode = NeoPixelMode.RGB || NeoPixelMode.RGB;
        strip._matrixWidth = 0;
        strip.setBrightness(128)
        strip.setPin(pin.P0)
        return strip;

    }
    //% block="$leds=variables_get(leds_neopixel)|show color %rgb=Colores" 
    //% group="Leds"
    //% weight=80
    export function showColor(leds: Strip, rgb: Colors) {
        rgb = rgb >> 0;
        setAllRGB(leds, rgb);
        leds.show();
    }

    function setAllRGB(leds: Strip, rgb: number) {
        let red = unpackR(rgb);
        let green = unpackG(rgb);
        let blue = unpackB(rgb);

        const br = leds.brightness;
        if (br < 255) {
            red = (red * br) >> 8;
            green = (green * br) >> 8;
            blue = (blue * br) >> 8;
        }
        const end = leds.start + leds._length;
        const stride = leds._mode === NeoPixelMode.RGBW ? 4 : 3;
        for (let i = leds.start; i < end; ++i) {
            setBufferRGB(leds, i * stride, red, green, blue)
        }
    }
    function setBufferRGB(leds: Strip, offset: number, red: number, green: number, blue: number): void {
        if (leds._mode === NeoPixelMode.RGB_RGB) {
            leds.buf[offset + 0] = red;
            leds.buf[offset + 1] = green;
        } else {
            leds.buf[offset + 0] = green;
            leds.buf[offset + 1] = red;
        }
        leds.buf[offset + 2] = blue;
    }
    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    //% block="Potentiometer on $con=conexiones_ret"
    //% group="Actuators" weight=50 color=#e20e16
    export function potenciometro(con: any): number {
        return pins.analogReadPin(getAnalogPin(con.P1))
    }

    //% block="Button on $con=conexiones_ret"
    //% group="Actuators" weight=51 color=#e20e16
    export function buttonIsPressed(con: any): boolean {
        return pins.digitalReadPin(con.P0) === 1 ? false : true;
    }


    //% block="Light on $con=conexiones_ret"
    //% group="Sensors" color=#e264bc weight=85
    export function sensorLuz(con: any): number {
        return pins.analogReadPin(getAnalogPin(con.P1))
    }

    //% block="Read $times| times the light on $con=conexiones_ret"
    //% group="Sensors"
    //% times.defl=10
    //% color=#e264bc weight=84
    export function sensorLuz_cantidad(times: number, con: any): number {
        let temp = 0.0;
        let a = 0;
        for (a = 0; a < times; a++) {
            temp += pins.analogReadPin(getAnalogPin(con.P1));
        }
        temp /= times;
        return Math.round(temp);
    }


    // block="Buzzer en $con=conexiones_ret"
    export function sensorSonido(con: any): number {
        return pins.analogReadPin(getAnalogPin(con.P1))
    }

    /******************ULTRASONIDO
     */
    //% blockId=sonar_ping block="Ultrasound cm. on %cone=conexiones_ret"
    //% group="Sensors"
    //% inlineInputMode=inline
    //% weight=90 color=#e7e700

    export function ping(cone: any): number {
        // send pulse
        let maxCmDistance = 500;
        pins.setPull(cone.P1, PinPullMode.PullNone);
        pins.digitalWritePin(cone.P1, 0);
        control.waitMicros(2);
        pins.digitalWritePin(cone.P1, 1);
        control.waitMicros(10);
        pins.digitalWritePin(cone.P1, 0);
        // read pulse
        const d = pins.pulseIn(cone.P0, PulseValue.High, maxCmDistance * 58);
        return Math.idiv(d, 58);
    }
  
    /*
    * 
    * PULSADOR
    * 
    */
    //%block="Button on %cone=conexiones_ret"
    //% group="Actuators" weight=50 color=#e20e16
    // nota* cada conexion tiene dos pines en este caso se lee el de uno solo
    export function pulsador(cone: any): number {

        let reading = pins.digitalReadPin(cone.P0);

        if(reading == 0){
            return 1;
        }
        else{
            return 0;
        }      
    }

    /**
     * Joystick
     */

    //%blockId=joystick_get_at
    //%block="Joystick value of %action"
    //% group="Actuators" weight=49 color=#e27725
    export function joystick(action: joystickAction): number {
        switch(action){
            case joystickAction.X_AXIS:
                return pins.digitalReadPin(DigitalPin.P9);
                break;
            case joystickAction.Y_AXIX:
                return pins.analogReadPin(AnalogPin.P10);
                break;
            case joystickAction.BUTTON:
                let buttonState = pins.digitalReadPin(DigitalPin.P5);
                if(buttonState == 0){
                    buttonState = 1;
                } else {
                    buttonState = 0;
                }
                return buttonState;
                break;
            default:
                return 0;
                break;
        }        
    }
    
    /*
    * 
    * LASER
    * 
    
   //block="LASER en %cone=conexiones_ret"
   //group="Leds"
   // nota* cada conexion tiene dos pines en este caso se lee el de uno solo
   export function laser(cone: any, estado: Estados_laser): number {
       return pins.digitalWritePin(cone.P0, estado);
   }*/

    //% block="%col"
    //% blockId="conexiones_ret"
    //% group="Miscellaneous"
    //% weight=1
    export function conexiones_ret(col: conn): any {
        return digitalCon[col];
    }

    // block="%col"
    // blockId="conexiones_ret_a"
    // group="Miscellaneous"
    // weight=1
    /*export function conexiones_ret_a(col: conn_a): any {
        return analogCon[col];
    }*/

    //% blockId="colores_probot" block="%color"
    //% group="Miscellaneous"
    //% weight=2
    export function colors(color: Colors): number {
        return color;
    }

    //%block="Enable matrix of leds $val"
    //%val.shadow="toggleYesNo"
    //%group="Miscellaneous"
    //% weight=5
    export function activate_leds(val: boolean): void {
        val ? led.enable(true) : led.enable(false)
    }

    //%block="Melody %melodia=Melodies"
    //%blockId=devuelveMelodia
    //%group="Miscellaneous"
    //% weight=3
    export function devuelveMelodia(melodia: Melodies): string[] {
        return music.builtInMelody(melodia)
    }

    //% block="$nota"
    //% blockId=note_freq
    //% shim=TD_ID
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    //% nota.fieldEditor="note" note.defl="262"
    //% nota.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    //% group="Miscellaneous"
    //% weight=4
    export function noteFreq(nota: Note): number {
        return nota;
    }
    //based on neopixel extension
    class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any
        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b).
         * @param rgb RGB color of the LED
         */
        // blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors"
        // strip.defl=strip
        // weight=85 blockGap=8
        // parts="neopixel"
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }
        /**
         * Shows a rainbow pattern on all LEDs.
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        // blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue"
        // strip.defl=strip
        // weight=85 blockGap=8
        // parts="neopixel"
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;
            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;
            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = Math.idiv((hDistCW * 100), steps);
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation
            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;
            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100
            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = Math.idiv((h1_100 + i * hStep), 100) + 360;
                    const s = Math.idiv((s1_100 + i * sStep), 100);
                    const l = Math.idiv((l1_100 + i * lStep), 100);
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }
        /**
         * Displays a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, eg: 255
         */
        // weight=84
        // blockId=neopixel_show_bar_graph block="%strip|show bar graph of %value|up to %high"
        // strip.defl=strip
        // icon="\uf080"
        // parts="neopixel"
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, Colors.Yellow);
                this.show();
                return;
            }
            value = Math.abs(value);
            const n = this._length;
            const n1 = n - 1;
            let v = Math.idiv((value * n), high);
            if (v == 0) {
                this.setPixelColor(0, 0x666600);
                for (let i = 1; i < n; ++i)
                    this.setPixelColor(i, 0);
            } else {
                for (let i = 0; i < n; ++i) {
                    if (i <= v) {
                        const b = Math.idiv(i * 255, n1);
                        this.setPixelColor(i, rgb(b, 0, 255 - b));
                    }
                    else this.setPixelColor(i, 0);
                }
            }
            this.show();
        }
        /**
         * Set LED to a given color (range 0-255 for r, g, b).
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param rgb RGB color of the LED
         */
        // blockId="neopixel_set_pixel_color" block="%strip|set pixel color at %pixeloffset|to %rgb=neopixel_colors"
        // strip.defl=strip
        // blockGap=8
        // weight=80
        // parts="neopixel" advanced=true
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);
        }
        /**
         * Sets the number of pixels in a matrix shaped strip
         * @param width number of pixels in a row
         */
        // blockId=neopixel_set_matrix_width block="%strip|set matrix width %width"
        // strip.defl=strip
        // blockGap=8
        // weight=5
        // parts="neopixel" advanced=true
        setMatrixWidth(width: number) {
            this._matrixWidth = Math.min(this._length, width >> 0);
        }
        /**
         * Set LED to a given color (range 0-255 for r, g, b) in a matrix shaped strip
         * You need to call ``show`` to make the changes visible.
         * @param x horizontal position
         * @param y horizontal position
         * @param rgb RGB color of the LED
         */
        // blockId="neopixel_set_matrix_color" block="%strip|set matrix color at x %x|y %y|to %rgb=neopixel_colors"
        // strip.defl=strip
        // weight=4
        // parts="neopixel" advanced=true
        setMatrixColor(x: number, y: number, rgb: number) {
            if (this._matrixWidth <= 0) return; // not a matrix, ignore
            x = x >> 0;
            y = y >> 0;
            rgb = rgb >> 0;
            const cols = Math.idiv(this._length, this._matrixWidth);
            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;
            let i = x + y * this._matrixWidth;
            this.setPixelColor(i, rgb);
        }
        /**
         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        // blockId="neopixel_set_pixel_white" block="%strip|set pixel white LED at %pixeloffset|to %white"
        // strip.defl=strip
        // blockGap=8
        // weight=80
        // parts="neopixel" advanced=true
        setPixelWhiteLED(pixeloffset: number, white: number): void {
            if (this._mode === NeoPixelMode.RGBW) {
                this.setPixelW(pixeloffset >> 0, white >> 0);
            }
        }
        /**
         * Send all the changes to the strip.
         */
        // blockId="neopixel_show" block="%strip|show" blockGap=8
        // strip.defl=strip
        // weight=79
        // parts="neopixel"
        show() {
            // only supported in beta
            // ws2812b.setBufferMode(this.pin, this._mode);
            ws2812b.sendBuffer(this.buf, this.pin);
        }
        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        // blockId="neopixel_clear" block="%strip|clear"
        // strip.defl=strip
        // weight=76
        // parts="neopixel"
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }
        /**
         * Gets the number of pixels declared on the strip
         */
        // blockId="neopixel_length" block="%strip|length" blockGap=8
        // strip.defl=strip
        // weight=60 advanced=true
        length() {
            return this._length;
        }
        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        // blockId="neopixel_set_brightness" block="%strip|set brightness %brightness" blockGap=8
        // strip.defl=strip
        // weight=59
        // parts="neopixel" advanced=true
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }
        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        // blockId="neopixel_each_brightness" block="%strip|ease brightness" blockGap=8
        // strip.defl=strip
        // weight=58
        // parts="neopixel" advanced=true
        easeBrightness(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const br = this.brightness;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = Math.idiv(this._length, 2);
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br = k > mid
                    ? Math.idiv(255 * (this._length - 1 - k) * (this._length - 1 - k), (mid * mid))
                    : Math.idiv(255 * k * k, (mid * mid));
                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
                }
            }
        }
        /**
         * Create a range of LEDs.
         * @param start offset in the LED strip to start the range
         * @param length number of LEDs in the range. eg: 4
         */
        // weight=89
        // blockId="neopixel_range" block="%strip|range from %start|with %length|leds"
        // strip.defl=strip
        // parts="neopixel"
        // blockSetVariable=range
        range(start: number, length: number): Strip {
            start = start >> 0;
            length = length >> 0;
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            strip._matrixWidth = 0;
            strip._mode = this._mode;
            return strip;
        }
        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        // blockId="neopixel_shift" block="%strip|shift pixels by %offset" blockGap=8
        // strip.defl=strip
        // weight=40
        // parts="neopixel"
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
        }
        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        // blockId="neopixel_rotate" block="%strip|rotate pixels by %offset" blockGap=8
        // strip.defl=strip
        // weight=39
        // parts="neopixel"
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
        }
        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        // weight=10
        // parts="neopixel" advanced=true
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }
        /**
         * Estimates the electrical current (mA) consumed by the current light configuration.
         */
        // weight=9 blockId=neopixel_power block="%strip|power (mA)"
        // strip.defl=strip
        // advanced=true
        power(): number {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                const ledoffset = i * stride;
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return Math.idiv(this.length() * 7, 10) /* 0.7mA per neopixel */
                + Math.idiv(p * 480, 10000); /* rought approximation */
        }
        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }
        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);
            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;
            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;
            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);
            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;
            pixeloffset = (pixeloffset + this.start) * 4;
            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }
    function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);
        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }
    function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }


    /*
     * 
     * RGB LED
     * 
     */
    //% block="RGB LED on CONN 7 show color %color=colores_rgb"
    //% group="Sensors" weight=92
    // nota* cada conexion tiene dos pines en este caso se lee el de uno solo
    export function rgb_led(color: Colors_rgb) {
        switch (color) {
            case Colors_rgb.Black:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.White:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case Colors_rgb.Red:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.Green:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case Colors_rgb.Blue:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.Yellow:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case Colors_rgb.Orange:
                //100% red 64.7% green 0% blue
                pins.digitalWritePin(DigitalPin.P15, 1); //red
                pins.digitalWritePin(DigitalPin.P14, 0); //blue
                pins.analogWritePin(getAnalogPin(DigitalPin.P13), 128);
                //pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.Violet:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.Cyan:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            default: break;
        }
        return
    }

    /*
     * 
     * RGB LED
     * 
     */
    //% block="RGB LED on CONN 7 show color %color=colores_rgb by %duracion|ms"
    //% group="Sensors" weight=93 
    // nota* cada conexion tiene dos pines en este caso se lee el de uno solo
    export function rgb_led_time(color: Colors_rgb, duracion: number) {
        switch (color) {
            case Colors_rgb.Black:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.White:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case Colors_rgb.Red:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.Green:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case Colors_rgb.Blue:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.Yellow:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case Colors_rgb.Orange:
                //100% red 64.7% green 0% blue
                pins.digitalWritePin(DigitalPin.P15, 1); //red
                pins.digitalWritePin(DigitalPin.P14, 0); //blue
                pins.analogWritePin(getAnalogPin(DigitalPin.P13), 128);
                //pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.Violet:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case Colors_rgb.Cyan:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            default: break;
        }
        basic.pause(duracion);
        rgb_led(Colors_rgb.Black);
        return
    }

    function isInRange(toEval: number, centralValue: number, offset: number): boolean {
        return ((toEval < centralValue + offset) && (toEval > centralValue - offset));
    }




    function getColorString(color: number): string {
        switch (color) {
            case 8: return "Black"; break;
            case 4: return "Blue"; break;
            case 1: return "Brown"; break;
            case 0: return "White"; break;
            case 5: return "Violet"; break;
            case 2: return "Red"; break;
            case 3: return "Green"; break;
            case 7: return "Gray"; break;
            case 6: return "Yellow"; break;
            default: return "N"; break;
        }
    }

    //% block="%col"
    //% blockId="colors_ret"
    //% group="Miscellaneous"
    export function colors_ret(col: Names_colors): any {
        switch (col) {
            case Names_colors.White: return Names_colors.White; break;
            case Names_colors.Red: return Names_colors.Red; break;
            case Names_colors.Blue: return Names_colors.Blue; break;
            case Names_colors.Green: return Names_colors.Green; break;
            case Names_colors.Yellow: return Names_colors.Yellow; break;
            case Names_colors.Brown: return Names_colors.Brown; break;
            case Names_colors.Gray: return Names_colors.Gray; break;
            case Names_colors.Violet: return Names_colors.Violet; break;
            default: return Names_colors.Black; break;
        }
    }

    // RGB READ LIBRARY ///////////////////////////////////////
    // Samuel Niederer
    // TCS34725 extension
    const TCS34725_I2C_ADDRESS = 0x29        //I2C address of the TCS34725 (Page 34)

    /* TCS34725 register addresses (Page 20)*/

    const TCS34725_REGISTER_COMMAND = 0x80		// Specifies register address 

    const TCS34725_REGISTER_ENABLE = 0x00		// Enables states and interrupts
    const TCS34725_REGISTER_AIEN_ENABLE = 0x10	// RGBC interrupt enable. When asserted, permits RGBC interrupts to be generated.
    const TCS34725_REGISTER_WEN_ENABLE = 0x08	// Wait enable. This bit activates the wait feature. Writing a 1 activates the wait timer. Writing a 0 disables the wait timer.
    const TCS34725_REGISTER_AEN_ENABLE = 0x02	// RGBC enable. This bit actives the two-channel ADC. Writing a 1 activates the RGBC. Writing a 0 disables the RGBC.
    const TCS34725_REGISTER_PON_ENABLE = 0x01	// Power ON. This bit activates the internal oscillator to permit the timers and ADC channels to operate. Writing a 1 activates the oscillator. Writing a 0 disables the oscillator

    const TCS34725_REGISTER_ATIME = 0x01		// The RGBC timing register controls the internal integration time of the RGBC clear and IR channel ADCs in 2.4-ms increments.
    const TCS34725_REGISTER_WTIME = 0x03		// Wait time is set 2.4 ms increments unless the WLONG bit is asserted, in which case the wait times are 12× longer. WTIME is programmed as a 2's complement number.

    const TCS34725_REGISTER_AILTL = 0x04		// Clear interrupt low threshold low byte
    const TCS34725_REGISTER_AILTH = 0x05		// Clear interrupt low threshold high byte
    const TCS34725_REGISTER_AIHTL = 0x06		// Clear interrupt high threshold low byte
    const TCS34725_REGISTER_AIHTH = 0x07		// Clear interrupt high threshold high byte

    const TCS34725_REGISTER_PERS = 0x0C		    // The persistence register controls the filtering interrupt capabilities of the device.

    const TCS34725_REGISTER_CONFIG = 0x0D		// The configuration register sets the wait long time.
    const TCS34725_REGISTER_CONFIG_WLONG = 0x02	// Configuration: Wait Long. When asserted, the wait cycles are increased by a factor 12× from that programmed in the WTIME register

    const TCS34725_REGISTER_CONTROL = 0x0F		// The Control register provides eight bits of miscellaneous control to the analog block. These bits typically control functions such as gain settings and/or diode selection
    const TCS34725_REGISTER_ID = 0x12		    // The ID Register provides the value for the part number. The ID register is a read-only register.

    const TCS34725_REGISTER_STATUS = 0x13		    // The Status Register provides the internal status of the device. This register is read only.
    const TCS34725_REGISTER_STATUS_AINT = 0x10		// Device status: RGBC clear channel Interrupt
    const TCS34725_REGISTER_STATUS_AVALID = 0x01	// Device status: RGBC Valid. Indicates that the RGBC channels have completed an integration cycle

    const TCS34725_REGISTER_CDATAL = 0x14		// Clear data low byte
    const TCS34725_REGISTER_CDATAH = 0x15		// Clear data high byte

    const TCS34725_REGISTER_RDATAL = 0x16		// Red data low byte
    const TCS34725_REGISTER_RDATAH = 0x17		// Red data high byte

    const TCS34725_REGISTER_GDATAL = 0x18		// Green data low byte
    const TCS34725_REGISTER_GDATAH = 0x19		// Green data high byte

    const TCS34725_REGISTER_BDATAL = 0x1A		// Blue data low byte
    const TCS34725_REGISTER_BDATAH = 0x1B		// Blue data high byte


   

   
    let TCS34725_I2C_ADDR = TCS34725_I2C_ADDRESS;
    export let isConnected = false;
    let atimeIntegrationValue = 0;
    let gainSensorValue = 0

    // blockId=tcs34725_init block="Init Color Sensor I2C"
    // group="Sensors"
    export function initSensor(): void {
        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER READ:     TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_ID (0x12)
        let device_id = RegisterHelper.readRegister8(TCS34725_I2C_ADDRESS, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_ID)

        //Check that device Identification has one of 2 i2c addresses         
        if ((device_id != 0x44) && (device_id != 0x4D)) {//(device_id != 0x10)) {
            isConnected = false;
        }
        else
            isConnected = true;
    }

    export function turnSensorOn(atime: TCS34725_ATIME) {

        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER VALUE:    TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_ENABLE (0x00)
        //REGISTER WRITE:    TCS34725_REGISTER_PON_ENABLE (0x01)
        RegisterHelper.writeRegister(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_ENABLE, TCS34725_REGISTER_PON_ENABLE);
        basic.pause(300);


        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER VALUE:    TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_ENABLE (0x00)
        //REGISTER WRITE:    TCS34725_REGISTER_PON_ENABLE (0x01) | TCS34725_REGISTER_AEN_ENABLE (0x02)        
        RegisterHelper.writeRegister(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_ENABLE, TCS34725_REGISTER_PON_ENABLE | TCS34725_REGISTER_AEN_ENABLE);

        pauseSensorForIntegrationTime(atime);
    }

    export function pauseSensorForIntegrationTime(atime: TCS34725_ATIME) {
        switch (atime) {
            case TCS34725_ATIME.TIME_2_4_MS: {
                basic.pause(2.4);
                break;
            }
            case TCS34725_ATIME.TIME_24_MS: {
                basic.pause(24);
                break;
            }
            case TCS34725_ATIME.TIME_100_MS: {
                basic.pause(100);
                break;
            }
            case TCS34725_ATIME.TIME_154_MS: {
                basic.pause(154);
                break;
            }
            case TCS34725_ATIME.TIME_700_MS: {
                basic.pause(700);
                break;
            }
        }
    }

    export function turnSensorOff() {
        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER READ:     TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_ID (0x12)        
        let sensorReg = RegisterHelper.readRegister8(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_ENABLE);

        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER VALUE:    TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_ENABLE (0x00)
        //REGISTER WRITE:    sensorReg & ~(TCS34725_REGISTER_PON_ENABLE (0x01) | TCS34725_REGISTER_AEN_ENABLE (0x02))            
        RegisterHelper.writeRegister(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_ENABLE, sensorReg & ~(TCS34725_REGISTER_PON_ENABLE | TCS34725_REGISTER_AEN_ENABLE));
    }

    export function setATIMEintegration(atime: TCS34725_ATIME) {
        //Always make sure the color sensor is connected. Useful for cases when this block is used but the sensor wasn't set randomly. 
        if (!isConnected)
            initSensor()

        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER VALUE:    TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_ATIME (0x01)
        //REGISTER WRITE:    atime                
        RegisterHelper.writeRegister(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_ATIME, atime)

        atimeIntegrationValue = atime;

    }

    export function setGAINsensor(gain: TCS34725_AGAIN) {
        //Always make sure the color sensor is connected. Useful for cases when this block is used but the sensor wasn't set randomly. 
        if (!isConnected)
            initSensor()

        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER VALUE:    TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_CONTROL (0x0F)
        //REGISTER WRITE:    gain         
        RegisterHelper.writeRegister(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_CONTROL, gain)

        gainSensorValue = gain;
    }

    //% blockId="start_colorSensor" block="Start sensor with integration time %atime and %gain"
    //% group="Sensors"
    //% weight=100 color=#338012
    export function start(atime: TCS34725_ATIME, gain: TCS34725_AGAIN) {

        while (!isConnected) {
            initSensor();
        }

        setATIMEintegration(atime);
        setGAINsensor(gain);
        turnSensorOn(atime);
    }

    export type RGBC = {
        red: number,
        green: number,
        blue: number,
        clear: number
    };

    export function getSensorRGB(): RGBC {
        //Always check that sensor is/was turned on
        while (!isConnected) {
            initSensor();
        }

        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER READ:     TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_RDATAL (0x16)          
        let redColorValue = RegisterHelper.readRegisterUInt16(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_RDATAL);

        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER READ:     TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_GDATAL (0x18)          
        let greenColorValue = RegisterHelper.readRegisterUInt16(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_GDATAL);

        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER READ:     TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_BDATAL (0x1A)          
        let blueColorValue = RegisterHelper.readRegisterUInt16(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_BDATAL);

        //REGISTER FORMAT:   CMD | TRANSACTION | ADDRESS
        //REGISTER READ:     TCS34725_REGISTER_COMMAND (0x80) | TCS34725_REGISTER_CDATAL (0x14)          
        let clearColorValue = RegisterHelper.readRegisterUInt16(TCS34725_I2C_ADDR, TCS34725_REGISTER_COMMAND | TCS34725_REGISTER_CDATAL);

        pauseSensorForIntegrationTime(atimeIntegrationValue);

        let sum = clearColorValue;
        let r = 0;
        let g = 0;
        let b = 0;

        if (clearColorValue == 0) {
            return {
                red: 0,
                green: 0,
                blue: 0,
                clear: 0
            }
        }
        else {
            r = redColorValue / sum * 255;
            g = greenColorValue / sum * 255;
            b = blueColorValue / sum * 255;

            return {
                red: r,
                green: g,
                blue: b,
                clear: clearColorValue
            }
        }
    }

    //% blockId="getSensorData" block="get color data %colorId"
    //% group="Sensors"
    //% weight=99 color=#338012
    export function getSensorData(colorId: RGB): number {
        let data = getSensorRGB();
        let color = 0;

        switch (colorId) {
            case RGB.RED: color = data.red;
                break;
            case RGB.GREEN: color = data.green;
                break;
            case RGB.BLUE: color = data.blue;
                break;
            case RGB.CLEAR: color = data.clear;
                break;
        }

        return color;
    }

/**
 * Get Humidity in the ambient. 
 */

    //% blockId="dht11_dht22_readHum" 
    //% block="get humidity on %cone=conexiones_ret"
    //% block.loc.es="$obtener humedad en %cone=conexiones_ret"
    //% jsdoc.loc.es="Obtener el valor de humedad relativa ambiente en el puerto de comunicaciones seleccionado."
    //% group="Sensors"
    //% weight=81 color=#225055
    export function ReadHum(cone: any): number {
        //dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P16, false, true, true);
        dht11_dht22.queryData(DHTtype.DHT11, cone.P0, false, true, true);
        return dht11_dht22.readData(dataType.humidity);
        }

    //% blockId="dht11_dht22_readTemp" block="get temperature on %cone=conexiones_ret in %scale=tempType"
    //% group="Sensors"
    //% weight=80 color=#225055
    export function ReadTemp(cone: any, scale: tempType): number {
        //dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P16, false, true, true);   
        dht11_dht22.selectTempType(scale);
        dht11_dht22.queryData(DHTtype.DHT11, cone.P0, false, true, true);
        return dht11_dht22.readData(dataType.temperature);
    }


    /*
    * //// MICROPHONE //////////////////////////////////////
    */

    //%blockId="getMicrophoneSound"
    //%block="Microphone detect sound %db=soundIntensity on %con=conexiones_ret"
    //%db.defl=soundIntensity.MEDIUM
    //%group="Sensors" color=#a1e1a0 weight=40
    export function getMicrophoneSound(db: soundIntensity, con: any): boolean {
        let getDB = pins.analogReadPin(getAnalogPin(con.P1));
        serial.writeLine("db=" + getDB);
        
        if(db == soundIntensity.HIGH && getDB >= 1000)
        {
            return true;
        }
        else if (db == soundIntensity.MEDIUM && getDB >= 950)
        {
            return true;
        }
        else if (db == soundIntensity.LOW && getDB >= 900) {
            return true;
        }
        else{
            return false;
        }
    }


    /*
  * ///////  HUMEDAD EN TIERRA  //////////////////////////////////////
  */

    //%blockId="getSoilMoisture"
    //%block="detect ground humidity on %con=conexiones_ret"
    //%group="Sensors" color=#613b09 weight=39
    export function getSoilMoisture(con: any): boolean {
        return  pins.digitalReadPin(con.P0) === 1 ? false : true;
    }


    /*
    * ///////  OLED DISPLAY  //////////////////////////////////
    */

    //%blockId="createOLED"
    //%block="init OLED in I2C address $i2cAddress"
    //%i2cAddress.defl=60
    //%group="Screens" color=#442299 weight=100
    export function createOLED(i2cAddress: number): void {
        OLED12864_I2C.init(i2cAddress)
        OLED12864_I2C.clear()
    } 

    //%blockId="oledClearScreen"
    //%block="clear screen"
    //%group="Screens" color=#442299 weight=99
    export function oledClearScreen(): void {
        OLED12864_I2C.clear();
    }

    //%blockId="oledSetText"
    //%block="set text $text in line $y at position $x"
    //%text.defl="hello"
    //%y.defl=0
    //%x.defl=0
    //%group="Screens" color=#442299 weight=98
    export function oledSetText(x:number , y: number, text: string): void {
        OLED12864_I2C.showString(x, y,text);
    }

    //%blockId="oledSetNumber"
    //%block="set number $myNumber in line $y at position $x"
    //%myNumber.defl=99
    //%y.defl=0
    //%x.defl=0
    //%group="Screens" color=#442299 weight=97
    export function oledSetNumber(x: number, y: number, myNumber: number): void {
        OLED12864_I2C.showNumber(x, y, myNumber);
    }
}


/**
 * MakeCode editor extension for DHT11 and DHT22 humidity/temperature sensors
 * by Alan Wang
 */

enum DHTtype {
    //% block="DHT11"
    DHT11,
    //% block="DHT22"
    DHT22,
}

enum dataType {
    //% block="humidity"
    humidity,
    //% block="temperature"
    temperature,
}

enum tempType {
    //% block="Celsius (*C)"
    celsius,
    //% block="Fahrenheit (*F)"
    fahrenheit,
}


namespace dht11_dht22 {

    let _temperature: number = -99.0
    let _humidity: number = -99.0
    let _temptype: tempType = tempType.celsius
    let _readSuccessful: boolean = false
    let _sensorresponding: boolean = false

    
    export function queryData(DHT: DHTtype, dataPin: DigitalPin, pullUp: boolean, serialOtput: boolean, wait: boolean) {

        //initialize
        let startTime: number = 0
        let endTime: number = 0
        let checksum: number = 0
        let checksumTmp: number = 0
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        let DHTstr: string = (DHT == DHTtype.DHT11) ? "DHT11" : "DHT22"

        for (let index = 0; index < 40; index++) dataArray.push(false)
        for (let index = 0; index < 5; index++) resultArray.push(0)

        _humidity = -99.0
        _temperature = -99.0
        _readSuccessful = false
        _sensorresponding = false
        startTime = input.runningTimeMicros()

        //request data
        pins.digitalWritePin(dataPin, 0) //begin protocol, pull down pin
        basic.pause(18)

        if (pullUp) pins.setPull(dataPin, PinPullMode.PullUp) //pull up data pin if needed
        pins.digitalReadPin(dataPin) //pull up pin
        control.waitMicros(40)

        if (pins.digitalReadPin(dataPin) == 1) {
            if (serialOtput) {
                serial.writeLine(DHTstr + " not responding!")
                serial.writeLine("----------------------------------------")
            }

        } else {

            _sensorresponding = true

            while (pins.digitalReadPin(dataPin) == 0); //sensor response
            while (pins.digitalReadPin(dataPin) == 1); //sensor response

            //read data (5 bytes)
            for (let index = 0; index < 40; index++) {
                while (pins.digitalReadPin(dataPin) == 1);
                while (pins.digitalReadPin(dataPin) == 0);
                control.waitMicros(28)
                //if sensor still pull up data pin after 28 us it means 1, otherwise 0
                if (pins.digitalReadPin(dataPin) == 1) dataArray[index] = true
            }

            endTime = input.runningTimeMicros()

            //convert byte number array to integer
            for (let index = 0; index < 5; index++)
                for (let index2 = 0; index2 < 8; index2++)
                    if (dataArray[8 * index + index2]) resultArray[index] += 2 ** (7 - index2)

            //verify checksum
            checksumTmp = resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]
            checksum = resultArray[4]
            if (checksumTmp >= 512) checksumTmp -= 512
            if (checksumTmp >= 256) checksumTmp -= 256
            if (checksum == checksumTmp) _readSuccessful = true

            //read data if checksum ok
            if (_readSuccessful) {
                if (DHT == DHTtype.DHT11) {
                    //DHT11
                    _humidity = resultArray[0] + resultArray[1] / 100
                    _temperature = resultArray[2] + resultArray[3] / 100
                } else {
                    //DHT22
                    let temp_sign: number = 1
                    if (resultArray[2] >= 128) {
                        resultArray[2] -= 128
                        temp_sign = -1
                    }
                    _humidity = (resultArray[0] * 256 + resultArray[1]) / 10
                    _temperature = (resultArray[2] * 256 + resultArray[3]) / 10 * temp_sign
                }
                if (_temptype == tempType.fahrenheit)
                    _temperature = _temperature * 9 / 5 + 32
            }

            //serial output
            if (serialOtput) {
                serial.writeLine(DHTstr + " query completed in " + (endTime - startTime) + " microseconds")
                if (_readSuccessful) {
                    serial.writeLine("Checksum ok")
                    serial.writeLine("Humidity: " + _humidity + " %")
                    serial.writeLine("Temperature: " + _temperature + (_temptype == tempType.celsius ? " *C" : " *F"))
                } else {
                    serial.writeLine("Checksum error")
                }
                serial.writeLine("----------------------------------------")
            }

        }

        //wait 2 sec after query if needed
        if (wait) basic.pause(2000)

    }

   
    export function readData(data: dataType): number {
        return data == dataType.humidity ? _humidity : _temperature
    }

    
    export function selectTempType(temp: tempType) {
        _temptype = temp
    }


    export function readDataSuccessful(): boolean {
        return _readSuccessful
    }

   
    export function sensorrResponding(): boolean {
        return _sensorresponding
    }
}

