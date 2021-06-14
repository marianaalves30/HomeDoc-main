import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  display    = 'none';

  constructor() { }

  ngOnInit() {
  }

  closeToast(){
    this.display = 'none';
  }

}
