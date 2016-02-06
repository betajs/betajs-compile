language: node_js
node_js:<% versions.forEach(function (version) { %>
  - "<%= version %>"<% }) %>
before_install: npm install -g grunt-cli
install: npm install
