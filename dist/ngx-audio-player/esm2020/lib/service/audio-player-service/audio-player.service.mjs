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
}
AudioPlayerService.ɵfac = function AudioPlayerService_Factory(t) { return new (t || AudioPlayerService)(); };
AudioPlayerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AudioPlayerService, factory: AudioPlayerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AudioPlayerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVkaW8tcGxheWVyL3NyYy9saWIvc2VydmljZS9hdWRpby1wbGF5ZXItc2VydmljZS9hdWRpby1wbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBTW5ELE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFLRSw2QkFBNkI7UUFDN0IsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixxQkFBZ0IsR0FDZCxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUMsd0JBQXdCO1FBQ3hCLGlCQUFZLEdBQVUsSUFBSSxDQUFDO1FBQzNCLHlCQUFvQixHQUNsQixJQUFJLGVBQWUsQ0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEQsdUJBQXVCO1FBQ3ZCLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3hCLHdCQUFtQixHQUNqQixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0E2QjlDO0lBM0JDLFdBQVcsQ0FBQyxNQUFlO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELGVBQWUsQ0FBQyxZQUFtQjtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCxjQUFjLENBQUMsV0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDOztvRkExQ1Usa0JBQWtCO3dFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNO3VGQUVQLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHJhY2subW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXVkaW9QbGF5ZXJTZXJ2aWNlIHtcblxuICAvLyBEeW5hbWljIHVwZGF0ZSBvZiBwbGF5bGlzdFxuICB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgcGxheWxpc3RTdWJqZWN0JDogQmVoYXZpb3JTdWJqZWN0PFRyYWNrW10+ID1cbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0PFRyYWNrW10+KHRoaXMudHJhY2tzKTtcblxuICAvLyBHZXQgdGhlIGN1cnJlbnQgdHJhY2tcbiAgY3VycmVudFRyYWNrOiBUcmFjayA9IG51bGw7XG4gIGN1cnJlbnRUcmFja1N1YmplY3QkOiBCZWhhdmlvclN1YmplY3Q8VHJhY2s+ID1cbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0PFRyYWNrPih0aGlzLmN1cnJlbnRUcmFjayk7XG5cbiAgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWVcbiAgY3VycmVudFRpbWU6IGFueSA9IG51bGw7XG4gIGN1cnJlbnRUaW1lU3ViamVjdCQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID1cbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odGhpcy5jdXJyZW50VGltZSk7XG5cbiAgc2V0UGxheWxpc3QodHJhY2tzOiBUcmFja1tdKSB7XG4gICAgdGhpcy50cmFja3MgPSB0cmFja3M7XG4gICAgdGhpcy5wbGF5bGlzdFN1YmplY3QkLm5leHQodGhpcy50cmFja3MpO1xuICB9XG5cbiAgZ2V0UGxheWxpc3QoKTogT2JzZXJ2YWJsZTxUcmFja1tdPiB7XG4gICAgcmV0dXJuIHRoaXMucGxheWxpc3RTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRUcmFjayhjdXJyZW50VHJhY2s6IFRyYWNrKSB7XG4gICAgdGhpcy5jdXJyZW50VHJhY2sgPSBjdXJyZW50VHJhY2s7XG4gICAgdGhpcy5jdXJyZW50VHJhY2tTdWJqZWN0JC5uZXh0KHRoaXMuY3VycmVudFRyYWNrKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRUcmFjaygpOiBPYnNlcnZhYmxlPFRyYWNrPiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRyYWNrU3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRDdXJyZW50VGltZShjdXJyZW50VGltZTogYW55KSB7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIHRoaXMuY3VycmVudFRpbWVTdWJqZWN0JC5uZXh0KHRoaXMuY3VycmVudFRpbWUpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFRpbWUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZVN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbn1cbiJdfQ==