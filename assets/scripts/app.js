'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./events')

$(() => {
  // Authentication Portion:
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Workout Event Listeners
  $('#add-workout').on('submit', authEvents.onAddWorkout)
  $('#view-workouts').on('click', authEvents.onViewWorkouts)
  $('.content').on('click', '.delete-btn', authEvents.onDeleteWorkout)
  // $('.content').on('click', '.update-btn', authEvents.onUpdateWorkout)
  $('.content').on('submit', '#update-workout', authEvents.onUpdateWorkout)
})
