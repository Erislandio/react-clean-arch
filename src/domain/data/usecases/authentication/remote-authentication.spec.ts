// testes para caso de uso interface authentication
// teste para API remota

import { HttpPostClient } from 'domain/data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('Remote authentication', () => {
  test('should call http client with correct url', async () => {
    const url = 'any_url'

    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url

        return Promise.resolve()
      }
    }

    const httpclientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpclientSpy)
    await sut.auth()

    expect(httpclientSpy.url).toBe(url)
  })
})
