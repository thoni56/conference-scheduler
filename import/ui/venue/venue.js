import { Slots } from '../../api/slots';

import './venue.html';

Template.venue.helpers({
    slots(venue) {
        let s = Slots.find({ venue: venue }); 
        return s;
      }
})