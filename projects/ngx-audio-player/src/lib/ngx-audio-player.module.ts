import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/legacy-slider';
import { MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatTableModule } from '@angular/material/legacy-table';
import { MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/legacy-card';
import { MatButtonModule } from '@angular/material/legacy-button';

import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AudioPlayerComponent } from './component/ngx-audio-player/ngx-audio-player.component';

@NgModule({
  declarations: [SecondsToMinutesPipe, AudioPlayerComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
    MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule],
  exports: [AudioPlayerComponent]
})
export class NgxAudioPlayerModule {
}
