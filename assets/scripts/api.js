'use strict'

const config = require('./config')

const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const addWorkout = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/workouts',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewWorkouts = function () {
  return $.ajax({
    url: config.apiUrl + '/workouts',
    method: 'GET',
    data: {
      user: store.user.id
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteWorkout = (workoutId) => {
  return $.ajax({
    url: config.apiUrl + '/workouts/' + workoutId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateWorkout = function (workoutId, formData) {
  // console.log('update workout ', workoutId, formData)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/workouts/' + workoutId,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addWorkout,
  viewWorkouts,
  deleteWorkout,
  updateWorkout
}
