#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
  --detect-globals false \
  --extension=.jsx \
  --external classnames \
  --external react \
  --outfile 'derequire > build/index.js' \
  --standalone HireFormsSelectList \
  --transform [ babelify --plugins object-assign ] \
  --verbose