import { Slots } from '../../api/slots';

import './venue.html';

Template.venue.helpers({
    slots(venue) {
        let s = Slots.find({ $or: [ { venue: venue }, {venue: undefined} ] }); 
        return s;
      }
})