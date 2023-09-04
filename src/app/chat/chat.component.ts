import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('.menu .item').tab();
    });
  }
  
}
