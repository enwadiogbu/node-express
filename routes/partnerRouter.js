const express = require('express');
const partnerRouter = require('./routes/partnerRouter');

partnerRouter.route('/:partnerRouter')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/partners/:partnerId', (req, res) => {
    res.end('Will send all the campsites to you');
})
.post('/partners/:partnerId', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put('/partners/:partnerId', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete('/partners/:partnerId', (req, res) => {
    res.end('Deleting all campsites');
});