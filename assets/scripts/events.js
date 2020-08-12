'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onAddWorkout = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  api.addWorkout(formData)
    .then(ui.addWorkoutSuccess)
    .catch(ui.addWorkoutFailure)
}

const onViewWorkouts = function (event) {
  event.preventDefault()
  api.viewWorkouts()
    .then(ui.viewWorkoutsSuccess)
    .catch(ui.viewWorkoutsFailure)
}

const onDeleteWorkout = (event) => {
  event.preventDefault()
  const workoutId = $(event.target).closest('section').data('id')
  // console.log(event.target)
  // console.log(workoutId)
  api.deleteWorkout(workoutId)
    .then(ui.deleteWorkoutSuccess)
    .then(() => onViewWorkouts(event))
    .catch(ui.deleteWorkoutFailure)
}

const onUpdateWorkout = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).closest('section').data('id')
  // console.log(event.target)
  // console.log(id)
  // console.log('this is in update workout ', formData)
  api.updateWorkout(id, formData)
    .then(ui.updateWorkoutSuccess)
    .catch(ui.updateWorkoutFailure)
}

const onCloseNavForms = function (event) {
  event.preventDefault()
  $('#add-message').text('')
  $('#change-message').text('')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddWorkout,
  onViewWorkouts,
  onDeleteWorkout,
  onUpdateWorkout,
  onCloseNavForms
}
