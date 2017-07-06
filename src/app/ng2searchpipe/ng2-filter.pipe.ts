import {Injectable, Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class Ng2SearchPipe implements PipeTransform {

  /**
   * @items = object from array
   * @term = term's search
   */
  transform(items: any, term: any): any {
    return term === undefined ? items : items.filter(function (item) {
      for (const property in item) {
        if (item[property] === null) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(term.toLowerCase())) {
          return true;
        }
      }
      return false;
    });

  }
}
/**
 * Created by seva on 7/6/17.
 */
