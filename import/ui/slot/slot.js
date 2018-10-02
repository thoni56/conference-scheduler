import { Template } from 'meteor/templating';

import './slot.html';
import './insertSlotForm.html';


export const startTime = "08:30";

const slotSize = 50;    // px
const eventUnit = 30;   // minutes
const timeLineStart = getScheduleTimestamp(startTime);

Template.slot.helpers({
    top() {
        return (getScheduleTimestamp(this.start)-timeLineStart)/eventUnit*slotSize;
    },
    height() {
        return (getScheduleTimestamp(this.end)-getScheduleTimestamp(this.start))/eventUnit*slotSize;
    }
});

function getScheduleTimestamp(time) {
    //accepts hh:mm format - convert hh:mm to timestamp
    time = time.replace(/ /g,'');
    var timeArray = time.split(':');
    var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
    return timeStamp;
}