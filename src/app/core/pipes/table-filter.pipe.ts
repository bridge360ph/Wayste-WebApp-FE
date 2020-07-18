import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'searchTableFilter',
})
export class TableFilterPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(items: any, perColumnSearch: any): any {
        if (!perColumnSearch) {
            return items;
        }

        const queryObj = JSON.parse(perColumnSearch);
        if (Object.keys(queryObj).length === 0) {
            return items;
        }
        return items.filter(item => {
            // tslint:disable-next-line: forin
            for (const prop in queryObj) {
                const input = queryObj[prop]['query'].toString().toLowerCase();
                if (!item[prop]) {
                    return;
                }
                const propA = item[prop].toString().toLowerCase();
                if (!propA || (propA && !propA.includes(input))) {
                    return false;
                }


            }
            return true;
        });
    }

}
