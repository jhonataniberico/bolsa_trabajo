'use strict'

const express = require('express'),
    controller = require('./c_professional'),
    api = express.Router();

api
    .post('/insert', ensureAuth, controller.insert)
    .get('/listWork', ensureAuth, controller.listWork)
    .put('/updCurriculum', ensureAuth, controller.updCurriculum)

module.exports = api;