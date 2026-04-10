import { Component, input } from '@angular/core';
import { CardStudy } from './card-study-interface';
import { HighlightPipe } from '../../../shared/pipes/highlight-pipe';
import { SvgIconC } from '../../../shared/components/svg-icon-c/svg-icon-c';

@Component({
  selector: 'app-card-study-c',
  imports: [HighlightPipe, SvgIconC],
  templateUrl: './card-study-c.html',
  styleUrl: './card-study-c.css',
})
export class CardStudyC {
  studyData = input.required<CardStudy>();
}
