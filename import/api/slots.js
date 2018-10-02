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
        optional: true
    },
    presenter: {
        type: String,
        label: "Presenter",
        defaultValue: ""
    },
    start: {
        type: String,
        label: "Start",
        autoform: {
            type: "time"
        }
    },
    length: {
        type: Number,
        label: "Length (min)",
        defaultValue: 25
    },
    track: {
        type: String,
        label: "Track",
        defaultValue: "track-0"
    }

});

Slots.attachSchema(Schemas.Slots);
