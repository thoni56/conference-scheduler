import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schemas } from '../ui/common/schemas';

export const Slots = new Mongo.Collection('Slots');

Schemas.Slots = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    venue: {
        type: String,
        label: "Venue"
    },
    presenter: {
        type: String,
        label: "Presenter"
    },
    start: {
        type: Date,
        label: "Start",
    },
    length: {
        type: Number,
        label: "Length (min)",
    }
});

Slots.attachSchema(Schemas.Slots);


// title, venue, start, end
