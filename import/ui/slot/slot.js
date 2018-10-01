import { Template } from 'meteor/templating';

import './slot.html';
import './insertSlotForm.html';


Template.slot.helpers({
    top() {
        const slotSize = 2;
        const hm = this.start.split(":");
        const s = (parseInt(hm[0])*60+parseInt(hm[1])-9*60)*slotSize;
        return s;
    },
    height() {
        return 200;
    }
});
