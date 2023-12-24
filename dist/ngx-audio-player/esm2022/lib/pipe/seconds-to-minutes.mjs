import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/*
 * Transform seconds to minutes:seconds
 * Example : 270 -> 02:30
*/
export class SecondsToMinutesPipe {
    transform(time) {
        const hours = ('0' + Math.floor(time / 3600)).slice(-2);
        const minutes = ('0' + Math.floor((time % 3600) / 60)).slice(-2);
        const seconds = ('0' + time % 60).slice(-2);
        if (hours !== '00') {
            return `${hours}:${minutes}:${seconds}`;
        }
        return `${minutes}:${seconds}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: SecondsToMinutesPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.8", ngImport: i0, type: SecondsToMinutesPipe, name: "secondsToMinutes" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: SecondsToMinutesPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'secondsToMinutes' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kcy10by1taW51dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1ZGlvLXBsYXllci9zcmMvbGliL3BpcGUvc2Vjb25kcy10by1taW51dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUNwRDs7O0VBR0U7QUFFRixNQUFNLE9BQU8sb0JBQW9CO0lBQzdCLFNBQVMsQ0FBQyxJQUFZO1FBQ2xCLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFBRSxPQUFPLEdBQUcsS0FBSyxJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ2hFLE9BQU8sR0FBRyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs4R0FQUSxvQkFBb0I7NEdBQXBCLG9CQUFvQjs7MkZBQXBCLG9CQUFvQjtrQkFEaEMsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qXG4gKiBUcmFuc2Zvcm0gc2Vjb25kcyB0byBtaW51dGVzOnNlY29uZHNcbiAqIEV4YW1wbGUgOiAyNzAgLT4gMDI6MzBcbiovXG5AUGlwZSh7IG5hbWU6ICdzZWNvbmRzVG9NaW51dGVzJyB9KVxuZXhwb3J0IGNsYXNzIFNlY29uZHNUb01pbnV0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gKCcwJyArIE1hdGguZmxvb3IodGltZSAvIDM2MDApKS5zbGljZSgtMik7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSAoJzAnICsgTWF0aC5mbG9vcigodGltZSAlIDM2MDApIC8gNjApKS5zbGljZSgtMik7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSAoJzAnICsgdGltZSAlIDYwKS5zbGljZSgtMik7XG4gICAgICAgIGlmIChob3VycyAhPT0gJzAwJykgeyByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7IH1cbiAgICAgICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgIH1cbn1cbiJdfQ==