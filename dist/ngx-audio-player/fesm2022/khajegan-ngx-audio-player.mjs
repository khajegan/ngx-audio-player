import * as i0 from '@angular/core';
import { Injectable, Pipe, Component, Input, ViewChild, Output, NgModule } from '@angular/core';
import * as i4 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i7 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i5 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import * as i6 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i8 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

class AudioPlayerService {
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

/*
 * Transform seconds to minutes:seconds
 * Example : 270 -> 02:30
*/
class SecondsToMinutesPipe {
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

class AudioPlayerComponent {
    constructor(elem) {
        this.repeat = 'all';
        this.dataSource = new MatTableDataSource();
        this.tracks = [];
        this.displayTitle = true;
        this.displayPlaylist = true;
        this.displayVolumeControls = true;
        this.displayRepeatControls = true;
        this.pageSizeOptions = [10, 20, 30];
        this.expanded = true;
        this.autoPlay = false;
        this.disablePositionSlider = false;
        this.displayArtist = false;
        this.displayDuration = false;
        // Support for internationalization
        this.tableHeader = 'Playlist';
        this.titleHeader = 'Title';
        this.artistHeader = 'Artist';
        this.durationHeader = 'Duration';
        this.currentIndex = 0;
        this.trackEnded = new Subject();
        this.iOS = (/iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
        this.loaderDisplay = false;
        this.isPlaying = false;
        this.currentTime = 0;
        this.volume = 0.1;
        this.duration = 0.01;
        this.startOffsetValue = 0;
        this.endOffset = 0;
        if (elem.nativeElement.tagName.toLowerCase() === 'mat-advanced-audio-player') {
            console.warn(`'mat-advanced-audio-player' selector is deprecated; use 'ngx-audio-player' instead.`);
        }
        this.audioPlayerService = new AudioPlayerService();
    }
    set playlist(playlist) {
        this.audioPlayerService.setPlaylist(playlist);
    }
    set matPaginator(mp) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }
    set startOffset(seconds) {
        this.startOffsetValue = seconds;
        this.player.nativeElement.currentTime = seconds;
    }
    get startOffset() {
        return this.startOffsetValue;
    }
    currTimePosChanged(event) {
        this.player.nativeElement.currentTime = event.value;
    }
    bindPlayerEvent() {
        this.player.nativeElement.addEventListener('playing', () => {
            this.isPlaying = true;
            this.duration = Math.floor(this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('pause', () => {
            this.isPlaying = false;
        });
        this.player.nativeElement.addEventListener('timeupdate', () => {
            this.currentTime = Math.floor(this.player.nativeElement.currentTime);
            // BUG: Commenting for `ended` event not firing #66
            // if (this.currentTime >= this.duration - this.endOffset) {
            //     this.player.nativeElement.pause();
            // }
        });
        this.player.nativeElement.addEventListener('volume', () => {
            this.volume = Math.floor(this.player.nativeElement.volume);
        });
        if (!this.iOS) {
            this.player.nativeElement.addEventListener('loadstart', () => {
                this.loaderDisplay = true;
            });
        }
        this.player.nativeElement.addEventListener('loadedmetadata', () => {
            this.loaderDisplay = false;
            this.duration = Math.floor(this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('ended', () => {
            this.trackEnded.next('ended');
        });
    }
    playBtnHandler() {
        if (this.loaderDisplay) {
            return;
        }
        if (this.player.nativeElement.paused) {
            if (this.currentTime >= this.duration - this.endOffset) {
                this.player.nativeElement.currentTime = this.startOffset;
            }
            else {
                this.player.nativeElement.currentTime = this.currentTime;
            }
            this.player.nativeElement.play();
        }
        else {
            this.currentTime = this.player.nativeElement.currentTime;
            this.player.nativeElement.pause();
        }
    }
    play(track) {
        if (track) {
            this.startOffset = track.startOffset || 0;
            this.endOffset = track.endOffset || 0;
        }
        setTimeout(() => {
            this.player.nativeElement.play();
        }, 50);
    }
    toggleVolume() {
        if (this.volume === 0) {
            this.setVolume(1.0);
        }
        else {
            this.setVolume(0);
        }
    }
    toggleRepeat() {
        if (this.repeat === 'none') {
            this.repeat = 'all';
        }
        else if (this.repeat === 'all') {
            if (this.tracks.length > 1) {
                this.repeat = 'one';
            }
            else {
                this.repeat = 'none';
            }
        }
        else if (this.repeat === 'one' && this.tracks.length > 1) {
            this.repeat = 'none';
        }
    }
    setVolume(vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    }
    ngOnInit() {
        this.bindPlayerEvent();
        // auto play next track
        this.player.nativeElement.addEventListener('ended', () => {
            if (this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
                if (this.repeat === 'all') {
                    this.nextSong();
                }
                else if (this.repeat === 'one') {
                    this.play();
                }
                else if (this.repeat === 'none') {
                    // Do nothing
                }
            }
        });
        this.player.nativeElement.addEventListener('timeupdate', () => {
            this.audioPlayerService.setCurrentTime(this.player.nativeElement.currentTime);
        });
        // Subscribe to playlist observer from AudioPlayerService and
        // update the playlist within MatAdvancedAudioPlayerComponent
        this.audioPlayerService.getPlaylist().subscribe(tracks => {
            if (tracks !== null && tracks.length > 0) {
                this.tracks = tracks;
                this.initialize();
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('displayArtist') || changes.hasOwnProperty('displayDuration')) {
            this.buildDisplayedColumns();
        }
    }
    buildDisplayedColumns() {
        this.displayedColumns = ['title'];
        if (this.displayArtist) {
            this.displayedColumns.push('artist');
        }
        if (this.displayDuration) {
            this.displayedColumns.push('duration');
        }
        this.displayedColumns.push('status');
    }
    initialize() {
        this.buildDisplayedColumns();
        // populate indexs for the track and configure
        // material table data source and paginator
        this.setDataSourceAttributes();
        this.player.nativeElement.currentTime = this.startOffset;
        this.updateCurrentTrack();
        if (this.autoPlay) {
            this.play();
        }
    }
    setDataSourceAttributes() {
        let index = 1;
        if (this.tracks) {
            this.tracks.forEach((track) => {
                track.index = index++;
            });
            this.dataSource = new MatTableDataSource(this.tracks);
            this.dataSource.paginator = this.paginator;
        }
    }
    nextSong() {
        if (this.displayPlaylist === true
            && (((this.currentIndex + 1) % this.paginator.pageSize) === 0
                || (this.currentIndex + 1) === this.paginator.length)) {
            if (this.paginator.hasNextPage()) {
                this.paginator.nextPage();
            }
            else if (!this.paginator.hasNextPage()) {
                this.paginator.firstPage();
            }
        }
        this.currentTime = 0;
        this.duration = 0.01;
        if ((this.currentIndex + 1) >= this.tracks.length) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex++;
        }
        this.updateCurrentTrack();
        this.play();
    }
    previousSong() {
        this.currentTime = 0;
        this.duration = 0.01;
        if (!this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
            if (this.displayPlaylist === true
                && (((this.currentIndex) % this.paginator.pageSize) === 0
                    || (this.currentIndex === 0))) {
                if (this.paginator.hasPreviousPage()) {
                    this.paginator.previousPage();
                }
                else if (!this.paginator.hasPreviousPage()) {
                    this.paginator.lastPage();
                }
            }
            if ((this.currentIndex - 1) < 0) {
                this.currentIndex = (this.tracks.length - 1);
            }
            else {
                this.currentIndex--;
            }
        }
        else {
            this.resetSong();
        }
        this.updateCurrentTrack();
        this.play();
    }
    resetSong() {
        this.player.nativeElement.src = this.tracks[this.currentIndex].link;
    }
    selectTrack(index) {
        this.currentIndex = index - 1;
        this.updateCurrentTrack();
        this.play();
    }
    checkIfSongHasStartedSinceAtleastTwoSeconds() {
        return this.player.nativeElement.currentTime > 2;
    }
    updateCurrentTrack() {
        this.audioPlayerService.setCurrentTrack(this.tracks[this.currentIndex]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: AudioPlayerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.8", type: AudioPlayerComponent, selector: "mat-advanced-audio-player,ngx-audio-player", inputs: { playlist: "playlist", displayTitle: "displayTitle", displayPlaylist: "displayPlaylist", displayVolumeControls: "displayVolumeControls", displayRepeatControls: "displayRepeatControls", pageSizeOptions: "pageSizeOptions", expanded: "expanded", autoPlay: "autoPlay", disablePositionSlider: "disablePositionSlider", displayArtist: "displayArtist", displayDuration: "displayDuration", tableHeader: "tableHeader", titleHeader: "titleHeader", artistHeader: "artistHeader", durationHeader: "durationHeader", startOffset: "startOffset", endOffset: "endOffset" }, outputs: { trackEnded: "trackEnded" }, viewQueries: [{ propertyName: "matPaginator", first: true, predicate: MatPaginator, descendants: true }, { propertyName: "player", first: true, predicate: ["audioPlayer"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<mat-card class=\"ngx-d-flex ngx-justify-content-center ngx-audio-player z-depth-1 mat-elevation-z2\"\n    style=\"margin: 0px;\">\n\n    <audio #audioPlayer [src]=\"tracks[currentIndex]?.link\"></audio>\n\n    <button *ngIf=\"tracks.length > 1\" (click)='previousSong();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1\" mat-button>\n        <mat-icon aria-hidden=\"true\">\n            <!-- Skip previous icon (skip_previous) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\" />\n                <path d=\"M0 0h32v32H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='playBtnHandler();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1 play-pause\" mat-button>\n\n        <svg *ngIf=\"loaderDisplay\" height=\"34px\" preserveAspectRatio=\"xMidYMid\"\n            style=\"margin: auto; display: block; shape-rendering: auto;\" viewBox=\"0 0 100 100\" width=\"34px\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <g transform=\"rotate(0 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(30 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(60 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(90 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(120 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(150 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(180 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(210 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(240 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(270 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(300 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(330 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n        </svg>\n\n        <mat-icon *ngIf=\"!loaderDisplay && !isPlaying\" aria-hidden=\"true\" class=\"play-track\">\n            <!-- Play icon (play_arrow) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8 5v14l11-7z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"!loaderDisplay && isPlaying\" aria-hidden=\"true\" class=\"pause-track\">\n            <!-- Pause icon (pause) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button *ngIf=\"tracks.length > 1\" (click)='nextSong();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1 skip-next\"\n        mat-button>\n        <mat-icon aria-hidden=\"true\" class=\"next-track\">\n            <!-- Skip next icon (skip_next) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n\n    <div class=\"ngx-col\">\n        <div class=\"ngx-d-flex ngx-flex-fill ngx-justify-content-center\">\n            <div class=\"ngx-d-none ngx-d-sm-block ngx-py-3 ngx-px-1\" style=\"font-size: 12px\">\n                <span *ngIf=\"duration !== 0.01\">\n                    {{currentTime | secondsToMinutes}}\n                </span>\n            </div>\n            <mat-slider [disabled]=\"disablePositionSlider\" (change)=\"currTimePosChanged($event)\" [min]=\"startOffset\"\n                class=\"ngx-d-none ngx-d-sm-block ngx-flex-fill ngx-p-1\" max=\"{{duration-endOffset}}\" style=\"width: 100%\">\n                <input matSliderThumb value=\"{{currentTime}}\">\n            </mat-slider>\n\n            <div class=\"ngx-py-3 ngx-px-1\" style=\"font-size: 12px; text-align: right\">\n                <span *ngIf=\"duration !== 0.01\">\n                    -{{duration-currentTime | secondsToMinutes }}\n                </span>\n            </div>\n        </div>\n    </div>\n    <button (click)='toggleRepeat();' *ngIf=\"displayRepeatControls\" class=\"ngx-p-1 volume justify-content-center\"\n        mat-button>\n        <mat-icon *ngIf=\"repeat === 'none'\" aria-hidden=\"true\" class=\"volume-mute justify-content-center\">\n            <!-- Repeat None -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <g>\n                        <path d=\"m0,0l24,0l0,24l-24,0l0,-24z\" fill=\"none\" />\n                        <path\n                            d=\"m8,20l0,1.932a0.5,0.5 0 0 1 -0.82,0.385l-4.12,-3.433a0.5,0.5 0 0 1 0.322,-0.884l14.618,0a2,2 0 0 0 2,-2l0,-8l2,0l0,8a4,4 0 0 1 -4,4l-10,0zm8,-16l0,-1.932a0.5,0.5 0 0 1 0.82,-0.385l4.12,3.433a0.5,0.5 0 0 1 -0.321,0.884l-14.619,0a2,2 0 0 0 -2,2l0,8l-2,0l0,-8a4,4 0 0 1 4,-4l10,0z\" />\n                        <path d=\"M 3 0 L 22.4164 22.2706 L 21 24 L 1.5836 1.8128 L 3 0\"></path>\n                    </g>\n                    <!-- <line xmlns=\"http://www.w3.org/2000/svg\" id=\"svg_4\" y2=\"22.27056\" x2=\"22.41638\" y1=\"1.81276\" x1=\"1.58362\" stroke-width=\"2\" fill=\"none\"/> -->\n                </g>\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"repeat === 'all'\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Repeat All -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path\n                        d=\"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z\" />\n                </g>\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"repeat === 'one'\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Repeat ONE -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path\n                        d=\"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zm-5 4h2v8h-2v-6H9V9l2-1z\" />\n                </g>\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='toggleVolume();' *ngIf=\"displayVolumeControls\" class=\"ngx-p-1 volume\" mat-button>\n        <mat-icon *ngIf=\"volume === 0\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Volume mute icon (volume_off) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"volume > 0\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Volume up icon (volume_up) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle\" class=\"mat-elevation-z1 ngx-audio-player\">\n    <div style=\"text-align: center;\">\n        <div style=\"margin: 1px 2px; padding: 1em\">\n            <span *ngIf=\"!isPlaying\">{{ tracks[currentIndex]?.title }}{{ displayArtist && tracks[currentIndex]?.artist ?\n                ' | ' + tracks[currentIndex]?.artist : ''}}</span>\n            <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ tracks[currentIndex]?.title\n                }}{{ displayArtist && tracks[currentIndex]?.artist ? ' | ' + tracks[currentIndex]?.artist : ''}}\n            </marquee>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</mat-card>\n\n<mat-accordion class=\"ngx-audio-player\" *ngIf=\"displayPlaylist && tracks.length > 1\">\n    <mat-expansion-panel [expanded]=\"expanded\">\n        <mat-expansion-panel-header>\n            {{tableHeader}}\n        </mat-expansion-panel-header>\n        <table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\" mat-table>\n            <ng-container matColumnDef=\"title\">\n                <th *matHeaderCellDef mat-header-cell>{{titleHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element.title}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"artist\">\n                <th *matHeaderCellDef mat-header-cell>{{artistHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element?.artist ? element?.artist : ''}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"duration\">\n                <th *matHeaderCellDef mat-header-cell>{{durationHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element?.duration ? (element?.duration | secondsToMinutes) : ''}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n                <th *matHeaderCellDef mat-header-cell></th>\n                <td *matCellDef=\"let element\" mat-cell>\n                    <div *ngIf=\"tracks[currentIndex]?.title === element.title\">\n                        <!-- <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n                        </mat-icon> -->\n                        <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\" class=\"currently-playing\">\n                            <!-- Play icon (play_arrow) -->\n                            <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                                <path\n                                    d=\"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z\" />\n                            </svg>\n                        </mat-icon>\n                    </div>\n                </td>\n            </ng-container>\n            <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\n            <tr *matRowDef=\"let row; columns: displayedColumns;\" class=\"mat-select-content\" mat-row></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n    </mat-expansion-panel>\n</mat-accordion>\n", styles: ["mat-card,mat-slider{padding:0!important}button:hover,button:focus{outline:0px!important}svg{vertical-align:top}.mat-icon{height:32px!important;width:32px!important}mat-icon>.currently-playing{height:16px!important;width:16px!important}table{width:100%}::ng-deep .ngx-audio-player{min-width:375px}.mat-expansion-panel{min-width:375px}::ng-deep .mat-paginator-container{justify-content:space-between!important}.material-icons{font-size:16px!important}.play-pause{border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1)}.volume{border-left:1px solid rgba(0,0,0,.1)}.skip-next{border-right:1px solid rgba(0,0,0,.1)}*,:after,:before{box-sizing:inherit}.ngx-p-1{padding:.25rem!important}.ngx-col,.ngx-col-1,.ngx-col-10,.ngx-col-11,.ngx-col-12,.ngx-col-2,.ngx-col-3,.ngx-col-4,.ngx-col-5,.ngx-col-6,.ngx-col-7,.ngx-col-8,.ngx-col-9,.ngx-col-auto,.ngx-col-lg,.ngx-col-lg-1,.ngx-col-lg-10,.ngx-col-lg-11,.ngx-col-lg-12,.ngx-col-lg-2,.ngx-col-lg-3,.ngx-col-lg-4,.ngx-col-lg-5,.ngx-col-lg-6,.ngx-col-lg-7,.ngx-col-lg-8,.ngx-col-lg-9,.ngx-col-lg-auto,.ngx-col-md,.ngx-col-md-1,.ngx-col-md-10,.ngx-col-md-11,.ngx-col-md-12,.ngx-col-md-2,.ngx-col-md-3,.ngx-col-md-4,.ngx-col-md-5,.ngx-col-md-6,.ngx-col-md-7,.ngx-col-md-8,.ngx-col-md-9,.ngx-col-md-auto,.ngx-col-sm,.ngx-col-sm-1,.ngx-col-sm-10,.ngx-col-sm-11,.ngx-col-sm-12,.ngx-col-sm-2,.ngx-col-sm-3,.ngx-col-sm-4,.ngx-col-sm-5,.ngx-col-sm-6,.ngx-col-sm-7,.ngx-col-sm-8,.ngx-col-sm-9,.ngx-col-sm-auto,.ngx-col-xl,.ngx-col-xl-1,.ngx-col-xl-10,.ngx-col-xl-11,.ngx-col-xl-12,.ngx-col-xl-2,.ngx-col-xl-3,.ngx-col-xl-4,.ngx-col-xl-5,.ngx-col-xl-6,.ngx-col-xl-7,.ngx-col-xl-8,.ngx-col-xl-9,.ngx-col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.ngx-col{flex-basis:0;flex-grow:1;max-width:100%}.ngx-justify-content-center{justify-content:center!important}.ngx-flex-fill{flex:1 1 auto!important}.ngx-d-flex{display:flex!important}.ngx-pb-3,.ngx-py-3{padding-bottom:1rem!important}.ngx-pt-3,.ngx-py-3{padding-top:1rem!important}.ngx-pl-1,.ngx-px-1{padding-left:.25rem!important}.ngx-pr-1,.ngx-px-1{padding-right:.25rem!important}@media (max-width: 768px){.ngx-sm-block{display:block!important}.ngx-d-none{display:none!important}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i3.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "component", type: i4.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i4.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i4.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i4.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i4.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i4.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i4.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i4.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i4.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i4.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i5.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i5.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }, { kind: "directive", type: i6.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i6.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i6.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "component", type: i7.MatPaginator, selector: "mat-paginator", inputs: ["disabled", "color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig"], outputs: ["page"], exportAs: ["matPaginator"] }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "pipe", type: SecondsToMinutesPipe, name: "secondsToMinutes" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: AudioPlayerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mat-advanced-audio-player,ngx-audio-player', template: "<mat-card class=\"ngx-d-flex ngx-justify-content-center ngx-audio-player z-depth-1 mat-elevation-z2\"\n    style=\"margin: 0px;\">\n\n    <audio #audioPlayer [src]=\"tracks[currentIndex]?.link\"></audio>\n\n    <button *ngIf=\"tracks.length > 1\" (click)='previousSong();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1\" mat-button>\n        <mat-icon aria-hidden=\"true\">\n            <!-- Skip previous icon (skip_previous) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\" />\n                <path d=\"M0 0h32v32H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='playBtnHandler();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1 play-pause\" mat-button>\n\n        <svg *ngIf=\"loaderDisplay\" height=\"34px\" preserveAspectRatio=\"xMidYMid\"\n            style=\"margin: auto; display: block; shape-rendering: auto;\" viewBox=\"0 0 100 100\" width=\"34px\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <g transform=\"rotate(0 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(30 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(60 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(90 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(120 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(150 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(180 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(210 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(240 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(270 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(300 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(330 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n        </svg>\n\n        <mat-icon *ngIf=\"!loaderDisplay && !isPlaying\" aria-hidden=\"true\" class=\"play-track\">\n            <!-- Play icon (play_arrow) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8 5v14l11-7z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"!loaderDisplay && isPlaying\" aria-hidden=\"true\" class=\"pause-track\">\n            <!-- Pause icon (pause) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button *ngIf=\"tracks.length > 1\" (click)='nextSong();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1 skip-next\"\n        mat-button>\n        <mat-icon aria-hidden=\"true\" class=\"next-track\">\n            <!-- Skip next icon (skip_next) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n\n    <div class=\"ngx-col\">\n        <div class=\"ngx-d-flex ngx-flex-fill ngx-justify-content-center\">\n            <div class=\"ngx-d-none ngx-d-sm-block ngx-py-3 ngx-px-1\" style=\"font-size: 12px\">\n                <span *ngIf=\"duration !== 0.01\">\n                    {{currentTime | secondsToMinutes}}\n                </span>\n            </div>\n            <mat-slider [disabled]=\"disablePositionSlider\" (change)=\"currTimePosChanged($event)\" [min]=\"startOffset\"\n                class=\"ngx-d-none ngx-d-sm-block ngx-flex-fill ngx-p-1\" max=\"{{duration-endOffset}}\" style=\"width: 100%\">\n                <input matSliderThumb value=\"{{currentTime}}\">\n            </mat-slider>\n\n            <div class=\"ngx-py-3 ngx-px-1\" style=\"font-size: 12px; text-align: right\">\n                <span *ngIf=\"duration !== 0.01\">\n                    -{{duration-currentTime | secondsToMinutes }}\n                </span>\n            </div>\n        </div>\n    </div>\n    <button (click)='toggleRepeat();' *ngIf=\"displayRepeatControls\" class=\"ngx-p-1 volume justify-content-center\"\n        mat-button>\n        <mat-icon *ngIf=\"repeat === 'none'\" aria-hidden=\"true\" class=\"volume-mute justify-content-center\">\n            <!-- Repeat None -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <g>\n                        <path d=\"m0,0l24,0l0,24l-24,0l0,-24z\" fill=\"none\" />\n                        <path\n                            d=\"m8,20l0,1.932a0.5,0.5 0 0 1 -0.82,0.385l-4.12,-3.433a0.5,0.5 0 0 1 0.322,-0.884l14.618,0a2,2 0 0 0 2,-2l0,-8l2,0l0,8a4,4 0 0 1 -4,4l-10,0zm8,-16l0,-1.932a0.5,0.5 0 0 1 0.82,-0.385l4.12,3.433a0.5,0.5 0 0 1 -0.321,0.884l-14.619,0a2,2 0 0 0 -2,2l0,8l-2,0l0,-8a4,4 0 0 1 4,-4l10,0z\" />\n                        <path d=\"M 3 0 L 22.4164 22.2706 L 21 24 L 1.5836 1.8128 L 3 0\"></path>\n                    </g>\n                    <!-- <line xmlns=\"http://www.w3.org/2000/svg\" id=\"svg_4\" y2=\"22.27056\" x2=\"22.41638\" y1=\"1.81276\" x1=\"1.58362\" stroke-width=\"2\" fill=\"none\"/> -->\n                </g>\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"repeat === 'all'\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Repeat All -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path\n                        d=\"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z\" />\n                </g>\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"repeat === 'one'\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Repeat ONE -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path\n                        d=\"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zm-5 4h2v8h-2v-6H9V9l2-1z\" />\n                </g>\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='toggleVolume();' *ngIf=\"displayVolumeControls\" class=\"ngx-p-1 volume\" mat-button>\n        <mat-icon *ngIf=\"volume === 0\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Volume mute icon (volume_off) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"volume > 0\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Volume up icon (volume_up) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle\" class=\"mat-elevation-z1 ngx-audio-player\">\n    <div style=\"text-align: center;\">\n        <div style=\"margin: 1px 2px; padding: 1em\">\n            <span *ngIf=\"!isPlaying\">{{ tracks[currentIndex]?.title }}{{ displayArtist && tracks[currentIndex]?.artist ?\n                ' | ' + tracks[currentIndex]?.artist : ''}}</span>\n            <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ tracks[currentIndex]?.title\n                }}{{ displayArtist && tracks[currentIndex]?.artist ? ' | ' + tracks[currentIndex]?.artist : ''}}\n            </marquee>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</mat-card>\n\n<mat-accordion class=\"ngx-audio-player\" *ngIf=\"displayPlaylist && tracks.length > 1\">\n    <mat-expansion-panel [expanded]=\"expanded\">\n        <mat-expansion-panel-header>\n            {{tableHeader}}\n        </mat-expansion-panel-header>\n        <table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\" mat-table>\n            <ng-container matColumnDef=\"title\">\n                <th *matHeaderCellDef mat-header-cell>{{titleHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element.title}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"artist\">\n                <th *matHeaderCellDef mat-header-cell>{{artistHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element?.artist ? element?.artist : ''}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"duration\">\n                <th *matHeaderCellDef mat-header-cell>{{durationHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element?.duration ? (element?.duration | secondsToMinutes) : ''}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n                <th *matHeaderCellDef mat-header-cell></th>\n                <td *matCellDef=\"let element\" mat-cell>\n                    <div *ngIf=\"tracks[currentIndex]?.title === element.title\">\n                        <!-- <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n                        </mat-icon> -->\n                        <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\" class=\"currently-playing\">\n                            <!-- Play icon (play_arrow) -->\n                            <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                                <path\n                                    d=\"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z\" />\n                            </svg>\n                        </mat-icon>\n                    </div>\n                </td>\n            </ng-container>\n            <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\n            <tr *matRowDef=\"let row; columns: displayedColumns;\" class=\"mat-select-content\" mat-row></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n    </mat-expansion-panel>\n</mat-accordion>\n", styles: ["mat-card,mat-slider{padding:0!important}button:hover,button:focus{outline:0px!important}svg{vertical-align:top}.mat-icon{height:32px!important;width:32px!important}mat-icon>.currently-playing{height:16px!important;width:16px!important}table{width:100%}::ng-deep .ngx-audio-player{min-width:375px}.mat-expansion-panel{min-width:375px}::ng-deep .mat-paginator-container{justify-content:space-between!important}.material-icons{font-size:16px!important}.play-pause{border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1)}.volume{border-left:1px solid rgba(0,0,0,.1)}.skip-next{border-right:1px solid rgba(0,0,0,.1)}*,:after,:before{box-sizing:inherit}.ngx-p-1{padding:.25rem!important}.ngx-col,.ngx-col-1,.ngx-col-10,.ngx-col-11,.ngx-col-12,.ngx-col-2,.ngx-col-3,.ngx-col-4,.ngx-col-5,.ngx-col-6,.ngx-col-7,.ngx-col-8,.ngx-col-9,.ngx-col-auto,.ngx-col-lg,.ngx-col-lg-1,.ngx-col-lg-10,.ngx-col-lg-11,.ngx-col-lg-12,.ngx-col-lg-2,.ngx-col-lg-3,.ngx-col-lg-4,.ngx-col-lg-5,.ngx-col-lg-6,.ngx-col-lg-7,.ngx-col-lg-8,.ngx-col-lg-9,.ngx-col-lg-auto,.ngx-col-md,.ngx-col-md-1,.ngx-col-md-10,.ngx-col-md-11,.ngx-col-md-12,.ngx-col-md-2,.ngx-col-md-3,.ngx-col-md-4,.ngx-col-md-5,.ngx-col-md-6,.ngx-col-md-7,.ngx-col-md-8,.ngx-col-md-9,.ngx-col-md-auto,.ngx-col-sm,.ngx-col-sm-1,.ngx-col-sm-10,.ngx-col-sm-11,.ngx-col-sm-12,.ngx-col-sm-2,.ngx-col-sm-3,.ngx-col-sm-4,.ngx-col-sm-5,.ngx-col-sm-6,.ngx-col-sm-7,.ngx-col-sm-8,.ngx-col-sm-9,.ngx-col-sm-auto,.ngx-col-xl,.ngx-col-xl-1,.ngx-col-xl-10,.ngx-col-xl-11,.ngx-col-xl-12,.ngx-col-xl-2,.ngx-col-xl-3,.ngx-col-xl-4,.ngx-col-xl-5,.ngx-col-xl-6,.ngx-col-xl-7,.ngx-col-xl-8,.ngx-col-xl-9,.ngx-col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.ngx-col{flex-basis:0;flex-grow:1;max-width:100%}.ngx-justify-content-center{justify-content:center!important}.ngx-flex-fill{flex:1 1 auto!important}.ngx-d-flex{display:flex!important}.ngx-pb-3,.ngx-py-3{padding-bottom:1rem!important}.ngx-pt-3,.ngx-py-3{padding-top:1rem!important}.ngx-pl-1,.ngx-px-1{padding-left:.25rem!important}.ngx-pr-1,.ngx-px-1{padding-right:.25rem!important}@media (max-width: 768px){.ngx-sm-block{display:block!important}.ngx-d-none{display:none!important}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { playlist: [{
                type: Input
            }], matPaginator: [{
                type: ViewChild,
                args: [MatPaginator, { static: false }]
            }], displayTitle: [{
                type: Input
            }], displayPlaylist: [{
                type: Input
            }], displayVolumeControls: [{
                type: Input
            }], displayRepeatControls: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], expanded: [{
                type: Input
            }], autoPlay: [{
                type: Input
            }], disablePositionSlider: [{
                type: Input
            }], displayArtist: [{
                type: Input
            }], displayDuration: [{
                type: Input
            }], tableHeader: [{
                type: Input
            }], titleHeader: [{
                type: Input
            }], artistHeader: [{
                type: Input
            }], durationHeader: [{
                type: Input
            }], trackEnded: [{
                type: Output
            }], player: [{
                type: ViewChild,
                args: ['audioPlayer', { static: true }]
            }], startOffset: [{
                type: Input
            }], endOffset: [{
                type: Input
            }] } });

class NgxAudioPlayerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxAudioPlayerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.8", ngImport: i0, type: NgxAudioPlayerModule, declarations: [SecondsToMinutesPipe, AudioPlayerComponent], imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
            MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule], exports: [AudioPlayerComponent, MatSliderModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxAudioPlayerModule, imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
            MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule, MatSliderModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxAudioPlayerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SecondsToMinutesPipe, AudioPlayerComponent],
                    imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
                        MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule],
                    exports: [AudioPlayerComponent, MatSliderModule]
                }]
        }] });

class Track {
    constructor() {
        this.toString = () => {
            return `Track (index: ${this.index}, title: ${this.title})`;
        };
    }
}

/*
 * Public API Surface of ngx-audio-player
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AudioPlayerComponent, NgxAudioPlayerModule, Track };
//# sourceMappingURL=khajegan-ngx-audio-player.mjs.map
