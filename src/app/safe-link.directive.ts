import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirecive {

    queryParam = input('myapp', { alias: 'appSafeLink' });
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    onConfirmLeavePage(e: MouseEvent) {
        const wantToLeave = window.confirm(`Do you want to leave?`);
        if (wantToLeave) {
            // const address = (e.target as HTMLAnchorElement).href;
            // (e.target as HTMLAnchorElement).href = address + this.queryParam();
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + this.queryParam();
            return;
        }
        e?.preventDefault();
    }

}