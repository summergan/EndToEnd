# EndToEnd
end to end test framework

set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1
## install dependencies
yarn install
## run test 
yarn test
## deploy report
cd test/vueReport/
http-server -p 8000
http://127.0.0.1:8000