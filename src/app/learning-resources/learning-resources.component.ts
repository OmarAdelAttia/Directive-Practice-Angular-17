import { Component } from '@angular/core';
import { SafeLinkDirecive } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirecive]
})
export class LearningResourcesComponent { }
