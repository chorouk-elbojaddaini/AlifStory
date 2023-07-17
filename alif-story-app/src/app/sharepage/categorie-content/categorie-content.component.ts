import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorie-content',
  templateUrl: './categorie-content.component.html',
  styleUrls: ['./categorie-content.component.scss']
})
export class CategorieContentComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() imageSrc: string | undefined;
  @Input() imagePosition:string | undefined;
}
