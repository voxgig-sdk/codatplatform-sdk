
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CodatplatformSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CodatplatformSDK.test()
    equal(null !== testsdk, true)
  })

})
