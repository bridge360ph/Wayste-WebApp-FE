import { OnInit, ElementRef, Directive, Input, Inject, Renderer2, OnChanges, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[icon]',
})
export class IconDirective implements OnInit, OnChanges {
    @Input() icon: string;
    iconElement: any = null;

    @Input() isFab = false;
    @Input() isRegular = false;
    test: any = null;
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: any
    ) { }

    @HostListener('change') ngOnChanges() {
        if (this.iconElement) {
            this.iconElement.className = `${this.isFab ? 'fab ' : `${this.isRegular ? 'far' : 'fas'}` } fa-${this.icon}`;
        }
    }

    ngOnInit() {
        this.iconElement = this.document.createElement('i');
        this.iconElement.className = `${this.isFab ? 'fab ' : `${this.isRegular ? 'far' : 'fas'}`} fa-${this.icon}`;
        this.renderer.insertBefore(this.elementRef.nativeElement, this.iconElement, this.elementRef.nativeElement.firstChild);
    }

}
