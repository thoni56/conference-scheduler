import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schemas } from '../ui/common/schemas';

export const Slots = new Mongo.Collection('Slots');

SimpleSchema.extendOptions(['autoform']);

Schemas.Slots = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    venue: {
        type: String,
        label: "Venue",
        allowedValues: [
            'Sopranen',
            'Operan',
            'Operetten'
        ]
    },
    presenter: {
        type: String,
        label: "Presenter"
    },
    start: {
        type: Date,
        label: "Start",
        autoform: {
            afFieldInput: {
                type: "time"
            }
        }
    },
    length: {
        type: Number,
        label: "Length (min)"
    },
    track: {
        type: String,
        label: "Track"
    }

});

Slots.attachSchema(Schemas.Slots);
