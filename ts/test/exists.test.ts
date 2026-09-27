
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CodatplatformSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CodatplatformSDK.test()
    equal(testsdk instanceof CodatplatformSDK, true,
      'CodatplatformSDK.test() must return a client synchronously')
  })

})
