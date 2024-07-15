#!/bin/sh

ROOT_DIR=/usr/share/nginx/html

# Replace env vars in JavaScript files
echo "Replacing env constants in JS"
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html $ROOT_DIR/precache-manifest*.js;
do
  echo "Processing $file ...";

  sed -i 's|VUE_APP_BASE_URL_PLACEHOLDER|'${TEST_A}'|g' $file 
  sed -i 's|VUE_APP_WEBSOCKET_URL_PLACEHOLDER|'${TEST_B}'|g' $file

done
echo "The value_1 is: ${TEST_A}"
echo "The value_2 is: ${TEST_B}"

echo "Starting Nginx"
nginx -g 'daemon off;'