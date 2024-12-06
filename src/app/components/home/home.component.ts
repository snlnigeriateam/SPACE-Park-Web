import { Component } from '@angular/core';
import { EarthComponent } from '../earth/earth.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EarthComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
