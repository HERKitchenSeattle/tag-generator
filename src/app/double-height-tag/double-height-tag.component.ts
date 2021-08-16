import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-double-height-tag',
  templateUrl: './double-height-tag.component.html',
  styleUrls: ['./double-height-tag.component.scss'],
})
export class DoubleHeightTagComponent implements OnChanges {
  constructor() {}
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() numOfTags!: number;
  tags = Array(12).fill({ title: this.title, subtitle: this.subtitle });
  ngOnChanges(changes: SimpleChanges) {
    if (!this.numOfTags)
      this.tags = Array(12).fill({
        title: this.title,
        subtitle: this.subtitle,
      });
    else {
      this.tags = this.tags = Array(this.numOfTags).fill({
        title: this.title,
        subtitle: this.subtitle,
      });
    }
  }
}
