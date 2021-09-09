import { fabric } from "fabric";
import { v4 } from "uuid";
import ResizeObserver from "resize-observer-polyfill";
import {Handler} from '../handler';
import {Socket} from "../socket";

class Canvas {
  public canvas: fabric.Canvas;
  public handler: Handler;
  public socket: Socket;
  //private resizeObserver: ResizeObserver;

  constructor(canvasID: string) {
    this.initializeCanvas(canvasID);
  }

  public initializeCanvas = (canvasID) => {
    this.canvas = new fabric.Canvas(canvasID);
    this.handler = new Handler(this.canvas);
    this.socket = new Socket();
  }
}

export default Canvas;
