#!/bin/bash

ng build --prod=true --output-path dist --base-href /base-converter/;
npx angular-cli-ghpages --dir="dist";

