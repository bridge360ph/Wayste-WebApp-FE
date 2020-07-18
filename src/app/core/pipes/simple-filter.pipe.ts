import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'simpleFilter'
})
export class SimpleFilterPipe implements PipeTransform {

    transform(items: any[], filterData: object): any {
        if (filterData == null) {
            return items;
        }

        for (const i in filterData) {
            if (filterData[i] == null) {
                continue;
            }

            items = items.filter(a => {
                const case1 = a[i];
                const case2 = filterData[i];

                if (typeof case1 === 'string' && typeof case2 === 'string') {
                    return case1.toLowerCase() === case2.toLowerCase();
                }

                return case1 === case2;
            });
        }

        return items;
    }

}
