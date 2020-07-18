import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'purify',
})
export class PurifyStringPipe implements PipeTransform {

    constructor() { }

    transform(value: string) {
        value = value.replace('_', ' ');
        return value;
    }

}
