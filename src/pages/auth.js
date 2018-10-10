import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <script>
      $(function()
      {$('#login').on('click', function(e) {
        e.preventDefault()
        var authenticator = new netlify.default({})
        authenticator.authenticate(
          { provider: 'github', scope: 'user' },
          function(err, data) {
            if (err) {
              return $('#output').text(
                'Error Authenticating with GitHub: ' + err
              )
            }
            $('#output').text(
              'Authenticated with GitHub. Access Token: ' + data.token
            )
          }
        )
      })}
      );
    </script>
    <h1>GitHub Auth Demo:</h1>
    <p>
      <a href="#" id="login">
        Authenticate
      </a>
    </p>
    <p id="output" />
  </Layout>
)

export default SecondPage
