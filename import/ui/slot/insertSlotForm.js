import { Slots } from '../../api/slots';

import './insertSlotForm.html';

AutoForm.addHooks(null, {
    onError: function(name, error, template) {
        console.log(name + " error:", error);
    }
})