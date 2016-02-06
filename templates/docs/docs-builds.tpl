# Builds

<%= framework.name %> <%= framework.version %>

<%= framework.meta.status %>

[<%= framework.repository.url %>](<%= framework.repository.url %>)

<% if (framework.meta.badges.travis) { %>[![Build Status](https://api.travis-ci.org/betajs/<%= framework.name %>.svg?branch=master)](https://travis-ci.org/betajs/<%= framework.name %>)
<% } %><% if (framework.meta.badges.codeclimate) { %>[![Code Climate](https://codeclimate.com/github/betajs/<%= framework.name %>/badges/gpa.svg)](https://codeclimate.com/github/betajs/<%= framework.name %>)
<% } %><% if (framework.meta.badges.npm) { %>[![npm version](https://img.shields.io/npm/v/<%= framework.name %>.svg?style=flat)](https://www.npmjs.com/package/<%= framework.name %>)<% } %>