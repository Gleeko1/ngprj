import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  submitProjectForm(f: NgForm) {
    console.log({...f.value})
    this.submitted.emit({...f.value})
  }
}
