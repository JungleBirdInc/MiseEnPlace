import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

// implement check boxes to select which orders to sebd, need icons
export interface MouseEvent {
  rowId: number;
  colId: number;
  cellsType: string;
}

export interface Burn {
  productName: string;
  unitCost: number;
  volume: string;
  quantity: number;
   par: number;
}

const BOURBON_DATA: Burn [] = [
  {productName: 'Jack Daniels', unitCost: 11.42, volume: '750mL', quantity: 4, par: 6},
  {productName: 'Bulleit', unitCost: 11.42, volume: '1L', quantity: 4, par: 5},
  {productName: 'Eagle Rare', unitCost: 11.42, volume: '750mL', quantity: 2, par: 2},
  {productName: 'Jim Beam', unitCost: 11.42, volume: '1L', quantity: 3, par: 5},
  {productName: 'Old Forester', unitCost: 11.42, volume: '750mL', quantity: 5, par: 8},
  {productName: 'Blantons\'s', unitCost: 11.42, volume: '750mL', quantity: 2, par: 3},
];

const VODKA_DATA: Burn [] = [
  {productName: 'Tito\'s', unitCost: 9.47, volume: '750mL', quantity: 4, par: 4},
  {productName: 'Absolut', unitCost: 9.47, volume: '1L', quantity: 4, par: 5},
  {productName: 'Smirnoff', unitCost: 9.47, volume: '750mL', quantity: 2, par: 4},
  {productName: 'Rain', unitCost: 9.47, volume: '1L', quantity: 3, par: 3},
  {productName: 'Grey Goose', unitCost: 9.47, volume: '750mL', quantity: 5, par: 7},
  {productName: 'Stolichiniya', unitCost: 9.47, volume: '750mL', quantity: 2, par: 4},
];
@Component({
  selector: 'app-burn-list',
  templateUrl: './burn-list.component.html',
  styleUrls: ['./burn-list.component.css']
})
export class BurnListComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  show = false;

  displayedColumns: string[] = ['productName', 'volume', 'unitCost', 'quantity', 'par'];
  dataSource = BOURBON_DATA;
  dataSource2 = VODKA_DATA;
  tableMouseDown: MouseEvent;
  tableMouseUp: MouseEvent;
  FIRST_EDITABLE_ROW = 0;
  LAST_EDITABLE_ROW: number = (BOURBON_DATA.length - 1) + (VODKA_DATA.length - 1);
  FIRST_EDITABLE_COL = 1;                       // first column pos is not editable --> so start from index 1
  LAST_EDITABLE_COL: number = this.displayedColumns.length - 1; // = 4
  newCellValue = '';

  /**
   * NOTE: nbRows    of selectedCellsState must = nbRows of the tabl
   * nbColumns of selectedCellsState must = nbColumns of all selectable cells in the table
   * need to make this exponentially grow for each row
   */
  selectedCellsState: boolean[][] = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];

  /**
   * Update table's dataSource
   * @param text
   */
  updateSelectedCellsValues(text: string) {

    if (text == null) { return; }

    if (this.tableMouseDown && this.tableMouseUp) {
      if (this.tableMouseDown.cellsType === this.tableMouseUp.cellsType) {

        const dataCopy: Burn[] = this.dataSource.slice(); // copy and mutate
        let startCol: number;
        let endCol: number;
        let startRow: number;
        let endRow: number;

        if (this.tableMouseDown.colId <= this.tableMouseUp.colId) {
          startCol = this.tableMouseDown.colId;
          endCol   = this.tableMouseUp.colId;
        } else {
          endCol   = this.tableMouseDown.colId;
          startCol = this.tableMouseUp.colId;
        }

        if (this.tableMouseDown.rowId <= this.tableMouseUp.rowId) {
          startRow = this.tableMouseDown.rowId;
          endRow   = this.tableMouseUp.rowId;
        } else {
          endRow   = this.tableMouseDown.rowId;
          startRow = this.tableMouseUp.rowId;
        }

        // --Edit cells from the same column
        if (startCol === endCol) {
          console.log('--Edit cells from the same column');
          for (let i = startRow; i <= endRow; i++) {
            dataCopy[i][this.displayedColumns[startCol]] = text;
          }
        } else {
          // --Edit cells starting and ending not on the same column
          console.log('--Edit cells starting and ending not on the same column');

          for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
              dataCopy[i][this.displayedColumns[j]] = text;
            }
          }
        }
        console.log('--update: ' + startRow + ', ' + startCol + ' to ' + endRow + ', ' + endCol);
        this.dataSource = dataCopy;

      } else {
        this.openSnackBar('The selected cells don\'t have the same type.', 'OK');
      }
    }
  }

  /**
   * @param rowId
   * @param colId
   * @param cellsType
   */
  onMouseDown(rowId: number, colId: number, cellsType: string) {

    this.tableMouseDown = {rowId, colId, cellsType};
  }

  /**
   * @param rowId
   * @param colId
   * @param cellsType
   */
  onMouseUp(rowId: number, colId: number, cellsType: string) {

    this.tableMouseUp = {rowId, colId, cellsType};
    if (this.tableMouseDown) {
      this.newCellValue = '';
      this.updateSelectedCellsState(this.tableMouseDown.colId, this.tableMouseUp.colId, this.tableMouseDown.rowId, this.tableMouseUp.rowId);
    }
  }

  /**
   * Update selectedCols && selectedRows arrays
   * @param mouseDownColId
   * @param mouseUpColId
   * @param mouseDownRowId
   * @param mouseUpRowId
   */
  private updateSelectedCellsState(mouseDownColId: number, mouseUpColId: number, mouseDownRowId: number, mouseUpRowId: number) {

    // init selected cells
    for (let i = this.FIRST_EDITABLE_ROW; i <= this.LAST_EDITABLE_ROW; i++) {
      for (let j = this.FIRST_EDITABLE_COL; j <= this.LAST_EDITABLE_COL; j++) {
        this.selectedCellsState[i][j] = false;
      }
    }
    // update selected cells
    let startCol: number;
    let endCol: number;
    let startRow: number;
    let endRow: number;
    if (mouseDownColId <= mouseUpColId) {
      startCol = mouseDownColId;
      endCol   = mouseUpColId;
    } else {
      endCol   = mouseDownColId;
      startCol = mouseUpColId;
    }

    if (mouseDownRowId <= mouseUpRowId) {
      startRow = mouseDownRowId;
      endRow   = mouseUpRowId;
    } else {
      endRow   = mouseDownRowId;
      startRow = mouseUpRowId;
    }
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        this.selectedCellsState[i][j] = true;
      }
    }
  }

  /**
   * After the user enters a new value, all selected cells must be updated
   * document:keyup
   * @param event
   */
  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {

    // If no cell is selected then ignore keyUp event
    if (this.tableMouseDown && this.tableMouseUp) {

      const specialKeys: string[] = ['Enter', 'PrintScreen', 'Escape', 'cControl', 'NumLock', 'PageUp', 'PageDown', 'End',
        'Home', 'Delete', 'Insert', 'ContextMenu', 'Control', 'ControlAltGraph', 'Alt', 'Meta', 'Shift', 'CapsLock',
        'TabTab', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Pause', 'ScrollLock', 'Dead', '',
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];

      if (event.key === 'Backspace') { // 'delete' key is pressed
        const end: number = this.newCellValue.length - 1;
        this.newCellValue = this.newCellValue.slice(0, end);

      } else if (this.indexOfInArray(event.key, specialKeys) === -1) {
        this.newCellValue += event.key;
      }
      this.updateSelectedCellsValues(this.newCellValue);
    }
  }

  indexOfInArray(item: string, array: string[]): number {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) { index = i; }
    }
    return index;
  }

  /**
   * @param message
   * @param action
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 4000 });
  }


  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
  }

}

