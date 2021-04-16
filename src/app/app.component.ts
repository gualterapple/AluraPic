import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fotos = [
    { url: 'https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Xamarin.png', description: 'foto 1' },
    { url: 'https://miro.medium.com/max/2880/1*rw8VTkhZIINGs4s_5DLCKg.png', description: 'foto 2' },
  ];
}
