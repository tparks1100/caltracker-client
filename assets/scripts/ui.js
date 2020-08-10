'use strict'

const store = require('./store')

const getWorkoutsTemplate = require('./templates/helpers/workout-listing.handlebars')

$('.viewWorkouts').hide()
$('.navbar-toggler').hide()

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
  $('#sign-up')[0].reset()
  $('#message').show()
}

const signUpFailure = function () {
  $('#message').text('Sign up failed!')
}

const signInSuccess = function (response) {
  $('#message').text('Successfully signed in!')
  // console.log(store)
  store.user = response.user

  // console.log('store: ', store)
  // console.log('token: ', store.user.token)

  $('.viewWorkouts').show()
  $('.unauthenticated1').hide()
  $('.unauthenticated2').hide()
  $('#sign-in')[0].reset()
  $('#view-workouts').show()
  $('.navbar-toggler').show()
  $('.bg-light').show()
  $('#message').show()
}

const signInFailure = function () {
  $('#message').text('Sign in failed!')
}

const changePasswordSuccess = function () {
  $('#change-message').text('You successfully changed your password!')
  $('#change-password')[0].reset()
  $('#message').hide()
}

const changePasswordFailure = function () {
  $('#change-message').text('Password was unable to be changed.')
}

const signOutSuccess = function () {
  $('.unauthenticated1').show()
  $('.unauthenticated2').show()
  $('.content').hide()
  $('#view-workouts').hide()
  $('.navbar-toggler').hide()
  $('.bg-light').hide()
  $('#message').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failed.')
}

const addWorkoutSuccess = function (response) {
  $('#add-message').text('Workout added! Click View my workouts to see your new workout!')
  // console.log(response)
  // console.log(store.workout = response.workout)
  // console.log(store.workout)
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)

  $('#add-workout')[0].reset()
  $('#message').hide()
}

const addWorkoutFailure = function () {
  $('#add-message').text('Workout was not added. Try again!')
}

const viewWorkoutsSuccess = (response) => {
  // console.log(response)
  const getWorkoutsHtml = getWorkoutsTemplate({ workouts: response.workouts })
  $('.content').empty()
  $('.content').append(getWorkoutsHtml)
  $('.content').show()
  // $('.workout-section').append(getWorkoutsHtml)
  // console.log(response.workouts)
  if (response.workouts.length === 0) {
    $('.content').text('You have no workouts, add a new one by clicking on the icon in the top left and clicking "Add workout"!')
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

const updateWorkoutSuccess = function () {
  $('#update-message').text('Workout updated! Click "view workouts" to see new changes.')
  // $('#update-workout')[0].reset()
  $('#message').hide()
}

const updateWorkoutFailure = function () {
  $('#update-message').text('Workout was not updated. Try again!')
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
  viewWorkoutsFailure,
  updateWorkoutSuccess,
  updateWorkoutFailure
  // deleteWorkoutSuccess,
  // deleteWorkoutsFailure
}
