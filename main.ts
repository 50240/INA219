//% weight=100 color=#0fbc11 icon=""
namespace INA219 {
    let i2cAddr = 0x40

    //% block="initialize INA219 sensor"
    export function init(): void {
        pins.i2cWriteNumber(i2cAddr, 0x00, NumberFormat.UInt16BE)
    }

    //% block="read voltage (mV)"
    export function readVoltage(): number {
        pins.i2cWriteNumber(i2cAddr, 0x02, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(i2cAddr, NumberFormat.UInt16BE)
    }

    //% block="read current (mA)"
    export function readCurrent(): number {
        pins.i2cWriteNumber(i2cAddr, 0x04, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(i2cAddr, NumberFormat.UInt16BE)
    }
}