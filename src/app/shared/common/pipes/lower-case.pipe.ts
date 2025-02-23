import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'low',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase();
  }
}
