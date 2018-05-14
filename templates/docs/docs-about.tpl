# About

<%= indent %>## Links
| Resource   | URL |
| :--------- | --: |
| Homepage   | [<%= framework.homepage %>](<%= framework.homepage %>) |
| Git        | [<%= framework.repository.url %>](<%= framework.repository.url %>) |
| Repository | [<%= framework.repository.url.replace("git://", "https://").replace(".git", "") %>](<%= framework.repository.url.replace("git://", "https://").replace(".git", "") %>) |
<% if (framework.meta.blog) { %>| Blog       | [<%= framework.meta.blog %>](<%= framework.meta.blog %>) |<% } %> 
<% if (framework.meta.twitter) { %>| Twitter    | [<%= framework.meta.twitter %>](<%= framework.meta.twitter %>) |<% } %> 



<%= indent %>## Contributors
<% framework.contributors.forEach(function (contributor) { %>
- <%= contributor %><% }) %>


<%= indent %>## License

<%= framework.license %>


<% if (framework.meta.credits) { %><%= indent %>## Credits

This software may include modified and unmodified portions of:<% framework.meta.credits.forEach(function (credit) { %>
- <%= credit %><% }) %>
<% } %>