'use strict';

module.exports = plugin;

/**
 * Metalsmith plugin that move and removes files in the directory structure.
 *
 * @param {Object} options
 *   @property {Array} move Array of objects with instructions for what to move where: { source: 'not-found/index.html', target: 'not-found.html' }}
 *   @property {Array} remove Array of file regexp patterns to remove
 * @return {Function}
 */

function plugin(options) {
    return function (files, metalsmith, done) {
        if (options.move) {
            options.move.forEach(function (move) {
                if (!move.target || !move.source) {
                    return done('MoveRemove: target or source property missing');
                }
                files[move.target] = files[move.source];
                delete files[move.source];
            });
        }
        if (options.remove) {
            options.remove.forEach(function (remove) {
                var fileNames = Object.keys(files);
                fileNames.forEach(function (fileName) {
                    if (fileName.match(remove)) {
                        delete files[fileName];
                    }
                });
            });
        }
        done(null, files);
    };
}
