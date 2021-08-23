import { Component, ViewChild } from '@angular/core';
import { Sortable } from '@shopify/draggable';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('list') list;

  name = 'Angular 5';

  ngOnInit() {
    const test = new Sortable(this.list.nativeElement, { draggable: 'li' });

    // test.on('sortable:start', () => console.log('sortable:start'));
    // test.on('sortable:sort', () => console.log('sortable:sort'));
    // test.on('sortable:sorted', () => console.log('sortable:sorted'));
    // test.on('sortable:stop', (e) => console.log('sortable:stop', e.data.newIndex, e.data.oldIndex));
    console.log(this.list.nativeElement.childNodes)
    Observable.fromEvent(this.list.nativeElement.childNodes[1], 'sortable:stop').subscribe((event) => console.log(event));
  }
}
