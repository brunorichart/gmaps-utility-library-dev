function LabeledMarker(latlng,opt_opts){this.latlng_=latlng;this.opts_=opt_opts;this.labelText_=opt_opts.labelText||"";this.labelClass_=opt_opts.labelClass||"LabeledMarker_markerLabel";this.labelOffset_=opt_opts.labelOffset||new GSize(0,0);this.clickable_=opt_opts.clickable||true;if(opt_opts.draggable){opt_opts.draggable=false}GMarker.apply(this,arguments)}LabeledMarker.prototype=new GMarker(new GLatLng(0,0));LabeledMarker.prototype.initialize=function(map){GMarker.prototype.initialize.apply(this,arguments);this.map_=map;this.div_=document.createElement("div");this.div_.className=this.labelClass_;this.div_.innerHTML=this.labelText_;this.div_.style.position="absolute";this.div_.style.cursor="pointer";map.getPane(G_MAP_MARKER_PANE).appendChild(this.div_);if(this.clickable_){function newEventPassthru(obj,event){return function(){GEvent.trigger(obj,event)}}var eventPassthrus=['click','dblclick','mousedown','mouseup','mouseover','mouseout'];for(var i=0;i<eventPassthrus.length;i++){var name=eventPassthrus[i];GEvent.addDomListener(this.div_,name,newEventPassthru(this,name))}}}LabeledMarker.prototype.redraw=function(force){GMarker.prototype.redraw.apply(this,arguments);var p=this.map_.fromLatLngToDivPixel(this.latlng_);var z=GOverlay.getZIndex(this.latlng_.lat());this.div_.style.left=(p.x+this.labelOffset_.width)+"px";this.div_.style.top=(p.y+this.labelOffset_.height)+"px";this.div_.style.zIndex=z}LabeledMarker.prototype.remove=function(){GEvent.clearInstanceListeners(this.div_);this.div_.parentNode.removeChild(this.div_);this.div_=null;GMarker.prototype.remove.apply(this,arguments)}LabeledMarker.prototype.copy=function(){return new LabeledMarker(this.latlng_,this.opt_opts_)}

