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
  @Input() numOfTags!: number;
  tags = Array(20).fill({ title: this.title, subtitle: this.subtitle });
  ngOnChanges(changes: SimpleChanges) {
    if (!this.numOfTags)
      this.tags = Array(20).fill({
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
