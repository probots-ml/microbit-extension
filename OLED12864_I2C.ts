namespace OLED{

 export class OLED12864_I2C {

    font: number[];
    _I2CAddr: number;
    _screen : Buffer;
    _buf2 : Buffer;
     _buf3 : Buffer;
     _buf4 : Buffer;
    _ZOOM : number;

    initVariables(){
        this._I2CAddr = 0;
        this._screen = pins.createBuffer(1025);
        this._buf2 = pins.createBuffer(2);
        this._buf3 = pins.createBuffer(3);
        this._buf4 = pins.createBuffer(4);
        this._ZOOM = 1;
    }

    initFont(){
        this.font[0] = 0x0022d422;
        this.font[1] = 0x0022d422;
        this.font[2] = 0x0022d422;
        this.font[3] = 0x0022d422;
        this.font[4] = 0x0022d422;
        this.font[5] = 0x0022d422;
        this.font[6] = 0x0022d422;
        this.font[7] = 0x0022d422;
        this.font[8] = 0x0022d422;
        this.font[9] = 0x0022d422;
        this.font[10] = 0x0022d422;
        this.font[11] = 0x0022d422;
        this.font[12] = 0x0022d422;
        this.font[13] = 0x0022d422;
        this.font[14] = 0x0022d422;
        this.font[15] = 0x0022d422;
        this.font[16] = 0x0022d422;
        this.font[17] = 0x0022d422;
        this.font[18] = 0x0022d422;
        this.font[19] = 0x0022d422;
        this.font[20] = 0x0022d422;
        this.font[21] = 0x0022d422;
        this.font[22] = 0x0022d422;
        this.font[23] = 0x0022d422;
        this.font[24] = 0x0022d422;
        this.font[25] = 0x0022d422;
        this.font[26] = 0x0022d422;
        this.font[27] = 0x0022d422;
        this.font[28] = 0x0022d422;
        this.font[29] = 0x0022d422;
        this.font[30] = 0x0022d422;
        this.font[31] = 0x0022d422;
        this.font[32] = 0x00000000;
        this.font[33] = 0x000002e0;
        this.font[34] = 0x00018060;
        this.font[35] = 0x00afabea;
        this.font[36] = 0x00aed6ea;
        this.font[37] = 0x01991133;
        this.font[38] = 0x010556aa;
        this.font[39] = 0x00000060;
        this.font[40] = 0x000045c0;
        this.font[41] = 0x00003a20;
        this.font[42] = 0x00051140;
        this.font[43] = 0x00023880;
        this.font[44] = 0x00002200;
        this.font[45] = 0x00021080;
        this.font[46] = 0x00000100;
        this.font[47] = 0x00111110;
        this.font[48] = 0x0007462e;
        this.font[49] = 0x00087e40;
        this.font[50] = 0x000956b9;
        this.font[51] = 0x0005d629;
        this.font[52] = 0x008fa54c;
        this.font[53] = 0x009ad6b7;
        this.font[54] = 0x008ada88;
        this.font[55] = 0x00119531;
        this.font[56] = 0x00aad6aa;
        this.font[57] = 0x0022b6a2;
        this.font[58] = 0x00000140;
        this.font[59] = 0x00002a00;
        this.font[60] = 0x0008a880;
        this.font[61] = 0x00052940;
        this.font[62] = 0x00022a20;
        this.font[63] = 0x0022d422;
        this.font[64] = 0x00e4d62e;
        this.font[65] = 0x000f14be;
        this.font[66] = 0x000556bf;
        this.font[67] = 0x0008c62e;
        this.font[68] = 0x0007463f;
        this.font[69] = 0x0008d6bf;
        this.font[70] = 0x000094bf;
        this.font[71] = 0x00cac62e;
        this.font[72] = 0x000f909f;
        this.font[73] = 0x000047f1;
        this.font[74] = 0x0017c629;
        this.font[75] = 0x0008a89f;
        this.font[76] = 0x0008421f;
        this.font[77] = 0x01f1105f;
        this.font[78] = 0x01f4105f;
        this.font[79] = 0x0007462e;
        this.font[80] = 0x000114bf;
        this.font[81] = 0x000b6526;
        this.font[82] = 0x010514bf;
        this.font[83] = 0x0004d6b2;
        this.font[84] = 0x0010fc21;
        this.font[85] = 0x0007c20f;
        this.font[86] = 0x00744107;
        this.font[87] = 0x01f4111f;
        this.font[88] = 0x000d909b;
        this.font[89] = 0x00117041;
        this.font[90] = 0x0008ceb9;
        this.font[91] = 0x0008c7e0;
        this.font[92] = 0x01041041;
        this.font[93] = 0x000fc620;
        this.font[94] = 0x00010440;
        this.font[95] = 0x01084210;
        this.font[96] = 0x00000820;
        this.font[97] = 0x010f4a4c;
        this.font[98] = 0x0004529f;
        this.font[99] = 0x00094a4c;
        this.font[100] = 0x000fd288;
        this.font[101] = 0x000956ae;
        this.font[102] = 0x000097c4;
        this.font[103] = 0x0007d6a2;
        this.font[104] = 0x000c109f;
        this.font[105] = 0x000003a0;
        this.font[106] = 0x0006c200;
        this.font[107] = 0x0008289f;
        this.font[108] = 0x000841e0;
        this.font[109] = 0x01e1105e;
        this.font[110] = 0x000e085e;
        this.font[111] = 0x00064a4c;
        this.font[112] = 0x0002295e;
        this.font[113] = 0x000f2944;
        this.font[114] = 0x0001085c;
        this.font[115] = 0x00012a90;
        this.font[116] = 0x010a51e0;
        this.font[117] = 0x010f420e;
        this.font[118] = 0x00644106;
        this.font[119] = 0x01e8221e;
        this.font[120] = 0x00093192;
        this.font[121] = 0x00222292;
        this.font[122] = 0x00095b52;
        this.font[123] = 0x0008fc80;
        this.font[124] = 0x000003e0;
        this.font[125] = 0x000013f1;
        this.font[126] = 0x00841080;
        this.font[127] = 0x0022d422;
    }

    cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(this._I2CAddr, n, NumberFormat.UInt16BE);
    }

    cmd2(d1: number, d2: number) {
        this._buf3[0] = 0;
        this._buf3[1] = d1;
        this._buf3[2] = d2;
        pins.i2cWriteBuffer(this._I2CAddr, this._buf3);
    }

    cmd3(d1: number, d2: number, d3: number) {
        this._buf4[0] = 0;
        this._buf4[1] = d1;
        this._buf4[2] = d2;
        this._buf4[3] = d3;
        pins.i2cWriteBuffer(this._I2CAddr, this._buf4);
    }

    set_pos(col: number = 0, page: number = 0) {
        this.cmd1(0xb0 | page) // page number
        let c = col * (this._ZOOM + 1)
        this.cmd1(0x00 | (c % 16)) // lower start column address
        this.cmd1(0x10 | (c >> 4)) // upper start column address    
    }

    // clear bit
    clrbit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }

  
     pixel(x: number, y: number, color: number = 1) {
        let page = y >> 3
        let shift_page = y % 8
         let ind = x * (this._ZOOM + 1) + page * 128 + 1
         let b = (color) ? (this._screen[ind] | (1 << shift_page)) : this.clrbit(this._screen[ind], shift_page)
         this._screen[ind] = b
         this.set_pos(x, page)
         if (this._ZOOM) {
            this._screen[ind + 1] = b
            this._buf3[0] = 0x40
            this._buf3[1] = this._buf3[2] = b
             pins.i2cWriteBuffer(this._I2CAddr, this._buf3)
        }
        else {
             this._buf2[0] = 0x40
             this._buf2[1] = b
             pins.i2cWriteBuffer(this._I2CAddr, this._buf2)
        }
    }

   
    //%blockId="oledPrintText"
    //%block="print text $s at line $y y in position $x"
    //%s.defl="hello"
    //%group="Screens" color=#442299 weight=98
    showString(x: number, y: number, s: string, color: number = 1) {
        let col = 0
        let p = 0
        let ind = 0
        for (let n = 0; n < s.length; n++) {
            p = this.font[s.charCodeAt(n)]
            for (let i = 0; i < 5; i++) {
                col = 0
                for (let j = 0; j < 5; j++) {
                    if (p & (1 << (5 * i + j)))
                        col |= (1 << (j + 1))
                }
                ind = (x + n) * 5 * (this._ZOOM + 1) + y * 128 + i * (this._ZOOM + 1) + 1
                if (color == 0)
                    col = 255 - col
                this._screen[ind] = col
                if (this._ZOOM)
                    this._screen[ind + 1] = col
            }
        }
        this.set_pos(x * 5, y)
        let ind0 = x * 5 * (this._ZOOM + 1) + y * 128
        let buf = this._screen.slice(ind0, ind + 1)
        buf[0] = 0x40
        pins.i2cWriteBuffer(this._I2CAddr, buf)
    }

   
    showNumber(x: number, y: number, num: number, color: number = 1) {
        this.showString(x, y, num.toString(), color)
    }

    
    hline(x: number, y: number, len: number, color: number = 1) {
        for (let i = x; i < (x + len); i++)
            this.pixel(i, y, color)
    }

    
    vline(x: number, y: number, len: number, color: number = 1) {
        for (let i = y; i < (y + len); i++)
            this.pixel(x, i, color)
    }

   
    rect(x1: number, y1: number, x2: number, y2: number, color: number = 1) {
        if (x1 > x2)
            x1 = [x2, x2 = x1][0];
        if (y1 > y2)
            y1 = [y2, y2 = y1][0];
        this.hline(x1, y1, x2 - x1 + 1, color)
        this.hline(x1, y2, x2 - x1 + 1, color)
        this.vline(x1, y1, y2 - y1 + 1, color)
        this.vline(x2, y1, y2 - y1 + 1, color)
    }

   
    invert(d: boolean = true) {
        let n = (d) ? 0xA7 : 0xA6
        this.cmd1(n)
    }

    
    draw() {
        this.set_pos()
        pins.i2cWriteBuffer(this._I2CAddr, this._screen)
    }

    //%blockId="oledClear"
    //%block="clear screen"
    //%group="Screens" color=#442299 weight=99
    clear() {
        this._screen.fill(0)
        this._screen[0] = 0x40
        this.draw()
    }

  
    on() {
        this.cmd1(0xAF)
    }

  
    off() {
        this.cmd1(0xAE)
    }

   
    zoom(d: boolean = true) {
        this._ZOOM = (d) ? 1 : 0
        this.cmd2(0xd6, this._ZOOM)
    }

   
    init(addr: number) {
        this.initVariables();
        this.initFont();

        this._I2CAddr = addr;
        this.cmd1(0xAE)       // SSD1306_DISPLAYOFF
        this.cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME
        this.cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
        this.cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
        this.cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
        this.cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE
        this.cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP
        this.cmd2(0x20, 0x00) // SSD1306_MEMORYMODE
        this.cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        this.cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        this.cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP
        this.cmd1(0xc8)       // SSD1306_COMSCANDEC
        this.cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS
        this.cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST
        this.cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE
        this.cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT
        this.cmd1(0xA6)       // SSD1306_NORMALDISPLAY
        this.cmd2(0xD6, 1)    // zoom on
        this.cmd1(0xAF)       // SSD1306_DISPLAYON
        this.clear()
        this._ZOOM = 1
    }
}

}