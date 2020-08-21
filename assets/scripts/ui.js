'use strict'

const store = require('./store')

const authEvents = require('./events')

const eventsRefresh = require('./eventsRefresh')

const getWorkoutsTemplate = require('./templates/helpers/workout-listing.handlebars')

$('.viewWorkouts').hide()
$('.navbar-toggler').hide()
$('.update-message').hide()
$('.delete-message').hide()

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
  $('#sign-up')[0].reset()
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
  $('#message').show()
}

const changePasswordSuccess = function () {
  $('#change-message').text('You successfully changed your password!')
  $('#change-password')[0].reset()
  $('#message').hide()
  $('.update-message').hide()
  $('.delete-message').hide()
}

const changePasswordFailure = function () {
  $('#change-message').text('Password was unable to be changed.')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully! Remember to stay fit!💪🏽')
  $('.unauthenticated1').show()
  $('.unauthenticated2').show()
  $('.content').hide()
  $('#view-workouts').hide()
  $('.navbar-toggler').hide()
  $('.bg-light').hide()
  $('#message').show()
  $('#add-workout')[0].reset()
  $('#change-password')[0].reset()
  $('.update-message').hide()
  $('.delete-message').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failed.')
  $('#message').show()
}

const addWorkoutSuccess = function (response) {
  $('#add-message').text('Workout added!')
  // console.log(response)
  // console.log(store.workout = response.workout)
  // console.log(store.workout)
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)
  $('#message').hide()
  $('#add-workout')[0].reset()
  $('.update-message').hide()
  $('.delete-message').hide()
}

const addWorkoutFailure = function () {
  $('#add-message').text('Workout was not added. Try again!')
}

const viewWorkoutsSuccess = (response) => {
  // console.log(response)
  const getWorkoutsHtml = getWorkoutsTemplate({ workouts: response.workouts })
  // $('#update-close').on('click', authEvents.onCloseNavForms)
  // eventsRefresh.onViewWorkouts()
  $('.content').empty()
  $('.content').append(getWorkoutsHtml)
  $('.content').show()
  // $('[data-modal=hbModal]').modal({ backdrop: 'static', keyboard: false, show: false })
  // $('.workout-section').append(getWorkoutsHtml)
  // console.log(response.workouts)
  if (response.workouts.length === 0) {
    $('.content').text('You have no workouts, add a new one by clicking on the icon in the top left and clicking "Add New Workout"!')
  }
  $('#message').hide()
  $('.update-message').hide()
  $('.delete-message').hide()
}

const viewWorkoutsFailure = function (response) {
  // console.log(store.workout)
  // store.workout = response.workout
  // if (store.workout === '') {
  //   $('.content').text('You have no workouts, add a new one!')
  // }
}

const updateWorkoutSuccess = function () {
  $('.update-message').show()
  $('.update-message').text('Workout updated!🤸🏽‍♂️')
  $('#update-close').on('click', authEvents.onCloseNavForms)
  eventsRefresh.onViewWorkouts()
  $('.updateModal').modal('hide')
  $('.modal-backdrop').remove()
  $('body').css('overflow-y', 'auto')
}

const updateWorkoutFailure = function () {
  $('.update-message').text('Workout was not updated. Try again!')
}

const deleteWorkoutSuccess = function () {
  $('.delete-message').show()
  $('.delete-message').text('Workout deleted!')
}

const deleteWorkoutFailure = function () {
  $('.delete-message').text('Workout was not deleted. Try again!')
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
  updateWorkoutFailure,
  deleteWorkoutSuccess,
  deleteWorkoutFailure
}
