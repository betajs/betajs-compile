<%= indent %># <%= framework.name %> <%= framework.version %>
<% if (framework.meta.badges) { %><% if (framework.meta.badges.travis) { %>[![Build Status](https://api.travis-ci.org/betajs/<%= framework.name %>.svg?branch=master)](https://travis-ci.org/betajs/<%= framework.name %>)
<% } %><% if (framework.meta.badges.codeclimate) { %>[![Code Climate](https://codeclimate.com/github/betajs/<%= framework.name %>/badges/gpa.svg)](https://codeclimate.com/github/betajs/<%= framework.name %>)
<% } %><% if (framework.meta.badges.npm) { %>[![NPM](https://img.shields.io/npm/v/<%= framework.name %>.svg?style=flat)](https://www.npmjs.com/package/<%= framework.name %>)
<% } %><% if (framework.meta.badges.gitter) { %>[![Gitter Chat](https://badges.gitter.im/betajs/<%= framework.name %>.svg)](https://gitter.im/betajs/<%= framework.name %>)<% } %><% } %>

<%= framework.description %>


<% if (installdoc) { %>
## Getting Started
<% } %>

<%= installdoc %>


<% if (summarydoc) { %>
## Basic Usage
<% } %>

<%= summarydoc %>


<%= indent %>## Links
| Resource   | URL |
| :--------- | --: |
| Homepage   | [<%= framework.homepage %>](<%= framework.homepage %>) |
| Git        | [<%= framework.repository.url %>](<%= framework.repository.url %>) |
| Repository | [<%= framework.repository.url.replace("git://", "https://").replace(".git", "") %>](<%= framework.repository.url.replace("git://", "https://").replace(".git", "") %>) |
<% if (framework.meta.blog) { %>| Blog       | [<%= framework.meta.blog %>](<%= framework.meta.blog %>) |<% } %> 
<% if (framework.meta.twitter) { %>| Twitter    | [<%= framework.meta.twitter %>](<%= framework.meta.twitter %>) |<% } %> 
<% if (framework.meta.badges && framework.meta.badges.gitter) { %>| Gitter     | [<%= framework.repository.url.replace("git://github.com", "https://gitter.im").replace(".git", "") %>](<%= framework.repository.url.replace("git://github.com", "https://gitter.im").replace(".git", "") %>) |<% } %> 


<% if (framework.meta.compatability) { %>
<%= indent %>## Compatibility
| Target | Versions |
| :----- | -------: |
<% for (var key in framework.meta.compatability) { %>| <%= key %> | <%= framework.meta.compatability[key] %> |
<% } %><% } %>
<% if (framework.meta.cdn) { %>
<%= indent %>## CDN
| Resource | URL |
| :----- | -------: |
<% for (var key in framework.meta.cdn) { %>| <%= key %> | [<%= framework.meta.cdn[key] %>](<%= framework.meta.cdn[key] %>) |
<% } %><% } %>
<% if (framework.meta.tests) { %>
<%= indent %>## Unit Tests
| Resource | URL |
| :----- | -------: |
<% for (var key in framework.meta.tests) { %>| <%= key %> | [Run](<%= framework.meta.tests[key] %>) |
<% } %><% } %>
<% if (framework.meta.dependencies) { %>
<%= indent %>## Dependencies
| Name | URL |
| :----- | -------: |
<% for (var key in framework.meta.dependencies) { %>| <%= key %> | [Open](<%= framework.meta.dependencies[key] %>) |
<% } %><% } %>
<% if (framework.meta.weakDependencies) { %>
<%= indent %>## Weak Dependencies
| Name | URL |
| :----- | -------: |
<% for (var key in framework.meta.weakDependencies) { %>| <%= key %> | [Open](<%= framework.meta.weakDependencies[key] %>) |
<% } %><% } %>

<%= indent %>## Main Contributors
<% framework.contributors.forEach(function (contributor) { %>
- <%= contributor %><% }) %>

<%= indent %>## License

<%= framework.license %>


<% if (framework.meta.credits) { %><%= indent %>## Credits

This software may include modified and unmodified portions of:<% framework.meta.credits.forEach(function (credit) { %>
- <%= credit %><% }) %>
<% } %>


<% if (framework.meta.sponsors) { %>
<%= indent %>## Sponsors
<% framework.meta.sponsors.forEach(function (sponsor) { %>
- <%= sponsor %><% }) %>
<% } %>

