import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earth',
  standalone: true,
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {
  public currentImage: string = '/assets/earth1.png';
  private imageIndex: number = 1;
  private totalImages: number = 14;

  ngOnInit(): void {
    this.startImageRotation();
  }

  startImageRotation(): void {
    setInterval(() => {
      this.imageIndex = (this.imageIndex % this.totalImages) + 1;
      this.currentImage = `/assets/earth${this.imageIndex}.png`;
    }, 500);
  }
}
