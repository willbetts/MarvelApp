#!/usr/bin/env sh
bundle install
npm install
bundle exec rake db:setup
rails s
