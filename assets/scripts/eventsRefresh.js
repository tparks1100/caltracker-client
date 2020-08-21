'use strict'

const api = require('./api')
const ui = require('./uiRefresh')

const onViewWorkouts = function (event) {
  api.viewWorkouts()
    .then(ui.viewWorkoutsSuccess)
    .catch(ui.viewWorkoutsFailure)
}

module.exports = {
  onViewWorkouts
}
