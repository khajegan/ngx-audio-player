
A library for loading and playing audio using HTML 5 for Angular 7/8/9/10/11/12/13/14/15.  
(https://github.com/khajegan/ngx-audio-player)


## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Versioning](#versioning)
- [Contributors](#contributors)
- [License](#license)

## Demo

A simple, clean, responsive player for playing multiple audios with playlist support.

![alt tag](https://github.com/vmudigal/ngx-audio-player/blob/master/docs/images/advanced-player.png?raw=true)

[Working Demo](https://vmudigal.github.io/ngx-audio-player/)

## Installation

`ngx-audio-player` is available via [npm](https://www.npmjs.com/package/@khajegan/ngx-audio-player)

Using npm:
```bash
$ npm install @khajegan/ngx-audio-player --save
```

## Getting Started

NgxAudioPlayerModule needs Angular Material.   
Make sure you have installed below dependencies with same or higher version than mentioned.   
   
"@angular/core": "^15.2.10"   
"@angular/common": "^15.2.10"   
"@angular/material": "^14.2.5"   
"rxjs": "^7.5.0"   

   
Import `NgxAudioPlayerModule` in the root module(`AppModule`):   
   
```typescript   
// Import library module
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  imports: [
    // ...
    NgxAudioPlayerModule
  ]
})
export class AppModule { }
```
   
### Usage    
   
##### HTML   

```html
<ngx-audio-player [playlist]="msaapPlaylist" [displayTitle]="msaapDisplayTitle" [autoPlay]="false" 
    muted="muted" [displayPlaylist]="msaapDisplayPlayList" [pageSizeOptions]="pageSizeOptions" (trackEnded)="onEnded($event)"
        [displayVolumeControls]="msaapDisplayVolumeControls" [displayRepeatControls]="msaapDisplayRepeatControls"
        [disablePositionSlider]="msaapDisablePositionSlider" [displayArtist]="msaapDisplayArtist" 
        [displayDuration]="msaapDisplayDuration" [expanded]="true"></ngx-audio-player> 
```
   
##### TS   

```ts
import { Track } from 'ngx-audio-player';   
   
.   
.   

msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;
   
// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Audio One Title',
    link: 'Link to Audio One URL',
    artist: 'Audio One Artist',
    duration: 'Audio One Duration in seconds'
  },
  {
    title: 'Audio Two Title',
    link: 'Link to Audio Two URL',
    artist: 'Audio Two Artist',
    duration: 'Audio Two Duration in seconds'
  },
  {
    title: 'Audio Three Title',
    link: 'Link to Audio Three URL',
    artist: 'Audio Three Artist',
    duration: 'Audio Three Duration in seconds'
  },
];
```   

##### Properties   

| Name                                       | Description                                         | Type      | Default Value |
|--------------------------------------------|-----------------------------------------------------|-----------|---------------|
| @Input() playlist: Track[];                | playlist containing array of title and link         | mandatory | None          |
| @Input() autoPlay: false;                  | true - if the audio needs to be played automaticlly | optional  | false         |
| @Input() displayTitle: true;               | false - if the audio title needs to be hidden       | optional  | true          |
| @Input() displayPlaylist: true;            | false - if the playlist needs to be hidden          | optional  | true          |
| @Input() pageSizeOptions = [10, 20, 30];   | number of items to be displayed in the playlist     | optional  | [10,20,30]    |
| @Input() expanded = true;                  | false - if the playlist needs to be minimized       | optional  | true          |
| @Input() displayVolumeControls = true;     | false - if the volume controls needs to be hidden   | optional  | true          |
| @Input() displayRepeatControls = true;     | false - if the repeat controls needs to be hidden   | optional  | true          |
| @Input() displayArtist = false;            | true - if the artist data is to be shown            | optional  | false         |
| @Input() displayDuration = false;          | true - if the track duration is to be shown         | optional  | false         |
| @Output() trackEnded: Subject<string>      | Callback method that triggers once the track ends   | optional  | - N.A -       |
| @Input() startOffset = 0;                  | offset from start of audio file in seconds          | optional  | 0             |
| @Input() endOffset = 0;                    | offset from end of audio file in seconds            | optional  | 0             |
| @Input() disablePositionSlider = false;    | true - if the position slider needs to be disabled  | optional  | false         |
 

## Versioning

ngx-audio-player will be maintained under the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## License

##### The MIT License (MIT)
