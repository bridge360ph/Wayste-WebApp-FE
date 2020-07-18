import { Pipe, PipeTransform, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';

@Pipe({
    name: 'timeAgo',
    pure: false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {

    private timer: number;

    constructor(
        private cdr: ChangeDetectorRef,
        private ngZone: NgZone
    ) { }

    transform(value: any): any {
        this.removeTimer();
        if (value) {
            const valueDate = new Date(value);
            const valueSeconds = valueDate.getTime() / 1000;
            const nowSeconds = (new Date()).getTime() / 1000;
            const seconds = Math.floor(nowSeconds - valueSeconds);

            if (seconds < 60) {
                return 'Just now';
            }

            const intervals = {
                year: 365 * 24 * 60 * 60,
                month: (52 * 7 * 24 * 60 * 60) / 12,
                week: 7 * 24 * 60 * 60,
                day: 24 * 60 * 60,
                hour: 60 * 60, minute: 60,
                second: 1
            };

            // Update the time every 5 seconds
            this.timer = this.ngZone.runOutsideAngular(() => {
                if (typeof window !== 'undefined') {
                    return window.setTimeout(() => {
                        this.ngZone.run(() => this.cdr.detectChanges());
                    }, 5000);
                }
                return null;
            });

            let counter: string | number;
            for (const i of Object.keys(intervals)) {
                counter = Math.floor(seconds / intervals[i]); if (counter > 0) {
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular
                    } else {
                        return counter + ' ' + i + 's ago'; // plural
                    }
                }
            }
            return value;
        }
    }

    ngOnDestroy() {
        this.removeTimer();
    }

    private removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
}
