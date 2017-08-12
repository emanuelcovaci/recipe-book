import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Soup', 'This is simply a test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Sarmale', 'This is simply a test',
      'http://static4.libertatea.ro/wp-content/uploads/2016/07/sarmale-cu-carne-de-pui-620x465.jpg')

];

  constructor() {
  }

  ngOnInit() {
  }

}
