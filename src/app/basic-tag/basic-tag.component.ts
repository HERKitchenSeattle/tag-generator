import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-basic-tag',
  templateUrl: './basic-tag.component.html',
  styleUrls: ['./basic-tag.component.scss'],
})
export class BasicTagComponent implements OnChanges {
  constructor() {}
  @Input() title!: string;
  @Input() subtitle!: string;
  tags = Array(20).fill({ title: this.title, subtitle: this.subtitle });
  ngOnChanges(changes: SimpleChanges) {
    this.tags = Array(20).fill({ title: this.title, subtitle: this.subtitle });
  }
}

class Test {
  constructor(name: string) {
    this._name = name;
  }
  private _name: string;
  private _returnValue!: string;
  returnValue(): string | Test {
    return this._returnValue, this;
  }
}
new Test('epic car');
