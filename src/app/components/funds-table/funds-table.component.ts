import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-funds-table',
  templateUrl: './funds-table.component.html',
  styleUrls: ['./funds-table.component.scss']
})
export class FundsTableComponent implements OnInit {
  elements = ELEMENT_DATA;
  controls: FormArray = new FormArray([]);

  ngOnInit(): void {
    const toGroups = this.elements.map(element => {
      return new FormGroup({
        position: new FormControl(element.position, Validators.required),
        name: new FormControl(element.name, Validators.required)
      });
    });

    this.controls = new FormArray (toGroups);
  }

  getControl(index: number, field: string) : FormControl
  {
    return this.controls.at(index).get(field) as FormControl;
  }

  updateField(index: number, field: string) {
    const control = this.getControl(index, field);
    if (control.valid){
      this.elements = this.elements.map((e, i) => {
        if (index === i) {
         return {
           ...e,
           [field]: control.value
         }

        }
        return e;
      })
    }
  }
}
