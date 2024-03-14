// Add your code here
namespace ML_TCS34725{

    const ADDR = 0x39;
    const APDS9960_ENABLE = 0x80;
    const APDS9960_ATIME = 0x81;
    const APDS9960_CONTROL = 0x8F;
    const APDS9960_STATUS = 0x93;
    const APDS9960_CDATAL = 0x94;
    const APDS9960_RDATAL = 0x96;
    const APDS9960_GDATAL = 0x98;
    const APDS9960_BDATAL = 0x9A;
    const APDS9960_GCONF4 = 0xAB;
    const APDS9960_AICLEAR = 0xE7;


    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    //% blockId=tcs34725_init block="Init Color Sensor I2C"
    //% group="Sensors"
    export function initColorSensor(): any {
        
        i2cwrite(ADDR, APDS9960_ATIME, 252) // default inte time 4x2.78ms
        i2cwrite(ADDR, APDS9960_CONTROL, 0x03) // todo: make gain adjustable
        i2cwrite(ADDR, APDS9960_ENABLE, 0x00) // put everything off
        i2cwrite(ADDR, APDS9960_GCONF4, 0x00) // disable gesture mode
        i2cwrite(ADDR, APDS9960_AICLEAR, 0x00) // clear all interrupt
        // power on
        i2cwrite(ADDR, APDS9960_ENABLE, 0x01) // clear all interrupt
        let tmp = i2cread(ADDR, APDS9960_ENABLE) | 0x2;
        i2cwrite(ADDR, APDS9960_ENABLE, tmp);

        return tmp;
    }
}