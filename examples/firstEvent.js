﻿var assert = require('assert');

assert(process.env.MEETUP_KEY, 'MEETUP_KEY variable isn\'t set on enviroment (use \'set \'MEETUP_KEY=key\'\' on Windows)');

var meetup = require('../lib/meetup')({
    key: process.env.MEETUP_KEY
});

meetup.getEvent({
    'urlname': 'banodejs',
    'id': '221235192'
}, function(error, event) {
    if (error) {
        console.log(error);
    } else {
        console.log(event);
    }
});
