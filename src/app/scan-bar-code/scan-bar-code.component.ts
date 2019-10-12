import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import Quagga from 'quagga';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UPCService } from '../services/sendUPC.service';

@Component({
  selector: 'app-scan-bar-code',
  templateUrl: './scan-bar-code.component.html',
  styleUrls: ['./scan-bar-code.component.css'],
  providers: [UPCService]
})
export class ScanBarCodeComponent implements OnInit {
  closeResult: string;
  barcode: string;
  configQuagga = {
    inputStrem: {
      name: 'Live',
      type: 'LiveStream',
      target: '#inputBarCode',
      constraints: {
        width: { min: 640},
        height: {min: 480},
        aspectRatio: {min: 1, max: 100},
        facingMode: 'environment',
      },
      singleChannel: false
    },
    locator: {
      patchSixe: 'medium',
      halfSample: true
    },
    locate: true,
    numOfQorkers: 4,
    decoder: {
      readers: ['upc_reader']
    }
  };

  constructor(
    private ref: ChangeDetectorRef,
    private modalService: NgbModal,
    private data: UPCService,
    private router: Router,
    ) { }

  ngOnInit() {
    console.log('Barcode: initialization');
  }


  testChangeValues() {
    this.barcode = 'barcode number: 0123456789';
  }

  startScanner() {
    this.barcode = '';
    this.ref.detectChanges();

    Quagga.onProcessed((result) => this.onProcessed(result));

    Quagga.onDetected((result) => this.logCode(result));

    Quagga.init(this.configQuagga, (err) => {
      if (err) {
        return console.log(err);
      }
      Quagga.start();
      console.log('Barcode: initialization finished, ready to start.');
    });
  }

  private onProcessed(result: any) {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
        result.boxes.filter((box) => {
            return box !== result.box;
        }).forEach((box) => {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2});
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2});
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y' }, drawingCtx, {color: 'red', lineWidth: 3});
      }
    }
  }

  private logCode(result) {
    const code = result.codeResult.code;
    if (this.barcode !== code) {
      this.barcode = code;
      this.ref.detectChanges();
      console.log(this.barcode);
      Quagga.stop();
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  sendCode(code) {
    this.router.navigateByUrl('scale', {state: {barcode: this.barcode}});
    this.modalService.dismissAll();
  }

}

