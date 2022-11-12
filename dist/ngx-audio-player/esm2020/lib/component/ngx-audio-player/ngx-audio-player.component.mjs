import { Component, Input, ViewChild, Output, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/card";
import * as i4 from "@angular/material/table";
import * as i5 from "@angular/material/slider";
import * as i6 from "@angular/material/expansion";
import * as i7 from "@angular/material/paginator";
import * as i8 from "@angular/material/icon";
import * as i9 from "../../pipe/seconds-to-minutes";
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
export class AudioPlayerComponent {
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
    } }, dependencies: [i1.NgIf, i2.MatButton, i3.MatCard, i4.MatTable, i4.MatHeaderCellDef, i4.MatHeaderRowDef, i4.MatColumnDef, i4.MatCellDef, i4.MatRowDef, i4.MatHeaderCell, i4.MatCell, i4.MatHeaderRow, i4.MatRow, i5.MatSlider, i6.MatAccordion, i6.MatExpansionPanel, i6.MatExpansionPanelHeader, i7.MatPaginator, i8.MatIcon, i9.SecondsToMinutesPipe], styles: ["mat-card[_ngcontent-%COMP%], mat-slider[_ngcontent-%COMP%]{padding:0!important}button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus{outline:0px!important}svg[_ngcontent-%COMP%]{vertical-align:top}.mat-icon[_ngcontent-%COMP%]{height:32px!important;width:32px!important}mat-icon[_ngcontent-%COMP%] > .currently-playing[_ngcontent-%COMP%]{height:16px!important;width:16px!important}table[_ngcontent-%COMP%]{width:100%}  .ngx-audio-player{min-width:375px}.mat-expansion-panel[_ngcontent-%COMP%]{min-width:375px}  .mat-paginator-container{justify-content:space-between!important}.material-icons[_ngcontent-%COMP%]{font-size:16px!important}.play-pause[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1)}.volume[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.1)}.skip-next[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.1)}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:inherit}.ngx-p-1[_ngcontent-%COMP%]{padding:.25rem!important}.ngx-col[_ngcontent-%COMP%], .ngx-col-1[_ngcontent-%COMP%], .ngx-col-10[_ngcontent-%COMP%], .ngx-col-11[_ngcontent-%COMP%], .ngx-col-12[_ngcontent-%COMP%], .ngx-col-2[_ngcontent-%COMP%], .ngx-col-3[_ngcontent-%COMP%], .ngx-col-4[_ngcontent-%COMP%], .ngx-col-5[_ngcontent-%COMP%], .ngx-col-6[_ngcontent-%COMP%], .ngx-col-7[_ngcontent-%COMP%], .ngx-col-8[_ngcontent-%COMP%], .ngx-col-9[_ngcontent-%COMP%], .ngx-col-auto[_ngcontent-%COMP%], .ngx-col-lg[_ngcontent-%COMP%], .ngx-col-lg-1[_ngcontent-%COMP%], .ngx-col-lg-10[_ngcontent-%COMP%], .ngx-col-lg-11[_ngcontent-%COMP%], .ngx-col-lg-12[_ngcontent-%COMP%], .ngx-col-lg-2[_ngcontent-%COMP%], .ngx-col-lg-3[_ngcontent-%COMP%], .ngx-col-lg-4[_ngcontent-%COMP%], .ngx-col-lg-5[_ngcontent-%COMP%], .ngx-col-lg-6[_ngcontent-%COMP%], .ngx-col-lg-7[_ngcontent-%COMP%], .ngx-col-lg-8[_ngcontent-%COMP%], .ngx-col-lg-9[_ngcontent-%COMP%], .ngx-col-lg-auto[_ngcontent-%COMP%], .ngx-col-md[_ngcontent-%COMP%], .ngx-col-md-1[_ngcontent-%COMP%], .ngx-col-md-10[_ngcontent-%COMP%], .ngx-col-md-11[_ngcontent-%COMP%], .ngx-col-md-12[_ngcontent-%COMP%], .ngx-col-md-2[_ngcontent-%COMP%], .ngx-col-md-3[_ngcontent-%COMP%], .ngx-col-md-4[_ngcontent-%COMP%], .ngx-col-md-5[_ngcontent-%COMP%], .ngx-col-md-6[_ngcontent-%COMP%], .ngx-col-md-7[_ngcontent-%COMP%], .ngx-col-md-8[_ngcontent-%COMP%], .ngx-col-md-9[_ngcontent-%COMP%], .ngx-col-md-auto[_ngcontent-%COMP%], .ngx-col-sm[_ngcontent-%COMP%], .ngx-col-sm-1[_ngcontent-%COMP%], .ngx-col-sm-10[_ngcontent-%COMP%], .ngx-col-sm-11[_ngcontent-%COMP%], .ngx-col-sm-12[_ngcontent-%COMP%], .ngx-col-sm-2[_ngcontent-%COMP%], .ngx-col-sm-3[_ngcontent-%COMP%], .ngx-col-sm-4[_ngcontent-%COMP%], .ngx-col-sm-5[_ngcontent-%COMP%], .ngx-col-sm-6[_ngcontent-%COMP%], .ngx-col-sm-7[_ngcontent-%COMP%], .ngx-col-sm-8[_ngcontent-%COMP%], .ngx-col-sm-9[_ngcontent-%COMP%], .ngx-col-sm-auto[_ngcontent-%COMP%], .ngx-col-xl[_ngcontent-%COMP%], .ngx-col-xl-1[_ngcontent-%COMP%], .ngx-col-xl-10[_ngcontent-%COMP%], .ngx-col-xl-11[_ngcontent-%COMP%], .ngx-col-xl-12[_ngcontent-%COMP%], .ngx-col-xl-2[_ngcontent-%COMP%], .ngx-col-xl-3[_ngcontent-%COMP%], .ngx-col-xl-4[_ngcontent-%COMP%], .ngx-col-xl-5[_ngcontent-%COMP%], .ngx-col-xl-6[_ngcontent-%COMP%], .ngx-col-xl-7[_ngcontent-%COMP%], .ngx-col-xl-8[_ngcontent-%COMP%], .ngx-col-xl-9[_ngcontent-%COMP%], .ngx-col-xl-auto[_ngcontent-%COMP%]{position:relative;width:100%;padding-right:15px;padding-left:15px}.ngx-col[_ngcontent-%COMP%]{flex-basis:0;flex-grow:1;max-width:100%}.ngx-justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.ngx-flex-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.ngx-d-flex[_ngcontent-%COMP%]{display:flex!important}.ngx-pb-3[_ngcontent-%COMP%], .ngx-py-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.ngx-pt-3[_ngcontent-%COMP%], .ngx-py-3[_ngcontent-%COMP%]{padding-top:1rem!important}.ngx-pl-1[_ngcontent-%COMP%], .ngx-px-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ngx-pr-1[_ngcontent-%COMP%], .ngx-px-1[_ngcontent-%COMP%]{padding-right:.25rem!important}@media (max-width: 768px){.ngx-sm-block[_ngcontent-%COMP%]{display:block!important}.ngx-d-none[_ngcontent-%COMP%]{display:none!important}}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1ZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVkaW8tcGxheWVyL3NyYy9saWIvY29tcG9uZW50L25neC1hdWRpby1wbGF5ZXIvbmd4LWF1ZGlvLXBsYXllci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVkaW8tcGxheWVyL3NyYy9saWIvY29tcG9uZW50L25neC1hdWRpby1wbGF5ZXIvbmd4LWF1ZGlvLXBsYXllci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFHbEgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDRjNCLGtDQUFrSDtJQUFoRixzS0FBUyxlQUFBLHNCQUFjLENBQUEsSUFBRTtJQUN2RCxvQ0FBNkI7SUFFekIsbUJBQW1GO0lBQW5GLCtCQUFtRjtJQUMvRSwyQkFBd0MsZUFBQTtJQUU1QyxpQkFBTSxFQUFBLEVBQUE7OztJQU44QywrQ0FBMEI7OztJQVdsRixtQkFFdUM7SUFGdkMsK0JBRXVDLFlBQUEsZUFBQTtJQUczQiw4QkFDNEM7SUFDaEQsaUJBQU8sRUFBQTtJQUVYLDZCQUFnQyxlQUFBO0lBRXhCLDhCQUM0QztJQUNoRCxpQkFBTyxFQUFBO0lBRVgsNkJBQWdDLGVBQUE7SUFFeEIsOEJBQ21CO0lBQ3ZCLGlCQUFPLEVBQUE7SUFF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QUs7WUFVQyxTQUFTO2tCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBPdXRwdXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhY2sgfSBmcm9tICcuLi8uLi9tb2RlbC90cmFjay5tb2RlbCc7XG5pbXBvcnQgeyBNYXRTbGlkZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IEF1ZGlvUGxheWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYXVkaW8tcGxheWVyLXNlcnZpY2UvYXVkaW8tcGxheWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXIsbmd4LWF1ZGlvLXBsYXllcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1hdWRpby1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1hdWRpby1wbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGlvUGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAgYXVkaW9QbGF5ZXJTZXJ2aWNlOiBBdWRpb1BsYXllclNlcnZpY2U7XG4gICAgcmVwZWF0OiBzdHJpbmcgPSAnYWxsJztcbiAgICBjb25zdHJ1Y3RvcihlbGVtOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIGlmIChlbGVtLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllcicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJ21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXInIHNlbGVjdG9yIGlzIGRlcHJlY2F0ZWQ7IHVzZSAnbmd4LWF1ZGlvLXBsYXllcicgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyU2VydmljZSA9IG5ldyBBdWRpb1BsYXllclNlcnZpY2UoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBwbGF5bGlzdChwbGF5bGlzdDogVHJhY2tbXSkge1xuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyU2VydmljZS5zZXRQbGF5bGlzdChwbGF5bGlzdCk7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXQgbWF0UGFnaW5hdG9yKG1wOiBNYXRQYWdpbmF0b3IpIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0b3IgPSBtcDtcbiAgICAgICAgdGhpcy5zZXREYXRhU291cmNlQXR0cmlidXRlcygpO1xuICAgIH1cblxuXG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XG4gICAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8VHJhY2s+KCk7XG4gICAgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG5cbiAgICB0aW1lTGluZUR1cmF0aW9uOiBNYXRTbGlkZXI7XG5cbiAgICB0cmFja3M6IFRyYWNrW10gPSBbXTtcblxuICAgIEBJbnB1dCgpIGRpc3BsYXlUaXRsZSA9IHRydWU7XG4gICAgQElucHV0KCkgZGlzcGxheVBsYXlsaXN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBkaXNwbGF5Vm9sdW1lQ29udHJvbHMgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlSZXBlYXRDb250cm9scyA9IHRydWU7XG4gICAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzBdO1xuICAgIEBJbnB1dCgpIGV4cGFuZGVkID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBhdXRvUGxheSA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc2FibGVQb3NpdGlvblNsaWRlciA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlBcnRpc3QgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkaXNwbGF5RHVyYXRpb24gPSBmYWxzZTtcblxuICAgIC8vIFN1cHBvcnQgZm9yIGludGVybmF0aW9uYWxpemF0aW9uXG4gICAgQElucHV0KCkgdGFibGVIZWFkZXIgPSAnUGxheWxpc3QnO1xuICAgIEBJbnB1dCgpIHRpdGxlSGVhZGVyID0gJ1RpdGxlJztcbiAgICBASW5wdXQoKSBhcnRpc3RIZWFkZXIgPSAnQXJ0aXN0JztcbiAgICBASW5wdXQoKSBkdXJhdGlvbkhlYWRlciA9ICdEdXJhdGlvbic7XG5cblxuICAgIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBAT3V0cHV0KClcbiAgICB0cmFja0VuZGVkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdhdWRpb1BsYXllcicsIHsgc3RhdGljOiB0cnVlIH0pIHBsYXllcjogRWxlbWVudFJlZjtcblxuICAgIGlPUyA9ICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pXG4gICAgICAgIHx8IChuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSkpO1xuXG4gICAgbG9hZGVyRGlzcGxheSA9IGZhbHNlO1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRUaW1lID0gMDtcbiAgICB2b2x1bWUgPSAwLjE7XG4gICAgZHVyYXRpb24gPSAwLjAxO1xuXG4gICAgcHJpdmF0ZSBzdGFydE9mZnNldFZhbHVlID0gMDtcbiAgICBASW5wdXQoKVxuICAgIHNldCBzdGFydE9mZnNldChzZWNvbmRzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydE9mZnNldFZhbHVlID0gc2Vjb25kcztcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgfVxuICAgIGdldCBzdGFydE9mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydE9mZnNldFZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGVuZE9mZnNldCA9IDA7XG5cbiAgICBjdXJyVGltZVBvc0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA9IGV2ZW50LnZhbHVlO1xuICAgIH1cblxuICAgIGJpbmRQbGF5ZXJFdmVudCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5mbG9vcih0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IE1hdGguZmxvb3IodGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAvLyBCVUc6IENvbW1lbnRpbmcgZm9yIGBlbmRlZGAgZXZlbnQgbm90IGZpcmluZyAjNjZcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmN1cnJlbnRUaW1lID49IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVuZE9mZnNldCkge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndm9sdW1lJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52b2x1bWUgPSBNYXRoLmZsb29yKHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQudm9sdW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdGhpcy5pT1MpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyRGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJEaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5mbG9vcih0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrRW5kZWQubmV4dCgnZW5kZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwbGF5QnRuSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyRGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBhdXNlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPj0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZW5kT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA9IHRoaXMuc3RhcnRPZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheSh0cmFjaz86IFRyYWNrKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gdHJhY2suc3RhcnRPZmZzZXQgfHwgMDtcbiAgICAgICAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdHJhY2suZW5kT2Zmc2V0IHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQucGxheSgpO1xuICAgICAgICB9LCA1MCk7XG5cbiAgICB9XG5cbiAgICB0b2dnbGVWb2x1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZvbHVtZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUoMS4wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Vm9sdW1lKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlUmVwZWF0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXBlYXQgPT09ICdub25lJykge1xuICAgICAgICAgICAgdGhpcy5yZXBlYXQgPSAnYWxsJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlcGVhdCA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBlYXQgPSAnb25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBlYXQgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXBlYXQgPT09ICdvbmUnICYmIHRoaXMudHJhY2tzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWb2x1bWUodm9sKSB7XG4gICAgICAgIHRoaXMudm9sdW1lID0gdm9sO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnZvbHVtZSA9IHRoaXMudm9sdW1lO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuYmluZFBsYXllckV2ZW50KCk7XG5cbiAgICAgICAgLy8gYXV0byBwbGF5IG5leHQgdHJhY2tcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSWZTb25nSGFzU3RhcnRlZFNpbmNlQXRsZWFzdFR3b1NlY29uZHMoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcGVhdCA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0U29uZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXBlYXQgPT09ICdvbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXBlYXQgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUGxheWVyU2VydmljZS5zZXRDdXJyZW50VGltZSh0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHBsYXlsaXN0IG9ic2VydmVyIGZyb20gQXVkaW9QbGF5ZXJTZXJ2aWNlIGFuZFxuICAgICAgICAvLyB1cGRhdGUgdGhlIHBsYXlsaXN0IHdpdGhpbiBNYXRBZHZhbmNlZEF1ZGlvUGxheWVyQ29tcG9uZW50XG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXJTZXJ2aWNlLmdldFBsYXlsaXN0KCkuc3Vic2NyaWJlKHRyYWNrcyA9PiB7XG4gICAgICAgICAgICBpZiAodHJhY2tzICE9PSBudWxsICYmIHRyYWNrcyAhPT0gW10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrcyA9IHRyYWNrcztcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkaXNwbGF5QXJ0aXN0JykgfHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGlzcGxheUR1cmF0aW9uJykpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGREaXNwbGF5ZWRDb2x1bW5zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRGlzcGxheWVkQ29sdW1ucygpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gWyd0aXRsZSddO1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5QXJ0aXN0KSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaCgnYXJ0aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaCgnZHVyYXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaCgnc3RhdHVzJyk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5idWlsZERpc3BsYXllZENvbHVtbnMoKTtcblxuICAgICAgICAvLyBwb3B1bGF0ZSBpbmRleHMgZm9yIHRoZSB0cmFjayBhbmQgY29uZmlndXJlXG4gICAgICAgIC8vIG1hdGVyaWFsIHRhYmxlIGRhdGEgc291cmNlIGFuZCBwYWdpbmF0b3JcbiAgICAgICAgdGhpcy5zZXREYXRhU291cmNlQXR0cmlidXRlcygpO1xuXG5cbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA9IHRoaXMuc3RhcnRPZmZzZXQ7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFRyYWNrKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGF0YVNvdXJjZUF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIGlmICh0aGlzLnRyYWNrcykge1xuICAgICAgICAgICAgdGhpcy50cmFja3MuZm9yRWFjaCgodHJhY2s6IFRyYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJhY2suaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFRyYWNrPih0aGlzLnRyYWNrcyk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0U29uZygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheVBsYXlsaXN0ID09PSB0cnVlXG4gICAgICAgICAgICAmJiAoKCh0aGlzLmN1cnJlbnRJbmRleCArIDEpICUgdGhpcy5wYWdpbmF0b3IucGFnZVNpemUpID09PSAwXG4gICAgICAgICAgICAgICAgfHwgKHRoaXMuY3VycmVudEluZGV4ICsgMSkgPT09IHRoaXMucGFnaW5hdG9yLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvci5oYXNOZXh0UGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IubmV4dFBhZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGFnaW5hdG9yLmhhc05leHRQYWdlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMDE7XG4gICAgICAgIGlmICgodGhpcy5jdXJyZW50SW5kZXggKyAxKSA+PSB0aGlzLnRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50VHJhY2soKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgcHJldmlvdXNTb25nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMDE7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0lmU29uZ0hhc1N0YXJ0ZWRTaW5jZUF0bGVhc3RUd29TZWNvbmRzKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXlQbGF5bGlzdCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICYmICgoKHRoaXMuY3VycmVudEluZGV4KSAlIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5jdXJyZW50SW5kZXggPT09IDApKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvci5oYXNQcmV2aW91c1BhZ2UoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5wcmV2aW91c1BhZ2UoKTsgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wYWdpbmF0b3IuaGFzUHJldmlvdXNQYWdlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IubGFzdFBhZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHRoaXMuY3VycmVudEluZGV4IC0gMSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAodGhpcy50cmFja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U29uZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFRyYWNrKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIHJlc2V0U29uZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnRyYWNrc1t0aGlzLmN1cnJlbnRJbmRleF0ubGluaztcbiAgICB9XG5cbiAgICBzZWxlY3RUcmFjayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXggLSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRUcmFjaygpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBjaGVja0lmU29uZ0hhc1N0YXJ0ZWRTaW5jZUF0bGVhc3RUd29TZWNvbmRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA+IDI7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudFRyYWNrKCkge1xuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyU2VydmljZS5zZXRDdXJyZW50VHJhY2sodGhpcy50cmFja3NbdGhpcy5jdXJyZW50SW5kZXhdKTtcbiAgICB9XG5cbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cIm5neC1kLWZsZXggbmd4LWp1c3RpZnktY29udGVudC1jZW50ZXIgbmd4LWF1ZGlvLXBsYXllciB6LWRlcHRoLTEgbWF0LWVsZXZhdGlvbi16MlwiXG4gICAgc3R5bGU9XCJtYXJnaW46IDBweDtcIj5cblxuICAgIDxhdWRpbyAjYXVkaW9QbGF5ZXIgW3NyY109XCJ0cmFja3NbY3VycmVudEluZGV4XT8ubGlua1wiPjwvYXVkaW8+XG5cbiAgICA8YnV0dG9uICpuZ0lmPVwidHJhY2tzLmxlbmd0aCA+IDFcIiAoY2xpY2spPSdwcmV2aW91c1NvbmcoKTsnIFtkaXNhYmxlZF09XCJsb2FkZXJEaXNwbGF5XCIgY2xhc3M9XCJuZ3gtcC0xXCIgbWF0LWJ1dHRvbj5cbiAgICAgICAgPG1hdC1pY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPCEtLSBTa2lwIHByZXZpb3VzIGljb24gKHNraXBfcHJldmlvdXMpIC0tPlxuICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiA2aDJ2MTJINnptMy41IDZsOC41IDZWNnpcIiAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDMydjMySDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPSdwbGF5QnRuSGFuZGxlcigpOycgW2Rpc2FibGVkXT1cImxvYWRlckRpc3BsYXlcIiBjbGFzcz1cIm5neC1wLTEgcGxheS1wYXVzZVwiIG1hdC1idXR0b24+XG5cbiAgICAgICAgPHN2ZyAqbmdJZj1cImxvYWRlckRpc3BsYXlcIiBoZWlnaHQ9XCIzNHB4XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcbiAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luOiBhdXRvOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHdpZHRoPVwiMzRweFwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMCA1MCA1MClcIj5cbiAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPVwiIzdhN2E3YVwiIGhlaWdodD1cIjEyXCIgcng9XCIzXCIgcnk9XCI2XCIgd2lkdGg9XCI2XCIgeD1cIjQ3XCIgeT1cIjIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgYmVnaW49XCItMC45MTY2NjY2NjY2NjY2NjY2c1wiIGR1cj1cIjFzXCIga2V5VGltZXM9XCIwOzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTswXCIgLz5cbiAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgNTAgNTApXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgZmlsbD1cIiM3YTdhN2FcIiBoZWlnaHQ9XCIxMlwiIHJ4PVwiM1wiIHJ5PVwiNlwiIHdpZHRoPVwiNlwiIHg9XCI0N1wiIHk9XCIyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGJlZ2luPVwiLTAuODMzMzMzMzMzMzMzMzMzNHNcIiBkdXI9XCIxc1wiIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHZhbHVlcz1cIjE7MFwiIC8+XG4gICAgICAgICAgICAgICAgPC9yZWN0PlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDYwIDUwIDUwKVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9XCIjN2E3YTdhXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiB4PVwiNDdcIiB5PVwiMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBiZWdpbj1cIi0wLjc1c1wiIGR1cj1cIjFzXCIga2V5VGltZXM9XCIwOzFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiMTswXCIgLz5cbiAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoOTAgNTAgNTApXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgZmlsbD1cIiM3YTdhN2FcIiBoZWlnaHQ9XCIxMlwiIHJ4PVwiM1wiIHJ5PVwiNlwiIHdpZHRoPVwiNlwiIHg9XCI0N1wiIHk9XCIyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGJlZ2luPVwiLTAuNjY2NjY2NjY2NjY2NjY2NnNcIiBkdXI9XCIxc1wiIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHZhbHVlcz1cIjE7MFwiIC8+XG4gICAgICAgICAgICAgICAgPC9yZWN0PlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDEyMCA1MCA1MClcIj5cbiAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPVwiIzdhN2E3YVwiIGhlaWdodD1cIjEyXCIgcng9XCIzXCIgcnk9XCI2XCIgd2lkdGg9XCI2XCIgeD1cIjQ3XCIgeT1cIjIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgYmVnaW49XCItMC41ODMzMzMzMzMzMzMzMzM0c1wiIGR1cj1cIjFzXCIga2V5VGltZXM9XCIwOzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTswXCIgLz5cbiAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwIDUwIDUwKVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9XCIjN2E3YTdhXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiB4PVwiNDdcIiB5PVwiMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBiZWdpbj1cIi0wLjVzXCIgZHVyPVwiMXNcIiBrZXlUaW1lcz1cIjA7MVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCIxOzBcIiAvPlxuICAgICAgICAgICAgICAgIDwvcmVjdD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInJvdGF0ZSgxODAgNTAgNTApXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgZmlsbD1cIiM3YTdhN2FcIiBoZWlnaHQ9XCIxMlwiIHJ4PVwiM1wiIHJ5PVwiNlwiIHdpZHRoPVwiNlwiIHg9XCI0N1wiIHk9XCIyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGJlZ2luPVwiLTAuNDE2NjY2NjY2NjY2NjY2N3NcIiBkdXI9XCIxc1wiIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHZhbHVlcz1cIjE7MFwiIC8+XG4gICAgICAgICAgICAgICAgPC9yZWN0PlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDIxMCA1MCA1MClcIj5cbiAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPVwiIzdhN2E3YVwiIGhlaWdodD1cIjEyXCIgcng9XCIzXCIgcnk9XCI2XCIgd2lkdGg9XCI2XCIgeD1cIjQ3XCIgeT1cIjIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgYmVnaW49XCItMC4zMzMzMzMzMzMzMzMzMzMzc1wiIGR1cj1cIjFzXCIga2V5VGltZXM9XCIwOzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTswXCIgLz5cbiAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjQwIDUwIDUwKVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9XCIjN2E3YTdhXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiB4PVwiNDdcIiB5PVwiMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBiZWdpbj1cIi0wLjI1c1wiIGR1cj1cIjFzXCIga2V5VGltZXM9XCIwOzFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiMTswXCIgLz5cbiAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjcwIDUwIDUwKVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9XCIjN2E3YTdhXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiB4PVwiNDdcIiB5PVwiMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBiZWdpbj1cIi0wLjE2NjY2NjY2NjY2NjY2NjY2c1wiIGR1cj1cIjFzXCIga2V5VGltZXM9XCIwOzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTswXCIgLz5cbiAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzAwIDUwIDUwKVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9XCIjN2E3YTdhXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiB4PVwiNDdcIiB5PVwiMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBiZWdpbj1cIi0wLjA4MzMzMzMzMzMzMzMzMzMzc1wiIGR1cj1cIjFzXCIga2V5VGltZXM9XCIwOzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTswXCIgLz5cbiAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwIDUwIDUwKVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9XCIjN2E3YTdhXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiB4PVwiNDdcIiB5PVwiMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBiZWdpbj1cIjBzXCIgZHVyPVwiMXNcIiBrZXlUaW1lcz1cIjA7MVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCIxOzBcIiAvPlxuICAgICAgICAgICAgICAgIDwvcmVjdD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWxvYWRlckRpc3BsYXkgJiYgIWlzUGxheWluZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwicGxheS10cmFja1wiPlxuICAgICAgICAgICAgPCEtLSBQbGF5IGljb24gKHBsYXlfYXJyb3cpIC0tPlxuICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhbG9hZGVyRGlzcGxheSAmJiBpc1BsYXlpbmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInBhdXNlLXRyYWNrXCI+XG4gICAgICAgICAgICA8IS0tIFBhdXNlIGljb24gKHBhdXNlKSAtLT5cbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIzMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00elwiIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uICpuZ0lmPVwidHJhY2tzLmxlbmd0aCA+IDFcIiAoY2xpY2spPSduZXh0U29uZygpOycgW2Rpc2FibGVkXT1cImxvYWRlckRpc3BsYXlcIiBjbGFzcz1cIm5neC1wLTEgc2tpcC1uZXh0XCJcbiAgICAgICAgbWF0LWJ1dHRvbj5cbiAgICAgICAgPG1hdC1pY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwibmV4dC10cmFja1wiPlxuICAgICAgICAgICAgPCEtLSBTa2lwIG5leHQgaWNvbiAoc2tpcF9uZXh0KSAtLT5cbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIzMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnpcIiAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8ZGl2IGNsYXNzPVwibmd4LWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWQtZmxleCBuZ3gtZmxleC1maWxsIG5neC1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWQtbm9uZSBuZ3gtZC1zbS1ibG9jayBuZ3gtcHktMyBuZ3gtcHgtMVwiIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJkdXJhdGlvbiAhPT0gMC4wMVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2N1cnJlbnRUaW1lIHwgc2Vjb25kc1RvTWludXRlc319XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bWF0LXNsaWRlciBbZGlzYWJsZWRdPVwiZGlzYWJsZVBvc2l0aW9uU2xpZGVyXCIgKGNoYW5nZSk9XCJjdXJyVGltZVBvc0NoYW5nZWQoJGV2ZW50KVwiIFttaW5dPVwic3RhcnRPZmZzZXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmd4LWQtbm9uZSBuZ3gtZC1zbS1ibG9jayBuZ3gtZmxleC1maWxsIG5neC1wLTFcIiBtYXg9XCJ7e2R1cmF0aW9uLWVuZE9mZnNldH19XCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2N1cnJlbnRUaW1lfX1cIj48L21hdC1zbGlkZXI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtcHktMyBuZ3gtcHgtMVwiIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOiByaWdodFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZHVyYXRpb24gIT09IDAuMDFcIj5cbiAgICAgICAgICAgICAgICAgICAgLXt7ZHVyYXRpb24tY3VycmVudFRpbWUgfCBzZWNvbmRzVG9NaW51dGVzIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gKGNsaWNrKT0ndG9nZ2xlUmVwZWF0KCk7JyAqbmdJZj1cImRpc3BsYXlSZXBlYXRDb250cm9sc1wiIGNsYXNzPVwibmd4LXAtMSB2b2x1bWUganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgIG1hdC1idXR0b24+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cInJlcGVhdCA9PT0gJ25vbmUnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2b2x1bWUtbXV0ZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8IS0tIFJlcGVhdCBOb25lIC0tPlxuICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMiAyMlwiPlxuICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMCwwbDI0LDBsMCwyNGwtMjQsMGwwLC0yNHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtOCwyMGwwLDEuOTMyYTAuNSwwLjUgMCAwIDEgLTAuODIsMC4zODVsLTQuMTIsLTMuNDMzYTAuNSwwLjUgMCAwIDEgMC4zMjIsLTAuODg0bDE0LjYxOCwwYTIsMiAwIDAgMCAyLC0ybDAsLThsMiwwbDAsOGE0LDQgMCAwIDEgLTQsNGwtMTAsMHptOCwtMTZsMCwtMS45MzJhMC41LDAuNSAwIDAgMSAwLjgyLC0wLjM4NWw0LjEyLDMuNDMzYTAuNSwwLjUgMCAwIDEgLTAuMzIxLDAuODg0bC0xNC42MTksMGEyLDIgMCAwIDAgLTIsMmwwLDhsLTIsMGwwLC04YTQsNCAwIDAgMSA0LC00bDEwLDB6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDMgMCBMIDIyLjQxNjQgMjIuMjcwNiBMIDIxIDI0IEwgMS41ODM2IDEuODEyOCBMIDMgMFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxsaW5lIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cInN2Z180XCIgeTI9XCIyMi4yNzA1NlwiIHgyPVwiMjIuNDE2MzhcIiB5MT1cIjEuODEyNzZcIiB4MT1cIjEuNTgzNjJcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIi8+IC0tPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJyZXBlYXQgPT09ICdhbGwnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2b2x1bWUtbXV0ZVwiPlxuICAgICAgICAgICAgPCEtLSBSZXBlYXQgQWxsIC0tPlxuICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMiAyMlwiPlxuICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAyMHYxLjkzMmEuNS41IDAgMCAxLS44Mi4zODVsLTQuMTItMy40MzNBLjUuNSAwIDAgMSAzLjM4MiAxOEgxOGEyIDIgMCAwIDAgMi0yVjhoMnY4YTQgNCAwIDAgMS00IDRIOHptOC0xNlYyLjA2OGEuNS41IDAgMCAxIC44Mi0uMzg1bDQuMTIgMy40MzNhLjUuNSAwIDAgMS0uMzIxLjg4NEg2YTIgMiAwIDAgMC0yIDJ2OEgyVjhhNCA0IDAgMCAxIDQtNGgxMHpcIiAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJyZXBlYXQgPT09ICdvbmUnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2b2x1bWUtdXBcIj5cbiAgICAgICAgICAgIDwhLS0gUmVwZWF0IE9ORSAtLT5cbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIj5cbiAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTggMjB2MS45MzJhLjUuNSAwIDAgMS0uODIuMzg1bC00LjEyLTMuNDMzQS41LjUgMCAwIDEgMy4zODIgMThIMThhMiAyIDAgMCAwIDItMlY4aDJ2OGE0IDQgMCAwIDEtNCA0SDh6bTgtMTZWMi4wNjhhLjUuNSAwIDAgMSAuODItLjM4NWw0LjEyIDMuNDMzYS41LjUgMCAwIDEtLjMyMS44ODRINmEyIDIgMCAwIDAtMiAydjhIMlY4YTQgNCAwIDAgMSA0LTRoMTB6bS01IDRoMnY4aC0ydi02SDlWOWwyLTF6XCIgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9J3RvZ2dsZVZvbHVtZSgpOycgKm5nSWY9XCJkaXNwbGF5Vm9sdW1lQ29udHJvbHNcIiBjbGFzcz1cIm5neC1wLTEgdm9sdW1lXCIgbWF0LWJ1dHRvbj5cbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwidm9sdW1lID09PSAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2b2x1bWUtbXV0ZVwiPlxuICAgICAgICAgICAgPCEtLSBWb2x1bWUgbXV0ZSBpY29uICh2b2x1bWVfb2ZmKSAtLT5cbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyOFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE2LjUgMTJjMC0xLjc3LTEuMDItMy4yOS0yLjUtNC4wM3YyLjIxbDIuNDUgMi40NWMuMDMtLjIuMDUtLjQxLjA1LS42M3ptMi41IDBjMCAuOTQtLjIgMS44Mi0uNTQgMi42NGwxLjUxIDEuNTFDMjAuNjMgMTQuOTEgMjEgMTMuNSAyMSAxMmMwLTQuMjgtMi45OS03Ljg2LTctOC43N3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXpNNC4yNyAzTDMgNC4yNyA3LjczIDlIM3Y2aDRsNSA1di02LjczbDQuMjUgNC4yNWMtLjY3LjUyLTEuNDIuOTMtMi4yNSAxLjE4djIuMDZjMS4zOC0uMzEgMi42My0uOTUgMy42OS0xLjgxTDE5LjczIDIxIDIxIDE5LjczbC05LTlMNC4yNyAzek0xMiA0TDkuOTEgNi4wOSAxMiA4LjE4VjR6XCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJ2b2x1bWUgPiAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2b2x1bWUtdXBcIj5cbiAgICAgICAgICAgIDwhLS0gVm9sdW1lIHVwIGljb24gKHZvbHVtZV91cCkgLS0+XG4gICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zIDl2Nmg0bDUgNVY0TDcgOUgzem0xMy41IDNjMC0xLjc3LTEuMDItMy4yOS0yLjUtNC4wM3Y4LjA1YzEuNDgtLjczIDIuNS0yLjI1IDIuNS00LjAyek0xNCAzLjIzdjIuMDZjMi44OS44NiA1IDMuNTQgNSA2Ljcxcy0yLjExIDUuODUtNSA2LjcxdjIuMDZjNC4wMS0uOTEgNy00LjQ5IDctOC43N3MtMi45OS03Ljg2LTctOC43N3pcIiAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgKm5nSWY9XCJkaXNwbGF5VGl0bGVcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejEgbmd4LWF1ZGlvLXBsYXllclwiPlxuICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDFweCAycHg7IHBhZGRpbmc6IDFlbVwiPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNQbGF5aW5nXCI+e3sgdHJhY2tzW2N1cnJlbnRJbmRleF0/LnRpdGxlIH19e3sgZGlzcGxheUFydGlzdCAmJiB0cmFja3NbY3VycmVudEluZGV4XT8uYXJ0aXN0ID9cbiAgICAgICAgICAgICAgICAnIHwgJyArIHRyYWNrc1tjdXJyZW50SW5kZXhdPy5hcnRpc3QgOiAnJ319PC9zcGFuPlxuICAgICAgICAgICAgPG1hcnF1ZWUgKm5nSWY9XCJpc1BsYXlpbmdcIiBiZWhhdmlvcj1cInNjcm9sbFwiIGRpcmVjdGlvbj1cImxlZnRcIj57eyB0cmFja3NbY3VycmVudEluZGV4XT8udGl0bGVcbiAgICAgICAgICAgICAgICB9fXt7IGRpc3BsYXlBcnRpc3QgJiYgdHJhY2tzW2N1cnJlbnRJbmRleF0/LmFydGlzdCA/ICcgfCAnICsgdHJhY2tzW2N1cnJlbnRJbmRleF0/LmFydGlzdCA6ICcnfX1cbiAgICAgICAgICAgIDwvbWFycXVlZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1hY2NvcmRpb24gY2xhc3M9XCJuZ3gtYXVkaW8tcGxheWVyXCIgKm5nSWY9XCJkaXNwbGF5UGxheWxpc3QgJiYgdHJhY2tzLmxlbmd0aCA+IDFcIj5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwiZXhwYW5kZWRcIj5cbiAgICAgICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgICAgICAge3t0YWJsZUhlYWRlcn19XG4gICAgICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICAgIDx0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo2XCIgbWF0LXRhYmxlPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDx0aCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtaGVhZGVyLWNlbGw+e3t0aXRsZUhlYWRlcn19PC90aD5cbiAgICAgICAgICAgICAgICA8dGQgKGNsaWNrKT1cInNlbGVjdFRyYWNrKGVsZW1lbnQuaW5kZXgpXCIgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIG1hdC1jZWxsPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW1lbnQudGl0bGV9fVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYXJ0aXN0XCI+XG4gICAgICAgICAgICAgICAgPHRoICptYXRIZWFkZXJDZWxsRGVmIG1hdC1oZWFkZXItY2VsbD57e2FydGlzdEhlYWRlcn19PC90aD5cbiAgICAgICAgICAgICAgICA8dGQgKGNsaWNrKT1cInNlbGVjdFRyYWNrKGVsZW1lbnQuaW5kZXgpXCIgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIG1hdC1jZWxsPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW1lbnQ/LmFydGlzdCA/IGVsZW1lbnQ/LmFydGlzdCA6ICcnfX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHRoICptYXRIZWFkZXJDZWxsRGVmIG1hdC1oZWFkZXItY2VsbD57e2R1cmF0aW9uSGVhZGVyfX08L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCAoY2xpY2spPVwic2VsZWN0VHJhY2soZWxlbWVudC5pbmRleClcIiAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCIgbWF0LWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbWVudD8uZHVyYXRpb24gPyAoZWxlbWVudD8uZHVyYXRpb24gfCBzZWNvbmRzVG9NaW51dGVzKSA6ICcnfX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgIDx0aCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtaGVhZGVyLWNlbGw+PC90aD5cbiAgICAgICAgICAgICAgICA8dGQgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIG1hdC1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidHJhY2tzW2N1cnJlbnRJbmRleF0/LnRpdGxlID09PSBlbGVtZW50LnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtaWNvbiAqbmdJZj1cImlzUGxheWluZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIi8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaXNQbGF5aW5nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJjdXJyZW50bHktcGxheWluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUGxheSBpY29uIChwbGF5X2Fycm93KSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAzdjkuMjhjLS40Ny0uMTctLjk3LS4yOC0xLjUtLjI4QzguMDEgMTIgNiAxNC4wMSA2IDE2LjVTOC4wMSAyMSAxMC41IDIxYzIuMzEgMCA0LjItMS43NSA0LjQ1LTRIMTVWNmg0VjNoLTd6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDx0ciAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiIG1hdC1oZWFkZXItcm93PjwvdHI+XG4gICAgICAgICAgICA8dHIgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCIgY2xhc3M9XCJtYXQtc2VsZWN0LWNvbnRlbnRcIiBtYXQtcm93PjwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCIgc2hvd0ZpcnN0TGFzdEJ1dHRvbnM+PC9tYXQtcGFnaW5hdG9yPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbjwvbWF0LWFjY29yZGlvbj4iXX0=