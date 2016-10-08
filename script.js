"use strict";

describe('Css Selectors Test', function () {
    const targetUrl = browser.baseUrl;

    beforeEach(function() {
        browser.get(targetUrl);
    });

    afterEach(function () {
        browser.driver.manage().deleteAllCookies();
    });

    //FIRST TEST

    it('player should be visible', function () {
        $$('.btn--play').get(3).click();

        expect($('player-controls').isDisplayed()).toBe(true);
    });

    //SECOND TEST

    it('player should be dispalyed at the author page', function () {
        $$('.track-card__username').get(2).click();
        $$('.btn--play').first().click();

        expect($('player-controls').isDisplayed()).toBe(true);
    });

    //THIRD TEST

    it('search result should contain keyword', function () {
        let keyword = 'Test';
        $('.btn--search-alt').click();
        $('.search-form__input').sendKeys(keyword, protractor.Key.ENTER);

        expect($$('.track-card__title').first().getText()).toContain(keyword);

        expect($('.content-header__title').getText()).toContain(keyword);
    });

});

//TRASH

// describe('First Test!', function () {
//     it('search should have results', function () {
//         waits(2000);
//         browser.driver.get('http://google.com/ncr');
//         browser.driver.findElement("input[name='q']").sendKeys('Webdriver',protractor.Key.ENTER);
//         browser.driver.findElement('.g').getText();
//         expect(browser.driver.findElement('.g').size > 0);
//     });

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

// it('card title should be dispalyed', function () {
//     browser.get(targetUrl);
//     expect(browser.getTitle()).toBe('SoundCloud • Angular2 NgRx', 'Title at homepage should be SoundCloud • Angular2 NgRx');
//
//     let title = element(by.css('.content-header__title'));
//     expect(title.getText()).toBe('Featured Tracks', 'Title on homepage should be Featured Tracks');
//
//     let firstSongLink = $$('.track-card__username').first();
//     let firstSong = firstSongLink.getText();
//     firstSongLink.click();
//
//     let cardTitle = element(by.css('.user-card__title')).getText();
//     expect(cardTitle).toBe(firstSong, 'Card title  should be - ' + firstSong);
// });