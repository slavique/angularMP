import {Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_CHECKLIST_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomChecklistComponent),
  multi: true
};

@Component({
  selector: 'app-custom-checklist',
  templateUrl: './custom-checklist.component.html',
  styleUrls: ['./custom-checklist.component.css'],
  providers: [CUSTOM_CHECKLIST_CONTROL_VALUE_ACCESSOR]
})
export class CustomChecklistComponent implements ControlValueAccessor {
  @Input() items: string[];
  @Input() nameOption: string;

  valuesArr: any[];
  currentValue: any;

  setValue(item) {
    this.value = item.target.value
  }

  set value(newValue) {
    if (newValue) {
      this.currentValue = newValue;
      this.onChange(newValue);
    }
  }

  get value() {
    return this.currentValue;
  }

  onChange = (_) => {};
  onTouched = (_) => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    if (value !== this.currentValue) {
      this.currentValue = value;
    }
  }

}
