#!/bin/bash
jsdoc2md --template jsdoc2md/partials/functions.hbs --files bin/v1.1/public.js > jsdoc2md/partials/v1-public.hbs
jsdoc2md --template jsdoc2md/partials/functions.hbs --files bin/v1.1/private.js > jsdoc2md/partials/v1-private.hbs
jsdoc2md --template jsdoc2md/README.hbs --partial jsdoc2md/partials/*.hbs --files bin/v1.1/**.js > README.md