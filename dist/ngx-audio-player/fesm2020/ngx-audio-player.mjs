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
}
AudioPlayerService.ɵfac = function AudioPlayerService_Factory(t) { return new (t || AudioPlayerService)(); };
AudioPlayerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AudioPlayerService, factory: AudioPlayerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AudioPlayerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

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
}
SecondsToMinutesPipe.ɵfac = function SecondsToMinutesPipe_Factory(t) { return new (t || SecondsToMinutesPipe)(); };
SecondsToMinutesPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "secondsToMinutes", type: SecondsToMinutesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SecondsToMinutesPipe, [{
        type: Pipe,
        args: [{ name: 'secondsToMinutes' }]
    }], null, null); })();

const _c0 = ["audioPlayer"];
function AudioPlayerComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function AudioPlayerComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.previousSong()); });
    i0.ɵɵelementStart(1, "mat-icon", 20);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 21);
    i0.ɵɵelement(3, "path", 22)(4, "path", 23);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.loaderDisplay);
} }
function AudioPlayerComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 24)(1, "g", 25)(2, "rect", 26);
    i0.ɵɵelement(3, "animate", 27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "g", 28)(5, "rect", 26);
    i0.ɵɵelement(6, "animate", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "g", 30)(8, "rect", 26);
    i0.ɵɵelement(9, "animate", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "g", 32)(11, "rect", 26);
    i0.ɵɵelement(12, "animate", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "g", 34)(14, "rect", 26);
    i0.ɵɵelement(15, "animate", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "g", 36)(17, "rect", 26);
    i0.ɵɵelement(18, "animate", 37);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "g", 38)(20, "rect", 26);
    i0.ɵɵelement(21, "animate", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "g", 40)(23, "rect", 26);
    i0.ɵɵelement(24, "animate", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "g", 42)(26, "rect", 26);
    i0.ɵɵelement(27, "animate", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "g", 44)(29, "rect", 26);
    i0.ɵɵelement(30, "animate", 45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "g", 46)(32, "rect", 26);
    i0.ɵɵelement(33, "animate", 47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "g", 48)(35, "rect", 26);
    i0.ɵɵelement(36, "animate", 49);
    i0.ɵɵelementEnd()()();
} }
function AudioPlayerComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 50);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 21);
    i0.ɵɵelement(2, "path", 51)(3, "path", 52);
    i0.ɵɵelementEnd()();
} }
function AudioPlayerComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 53);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 21);
    i0.ɵɵelement(2, "path", 54)(3, "path", 52);
    i0.ɵɵelementEnd()();
} }
function AudioPlayerComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function AudioPlayerComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.nextSong()); });
    i0.ɵɵelementStart(1, "mat-icon", 56);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 21);
    i0.ɵɵelement(3, "path", 57)(4, "path", 52);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r5.loaderDisplay);
} }
function AudioPlayerComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "secondsToMinutes");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r6.currentTime), " ");
} }
function AudioPlayerComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "secondsToMinutes");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" -", i0.ɵɵpipeBind1(2, 1, ctx_r7.duration - ctx_r7.currentTime), " ");
} }
function AudioPlayerComponent_button_16_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 62);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 63)(2, "g")(3, "g");
    i0.ɵɵelement(4, "path", 64)(5, "path", 65)(6, "path", 66);
    i0.ɵɵelementEnd()()()();
} }
function AudioPlayerComponent_button_16_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 67);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 63)(2, "g");
    i0.ɵɵelement(3, "path", 68)(4, "path", 69);
    i0.ɵɵelementEnd()()();
} }
function AudioPlayerComponent_button_16_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 70);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 63)(2, "g");
    i0.ɵɵelement(3, "path", 68)(4, "path", 71);
    i0.ɵɵelementEnd()()();
} }
function AudioPlayerComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 58);
    i0.ɵɵlistener("click", function AudioPlayerComponent_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.toggleRepeat()); });
    i0.ɵɵtemplate(1, AudioPlayerComponent_button_16_mat_icon_1_Template, 7, 0, "mat-icon", 59);
    i0.ɵɵtemplate(2, AudioPlayerComponent_button_16_mat_icon_2_Template, 5, 0, "mat-icon", 60);
    i0.ɵɵtemplate(3, AudioPlayerComponent_button_16_mat_icon_3_Template, 5, 0, "mat-icon", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.repeat === "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.repeat === "all");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.repeat === "one");
} }
function AudioPlayerComponent_button_17_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 67);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 73);
    i0.ɵɵelement(2, "path", 74)(3, "path", 52);
    i0.ɵɵelementEnd()();
} }
function AudioPlayerComponent_button_17_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 70);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 73);
    i0.ɵɵelement(2, "path", 75)(3, "path", 52);
    i0.ɵɵelementEnd()();
} }
function AudioPlayerComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function AudioPlayerComponent_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.toggleVolume()); });
    i0.ɵɵtemplate(1, AudioPlayerComponent_button_17_mat_icon_1_Template, 4, 0, "mat-icon", 60);
    i0.ɵɵtemplate(2, AudioPlayerComponent_button_17_mat_icon_2_Template, 4, 0, "mat-icon", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.volume === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.volume > 0);
} }
function AudioPlayerComponent_mat_card_18_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r25.tracks[ctx_r25.currentIndex] == null ? null : ctx_r25.tracks[ctx_r25.currentIndex].title, "", ctx_r25.displayArtist && (ctx_r25.tracks[ctx_r25.currentIndex] == null ? null : ctx_r25.tracks[ctx_r25.currentIndex].artist) ? " | " + (ctx_r25.tracks[ctx_r25.currentIndex] == null ? null : ctx_r25.tracks[ctx_r25.currentIndex].artist) : "", "");
} }
function AudioPlayerComponent_mat_card_18_marquee_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "marquee", 81);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r26.tracks[ctx_r26.currentIndex] == null ? null : ctx_r26.tracks[ctx_r26.currentIndex].title, "", ctx_r26.displayArtist && (ctx_r26.tracks[ctx_r26.currentIndex] == null ? null : ctx_r26.tracks[ctx_r26.currentIndex].artist) ? " | " + (ctx_r26.tracks[ctx_r26.currentIndex] == null ? null : ctx_r26.tracks[ctx_r26.currentIndex].artist) : "", " ");
} }
function AudioPlayerComponent_mat_card_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 76)(1, "div", 77)(2, "div", 78);
    i0.ɵɵtemplate(3, AudioPlayerComponent_mat_card_18_span_3_Template, 2, 2, "span", 12);
    i0.ɵɵtemplate(4, AudioPlayerComponent_mat_card_18_marquee_4_Template, 2, 2, "marquee", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 80);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r10.isPlaying);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.isPlaying);
} }
function AudioPlayerComponent_mat_accordion_19_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 95);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r27.titleHeader);
} }
function AudioPlayerComponent_mat_accordion_19_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 96);
    i0.ɵɵlistener("click", function AudioPlayerComponent_mat_accordion_19_td_7_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r39); const element_r37 = restoredCtx.$implicit; const ctx_r38 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r38.selectTrack(element_r37.index)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r37.title, " ");
} }
function AudioPlayerComponent_mat_accordion_19_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 95);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r29.artistHeader);
} }
function AudioPlayerComponent_mat_accordion_19_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 96);
    i0.ɵɵlistener("click", function AudioPlayerComponent_mat_accordion_19_td_10_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r42); const element_r40 = restoredCtx.$implicit; const ctx_r41 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r41.selectTrack(element_r40.index)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (element_r40 == null ? null : element_r40.artist) ? element_r40 == null ? null : element_r40.artist : "", " ");
} }
function AudioPlayerComponent_mat_accordion_19_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 95);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r31.durationHeader);
} }
function AudioPlayerComponent_mat_accordion_19_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 96);
    i0.ɵɵlistener("click", function AudioPlayerComponent_mat_accordion_19_td_13_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r45); const element_r43 = restoredCtx.$implicit; const ctx_r44 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r44.selectTrack(element_r43.index)); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "secondsToMinutes");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (element_r43 == null ? null : element_r43.duration) ? i0.ɵɵpipeBind1(2, 1, element_r43 == null ? null : element_r43.duration) : "", " ");
} }
function AudioPlayerComponent_mat_accordion_19_th_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 95);
} }
function AudioPlayerComponent_mat_accordion_19_td_16_div_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 99);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 100);
    i0.ɵɵelement(2, "path", 52)(3, "path", 101);
    i0.ɵɵelementEnd()();
} }
function AudioPlayerComponent_mat_accordion_19_td_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AudioPlayerComponent_mat_accordion_19_td_16_div_1_mat_icon_1_Template, 4, 0, "mat-icon", 98);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r47.isPlaying);
} }
function AudioPlayerComponent_mat_accordion_19_td_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 97);
    i0.ɵɵtemplate(1, AudioPlayerComponent_mat_accordion_19_td_16_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r34.tracks[ctx_r34.currentIndex] == null ? null : ctx_r34.tracks[ctx_r34.currentIndex].title) === element_r46.title);
} }
function AudioPlayerComponent_mat_accordion_19_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 102);
} }
function AudioPlayerComponent_mat_accordion_19_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 103);
} }
function AudioPlayerComponent_mat_accordion_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-accordion", 82)(1, "mat-expansion-panel", 83)(2, "mat-expansion-panel-header");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "table", 84);
    i0.ɵɵelementContainerStart(5, 85);
    i0.ɵɵtemplate(6, AudioPlayerComponent_mat_accordion_19_th_6_Template, 2, 1, "th", 86);
    i0.ɵɵtemplate(7, AudioPlayerComponent_mat_accordion_19_td_7_Template, 2, 1, "td", 87);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(8, 88);
    i0.ɵɵtemplate(9, AudioPlayerComponent_mat_accordion_19_th_9_Template, 2, 1, "th", 86);
    i0.ɵɵtemplate(10, AudioPlayerComponent_mat_accordion_19_td_10_Template, 2, 1, "td", 87);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(11, 89);
    i0.ɵɵtemplate(12, AudioPlayerComponent_mat_accordion_19_th_12_Template, 2, 1, "th", 86);
    i0.ɵɵtemplate(13, AudioPlayerComponent_mat_accordion_19_td_13_Template, 3, 3, "td", 87);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(14, 90);
    i0.ɵɵtemplate(15, AudioPlayerComponent_mat_accordion_19_th_15_Template, 1, 0, "th", 86);
    i0.ɵɵtemplate(16, AudioPlayerComponent_mat_accordion_19_td_16_Template, 2, 1, "td", 91);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(17, AudioPlayerComponent_mat_accordion_19_tr_17_Template, 1, 0, "tr", 92);
    i0.ɵɵtemplate(18, AudioPlayerComponent_mat_accordion_19_tr_18_Template, 1, 0, "tr", 93);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "mat-paginator", 94);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", ctx_r11.expanded);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.tableHeader, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r11.dataSource);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r11.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r11.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("pageSizeOptions", ctx_r11.pageSizeOptions);
} }
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
            if (tracks !== null && tracks !== []) {
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
}
AudioPlayerComponent.ɵfac = function AudioPlayerComponent_Factory(t) { return new (t || AudioPlayerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AudioPlayerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AudioPlayerComponent, selectors: [["mat-advanced-audio-player"], ["ngx-audio-player"]], viewQuery: function AudioPlayerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, 5);
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matPaginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.player = _t.first);
    } }, inputs: { playlist: "playlist", displayTitle: "displayTitle", displayPlaylist: "displayPlaylist", displayVolumeControls: "displayVolumeControls", displayRepeatControls: "displayRepeatControls", pageSizeOptions: "pageSizeOptions", expanded: "expanded", autoPlay: "autoPlay", disablePositionSlider: "disablePositionSlider", displayArtist: "displayArtist", displayDuration: "displayDuration", tableHeader: "tableHeader", titleHeader: "titleHeader", artistHeader: "artistHeader", durationHeader: "durationHeader", startOffset: "startOffset", endOffset: "endOffset" }, outputs: { trackEnded: "trackEnded" }, features: [i0.ɵɵNgOnChangesFeature], decls: 20, vars: 17, consts: [[1, "ngx-d-flex", "ngx-justify-content-center", "ngx-audio-player", "z-depth-1", "mat-elevation-z2", 2, "margin", "0px"], [3, "src"], ["audioPlayer", ""], ["class", "ngx-p-1", "mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 1, "ngx-p-1", "play-pause", 3, "disabled", "click"], ["height", "34px", "preserveAspectRatio", "xMidYMid", "style", "margin: auto; display: block; shape-rendering: auto;", "viewBox", "0 0 100 100", "width", "34px", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["aria-hidden", "true", "class", "play-track", 4, "ngIf"], ["aria-hidden", "true", "class", "pause-track", 4, "ngIf"], ["class", "ngx-p-1 skip-next", "mat-button", "", 3, "disabled", "click", 4, "ngIf"], [1, "ngx-col"], [1, "ngx-d-flex", "ngx-flex-fill", "ngx-justify-content-center"], [1, "ngx-d-none", "ngx-d-sm-block", "ngx-py-3", "ngx-px-1", 2, "font-size", "12px"], [4, "ngIf"], [1, "ngx-d-none", "ngx-d-sm-block", "ngx-flex-fill", "ngx-p-1", 2, "width", "100%", 3, "disabled", "min", "max", "value", "change"], [1, "ngx-py-3", "ngx-px-1", 2, "font-size", "12px", "text-align", "right"], ["class", "ngx-p-1 volume justify-content-center", "mat-button", "", 3, "click", 4, "ngIf"], ["class", "ngx-p-1 volume", "mat-button", "", 3, "click", 4, "ngIf"], ["class", "mat-elevation-z1 ngx-audio-player", 4, "ngIf"], ["class", "ngx-audio-player", 4, "ngIf"], ["mat-button", "", 1, "ngx-p-1", 3, "disabled", "click"], ["aria-hidden", "true"], ["height", "32", "viewBox", "0 0 24 24", "width", "32", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6 6h2v12H6zm3.5 6l8.5 6V6z"], ["d", "M0 0h32v32H0z", "fill", "none"], ["height", "34px", "preserveAspectRatio", "xMidYMid", "viewBox", "0 0 100 100", "width", "34px", "xmlns", "http://www.w3.org/2000/svg", 2, "margin", "auto", "display", "block", "shape-rendering", "auto"], ["transform", "rotate(0 50 50)"], ["fill", "#7a7a7a", "height", "12", "rx", "3", "ry", "6", "width", "6", "x", "47", "y", "20"], ["attributeName", "opacity", "begin", "-0.9166666666666666s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(30 50 50)"], ["attributeName", "opacity", "begin", "-0.8333333333333334s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(60 50 50)"], ["attributeName", "opacity", "begin", "-0.75s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(90 50 50)"], ["attributeName", "opacity", "begin", "-0.6666666666666666s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(120 50 50)"], ["attributeName", "opacity", "begin", "-0.5833333333333334s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(150 50 50)"], ["attributeName", "opacity", "begin", "-0.5s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(180 50 50)"], ["attributeName", "opacity", "begin", "-0.4166666666666667s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(210 50 50)"], ["attributeName", "opacity", "begin", "-0.3333333333333333s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(240 50 50)"], ["attributeName", "opacity", "begin", "-0.25s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(270 50 50)"], ["attributeName", "opacity", "begin", "-0.16666666666666666s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(300 50 50)"], ["attributeName", "opacity", "begin", "-0.08333333333333333s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["transform", "rotate(330 50 50)"], ["attributeName", "opacity", "begin", "0s", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"], ["aria-hidden", "true", 1, "play-track"], ["d", "M8 5v14l11-7z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["aria-hidden", "true", 1, "pause-track"], ["d", "M6 19h4V5H6v14zm8-14v14h4V5h-4z"], ["mat-button", "", 1, "ngx-p-1", "skip-next", 3, "disabled", "click"], ["aria-hidden", "true", 1, "next-track"], ["d", "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"], ["mat-button", "", 1, "ngx-p-1", "volume", "justify-content-center", 3, "click"], ["aria-hidden", "true", "class", "volume-mute justify-content-center", 4, "ngIf"], ["aria-hidden", "true", "class", "volume-mute", 4, "ngIf"], ["aria-hidden", "true", "class", "volume-up", 4, "ngIf"], ["aria-hidden", "true", 1, "volume-mute", "justify-content-center"], ["height", "24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 22 22"], ["d", "m0,0l24,0l0,24l-24,0l0,-24z", "fill", "none"], ["d", "m8,20l0,1.932a0.5,0.5 0 0 1 -0.82,0.385l-4.12,-3.433a0.5,0.5 0 0 1 0.322,-0.884l14.618,0a2,2 0 0 0 2,-2l0,-8l2,0l0,8a4,4 0 0 1 -4,4l-10,0zm8,-16l0,-1.932a0.5,0.5 0 0 1 0.82,-0.385l4.12,3.433a0.5,0.5 0 0 1 -0.321,0.884l-14.619,0a2,2 0 0 0 -2,2l0,8l-2,0l0,-8a4,4 0 0 1 4,-4l10,0z"], ["d", "M 3 0 L 22.4164 22.2706 L 21 24 L 1.5836 1.8128 L 3 0"], ["aria-hidden", "true", 1, "volume-mute"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"], ["aria-hidden", "true", 1, "volume-up"], ["d", "M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zm-5 4h2v8h-2v-6H9V9l2-1z"], ["mat-button", "", 1, "ngx-p-1", "volume", 3, "click"], ["height", "28", "viewBox", "0 0 24 24", "width", "28", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"], ["d", "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"], [1, "mat-elevation-z1", "ngx-audio-player"], [2, "text-align", "center"], [2, "margin", "1px 2px", "padding", "1em"], ["behavior", "scroll", "direction", "left", 4, "ngIf"], [1, "clear"], ["behavior", "scroll", "direction", "left"], [1, "ngx-audio-player"], [3, "expanded"], ["mat-table", "", 1, "mat-elevation-z6", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "artist"], ["matColumnDef", "duration"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "mat-select-content", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["mat-cell", ""], ["aria-hidden", "true", "class", "currently-playing", 4, "ngIf"], ["aria-hidden", "true", 1, "currently-playing"], ["height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"], ["mat-header-row", ""], ["mat-row", "", 1, "mat-select-content"]], template: function AudioPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelement(1, "audio", 1, 2);
        i0.ɵɵtemplate(3, AudioPlayerComponent_button_3_Template, 5, 1, "button", 3);
        i0.ɵɵelementStart(4, "button", 4);
        i0.ɵɵlistener("click", function AudioPlayerComponent_Template_button_click_4_listener() { return ctx.playBtnHandler(); });
        i0.ɵɵtemplate(5, AudioPlayerComponent__svg_svg_5_Template, 37, 0, "svg", 5);
        i0.ɵɵtemplate(6, AudioPlayerComponent_mat_icon_6_Template, 4, 0, "mat-icon", 6);
        i0.ɵɵtemplate(7, AudioPlayerComponent_mat_icon_7_Template, 4, 0, "mat-icon", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, AudioPlayerComponent_button_8_Template, 5, 1, "button", 8);
        i0.ɵɵelementStart(9, "div", 9)(10, "div", 10)(11, "div", 11);
        i0.ɵɵtemplate(12, AudioPlayerComponent_span_12_Template, 3, 3, "span", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-slider", 13);
        i0.ɵɵlistener("change", function AudioPlayerComponent_Template_mat_slider_change_13_listener($event) { return ctx.currTimePosChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 14);
        i0.ɵɵtemplate(15, AudioPlayerComponent_span_15_Template, 3, 3, "span", 12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(16, AudioPlayerComponent_button_16_Template, 4, 3, "button", 15);
        i0.ɵɵtemplate(17, AudioPlayerComponent_button_17_Template, 3, 2, "button", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, AudioPlayerComponent_mat_card_18_Template, 6, 2, "mat-card", 17);
        i0.ɵɵtemplate(19, AudioPlayerComponent_mat_accordion_19_Template, 20, 6, "mat-accordion", 18);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.tracks[ctx.currentIndex] == null ? null : ctx.tracks[ctx.currentIndex].link, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.tracks.length > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.loaderDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loaderDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loaderDisplay && !ctx.isPlaying);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loaderDisplay && ctx.isPlaying);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tracks.length > 1);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.duration !== 0.01);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("max", ctx.duration - ctx.endOffset);
        i0.ɵɵpropertyInterpolate("value", ctx.currentTime);
        i0.ɵɵproperty("disabled", ctx.disablePositionSlider)("min", ctx.startOffset);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.duration !== 0.01);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayRepeatControls);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayVolumeControls);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayPlaylist && ctx.tracks.length > 1);
    } }, dependencies: [i1.NgIf, i2.MatButton, i3.MatCard, i4.MatTable, i4.MatHeaderCellDef, i4.MatHeaderRowDef, i4.MatColumnDef, i4.MatCellDef, i4.MatRowDef, i4.MatHeaderCell, i4.MatCell, i4.MatHeaderRow, i4.MatRow, i5.MatSlider, i6.MatAccordion, i6.MatExpansionPanel, i6.MatExpansionPanelHeader, i7.MatPaginator, i8.MatIcon, SecondsToMinutesPipe], styles: ["mat-card[_ngcontent-%COMP%], mat-slider[_ngcontent-%COMP%]{padding:0!important}button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus{outline:0px!important}svg[_ngcontent-%COMP%]{vertical-align:top}.mat-icon[_ngcontent-%COMP%]{height:32px!important;width:32px!important}mat-icon[_ngcontent-%COMP%] > .currently-playing[_ngcontent-%COMP%]{height:16px!important;width:16px!important}table[_ngcontent-%COMP%]{width:100%}  .ngx-audio-player{min-width:375px}.mat-expansion-panel[_ngcontent-%COMP%]{min-width:375px}  .mat-paginator-container{justify-content:space-between!important}.material-icons[_ngcontent-%COMP%]{font-size:16px!important}.play-pause[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1)}.volume[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.1)}.skip-next[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.1)}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:inherit}.ngx-p-1[_ngcontent-%COMP%]{padding:.25rem!important}.ngx-col[_ngcontent-%COMP%], .ngx-col-1[_ngcontent-%COMP%], .ngx-col-10[_ngcontent-%COMP%], .ngx-col-11[_ngcontent-%COMP%], .ngx-col-12[_ngcontent-%COMP%], .ngx-col-2[_ngcontent-%COMP%], .ngx-col-3[_ngcontent-%COMP%], .ngx-col-4[_ngcontent-%COMP%], .ngx-col-5[_ngcontent-%COMP%], .ngx-col-6[_ngcontent-%COMP%], .ngx-col-7[_ngcontent-%COMP%], .ngx-col-8[_ngcontent-%COMP%], .ngx-col-9[_ngcontent-%COMP%], .ngx-col-auto[_ngcontent-%COMP%], .ngx-col-lg[_ngcontent-%COMP%], .ngx-col-lg-1[_ngcontent-%COMP%], .ngx-col-lg-10[_ngcontent-%COMP%], .ngx-col-lg-11[_ngcontent-%COMP%], .ngx-col-lg-12[_ngcontent-%COMP%], .ngx-col-lg-2[_ngcontent-%COMP%], .ngx-col-lg-3[_ngcontent-%COMP%], .ngx-col-lg-4[_ngcontent-%COMP%], .ngx-col-lg-5[_ngcontent-%COMP%], .ngx-col-lg-6[_ngcontent-%COMP%], .ngx-col-lg-7[_ngcontent-%COMP%], .ngx-col-lg-8[_ngcontent-%COMP%], .ngx-col-lg-9[_ngcontent-%COMP%], .ngx-col-lg-auto[_ngcontent-%COMP%], .ngx-col-md[_ngcontent-%COMP%], .ngx-col-md-1[_ngcontent-%COMP%], .ngx-col-md-10[_ngcontent-%COMP%], .ngx-col-md-11[_ngcontent-%COMP%], .ngx-col-md-12[_ngcontent-%COMP%], .ngx-col-md-2[_ngcontent-%COMP%], .ngx-col-md-3[_ngcontent-%COMP%], .ngx-col-md-4[_ngcontent-%COMP%], .ngx-col-md-5[_ngcontent-%COMP%], .ngx-col-md-6[_ngcontent-%COMP%], .ngx-col-md-7[_ngcontent-%COMP%], .ngx-col-md-8[_ngcontent-%COMP%], .ngx-col-md-9[_ngcontent-%COMP%], .ngx-col-md-auto[_ngcontent-%COMP%], .ngx-col-sm[_ngcontent-%COMP%], .ngx-col-sm-1[_ngcontent-%COMP%], .ngx-col-sm-10[_ngcontent-%COMP%], .ngx-col-sm-11[_ngcontent-%COMP%], .ngx-col-sm-12[_ngcontent-%COMP%], .ngx-col-sm-2[_ngcontent-%COMP%], .ngx-col-sm-3[_ngcontent-%COMP%], .ngx-col-sm-4[_ngcontent-%COMP%], .ngx-col-sm-5[_ngcontent-%COMP%], .ngx-col-sm-6[_ngcontent-%COMP%], .ngx-col-sm-7[_ngcontent-%COMP%], .ngx-col-sm-8[_ngcontent-%COMP%], .ngx-col-sm-9[_ngcontent-%COMP%], .ngx-col-sm-auto[_ngcontent-%COMP%], .ngx-col-xl[_ngcontent-%COMP%], .ngx-col-xl-1[_ngcontent-%COMP%], .ngx-col-xl-10[_ngcontent-%COMP%], .ngx-col-xl-11[_ngcontent-%COMP%], .ngx-col-xl-12[_ngcontent-%COMP%], .ngx-col-xl-2[_ngcontent-%COMP%], .ngx-col-xl-3[_ngcontent-%COMP%], .ngx-col-xl-4[_ngcontent-%COMP%], .ngx-col-xl-5[_ngcontent-%COMP%], .ngx-col-xl-6[_ngcontent-%COMP%], .ngx-col-xl-7[_ngcontent-%COMP%], .ngx-col-xl-8[_ngcontent-%COMP%], .ngx-col-xl-9[_ngcontent-%COMP%], .ngx-col-xl-auto[_ngcontent-%COMP%]{position:relative;width:100%;padding-right:15px;padding-left:15px}.ngx-col[_ngcontent-%COMP%]{flex-basis:0;flex-grow:1;max-width:100%}.ngx-justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.ngx-flex-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.ngx-d-flex[_ngcontent-%COMP%]{display:flex!important}.ngx-pb-3[_ngcontent-%COMP%], .ngx-py-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.ngx-pt-3[_ngcontent-%COMP%], .ngx-py-3[_ngcontent-%COMP%]{padding-top:1rem!important}.ngx-pl-1[_ngcontent-%COMP%], .ngx-px-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ngx-pr-1[_ngcontent-%COMP%], .ngx-px-1[_ngcontent-%COMP%]{padding-right:.25rem!important}@media (max-width: 768px){.ngx-sm-block[_ngcontent-%COMP%]{display:block!important}.ngx-d-none[_ngcontent-%COMP%]{display:none!important}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AudioPlayerComponent, [{
        type: Component,
        args: [{ selector: 'mat-advanced-audio-player,ngx-audio-player', template: "<mat-card class=\"ngx-d-flex ngx-justify-content-center ngx-audio-player z-depth-1 mat-elevation-z2\"\n    style=\"margin: 0px;\">\n\n    <audio #audioPlayer [src]=\"tracks[currentIndex]?.link\"></audio>\n\n    <button *ngIf=\"tracks.length > 1\" (click)='previousSong();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1\" mat-button>\n        <mat-icon aria-hidden=\"true\">\n            <!-- Skip previous icon (skip_previous) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\" />\n                <path d=\"M0 0h32v32H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='playBtnHandler();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1 play-pause\" mat-button>\n\n        <svg *ngIf=\"loaderDisplay\" height=\"34px\" preserveAspectRatio=\"xMidYMid\"\n            style=\"margin: auto; display: block; shape-rendering: auto;\" viewBox=\"0 0 100 100\" width=\"34px\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <g transform=\"rotate(0 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(30 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(60 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(90 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(120 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(150 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(180 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(210 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(240 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(270 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(300 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(330 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n        </svg>\n\n        <mat-icon *ngIf=\"!loaderDisplay && !isPlaying\" aria-hidden=\"true\" class=\"play-track\">\n            <!-- Play icon (play_arrow) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8 5v14l11-7z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"!loaderDisplay && isPlaying\" aria-hidden=\"true\" class=\"pause-track\">\n            <!-- Pause icon (pause) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button *ngIf=\"tracks.length > 1\" (click)='nextSong();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1 skip-next\"\n        mat-button>\n        <mat-icon aria-hidden=\"true\" class=\"next-track\">\n            <!-- Skip next icon (skip_next) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n\n    <div class=\"ngx-col\">\n        <div class=\"ngx-d-flex ngx-flex-fill ngx-justify-content-center\">\n            <div class=\"ngx-d-none ngx-d-sm-block ngx-py-3 ngx-px-1\" style=\"font-size: 12px\">\n                <span *ngIf=\"duration !== 0.01\">\n                    {{currentTime | secondsToMinutes}}\n                </span>\n            </div>\n            <mat-slider [disabled]=\"disablePositionSlider\" (change)=\"currTimePosChanged($event)\" [min]=\"startOffset\"\n                class=\"ngx-d-none ngx-d-sm-block ngx-flex-fill ngx-p-1\" max=\"{{duration-endOffset}}\" style=\"width: 100%\"\n                value=\"{{currentTime}}\"></mat-slider>\n\n            <div class=\"ngx-py-3 ngx-px-1\" style=\"font-size: 12px; text-align: right\">\n                <span *ngIf=\"duration !== 0.01\">\n                    -{{duration-currentTime | secondsToMinutes }}\n                </span>\n            </div>\n        </div>\n    </div>\n    <button (click)='toggleRepeat();' *ngIf=\"displayRepeatControls\" class=\"ngx-p-1 volume justify-content-center\"\n        mat-button>\n        <mat-icon *ngIf=\"repeat === 'none'\" aria-hidden=\"true\" class=\"volume-mute justify-content-center\">\n            <!-- Repeat None -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <g>\n                        <path d=\"m0,0l24,0l0,24l-24,0l0,-24z\" fill=\"none\" />\n                        <path\n                            d=\"m8,20l0,1.932a0.5,0.5 0 0 1 -0.82,0.385l-4.12,-3.433a0.5,0.5 0 0 1 0.322,-0.884l14.618,0a2,2 0 0 0 2,-2l0,-8l2,0l0,8a4,4 0 0 1 -4,4l-10,0zm8,-16l0,-1.932a0.5,0.5 0 0 1 0.82,-0.385l4.12,3.433a0.5,0.5 0 0 1 -0.321,0.884l-14.619,0a2,2 0 0 0 -2,2l0,8l-2,0l0,-8a4,4 0 0 1 4,-4l10,0z\" />\n                        <path d=\"M 3 0 L 22.4164 22.2706 L 21 24 L 1.5836 1.8128 L 3 0\"></path>\n                    </g>\n                    <!-- <line xmlns=\"http://www.w3.org/2000/svg\" id=\"svg_4\" y2=\"22.27056\" x2=\"22.41638\" y1=\"1.81276\" x1=\"1.58362\" stroke-width=\"2\" fill=\"none\"/> -->\n                </g>\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"repeat === 'all'\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Repeat All -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path\n                        d=\"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z\" />\n                </g>\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"repeat === 'one'\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Repeat ONE -->\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n                <g>\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path\n                        d=\"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zm-5 4h2v8h-2v-6H9V9l2-1z\" />\n                </g>\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='toggleVolume();' *ngIf=\"displayVolumeControls\" class=\"ngx-p-1 volume\" mat-button>\n        <mat-icon *ngIf=\"volume === 0\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Volume mute icon (volume_off) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"volume > 0\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Volume up icon (volume_up) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle\" class=\"mat-elevation-z1 ngx-audio-player\">\n    <div style=\"text-align: center;\">\n        <div style=\"margin: 1px 2px; padding: 1em\">\n            <span *ngIf=\"!isPlaying\">{{ tracks[currentIndex]?.title }}{{ displayArtist && tracks[currentIndex]?.artist ?\n                ' | ' + tracks[currentIndex]?.artist : ''}}</span>\n            <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ tracks[currentIndex]?.title\n                }}{{ displayArtist && tracks[currentIndex]?.artist ? ' | ' + tracks[currentIndex]?.artist : ''}}\n            </marquee>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</mat-card>\n\n<mat-accordion class=\"ngx-audio-player\" *ngIf=\"displayPlaylist && tracks.length > 1\">\n    <mat-expansion-panel [expanded]=\"expanded\">\n        <mat-expansion-panel-header>\n            {{tableHeader}}\n        </mat-expansion-panel-header>\n        <table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\" mat-table>\n            <ng-container matColumnDef=\"title\">\n                <th *matHeaderCellDef mat-header-cell>{{titleHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element.title}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"artist\">\n                <th *matHeaderCellDef mat-header-cell>{{artistHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element?.artist ? element?.artist : ''}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"duration\">\n                <th *matHeaderCellDef mat-header-cell>{{durationHeader}}</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element?.duration ? (element?.duration | secondsToMinutes) : ''}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n                <th *matHeaderCellDef mat-header-cell></th>\n                <td *matCellDef=\"let element\" mat-cell>\n                    <div *ngIf=\"tracks[currentIndex]?.title === element.title\">\n                        <!-- <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n                        </mat-icon> -->\n                        <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\" class=\"currently-playing\">\n                            <!-- Play icon (play_arrow) -->\n                            <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                                <path\n                                    d=\"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z\" />\n                            </svg>\n                        </mat-icon>\n                    </div>\n                </td>\n            </ng-container>\n            <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\n            <tr *matRowDef=\"let row; columns: displayedColumns;\" class=\"mat-select-content\" mat-row></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n    </mat-expansion-panel>\n</mat-accordion>", styles: ["mat-card,mat-slider{padding:0!important}button:hover,button:focus{outline:0px!important}svg{vertical-align:top}.mat-icon{height:32px!important;width:32px!important}mat-icon>.currently-playing{height:16px!important;width:16px!important}table{width:100%}::ng-deep .ngx-audio-player{min-width:375px}.mat-expansion-panel{min-width:375px}::ng-deep .mat-paginator-container{justify-content:space-between!important}.material-icons{font-size:16px!important}.play-pause{border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1)}.volume{border-left:1px solid rgba(0,0,0,.1)}.skip-next{border-right:1px solid rgba(0,0,0,.1)}*,:after,:before{box-sizing:inherit}.ngx-p-1{padding:.25rem!important}.ngx-col,.ngx-col-1,.ngx-col-10,.ngx-col-11,.ngx-col-12,.ngx-col-2,.ngx-col-3,.ngx-col-4,.ngx-col-5,.ngx-col-6,.ngx-col-7,.ngx-col-8,.ngx-col-9,.ngx-col-auto,.ngx-col-lg,.ngx-col-lg-1,.ngx-col-lg-10,.ngx-col-lg-11,.ngx-col-lg-12,.ngx-col-lg-2,.ngx-col-lg-3,.ngx-col-lg-4,.ngx-col-lg-5,.ngx-col-lg-6,.ngx-col-lg-7,.ngx-col-lg-8,.ngx-col-lg-9,.ngx-col-lg-auto,.ngx-col-md,.ngx-col-md-1,.ngx-col-md-10,.ngx-col-md-11,.ngx-col-md-12,.ngx-col-md-2,.ngx-col-md-3,.ngx-col-md-4,.ngx-col-md-5,.ngx-col-md-6,.ngx-col-md-7,.ngx-col-md-8,.ngx-col-md-9,.ngx-col-md-auto,.ngx-col-sm,.ngx-col-sm-1,.ngx-col-sm-10,.ngx-col-sm-11,.ngx-col-sm-12,.ngx-col-sm-2,.ngx-col-sm-3,.ngx-col-sm-4,.ngx-col-sm-5,.ngx-col-sm-6,.ngx-col-sm-7,.ngx-col-sm-8,.ngx-col-sm-9,.ngx-col-sm-auto,.ngx-col-xl,.ngx-col-xl-1,.ngx-col-xl-10,.ngx-col-xl-11,.ngx-col-xl-12,.ngx-col-xl-2,.ngx-col-xl-3,.ngx-col-xl-4,.ngx-col-xl-5,.ngx-col-xl-6,.ngx-col-xl-7,.ngx-col-xl-8,.ngx-col-xl-9,.ngx-col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.ngx-col{flex-basis:0;flex-grow:1;max-width:100%}.ngx-justify-content-center{justify-content:center!important}.ngx-flex-fill{flex:1 1 auto!important}.ngx-d-flex{display:flex!important}.ngx-pb-3,.ngx-py-3{padding-bottom:1rem!important}.ngx-pt-3,.ngx-py-3{padding-top:1rem!important}.ngx-pl-1,.ngx-px-1{padding-left:.25rem!important}.ngx-pr-1,.ngx-px-1{padding-right:.25rem!important}@media (max-width: 768px){.ngx-sm-block{display:block!important}.ngx-d-none{display:none!important}}\n"] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { playlist: [{
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
        }] }); })();

class NgxAudioPlayerModule {
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
//# sourceMappingURL=ngx-audio-player.mjs.map
