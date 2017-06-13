import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glitter',
  templateUrl: './glitter.component.html',
  styleUrls: ['./glitter.component.css']
})
export class GlitterComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit() {
  }

}
