(function(a,b){if(typeof define==="function"&&define.amd){define(["moment","jquery"],function(e,d){return(a.daterangepicker=b(e,d))})}else{if(typeof module==="object"&&module.exports){var c=(typeof window!="undefined")?window.jQuery:undefined;if(!c){c=require("jquery");if(!c.fn){c.fn={}}}module.exports=b(require("moment"),c)}else{a.daterangepicker=b(a.moment,a.jQuery)}}}(this,function(c,b){var a=function(k,p,i){this.parentEl="body";this.element=b(k);this.startDate=c().startOf("day");this.endDate=c().endOf("day");this.minDate=false;this.maxDate=false;this.dateLimit=false;this.autoApply=false;this.singleDatePicker=false;this.showDropdowns=false;this.showWeekNumbers=false;this.showISOWeekNumbers=false;this.showCustomRangeLabel=true;this.timePicker=false;this.timePicker24Hour=false;this.timePickerIncrement=1;this.timePickerSeconds=false;this.linkedCalendars=true;this.autoUpdateInput=true;this.alwaysShowCalendars=false;this.ranges={};this.opens="right";if(this.element.hasClass("pull-right")){this.opens="left"}this.drops="down";if(this.element.hasClass("dropup")){this.drops="up"}this.buttonClasses="btn btn-sm";this.applyClass="btn-success";this.cancelClass="btn-default";this.locale={direction:"ltr",format:"MM/DD/YYYY",separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:c.weekdaysMin(),monthNames:c.monthsShort(),firstDay:c.localeData().firstDayOfWeek()};this.callback=function(){};this.isShowing=false;this.leftCalendar={};this.rightCalendar={};if(typeof p!=="object"||p===null){p={}}p=b.extend(this.element.data(),p);if(typeof p.template!=="string"&&!(p.template instanceof b)){p.template='<div class="daterangepicker dropdown-menu">'+'<div class="calendar left">'+'<div class="daterangepicker_input">'+'<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />'+'<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>'+'<div class="calendar-time">'+"<div></div>"+'<i class="fa fa-clock-o glyphicon glyphicon-time"></i>'+"</div>"+"</div>"+'<div class="calendar-table"></div>'+"</div>"+'<div class="calendar right">'+'<div class="daterangepicker_input">'+'<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />'+'<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>'+'<div class="calendar-time">'+"<div></div>"+'<i class="fa fa-clock-o glyphicon glyphicon-time"></i>'+"</div>"+"</div>"+'<div class="calendar-table"></div>'+"</div>"+'<div class="ranges">'+'<div class="range_inputs">'+'<button class="applyBtn" disabled="disabled" type="button"></button> '+'<button class="cancelBtn" type="button"></button>'+"</div>"+"</div>"+"</div>"}this.parentEl=(p.parentEl&&b(p.parentEl).length)?b(p.parentEl):b(this.parentEl);this.container=b(p.template).appendTo(this.parentEl);if(typeof p.locale==="object"){if(typeof p.locale.direction==="string"){this.locale.direction=p.locale.direction}if(typeof p.locale.format==="string"){this.locale.format=p.locale.format}if(typeof p.locale.separator==="string"){this.locale.separator=p.locale.separator}if(typeof p.locale.daysOfWeek==="object"){this.locale.daysOfWeek=p.locale.daysOfWeek.slice()}if(typeof p.locale.monthNames==="object"){this.locale.monthNames=p.locale.monthNames.slice()}if(typeof p.locale.firstDay==="number"){this.locale.firstDay=p.locale.firstDay}if(typeof p.locale.applyLabel==="string"){this.locale.applyLabel=p.locale.applyLabel}if(typeof p.locale.cancelLabel==="string"){this.locale.cancelLabel=p.locale.cancelLabel}if(typeof p.locale.weekLabel==="string"){this.locale.weekLabel=p.locale.weekLabel}if(typeof p.locale.customRangeLabel==="string"){this.locale.customRangeLabel=p.locale.customRangeLabel}}this.container.addClass(this.locale.direction);if(typeof p.startDate==="string"){this.startDate=c(p.startDate,this.locale.format)}if(typeof p.endDate==="string"){this.endDate=c(p.endDate,this.locale.format)}if(typeof p.minDate==="string"){this.minDate=c(p.minDate,this.locale.format)}if(typeof p.maxDate==="string"){this.maxDate=c(p.maxDate,this.locale.format)}if(typeof p.startDate==="object"){this.startDate=c(p.startDate)}if(typeof p.endDate==="object"){this.endDate=c(p.endDate)}if(typeof p.minDate==="object"){this.minDate=c(p.minDate)}if(typeof p.maxDate==="object"){this.maxDate=c(p.maxDate)}if(this.minDate&&this.startDate.isBefore(this.minDate)){this.startDate=this.minDate.clone()}if(this.maxDate&&this.endDate.isAfter(this.maxDate)){this.endDate=this.maxDate.clone()}if(typeof p.applyClass==="string"){this.applyClass=p.applyClass}if(typeof p.cancelClass==="string"){this.cancelClass=p.cancelClass}if(typeof p.dateLimit==="object"){this.dateLimit=p.dateLimit}if(typeof p.opens==="string"){this.opens=p.opens}if(typeof p.drops==="string"){this.drops=p.drops}if(typeof p.showWeekNumbers==="boolean"){this.showWeekNumbers=p.showWeekNumbers}if(typeof p.showISOWeekNumbers==="boolean"){this.showISOWeekNumbers=p.showISOWeekNumbers}if(typeof p.buttonClasses==="string"){this.buttonClasses=p.buttonClasses
}if(typeof p.buttonClasses==="object"){this.buttonClasses=p.buttonClasses.join(" ")}if(typeof p.showDropdowns==="boolean"){this.showDropdowns=p.showDropdowns}if(typeof p.showCustomRangeLabel==="boolean"){this.showCustomRangeLabel=p.showCustomRangeLabel}if(typeof p.singleDatePicker==="boolean"){this.singleDatePicker=p.singleDatePicker;if(this.singleDatePicker){this.endDate=this.startDate.clone()}}if(typeof p.timePicker==="boolean"){this.timePicker=p.timePicker}if(typeof p.timePickerSeconds==="boolean"){this.timePickerSeconds=p.timePickerSeconds}if(typeof p.timePickerIncrement==="number"){this.timePickerIncrement=p.timePickerIncrement}if(typeof p.timePicker24Hour==="boolean"){this.timePicker24Hour=p.timePicker24Hour}if(typeof p.autoApply==="boolean"){this.autoApply=p.autoApply}if(typeof p.autoUpdateInput==="boolean"){this.autoUpdateInput=p.autoUpdateInput}if(typeof p.linkedCalendars==="boolean"){this.linkedCalendars=p.linkedCalendars}if(typeof p.isInvalidDate==="function"){this.isInvalidDate=p.isInvalidDate}if(typeof p.isCustomDate==="function"){this.isCustomDate=p.isCustomDate}if(typeof p.alwaysShowCalendars==="boolean"){this.alwaysShowCalendars=p.alwaysShowCalendars}if(this.locale.firstDay!=0){var l=this.locale.firstDay;while(l>0){this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());l--}}var e,j,m;if(typeof p.startDate==="undefined"&&typeof p.endDate==="undefined"){if(b(this.element).is("input[type=text]")){var g=b(this.element).val(),o=g.split(this.locale.separator);e=j=null;if(o.length==2){e=c(o[0],this.locale.format);j=c(o[1],this.locale.format)}else{if(this.singleDatePicker&&g!==""){e=c(g,this.locale.format);j=c(g,this.locale.format)}}if(e!==null&&j!==null){this.setStartDate(e);this.setEndDate(j)}}}if(typeof p.ranges==="object"){for(m in p.ranges){if(typeof p.ranges[m][0]==="string"){e=c(p.ranges[m][0],this.locale.format)}else{e=c(p.ranges[m][0])}if(typeof p.ranges[m][1]==="string"){j=c(p.ranges[m][1],this.locale.format)}else{j=c(p.ranges[m][1])}if(this.minDate&&e.isBefore(this.minDate)){e=this.minDate.clone()}var d=this.maxDate;if(this.dateLimit&&d&&e.clone().add(this.dateLimit).isAfter(d)){d=e.clone().add(this.dateLimit)}if(d&&j.isAfter(d)){j=d.clone()}if((this.minDate&&j.isBefore(this.minDate,this.timepicker?"minute":"day"))||(d&&e.isAfter(d,this.timepicker?"minute":"day"))){continue}var h=document.createElement("textarea");h.innerHTML=m;var f=h.value;this.ranges[f]=[e,j]}var n="<ul>";for(m in this.ranges){n+='<li data-range-key="'+m+'">'+m+"</li>"}if(this.showCustomRangeLabel){n+='<li data-range-key="'+this.locale.customRangeLabel+'">'+this.locale.customRangeLabel+"</li>"}n+="</ul>";this.container.find(".ranges").prepend(n)}if(typeof i==="function"){this.callback=i}if(!this.timePicker){this.startDate=this.startDate.startOf("day");this.endDate=this.endDate.endOf("day");this.container.find(".calendar-time").hide()}if(this.timePicker&&this.autoApply){this.autoApply=false}if(this.autoApply&&typeof p.ranges!=="object"){this.container.find(".ranges").hide()}else{if(this.autoApply){this.container.find(".applyBtn, .cancelBtn").addClass("hide")}}if(this.singleDatePicker){this.container.addClass("single");this.container.find(".calendar.left").addClass("single");this.container.find(".calendar.left").show();this.container.find(".calendar.right").hide();this.container.find(".daterangepicker_input input, .daterangepicker_input > i").hide();if(this.timePicker){this.container.find(".ranges ul").hide()}else{this.container.find(".ranges").hide()}}if((typeof p.ranges==="undefined"&&!this.singleDatePicker)||this.alwaysShowCalendars){this.container.addClass("show-calendar")}this.container.addClass("opens"+this.opens);if(typeof p.ranges!=="undefined"&&this.opens=="right"){this.container.find(".ranges").prependTo(this.container.find(".calendar.left").parent())}this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses);if(this.applyClass.length){this.container.find(".applyBtn").addClass(this.applyClass)}if(this.cancelClass.length){this.container.find(".cancelBtn").addClass(this.cancelClass)}this.container.find(".applyBtn").html(this.locale.applyLabel);this.container.find(".cancelBtn").html(this.locale.cancelLabel);this.container.find(".calendar").on("click.daterangepicker",".prev",b.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",b.proxy(this.clickNext,this)).on("mousedown.daterangepicker","td.available",b.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",b.proxy(this.hoverDate,this)).on("mouseleave.daterangepicker","td.available",b.proxy(this.updateFormInputs,this)).on("change.daterangepicker","select.yearselect",b.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.monthselect",b.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",b.proxy(this.timeChanged,this)).on("click.daterangepicker",".daterangepicker_input input",b.proxy(this.showCalendars,this)).on("focus.daterangepicker",".daterangepicker_input input",b.proxy(this.formInputsFocused,this)).on("blur.daterangepicker",".daterangepicker_input input",b.proxy(this.formInputsBlurred,this)).on("change.daterangepicker",".daterangepicker_input input",b.proxy(this.formInputsChanged,this));
this.container.find(".ranges").on("click.daterangepicker","button.applyBtn",b.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",b.proxy(this.clickCancel,this)).on("click.daterangepicker","li",b.proxy(this.clickRange,this)).on("mouseenter.daterangepicker","li",b.proxy(this.hoverRange,this)).on("mouseleave.daterangepicker","li",b.proxy(this.updateFormInputs,this));if(this.element.is("input")||this.element.is("button")){this.element.on({"click.daterangepicker":b.proxy(this.show,this),"focus.daterangepicker":b.proxy(this.show,this),"keyup.daterangepicker":b.proxy(this.elementChanged,this),"keydown.daterangepicker":b.proxy(this.keydown,this)})}else{this.element.on("click.daterangepicker",b.proxy(this.toggle,this))}if(this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput){this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format));this.element.trigger("change")}else{if(this.element.is("input")&&this.autoUpdateInput){this.element.val(this.startDate.format(this.locale.format));this.element.trigger("change")}}};a.prototype={constructor:a,setStartDate:function(d){if(typeof d==="string"){this.startDate=c(d,this.locale.format)}if(typeof d==="object"){this.startDate=c(d)}if(!this.timePicker){this.startDate=this.startDate.startOf("day")}if(this.timePicker&&this.timePickerIncrement){this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)}if(this.minDate&&this.startDate.isBefore(this.minDate)){this.startDate=this.minDate;if(this.timePicker&&this.timePickerIncrement){this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)}}if(this.maxDate&&this.startDate.isAfter(this.maxDate)){this.startDate=this.maxDate;if(this.timePicker&&this.timePickerIncrement){this.startDate.minute(Math.floor(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)}}if(!this.isShowing){this.updateElement()}this.updateMonthsInView()},setEndDate:function(d){if(typeof d==="string"){this.endDate=c(d,this.locale.format)}if(typeof d==="object"){this.endDate=c(d)}if(!this.timePicker){this.endDate=this.endDate.endOf("day")}if(this.timePicker&&this.timePickerIncrement){this.endDate.minute(Math.round(this.endDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)}if(this.endDate.isBefore(this.startDate)){this.endDate=this.startDate.clone()}if(this.maxDate&&this.endDate.isAfter(this.maxDate)){this.endDate=this.maxDate}if(this.dateLimit&&this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)){this.endDate=this.startDate.clone().add(this.dateLimit)}this.previousRightTime=this.endDate.clone();if(!this.isShowing){this.updateElement()}this.updateMonthsInView()},isInvalidDate:function(){return false},isCustomDate:function(){return false},updateView:function(){if(this.timePicker){this.renderTimePicker("left");this.renderTimePicker("right");if(!this.endDate){this.container.find(".right .calendar-time select").attr("disabled","disabled").addClass("disabled")}else{this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled")}}if(this.endDate){this.container.find('input[name="daterangepicker_end"]').removeClass("active");this.container.find('input[name="daterangepicker_start"]').addClass("active")}else{this.container.find('input[name="daterangepicker_end"]').addClass("active");this.container.find('input[name="daterangepicker_start"]').removeClass("active")}this.updateMonthsInView();this.updateCalendars();this.updateFormInputs()},updateMonthsInView:function(){if(this.endDate){if(!this.singleDatePicker&&this.leftCalendar.month&&this.rightCalendar.month&&(this.startDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.startDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))&&(this.endDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.endDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))){return}this.leftCalendar.month=this.startDate.clone().date(2);if(!this.linkedCalendars&&(this.endDate.month()!=this.startDate.month()||this.endDate.year()!=this.startDate.year())){this.rightCalendar.month=this.endDate.clone().date(2)}else{this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month")}}else{if(this.leftCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&this.rightCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")){this.leftCalendar.month=this.startDate.clone().date(2);this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month")}}if(this.maxDate&&this.linkedCalendars&&!this.singleDatePicker&&this.rightCalendar.month>this.maxDate){this.rightCalendar.month=this.maxDate.clone().date(2);this.leftCalendar.month=this.maxDate.clone().date(2).subtract(1,"month")}},updateCalendars:function(){if(this.timePicker){var d,g,f;if(this.endDate){d=parseInt(this.container.find(".left .hourselect").val(),10);
g=parseInt(this.container.find(".left .minuteselect").val(),10);f=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;if(!this.timePicker24Hour){var e=this.container.find(".left .ampmselect").val();if(e==="PM"&&d<12){d+=12}if(e==="AM"&&d===12){d=0}}}else{d=parseInt(this.container.find(".right .hourselect").val(),10);g=parseInt(this.container.find(".right .minuteselect").val(),10);f=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;if(!this.timePicker24Hour){var e=this.container.find(".right .ampmselect").val();if(e==="PM"&&d<12){d+=12}if(e==="AM"&&d===12){d=0}}}this.leftCalendar.month.hour(d).minute(g).second(f);this.rightCalendar.month.hour(d).minute(g).second(f)}this.renderCalendar("left");this.renderCalendar("right");this.container.find(".ranges li").removeClass("active");if(this.endDate==null){return}this.calculateChosenLabel()},renderCalendar:function(x){var P=x=="left"?this.leftCalendar:this.rightCalendar;var e=P.month.month();var f=P.month.year();var B=P.month.hour();var o=P.month.minute();var E=P.month.second();var h=c([f,e]).daysInMonth();var z=c([f,e,1]);var L=c([f,e,h]);var H=c(z).subtract(1,"month").month();var t=c(z).subtract(1,"month").year();var w=c([t,H]).daysInMonth();var r=z.day();var P=[];P.firstDay=z;P.lastDay=L;for(var R=0;R<6;R++){P[R]=[]}var T=w-r+this.locale.firstDay+1;if(T>w){T-=7}if(r==this.locale.firstDay){T=w-6}var n=c([t,H,T,12,o,E]);var k,u;for(var R=0,k=0,u=0;R<42;R++,k++,n=c(n).add(24,"hour")){if(R>0&&k%7===0){k=0;u++}P[u][k]=n.clone().hour(B).minute(o).second(E);n.hour(12);if(this.minDate&&P[u][k].format("YYYY-MM-DD")==this.minDate.format("YYYY-MM-DD")&&P[u][k].isBefore(this.minDate)&&x=="left"){P[u][k]=this.minDate.clone()}if(this.maxDate&&P[u][k].format("YYYY-MM-DD")==this.maxDate.format("YYYY-MM-DD")&&P[u][k].isAfter(this.maxDate)&&x=="right"){P[u][k]=this.maxDate.clone()}}if(x=="left"){this.leftCalendar.calendar=P}else{this.rightCalendar.calendar=P}var g=x=="left"?this.minDate:this.startDate;var q=this.maxDate;var F=x=="left"?this.startDate:this.endDate;var I=this.locale.direction=="ltr"?{left:"chevron-left",right:"chevron-right"}:{left:"chevron-right",right:"chevron-left"};var G='<table class="table-condensed">';G+="<thead>";G+="<tr>";if(this.showWeekNumbers||this.showISOWeekNumbers){G+="<th></th>"}if((!g||g.isBefore(P.firstDay))&&(!this.linkedCalendars||x=="left")){G+='<th class="prev available"><i class="fa fa-'+I.left+" glyphicon glyphicon-"+I.left+'"></i></th>'}else{G+="<th></th>"}var M=this.locale.monthNames[P[1][1].month()]+P[1][1].format(" YYYY");if(this.showDropdowns){var D=P[1][1].month();var s=P[1][1].year();var C=(q&&q.year())||(s+5);var v=(g&&g.year())||(s-50);var K=s==v;var O=s==C;var p='<select class="monthselect">';for(var Q=0;Q<12;Q++){if((!K||Q>=g.month())&&(!O||Q<=q.month())){p+="<option value='"+Q+"'"+(Q===D?" selected='selected'":"")+">"+this.locale.monthNames[Q]+"</option>"}else{p+="<option value='"+Q+"'"+(Q===D?" selected='selected'":"")+" disabled='disabled'>"+this.locale.monthNames[Q]+"</option>"}}p+="</select>";var d='<select class="yearselect">';for(var N=v;N<=C;N++){d+='<option value="'+N+'"'+(N===s?' selected="selected"':"")+">"+N+"</option>"}d+="</select>";M=p+d}G+='<th colspan="5" class="month">'+M+"</th>";if((!q||q.isAfter(P.lastDay))&&(!this.linkedCalendars||x=="right"||this.singleDatePicker)){G+='<th class="next available"><i class="fa fa-'+I.right+" glyphicon glyphicon-"+I.right+'"></i></th>'}else{G+="<th></th>"}G+="</tr>";G+="<tr>";if(this.showWeekNumbers||this.showISOWeekNumbers){G+='<th class="week">'+this.locale.weekLabel+"</th>"}b.each(this.locale.daysOfWeek,function(m,i){G+="<th>"+i+"</th>"});G+="</tr>";G+="</thead>";G+="<tbody>";if(this.endDate==null&&this.dateLimit){var S=this.startDate.clone().add(this.dateLimit).endOf("day");if(!q||S.isBefore(q)){q=S}}for(var u=0;u<6;u++){G+="<tr>";if(this.showWeekNumbers){G+='<td class="week">'+P[u][0].week()+"</td>"}else{if(this.showISOWeekNumbers){G+='<td class="week">'+P[u][0].isoWeek()+"</td>"}}for(var k=0;k<7;k++){var j=[];if(P[u][k].isSame(new Date(),"day")){j.push("today")}if(P[u][k].isoWeekday()>5){j.push("weekend")}if(P[u][k].month()!=P[1][1].month()){j.push("off")}if(this.minDate&&P[u][k].isBefore(this.minDate,"day")){j.push("off","disabled")}if(q&&P[u][k].isAfter(q,"day")){j.push("off","disabled")}if(this.isInvalidDate(P[u][k])){j.push("off","disabled")}if(P[u][k].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")){j.push("active","start-date")}if(this.endDate!=null&&P[u][k].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")){j.push("active","end-date")}if(this.endDate!=null&&P[u][k]>this.startDate&&P[u][k]<this.endDate){j.push("in-range")}var A=this.isCustomDate(P[u][k]);if(A!==false){if(typeof A==="string"){j.push(A)}else{Array.prototype.push.apply(j,A)}}var l="",J=false;for(var R=0;R<j.length;R++){l+=j[R]+" ";if(j[R]=="disabled"){J=true}}if(!J){l+="available"}G+='<td class="'+l.replace(/^\s+|\s+$/g,"")+'" data-title="'+"r"+u+"c"+k+'">'+P[u][k].date()+"</td>"
}G+="</tr>"}G+="</tbody>";G+="</table>";this.container.find(".calendar."+x+" .calendar-table").html(G)},renderTimePicker:function(r){if(r=="right"&&!this.endDate){return}var q,o,n,e=this.maxDate;if(this.dateLimit&&(!this.maxDate||this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate))){e=this.startDate.clone().add(this.dateLimit)}if(r=="left"){o=this.startDate.clone();n=this.minDate}else{if(r=="right"){o=this.endDate.clone();n=this.startDate;var t=this.container.find(".calendar.right .calendar-time div");if(!this.endDate&&t.html()!=""){o.hour(t.find(".hourselect option:selected").val()||o.hour());o.minute(t.find(".minuteselect option:selected").val()||o.minute());o.second(t.find(".secondselect option:selected").val()||o.second());if(!this.timePicker24Hour){var s=t.find(".ampmselect option:selected").val();if(s==="PM"&&o.hour()<12){o.hour(o.hour()+12)}if(s==="AM"&&o.hour()===12){o.hour(0)}}}if(o.isBefore(this.startDate)){o=this.startDate.clone()}if(e&&o.isAfter(e)){o=e.clone()}}}q='<select class="hourselect">';var f=this.timePicker24Hour?0:1;var l=this.timePicker24Hour?23:12;for(var p=f;p<=l;p++){var g=p;if(!this.timePicker24Hour){g=o.hour()>=12?(p==12?12:p+12):(p==12?0:p)}var j=o.clone().hour(g);var m=false;if(n&&j.minute(59).isBefore(n)){m=true}if(e&&j.minute(0).isAfter(e)){m=true}if(g==o.hour()&&!m){q+='<option value="'+p+'" selected="selected">'+p+"</option>"}else{if(m){q+='<option value="'+p+'" disabled="disabled" class="disabled">'+p+"</option>"}else{q+='<option value="'+p+'">'+p+"</option>"}}}q+="</select> ";q+=': <select class="minuteselect">';for(var p=0;p<60;p+=this.timePickerIncrement){var d=p<10?"0"+p:p;var j=o.clone().minute(p);var m=false;if(n&&j.second(59).isBefore(n)){m=true}if(e&&j.second(0).isAfter(e)){m=true}if(o.minute()==p&&!m){q+='<option value="'+p+'" selected="selected">'+d+"</option>"}else{if(m){q+='<option value="'+p+'" disabled="disabled" class="disabled">'+d+"</option>"}else{q+='<option value="'+p+'">'+d+"</option>"}}}q+="</select> ";if(this.timePickerSeconds){q+=': <select class="secondselect">';for(var p=0;p<60;p++){var d=p<10?"0"+p:p;var j=o.clone().second(p);var m=false;if(n&&j.isBefore(n)){m=true}if(e&&j.isAfter(e)){m=true}if(o.second()==p&&!m){q+='<option value="'+p+'" selected="selected">'+d+"</option>"}else{if(m){q+='<option value="'+p+'" disabled="disabled" class="disabled">'+d+"</option>"}else{q+='<option value="'+p+'">'+d+"</option>"}}}q+="</select> "}if(!this.timePicker24Hour){q+='<select class="ampmselect">';var h="";var k="";if(n&&o.clone().hour(12).minute(0).second(0).isBefore(n)){h=' disabled="disabled" class="disabled"'}if(e&&o.clone().hour(0).minute(0).second(0).isAfter(e)){k=' disabled="disabled" class="disabled"'}if(o.hour()>=12){q+='<option value="AM"'+h+'>AM</option><option value="PM" selected="selected"'+k+">PM</option>"}else{q+='<option value="AM" selected="selected"'+h+'>AM</option><option value="PM"'+k+">PM</option>"}q+="</select>"}this.container.find(".calendar."+r+" .calendar-time div").html(q)},updateFormInputs:function(){if(this.container.find("input[name=daterangepicker_start]").is(":focus")||this.container.find("input[name=daterangepicker_end]").is(":focus")){return}this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format));if(this.endDate){this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format))}if(this.singleDatePicker||(this.endDate&&(this.startDate.isBefore(this.endDate)||this.startDate.isSame(this.endDate)))){this.container.find("button.applyBtn").removeAttr("disabled")}else{this.container.find("button.applyBtn").attr("disabled","disabled")}},move:function(){var d={top:0,left:0},f;var e=b(window).width();if(!this.parentEl.is("body")){d={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()};e=this.parentEl[0].clientWidth+this.parentEl.offset().left}if(this.drops=="up"){f=this.element.offset().top-this.container.outerHeight()-d.top}else{f=this.element.offset().top+this.element.outerHeight()-d.top}this.container[this.drops=="up"?"addClass":"removeClass"]("dropup");if(this.opens=="left"){this.container.css({top:f,right:e-this.element.offset().left-this.element.outerWidth(),left:"auto"});if(this.container.offset().left<0){this.container.css({right:"auto",left:9})}}else{if(this.opens=="center"){this.container.css({top:f,left:this.element.offset().left-d.left+this.element.outerWidth()/2-this.container.outerWidth()/2,right:"auto"});if(this.container.offset().left<0){this.container.css({right:"auto",left:9})}}else{this.container.css({top:f,left:this.element.offset().left-d.left,right:"auto"});if(this.container.offset().left+this.container.outerWidth()>b(window).width()){this.container.css({left:"auto",right:0})}}}},show:function(d){if(this.isShowing){return}this._outsideClickProxy=b.proxy(function(f){this.outsideClick(f)},this);b(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("touchend.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy);
b(window).on("resize.daterangepicker",b.proxy(function(f){this.move(f)},this));this.oldStartDate=this.startDate.clone();this.oldEndDate=this.endDate.clone();this.previousRightTime=this.endDate.clone();this.updateView();this.container.show();this.move();this.element.trigger("show.daterangepicker",this);this.isShowing=true},hide:function(d){if(!this.isShowing){return}if(!this.endDate){this.startDate=this.oldStartDate.clone();this.endDate=this.oldEndDate.clone()}if(!this.startDate.isSame(this.oldStartDate)||!this.endDate.isSame(this.oldEndDate)){this.callback(this.startDate,this.endDate,this.chosenLabel)}this.updateElement();b(document).off(".daterangepicker");b(window).off(".daterangepicker");this.container.hide();this.element.trigger("hide.daterangepicker",this);this.isShowing=false},toggle:function(d){if(this.isShowing){this.hide()}else{this.show()}},outsideClick:function(f){var d=b(f.target);if(f.type=="focusin"||d.closest(this.element).length||d.closest(this.container).length||d.closest(".calendar-table").length){return}this.hide();this.element.trigger("outsideClick.daterangepicker",this)},showCalendars:function(){this.container.addClass("show-calendar");this.move();this.element.trigger("showCalendar.daterangepicker",this)},hideCalendars:function(){this.container.removeClass("show-calendar");this.element.trigger("hideCalendar.daterangepicker",this)},hoverRange:function(g){if(this.container.find("input[name=daterangepicker_start]").is(":focus")||this.container.find("input[name=daterangepicker_end]").is(":focus")){return}var d=g.target.getAttribute("data-range-key");if(d==this.locale.customRangeLabel){this.updateView()}else{var f=this.ranges[d];this.container.find("input[name=daterangepicker_start]").val(f[0].format(this.locale.format));this.container.find("input[name=daterangepicker_end]").val(f[1].format(this.locale.format))}},clickRange:function(g){var d=g.target.getAttribute("data-range-key");this.chosenLabel=d;if(d==this.locale.customRangeLabel){this.showCalendars()}else{var f=this.ranges[d];this.startDate=f[0];this.endDate=f[1];if(!this.timePicker){this.startDate.startOf("day");this.endDate.endOf("day")}if(!this.alwaysShowCalendars){this.hideCalendars()}this.clickApply()}},clickPrev:function(f){var d=b(f.target).parents(".calendar");if(d.hasClass("left")){this.leftCalendar.month.subtract(1,"month");if(this.linkedCalendars){this.rightCalendar.month.subtract(1,"month")}}else{this.rightCalendar.month.subtract(1,"month")}this.updateCalendars()},clickNext:function(f){var d=b(f.target).parents(".calendar");if(d.hasClass("left")){this.leftCalendar.month.add(1,"month")}else{this.rightCalendar.month.add(1,"month");if(this.linkedCalendars){this.leftCalendar.month.add(1,"month")}}this.updateCalendars()},hoverDate:function(j){if(!b(j.target).hasClass("available")){return}var l=b(j.target).attr("data-title");var m=l.substr(1,1);var g=l.substr(3,1);var d=b(j.target).parents(".calendar");var h=d.hasClass("left")?this.leftCalendar.calendar[m][g]:this.rightCalendar.calendar[m][g];if(this.endDate&&!this.container.find("input[name=daterangepicker_start]").is(":focus")){this.container.find("input[name=daterangepicker_start]").val(h.format(this.locale.format))}else{if(!this.endDate&&!this.container.find("input[name=daterangepicker_end]").is(":focus")){this.container.find("input[name=daterangepicker_end]").val(h.format(this.locale.format))}}var i=this.leftCalendar;var k=this.rightCalendar;var f=this.startDate;if(!this.endDate){this.container.find(".calendar td").each(function(n,o){if(b(o).hasClass("week")){return}var s=b(o).attr("data-title");var r=s.substr(1,1);var e=s.substr(3,1);var q=b(o).parents(".calendar");var p=q.hasClass("left")?i.calendar[r][e]:k.calendar[r][e];if((p.isAfter(f)&&p.isBefore(h))||p.isSame(h,"day")){b(o).addClass("in-range")}else{b(o).removeClass("in-range")}})}},clickDate:function(k){if(!b(k.target).hasClass("available")){return}var m=b(k.target).attr("data-title");var n=m.substr(1,1);var g=m.substr(3,1);var d=b(k.target).parents(".calendar");var h=d.hasClass("left")?this.leftCalendar.calendar[n][g]:this.rightCalendar.calendar[n][g];if(this.endDate||h.isBefore(this.startDate,"day")){if(this.timePicker){var j=parseInt(this.container.find(".left .hourselect").val(),10);if(!this.timePicker24Hour){var l=this.container.find(".left .ampmselect").val();if(l==="PM"&&j<12){j+=12}if(l==="AM"&&j===12){j=0}}var i=parseInt(this.container.find(".left .minuteselect").val(),10);var f=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;h=h.clone().hour(j).minute(i).second(f)}this.endDate=null;this.setStartDate(h.clone())}else{if(!this.endDate&&h.isBefore(this.startDate)){this.setEndDate(this.startDate.clone())}else{if(this.timePicker){var j=parseInt(this.container.find(".right .hourselect").val(),10);if(!this.timePicker24Hour){var l=this.container.find(".right .ampmselect").val();if(l==="PM"&&j<12){j+=12}if(l==="AM"&&j===12){j=0}}var i=parseInt(this.container.find(".right .minuteselect").val(),10);
var f=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;h=h.clone().hour(j).minute(i).second(f)}this.setEndDate(h.clone());if(this.autoApply){this.calculateChosenLabel();this.clickApply()}}}if(this.singleDatePicker){this.setEndDate(this.startDate);if(!this.timePicker){this.clickApply()}}this.updateView();k.stopPropagation()},calculateChosenLabel:function(){var d=true;var f=0;for(var e in this.ranges){if(this.timePicker){if(this.startDate.isSame(this.ranges[e][0])&&this.endDate.isSame(this.ranges[e][1])){d=false;this.chosenLabel=this.container.find(".ranges li:eq("+f+")").addClass("active").html();break}}else{if(this.startDate.format("YYYY-MM-DD")==this.ranges[e][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[e][1].format("YYYY-MM-DD")){d=false;this.chosenLabel=this.container.find(".ranges li:eq("+f+")").addClass("active").html();break}}f++}if(d&&this.showCustomRangeLabel){this.chosenLabel=this.container.find(".ranges li:last").addClass("active").html();this.showCalendars()}},clickApply:function(d){this.hide();this.element.trigger("apply.daterangepicker",this)},clickCancel:function(d){this.startDate=this.oldStartDate;this.endDate=this.oldEndDate;this.hide();this.element.trigger("cancel.daterangepicker",this)},monthOrYearChanged:function(h){var j=b(h.target).closest(".calendar").hasClass("left"),i=j?"left":"right",g=this.container.find(".calendar."+i);var f=parseInt(g.find(".monthselect").val(),10);var d=g.find(".yearselect").val();if(!j){if(d<this.startDate.year()||(d==this.startDate.year()&&f<this.startDate.month())){f=this.startDate.month();d=this.startDate.year()}}if(this.minDate){if(d<this.minDate.year()||(d==this.minDate.year()&&f<this.minDate.month())){f=this.minDate.month();d=this.minDate.year()}}if(this.maxDate){if(d>this.maxDate.year()||(d==this.maxDate.year()&&f>this.maxDate.month())){f=this.maxDate.month();d=this.maxDate.year()}}if(j){this.leftCalendar.month.month(f).year(d);if(this.linkedCalendars){this.rightCalendar.month=this.leftCalendar.month.clone().add(1,"month")}}else{this.rightCalendar.month.month(f).year(d);if(this.linkedCalendars){this.leftCalendar.month=this.rightCalendar.month.clone().subtract(1,"month")}}this.updateCalendars()},timeChanged:function(k){var d=b(k.target).closest(".calendar"),m=d.hasClass("left");var j=parseInt(d.find(".hourselect").val(),10);var h=parseInt(d.find(".minuteselect").val(),10);var g=this.timePickerSeconds?parseInt(d.find(".secondselect").val(),10):0;if(!this.timePicker24Hour){var l=d.find(".ampmselect").val();if(l==="PM"&&j<12){j+=12}if(l==="AM"&&j===12){j=0}}if(m){var f=this.startDate.clone();f.hour(j);f.minute(h);f.second(g);this.setStartDate(f);if(this.singleDatePicker){this.endDate=this.startDate.clone()}else{if(this.endDate&&this.endDate.format("YYYY-MM-DD")==f.format("YYYY-MM-DD")&&this.endDate.isBefore(f)){this.setEndDate(f.clone())}}}else{if(this.endDate){var i=this.endDate.clone();i.hour(j);i.minute(h);i.second(g);this.setEndDate(i)}}this.updateCalendars();this.updateFormInputs();this.renderTimePicker("left");this.renderTimePicker("right")},formInputsChanged:function(g){var f=b(g.target).closest(".calendar").hasClass("right");var h=c(this.container.find('input[name="daterangepicker_start"]').val(),this.locale.format);var d=c(this.container.find('input[name="daterangepicker_end"]').val(),this.locale.format);if(h.isValid()&&d.isValid()){if(f&&d.isBefore(h)){h=d.clone()}this.setStartDate(h);this.setEndDate(d);if(f){this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format))}else{this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))}}this.updateView()},formInputsFocused:function(f){this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass("active");b(f.target).addClass("active");var d=b(f.target).closest(".calendar").hasClass("right");if(d){this.endDate=null;this.setStartDate(this.startDate.clone());this.updateView()}},formInputsBlurred:function(f){if(!this.endDate){var g=this.container.find('input[name="daterangepicker_end"]').val();var d=c(g,this.locale.format);if(d.isValid()){this.setEndDate(d);this.updateView()}}},elementChanged:function(){if(!this.element.is("input")){return}if(!this.element.val().length){return}if(this.element.val().length<this.locale.format.length){return}var e=this.element.val().split(this.locale.separator),f=null,d=null;if(e.length===2){f=c(e[0],this.locale.format);d=c(e[1],this.locale.format)}if(this.singleDatePicker||f===null||d===null){f=c(this.element.val(),this.locale.format);d=f}if(!f.isValid()||!d.isValid()){return}this.setStartDate(f);this.setEndDate(d);this.updateView()},keydown:function(d){if((d.keyCode===9)||(d.keyCode===13)){this.hide()}},updateElement:function(){if(this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput){this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format));
this.element.trigger("change")}else{if(this.element.is("input")&&this.autoUpdateInput){this.element.val(this.startDate.format(this.locale.format));this.element.trigger("change")}}},remove:function(){this.container.remove();this.element.off(".daterangepicker");this.element.removeData()}};b.fn.daterangepicker=function(d,e){this.each(function(){var f=b(this);if(f.data("daterangepicker")){f.data("daterangepicker").remove()}f.data("daterangepicker",new a(f,d,e))});return this};return a}));