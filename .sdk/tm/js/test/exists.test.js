
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { CodatplatformSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CodatplatformSDK.test()
    equal(null !== testsdk, true)
  })

})
