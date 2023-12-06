import { NgModule } from '@angular/core';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AudioPlayerComponent } from './component/ngx-audio-player/ngx-audio-player.component';
import * as i0 from "@angular/core";
export class NgxAudioPlayerModule {
}
NgxAudioPlayerModule.ɵfac = function NgxAudioPlayerModule_Factory(t) { return new (t || NgxAudioPlayerModule)(); };
NgxAudioPlayerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxAudioPlayerModule });
NgxAudioPlayerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
        MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAudioPlayerModule, [{
        type: NgModule,
        args: [{
                declarations: [SecondsToMinutesPipe, AudioPlayerComponent],
                imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
                    MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule],
                exports: [AudioPlayerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxAudioPlayerModule, { declarations: [SecondsToMinutesPipe, AudioPlayerComponent], imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
        MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule], exports: [AudioPlayerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1ZGlvLXBsYXllci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVkaW8tcGxheWVyL3NyYy9saWIvbmd4LWF1ZGlvLXBsYXllci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRixPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7O0FBUS9GLE1BQU0sT0FBTyxvQkFBb0I7O3dGQUFwQixvQkFBb0I7c0VBQXBCLG9CQUFvQjswRUFKckIsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxrQkFBa0I7UUFDckcsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGFBQWE7dUZBRzdELG9CQUFvQjtjQU5oQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7Z0JBQzFELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO29CQUNyRyxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO2dCQUN6RSxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7d0ZBQ1ksb0JBQW9CLG1CQUxoQixvQkFBb0IsRUFBRSxvQkFBb0IsYUFDL0MsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxrQkFBa0I7UUFDckcsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGFBQWEsYUFDOUQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0TGVnYWN5U2xpZGVyTW9kdWxlIGFzIE1hdFNsaWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1zbGlkZXInO1xuaW1wb3J0IHsgTWF0TGVnYWN5UGFnaW5hdG9yTW9kdWxlIGFzIE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1wYWdpbmF0b3InO1xuaW1wb3J0IHsgTWF0TGVnYWN5VGFibGVNb2R1bGUgYXMgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktdGFibGUnO1xuaW1wb3J0IHsgTWF0TGVnYWN5Rm9ybUZpZWxkTW9kdWxlIGFzIE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5pbXBvcnQgeyBNYXRMZWdhY3lDYXJkTW9kdWxlIGFzIE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2FyZCc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWNvbmRzVG9NaW51dGVzUGlwZSB9IGZyb20gJy4vcGlwZS9zZWNvbmRzLXRvLW1pbnV0ZXMnO1xuXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEF1ZGlvUGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvbmd4LWF1ZGlvLXBsYXllci9uZ3gtYXVkaW8tcGxheWVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NlY29uZHNUb01pbnV0ZXNQaXBlLCBBdWRpb1BsYXllckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdFRhYmxlTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLCBNYXRFeHBhbnNpb25Nb2R1bGUsIE1hdFBhZ2luYXRvck1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtBdWRpb1BsYXllckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4QXVkaW9QbGF5ZXJNb2R1bGUge1xufVxuIl19