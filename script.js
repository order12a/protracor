"use strict";

// describe('First Test!', function () {
//     it('search should have results', function () {
//         waits(2000);
//         browser.driver.get('http://google.com/ncr');
//         browser.driver.findElement("input[name='q']").sendKeys('Webdriver',protractor.Key.ENTER);
//         browser.driver.findElement('.g').getText();
//         expect(browser.driver.findElement('.g').size > 0);
//     });

describe('Css Selectors Test', function () {
    it('should be dispalyed', function () {
        browser.get('https://soundcloud-ngrx.herokuapp.com/');
        expect(browser.getTitle()).toBe('SoundCloud • Angular2 NgRx', 'Title at homepage should be SoundCloud • Angular2 NgRx');

        let title = element(by.css('.content-header__title'));
        expect(title.getText()).toBe('Featured Tracks', 'Title on homepage should be Featured Tracks');

        let firstSongLink = $$('.track-card__username').first();
        let firstSong = firstSongLink.getText();
        firstSongLink.click();

        let cardTitle = element(by.css('.user-card__title')).getText();
        expect(cardTitle).toBe(firstSong, 'Card title  should be - ' + firstSong);
    });
});


// describe('Protractor Demo App', function() {
//     it('should add one and two', function() {
//         browser.get('http://juliemr.github.io/protractor-demo/');
//         element(by.model('first')).sendKeys(1);
//         element(by.model('second')).sendKeys(2);
//
//         element(by.id('gobutton')).click();
//
//         expect(element(by.binding('latest')).getText()).
//         toEqual('3');
//     });
// });