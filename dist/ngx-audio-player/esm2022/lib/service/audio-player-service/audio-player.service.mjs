import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class AudioPlayerService {
    constructor() {
        // Dynamic update of playlist
        this.tracks = [];
        this.playlistSubject$ = new BehaviorSubject(this.tracks);
        // Get the current track
        this.currentTrack = null;
        this.currentTrackSubject$ = new BehaviorSubject(this.currentTrack);
        // Get the current time
        this.currentTime = null;
        this.currentTimeSubject$ = new BehaviorSubject(this.currentTime);
    }
    setPlaylist(tracks) {
        this.tracks = tracks;
        this.playlistSubject$.next(this.tracks);
    }
    getPlaylist() {
        return this.playlistSubject$.asObservable();
    }
    setCurrentTrack(currentTrack) {
        this.currentTrack = currentTrack;
        this.currentTrackSubject$.next(this.currentTrack);
    }
    getCurrentTrack() {
        return this.currentTrackSubject$.asObservable();
    }
    setCurrentTime(currentTime) {
        this.currentTime = currentTime;
        this.currentTimeSubject$.next(this.currentTime);
    }
    getCurrentTime() {
        return this.currentTimeSubject$.asObservable();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: AudioPlayerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: AudioPlayerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: AudioPlayerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVkaW8tcGxheWVyL3NyYy9saWIvc2VydmljZS9hdWRpby1wbGF5ZXItc2VydmljZS9hdWRpby1wbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBTW5ELE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFLRSw2QkFBNkI7UUFDN0IsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixxQkFBZ0IsR0FDZCxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUMsd0JBQXdCO1FBQ3hCLGlCQUFZLEdBQVUsSUFBSSxDQUFDO1FBQzNCLHlCQUFvQixHQUNsQixJQUFJLGVBQWUsQ0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEQsdUJBQXVCO1FBQ3ZCLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3hCLHdCQUFtQixHQUNqQixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0E2QjlDO0lBM0JDLFdBQVcsQ0FBQyxNQUFlO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELGVBQWUsQ0FBQyxZQUFtQjtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCxjQUFjLENBQUMsV0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzhHQTFDVSxrQkFBa0I7a0hBQWxCLGtCQUFrQixjQUZqQixNQUFNOzsyRkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gJy4uLy4uL21vZGVsL3RyYWNrLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGlvUGxheWVyU2VydmljZSB7XG5cbiAgLy8gRHluYW1pYyB1cGRhdGUgb2YgcGxheWxpc3RcbiAgdHJhY2tzOiBUcmFja1tdID0gW107XG4gIHBsYXlsaXN0U3ViamVjdCQ6IEJlaGF2aW9yU3ViamVjdDxUcmFja1tdPiA9XG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDxUcmFja1tdPih0aGlzLnRyYWNrcyk7XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHRyYWNrXG4gIGN1cnJlbnRUcmFjazogVHJhY2sgPSBudWxsO1xuICBjdXJyZW50VHJhY2tTdWJqZWN0JDogQmVoYXZpb3JTdWJqZWN0PFRyYWNrPiA9XG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDxUcmFjaz4odGhpcy5jdXJyZW50VHJhY2spO1xuXG4gIC8vIEdldCB0aGUgY3VycmVudCB0aW1lXG4gIGN1cnJlbnRUaW1lOiBhbnkgPSBudWxsO1xuICBjdXJyZW50VGltZVN1YmplY3QkOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9XG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHRoaXMuY3VycmVudFRpbWUpO1xuXG4gIHNldFBsYXlsaXN0KHRyYWNrczogVHJhY2tbXSkge1xuICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xuICAgIHRoaXMucGxheWxpc3RTdWJqZWN0JC5uZXh0KHRoaXMudHJhY2tzKTtcbiAgfVxuXG4gIGdldFBsYXlsaXN0KCk6IE9ic2VydmFibGU8VHJhY2tbXT4ge1xuICAgIHJldHVybiB0aGlzLnBsYXlsaXN0U3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRDdXJyZW50VHJhY2soY3VycmVudFRyYWNrOiBUcmFjaykge1xuICAgIHRoaXMuY3VycmVudFRyYWNrID0gY3VycmVudFRyYWNrO1xuICAgIHRoaXMuY3VycmVudFRyYWNrU3ViamVjdCQubmV4dCh0aGlzLmN1cnJlbnRUcmFjayk7XG4gIH1cblxuICBnZXRDdXJyZW50VHJhY2soKTogT2JzZXJ2YWJsZTxUcmFjaz4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUcmFja1N1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0Q3VycmVudFRpbWUoY3VycmVudFRpbWU6IGFueSkge1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB0aGlzLmN1cnJlbnRUaW1lU3ViamVjdCQubmV4dCh0aGlzLmN1cnJlbnRUaW1lKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRUaW1lKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWVTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG59XG4iXX0=