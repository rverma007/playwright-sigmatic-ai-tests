post {
    always {

        echo "============================"
        echo "Publishing Allure Report..."
        echo "============================"

        // ✅ Publish Allure in Jenkins UI
        allure results: [[path: 'allure-results']]

        echo "============================"
        echo "Archiving Reports..."
        echo "============================"

        archiveArtifacts artifacts: 'allure-report/**', fingerprint: true, allowEmptyArchive: true
        archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true, allowEmptyArchive: true

        // ✅ Email with correct Pipeline variable
        emailext(
    subject: "Playwright Report | Build #${BUILD_NUMBER} | ${currentBuild.currentResult}",
    mimeType: 'text/html',
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
    """,
    to: 'rverma@ex2india.com'

        )
    }
}
