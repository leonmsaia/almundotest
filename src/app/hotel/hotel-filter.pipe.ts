import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hotelfilter'
})
export class HotelFilterPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter
      ((item) => keys.split(',')
      .some(
        key => item.hasOwnProperty(key) && new RegExp(term, 'gi')
        .test(item[key])
      )
    );

  }
}
