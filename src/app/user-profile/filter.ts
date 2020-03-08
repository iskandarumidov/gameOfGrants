import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
// export class FilterPipe implements PipeTransform {

//   transform(value: string, character: string): string {
//     return value.replace(character, '+');
//   }
// }
export class FilterPipe implements PipeTransform {
    transform( array: Array<any>, filterField: string, filterValue: string ): Array<any> {
        if (!array) return [];
        return array.filter(item => item[filterField].toLowerCase().includes(filterValue.toLowerCase()));
    }
}