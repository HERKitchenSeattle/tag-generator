import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TagDataService {
  constructor() {}
  private _title: string = '';
  private _subtitle: string = '';
  private _numberOfTags: number = 20;

  get title() {
    return this._title;
  }
  get subtitle() {
    return this._subtitle;
  }
  get numberOfTags() {
    return this._numberOfTags;
  }
  set title(title: string) {
    this._title = title;
  }
  set subtitle(subtitle: string) {
    this._subtitle = subtitle;
  }
  set numberOfTags(numberOfTags: number) {
    this._numberOfTags = numberOfTags;
  }
}
