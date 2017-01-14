
const record = require('node-record-lpcm16')
const { Detector, Models } = require('snowboy')

const models = new Models()

models.add({
  file: __dirname + '/I\'m_up.pmdl',
	sensitivity: '0.5',
	audioGain: 1,
	hotwords: 'I\'m up',
})

const detector = new Detector({
	resource: 'node_modules/snowboy/resources/common.res',
	models: models,
	audioGain: 2.0
})

const mic = record.start({
	threshold: 0,
})

mic.pipe(detector)

console.log('Snowboy ready for hotword')

exports.detector = detector
