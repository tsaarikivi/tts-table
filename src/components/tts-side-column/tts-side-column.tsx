import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tts-side-column',
  styleUrl: 'tts-side-column.scss'
})
export class TtsSideColumn {
  @Prop() rows: number;

  render() {
    const ret = [];

    for (let i = 0; i < this.rows; i++) {
      ret.push(<div class="side-item">{i + 1}</div>);
    }

    return ret;
  }
}
