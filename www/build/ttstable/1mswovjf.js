/*! Built with http://stenciljs.com */
ttstable.loadComponents("1mswovjf",function(t,e,n,a,i){function l(t,e){var n=new Date(t).toTimeString().split(":"),a=new Date(e).toTimeString().split(":");return n[0]+":"+n[1]+" - "+a[0]+":"+a[1]}var r=function(){function t(){}return t.prototype.render=function(){for(var t=[],n=0;n<this.rows;n++)t.push(e("div",{c:{"side-item":!0}},n+1));return t},t}(),o=function(){function t(){}return t.prototype.handleItemSelected=function(t){this.tableItemSelected.emit(t.detail)},t.prototype.render=function(){return[e("tts-side-column",{p:{rows:this.tableData[0].length}}),this.tableData.map(function(t){return e("tts-table-column",{p:{tableColumnData:t}},e(0,0))})]},t}(),u=function(){function t(){var t=this;this.getColumnTitle=function(){var e=t.tableColumnData[0];return l(e.startTime,e.endTime)}}return t.prototype.handleItemSelected=function(t){this.columnItemSelected.emit(t.detail)},t.prototype.render=function(){var t=this.getColumnTitle();return e("div",0,e("div",{c:{"table-column-title":!0}},t),this.tableColumnData.map(function(t){return e("tts-table-item",{p:{tableItemData:t}},e(0,0))}))},t}(),c=function(){function t(){var t=this;this.getItemClass=function(){var e=t.tableItemData,n=e.unavailable,a=e.free,i=e.selected,l="table-item";return n?l+=" unavailable":i?l+=" selected":a?l+=" free":l},this.handleClick=function(){var e=t.tableItemData;e.unavailable||t.tableItemSelected.emit(e)}}return t.prototype.render=function(){var t=this;return e("div",{c:this.getItemClass(),o:{click:function(){return t.handleClick()}}},this.tableItemData.title,e(0,0,this.tableItemData.tooltipText))},t}();t["TTS-SIDE-COLUMN"]=r,t["TTS-TABLE"]=o,t["TTS-TABLE-COLUMN"]=u,t["TTS-TABLE-ITEM"]=c},["TTS-SIDE-COLUMN",[["rows",1,2]],{}],["TTS-TABLE",[["tableData",1]],{},[["tableItemSelected"]]],["TTS-TABLE-COLUMN",[["tableColumnData",1]],{},[["columnItemSelected"]]],["TTS-TABLE-ITEM",[["tableItemData",1]],{},[["tableItemSelected"]]]);