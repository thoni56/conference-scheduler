import { Template } from 'meteor/templating';

import './slot.html';
import './insertSlotForm.html';


export const startTime = "08:30";

const slotSize = 30;    // px
const eventUnit = 15;   // minutes
const timeLineStart = getScheduleTimestamp(startTime);

Template.slot.helpers({
    top() {
        return (getScheduleTimestamp(this.start)-timeLineStart)/eventUnit*slotSize;
    },
    height() {
        return this.length/eventUnit*slotSize;
    }
});

function getScheduleTimestamp(time) {
    //accepts hh:mm format - convert hh:mm to "minute-stamp"
    time = time.replace(/ /g,'');
    var timeArray = time.split(':');
    var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
    return timeStamp;
}