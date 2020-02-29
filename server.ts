import SerialPort from 'serialport';
import { onData } from "./src/events";

export const MAX_PIXEL_NUMBER = 32;

// const port = new SerialPort('/dev/tty.usbmodem12401', {
const port = new SerialPort('/dev/tty.usbmodem301', {
  baudRate: 115200,
  autoOpen: true
});

port.on('open', () => {
  console.log('*** Port open ***');
  port.on('data', onData(port))
});

port.on('error', console.error);
