'use strict'

const getWorkoutsTemplate = require('./templates/helpers/workout-listing.handlebars')

const viewWorkoutsSuccess = (response) => {
  // console.log(response)
  const getWorkoutsHtml = getWorkoutsTemplate({ workouts: response.workouts })
  $('.content').empty()
  $('.content').append(getWorkoutsHtml)
  $('.content').show()
  // $('.workout-section').append(getWorkoutsHtml)
  // console.log(response.workouts)
  if (response.workouts.length === 0) {
    $('.content').text('You have no workouts, add a new one by clicking on the icon in the top left and clicking "Add New Workout"!')
  }
  $('#message').hide()
}

const viewWorkoutsFailure = function (response) {
  // console.log(store.workout)
  // store.workout = response.workout
  // if (store.workout === '') {
  //   $('.content').text('You have no workouts, add a new one!')
  // }
}

module.exports = {
  viewWorkoutsSuccess,
  viewWorkoutsFailure
}
