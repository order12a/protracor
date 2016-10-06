exports.config = {
    directConnect: true,
    framework: 'jasmine2',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['script.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    useAllAngular2AppRoots: true
}