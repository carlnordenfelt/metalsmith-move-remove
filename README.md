# metalsmith-move-remove
[Metalsmith](http://www.metalsmith.io/) plugin that move and/or removes files from the file structure.

# Installation
```
$ npm install metalsmith-move-remove
```

# Parameters
* `move`: Array of objects with instructions for what to move and where
* `remove`: Array of file regexp patterns to remove


# Usage
```node
var Metalsmith = require('metalsmith');
var moveRemove = require('metalsmith-move-remove');

var metalsmith = new Metalsmith(__dirname)
  .use(moveRemove({
    move: [
        { source: 'misplaced-file/index.html', target: 'correctly-placed-file.html' }]
    ],
    remove: ['file-i-dont-want.html', 'another-file-i-dont-want']
  }))
```

#License

[The MIT License (MIT)](/LICENSE)

#Change Log

[Change Log](/CHANGELOG.md)
