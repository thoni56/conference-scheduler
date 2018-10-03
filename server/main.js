import { Meteor } from 'meteor/meteor';
import { Slots } from '../import/api/slots';

Meteor.startup(() => {
    // code to run on server at startup
    Slots.remove({});
    Slots.insert({ title: "Incheckning", presenter: "", start: "08:30", length: 25, track: "paus" });
    Slots.insert({
        title: "KEYNOTE: Testing Vs. Checking Explained",
        presenter: "James Bach",
        venue: "Operan", start: "09:00", length: 75, track: "keynote"
    });
    Slots.insert({
        title: "Fika++",
        start: "10:15", length: 45, track: "paus"
    });
    Slots.insert({
        title: "15 förlösande frågor",
        presenter: "Björn Tikkanen",
        venue: "Operetten", start: "11:00", track: "track-3"
    });
    Slots.insert({
        title: "Team och mångdimensionellt flyt",
        presenter: "Thomas Nilefalk",
        venue: "Operan", start: "11:00", track: "team"
    });
    Slots.insert({
        title: "Optimera ditt flöde - men av vaddå?",
        presenter: "Marcus Hammarberg",
        venue: "Operetten", start: "11:30", track: "track-3"
    });
    Slots.insert({
        title: "Teamets välmående som mätvärde",
        presenter: "Robert Gistvik",
        venue: "Sopranen", start: "11:30", track: "team"
    });
    Slots.insert({
        title: "Do testers dream about automatic tests?",
        presenter: "Mattias Hedman",
        venue: "Sopranen", start: "14:30", track: "teknik"
    });
    Slots.insert({
        title: "War stories - Agilt ledarskap i verkligheten",
        presenter: "Maria Thelin",
        venue: "Operan", start: "11:30", track: "track-3"
    });
    Slots.insert({
        title: "Lunch",
        start: "12:00", length: 55, track: "paus"
    });
    Slots.insert({
        title: "Vision på gruppnivå - en omvänd person berättar",
        presenter: "Kajsa Åhlin",
        venue: "Operetten", start: "14:00", track: "team"
    });
    Slots.insert({
        title: "Fika",
        start: "15:00", length: 25, track: "paus"
    });
    Slots.insert({
        title: "Från e-handel direkt till fabriksgolvet - Javascript i fabriken",
        presenter: "Kristofer Skyttner",
        venue: "Operan", start: "14:00", track: "teknik"
    });
    Slots.insert({
        title: "KEYNOTE: Lean & Kanban to the rescue - Historien om Bungsu-sjukhuset",
        presenter: "Marcus Hammarberg",
        venue: "Operan", start: "13:00", length: 55, track: "keynote"
    });
    Slots.insert({
        title: "Gör en vana av att tänka test",
        presenter: "Johan Jonasson",
        venue: "Sopranen", start: "11:00", track: "track-3"
    });
    Slots.insert({
        title: "CLOSING TALK: Hur man blir innovativ i vardagen (eller på jobbet)",
        presenter: "Tomas Ahlström",
        venue: "Operan", start: "16:30", track: "keynote"
    });
    Slots.insert({
        title: "Eftermigel",
        start: "17:00", length: 90, track: "paus"
    });
    Slots.insert({
        title: "Feedback på din roadmap",
        presenter: "Åsa Tjernvik",
        venue: "Sopranen", start: "14:00", track: "track-3"
    });
    Slots.insert({
        title: "Förändring i Legobyn - en fabel om olika förändringsmodeller",
        presenter: "Thom Persson",
        venue: "Operetten", start: "14:30", track: "track-3"
    });
    Slots.insert({
        title: "DevOps - Tänk stort och starta smått",
        presenter: "Jari Aho",
        venue: "Operetten", start: "15:30", track: "teknik"
    });
    Slots.insert({
        title: "Introvert, extrovert, eller mittemellan?",
        presenter: "Tobias Anderberg",
        venue: "Operan", start: "14:30", track: "team"
    });
    Slots.insert({
        title: "Mobb-arbete: Lärdomar och upplevda fördelar",
        presenter: "Martin Andersson",
        venue: "Sopranen", start: "15:30", track: "team"
    });
});
