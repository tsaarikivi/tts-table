import { Component } from '@stencil/core';

@Component({
  tag: 'tts-tooltip',
  styleUrl: 'tts-tooltip.scss'
})
export class TtsTooltip {
  render() {
    return <slot />;
  }
}
