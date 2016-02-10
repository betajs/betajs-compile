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
exclude_paths:
- dist/**/*
- dist/*
- compile/**/*
- vendors/**/*
- vendors/*
- docsrc/**/*
- demos/**/*
- tests/**/*
- tasks/**/*
- docs/**/*
