'use strict'

const store = require('./store')

const getWorkoutsTemplate = require('./templates/helpers/workout-listing.handlebars')

$('.authenticated').hide()

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
  $('.unauthenticated1').hide()
  $('#sign-up')[0].reset()
}

const signUpFailure = function () {
  $('#message').text('Sign up failed!')
}

const signInSuccess = function (response) {
  $('#message').text('Successfully signed in!')
  console.log(store)
  store.user = response.user

  console.log('store: ', store)
  console.log('token: ', store.user.token)

  $('.authenticated').show()
  $('.unauthenticated1').hide()
  $('.unauthenticated2').hide()
  $('#sign-in')[0].reset()
  $('#view-workouts').show()
}

const signInFailure = function () {
  $('#message').text('Sign in failed!')
}

const changePasswordSuccess = function () {
  $('#change-message').text('You successfully changed your password!')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#change-message').text('Password was unable to be changed.')
}

const signOutSuccess = function () {
  $('message').text('Signed you out!')
  $('.unauthenticated1').show()
  $('.unauthenticated2').show()
  $('.content').hide()
  $('#view-workouts').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failed.')
}

const addWorkoutSuccess = function (response) {
  $('#add-message').text('Workout added!')
  // console.log(response)
  console.log(store.workout = response.workout)
  console.log(store.workout)
  console.log('store: ', store)
  console.log('token: ', store.user.token)

  $('#add-workout')[0].reset()
}

const addWorkoutFailure = function () {
  $('#add-message').text('Workout was not added. Try again!')
}

const viewWorkoutsSuccess = (response) => {
  console.log(response)
  const getWorkoutsHtml = getWorkoutsTemplate({ workouts: response.workouts })
  $('.content').empty()
  $('.content').append(getWorkoutsHtml)
  $('.content').show()
}

const viewWorkoutsFailure = function () {
  $('.content').text('Unable to view workouts')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  addWorkoutSuccess,
  addWorkoutFailure,
  viewWorkoutsSuccess,
  viewWorkoutsFailure
  // deleteWorkoutSuccess,
  // deleteWorkoutsFailure
}
