emailext(
    subject: "Playwright Report | Build #${BUILD_NUMBER} | ${currentBuild.currentResult}",
    mimeType: 'text/html',
    from: 'testing.ruchika@gmail.com',
    replyTo: 'testing.ruchika@gmail.com',
    to: 'testing.ruchika@gmail.com',
    body: """
        <p>Hello Team,</p>

        <p>Playwright smoke test execution is completed.</p>

        <ul>
          <li><b>Job:</b> ${JOB_NAME}</li>
          <li><b>Build:</b> #${BUILD_NUMBER}</li>
          <li><b>Status:</b> ${currentBuild.currentResult}</li>
        </ul>

        <p>
          <a href="${BUILD_URL}artifact/allure-report/index.html">
          👉 Click here to view Allure Report
          </a>
        </p>

        <p>Regards,<br/>Jenkins</p>
    """
)
