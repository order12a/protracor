exports.config = {
    directConnect: true,
    framework: 'jasmine2',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['script.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'https://soundcloud-ngrx.herokuapp.com/',
    useAllAngular2AppRoots: true
}