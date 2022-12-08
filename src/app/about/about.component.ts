import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TODOS } from '../todo-mock';
import * as ace from "ace-builds";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name=['Harshil','Rana','Sanjay','Rajeshree'];
  // @ViewChild("editor") private editor!: ElementRef<HTMLElement> ;
  // ngAfterViewInit(): void{
  //   ace.config.set("fontsize","14px");
  //   const aceEditor = ace.edit(this.editor.nativeElement);
  //   aceEditor.session.setValue("<h2>Harshil here</h2>");
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
