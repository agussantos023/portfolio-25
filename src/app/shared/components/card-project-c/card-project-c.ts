import { Component, input } from '@angular/core';
import { ProjectData } from '../../interface/project.interface';
import { SvgIconC } from '../svg-icon-c/svg-icon-c';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-card-project-c',
  imports: [SvgIconC, UpperCasePipe],
  templateUrl: './card-project-c.html',
  styleUrl: './card-project-c.css',
})
export class CardProjectC {
  data = input.required<ProjectData>();
}
