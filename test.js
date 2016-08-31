'use strict'

const tap = require('tap')
const timeFromNow = require('./index')

const minute = 60000
const hour = minute * 60
const day = hour * 24
const month = day * 30
const year = month * 12

tap.equal(new Date(), 'Ahora')

tap.equal(new Date() - minute, 'Hace un minuto')
tap.equal(new Date() - minute * 2, 'Hace 2 minutos')
tap.equal(new Date() - minute * 59, 'Hace 59 minutos')

tap.equal(new Date() - hour, 'Hace una hora')
tap.equal(new Date() - hour * 2, 'Hace 2 horas')
tap.equal(new Date() - hour * 23, 'Hace 23 horas')

tap.equal(new Date() - day, 'Hace un dia')
tap.equal(new Date() - day * 2, 'Hace 2 dias')
tap.equal(new Date() - day * 29, 'Hace 29 dias')

tap.equal(new Date() - month, 'Hace un mes')
tap.equal(new Date() - month * 2, 'Hace 2 meses')
tap.equal(new Date() - month * 11, 'Hace 11 meses')

tap.equal(new Date() - year, 'Hace un año')
tap.equal(new Date() - year * 2, 'Hace 2 años')
tap.equal(new Date() - year * 23, 'Hace 23 años')
