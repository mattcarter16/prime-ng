import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'at-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() icon : string;
  @Input() label : string;
  @Input() value: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
