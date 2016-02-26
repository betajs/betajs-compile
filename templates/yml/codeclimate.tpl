engines:
  scss-lint:
    enabled: true
  eslint:
    enabled: true
  csslint:
    enabled: true
  fixme:
    enabled: true
ratings:
  paths:<% sources.forEach(function (source) { %>
  - <%= source %><% }) %>
exclude_paths:<% excluded.forEach(function (ex) { %>
- <%= ex %><% }) %>