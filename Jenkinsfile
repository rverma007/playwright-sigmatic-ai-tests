pipeline {
    agent any

    triggers {
        cron('H 22 * * 1-5')
    }

    stages {

        stage("Install Dependencies + Browsers") {
            steps {
                bat '''
                    echo ============================
                    echo Installing Node Packages...
                    echo ============================
                    npm ci

                    echo ============================
                    echo Installing Playwright Browsers...
                    echo ============================
                    npx playwright install chromium
                    npx playwright install-deps chromium
                '''
            }
        }

        stage("Run Smoke Tests") {
            steps {
                bat '''
                    echo ============================
                    echo Running Smoke Tests...
                    echo ============================
                    npx playwright test -g @smoke --reporter=line
                '''
            }
        }

        stage("Generate Allure Report") {
            steps {
                bat '''
                    echo ============================
                    echo Generating Allure Report...
                    echo ============================
                    npx allure generate allure-results --clean -o allure-report
                '''
            }
        }
    }

   post {
    always {

        echo "============================"
        echo "Archiving Reports..."
        echo "============================"

        archiveArtifacts artifacts: 'allure-report/**', fingerprint: true, allowEmptyArchive: true
        archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true, allowEmptyArchive: true

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
}