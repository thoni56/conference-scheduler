import { Template } from 'meteor/templating';
import { moment } from 'meteor/momentjs:moment';

import './schedule.html';

Template.schedule.onRendered(function() {
    let ul = document.getElementById("timeslots");
    const time = moment().hours(8).minutes(30);
    const end = moment().hours(18).minutes(30);
    while(time.isBefore(end)) {
        let li = document.createElement("li");
        let text = document.createTextNode(time.format("HH:mm"));
        li.appendChild(text);
        ul.appendChild(li);
        time.add(30, 'm');
    }
})

Template.schedule.helpers({
    venues: [
        { name: 'Operetten' },
        { name: 'Operan' },
        { name: 'Sopranen' }
    ]
})
