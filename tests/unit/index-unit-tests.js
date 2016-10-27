'use strict';

var expect = require('chai').expect;
var subject;

describe('index unit tests', function () {
    before(function (done) {
        subject = require('../../lib/index.js');
        done();
    });
    describe('Calling plugin', function () {
        it('should succeed', function (done) {
            var params = {
                move: [{ source: 'source-file', target: 'target-file' }],
                remove: ['remove-file']
            };
            var files = {
                'source-file': true,
                'remove-file': true,
                'another-file': true
            };
            subject(params)(files, {}, function (error, files) {
                expect(error).to.equal(null);
                expect(files['source-file']).to.equal(undefined);
                expect(files['target-file']).to.equal(true);
                expect(files['remove-file']).to.equal(undefined);
                expect(files['another-file']).to.equal(true);
                done();
            });
        });
        it('should fail due to bad config of move', function (done) {
            var params = {
                move: [{ target: 'target-file' }]
            };
            subject(params)({}, {}, function (error, files) {
                expect(error).to.equal('MoveRemove: target or source property missing');
                done();
            });
        });
        it('for coverage only', function (done) {
            var params = {
            };
            subject(params)({}, {}, function (error, files) {
                done();
            });
        });
    });
});
