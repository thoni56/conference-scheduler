import '../import/ui/schedule/schedule';
import '../import/ui/venue/venue';
import '../import/ui/slot/slot';
import '../import/ui/slot/insertSlotForm';
import SimpleSchema from 'simpl-schema';

import { Slots } from '../import/api/slots';

import './main.html';

window.Slots = Slots;
SimpleSchema.debug = true;
