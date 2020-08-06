'use strict'

const store = require('./store')

const getWorkoutsTemplate = require('./templates/helpers/workout-listing.handlebars')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
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
  $('.unauthenticated').hide()
  $('#sign-in')[0].reset()
}

const signInFailure = function () {
  $('#message').text('Sign in failed!')
}

const changePasswordSuccess = function () {
  $('#message').text('You successfully changed your password!')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#message').text('Password was unable to be changed.')
}

const signOutSuccess = function () {
  $('#message').text('Signed you out!')
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failed.')
}

const addWorkoutSuccess = function (response) {
  $('#message').text('Workout added!')
  // console.log(response)
  console.log(store.workout = response.workout)
  console.log(store.workout)
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}

const addWorkoutFailure = function () {
  $('#message').text('Workout was not added. Try again!')
}

// const viewWorkoutsSuccess = function (response) {
//   console.log(store.workout = response.workout)
//   console.log('This is success button', response)
//   console.log(response)
//   const getWorkoutsHtml = getWorkoutsTemplate({ workouts: response.workouts })
//   $('#display-workouts').text(JSON.stringify(response))
// }

const viewWorkoutsSuccess = (response) => {
  console.log(response)
  const getWorkoutsHtml = getWorkoutsTemplate({ workouts: response.workouts })
  $('.content').append(getWorkoutsHtml)
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
}
