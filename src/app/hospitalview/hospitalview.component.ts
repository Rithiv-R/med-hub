import { SelectorContext } from '@angular/compiler';
import { Component, Input, OnInit ,} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Hospital } from '../tsmodel';

@Component({
  selector: 'app-hospitalview',
  templateUrl: './hospitalview.component.html',
  styleUrls: ['./hospitalview.component.css']
})
export class HospitalviewComponent implements OnInit{

  @Input() selector!: Hospital;
  @Input() url!:SafeUrl;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
