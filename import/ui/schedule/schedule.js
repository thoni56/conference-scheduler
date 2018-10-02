import { Template } from 'meteor/templating';
import { moment } from 'meteor/momentjs:moment';

import './schedule.html';

const timeslots = [
    "08:30", "09:00", "09:30", "10:00", "10:30"
];

Template.schedule.onRendered(function() {
    let ul = document.getElementById("timeslots");
    const start = moment().hours(8).minutes(30);
    console.log(start.format("hh:mm"));
    for(var t in timeslots) {
        let li = document.createElement("li");
        let text = document.createTextNode(timeslots[t]);
        li.appendChild(text);
        ul.appendChild(li);
    }
})

Template.schedule.helpers({
    venues: [
        { name: 'Operetten' },
        { name: 'Operan' },
        { name: 'Sopranen' }
    ]
})
