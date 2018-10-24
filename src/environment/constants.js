const os = require('os')
const path = require('path')

const DIR = exports.DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')
const WS_ENDPOINT_PATH = exports.WS_ENDPOINT_PATH = path.join(DIR, 'wsEndpoint')