import { Template } from 'meteor/templating';

import './slot.html';
import './insertSlotForm.html';


Template.slot.helpers({
    top: "80",
    height: "200"
});
