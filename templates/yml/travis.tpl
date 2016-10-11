language: node_js
node_js:<% versions.forEach(function (version) { %>
  - "<%= version %>"<% }) %>
before_install:
  - npm install -g npm@3
  - npm install -g grunt-cli
install: npm install
