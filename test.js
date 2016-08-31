'use strict'

const tap = require('tap')
const timeFromNow = require('./index')

const minute = 60000
const hour = minute * 60
const day = hour * 24
const month = day * 30
const year = month * 12

const now = new Date()

tap.equal(timeFromNow(now), 'Ahora')

tap.equal(timeFromNow(now - minute), 'Hace un minuto')
tap.equal(timeFromNow(now - (minute * 2)), 'Hace 2 minutos')
tap.equal(timeFromNow(now - (minute * 59)), 'Hace 59 minutos')

tap.equal(timeFromNow(now - hour), 'Hace una hora')
tap.equal(timeFromNow(now - (hour * 2)), 'Hace 2 horas')
tap.equal(timeFromNow(now - (hour * 23)), 'Hace 23 horas')

tap.equal(timeFromNow(now - day), 'Hace un dia')
tap.equal(timeFromNow(now - (day * 2)), 'Hace 2 dias')
tap.equal(timeFromNow(now - (day * 29)), 'Hace 29 dias')

tap.equal(timeFromNow(now - month), 'Hace un mes')
tap.equal(timeFromNow(now - (month * 2)), 'Hace 2 meses')
tap.equal(timeFromNow(now - (month * 11)), 'Hace 11 meses')

tap.equal(timeFromNow(now - year), 'Hace un año')
tap.equal(timeFromNow(now - (year * 2)), 'Hace 2 años')
tap.equal(timeFromNow(now - (year * 23)), 'Hace 23 años')
