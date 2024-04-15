import {Hook, ux} from '@oclif/core'

const hook: Hook<'init'> = async function () {
  ux.log('Greetings! from plugin-test-esbuild init hook')
}

export default hook
