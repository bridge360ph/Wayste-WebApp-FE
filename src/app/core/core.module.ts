import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IconDirective } from './directives/icon.directive';
import { SimpleFilterPipe } from './pipes/simple-filter.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
    ],
    providers: [],
    declarations: [
        IconDirective,

        KeysPipe,
        SafeHtmlPipe,
        TableFilterPipe,
        SafeUrlPipe,
        TruncatePipe,
        SimpleFilterPipe,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        IconDirective,

        KeysPipe,
        SafeHtmlPipe,
        TableFilterPipe,
        SafeUrlPipe,
        TruncatePipe,
        SimpleFilterPipe,
    ],
})
export class CoreModule {}