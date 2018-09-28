import { Template } from 'meteor/templating';

import './schedule.html';

Template.schedule.helpers({
    venues: [
        { name: 'Operan' },
        { name: 'Operetten' },
        { name: 'Sopranen' }
    ]
})
