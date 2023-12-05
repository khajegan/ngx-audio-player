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
}
SecondsToMinutesPipe.ɵfac = function SecondsToMinutesPipe_Factory(t) { return new (t || SecondsToMinutesPipe)(); };
SecondsToMinutesPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "secondsToMinutes", type: SecondsToMinutesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SecondsToMinutesPipe, [{
        type: Pipe,
        args: [{ name: 'secondsToMinutes' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kcy10by1taW51dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1ZGlvLXBsYXllci9zcmMvbGliL3BpcGUvc2Vjb25kcy10by1taW51dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUNwRDs7O0VBR0U7QUFFRixNQUFNLE9BQU8sb0JBQW9CO0lBQzdCLFNBQVMsQ0FBQyxJQUFZO1FBQ2xCLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFBRSxPQUFPLEdBQUcsS0FBSyxJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ2hFLE9BQU8sR0FBRyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7d0ZBUFEsb0JBQW9COzZGQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKlxuICogVHJhbnNmb3JtIHNlY29uZHMgdG8gbWludXRlczpzZWNvbmRzXG4gKiBFeGFtcGxlIDogMjcwIC0+IDAyOjMwXG4qL1xuQFBpcGUoeyBuYW1lOiAnc2Vjb25kc1RvTWludXRlcycgfSlcbmV4cG9ydCBjbGFzcyBTZWNvbmRzVG9NaW51dGVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBob3VycyA9ICgnMCcgKyBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKSkuc2xpY2UoLTIpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gKCcwJyArIE1hdGguZmxvb3IoKHRpbWUgJSAzNjAwKSAvIDYwKSkuc2xpY2UoLTIpO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gKCcwJyArIHRpbWUgJSA2MCkuc2xpY2UoLTIpO1xuICAgICAgICBpZiAoaG91cnMgIT09ICcwMCcpIHsgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gOyB9XG4gICAgICAgIHJldHVybiBgJHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICB9XG59XG4iXX0=