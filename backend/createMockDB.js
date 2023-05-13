/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const mockdata = require('./mockData');

const { Items, Makers } = mockdata;
const data = JSON.stringify({ Items, Makers });
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, function (err) {
    err ? console.log(err) : console.log('Mock DB created.');
});
