import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  titleVal!: string;
  subtitleVal!: string;
  printPage(): void {
    window.print();
  }
  ngOnInit(): void {
    console.log(
      this.activatedRoute.snapshot.paramMap.get('title'),
      this.activatedRoute.snapshot.paramMap.get('subtitle')
    );

    if (this.activatedRoute.snapshot.paramMap.get('title'))
      this.titleVal = this.activatedRoute.snapshot.paramMap.get(
        'title'
      ) as string;
    if (this.activatedRoute.snapshot.paramMap.get('subtitle'))
      this.titleVal = this.activatedRoute.snapshot.paramMap.get(
        'subtitle'
      ) as string;
  }
}
