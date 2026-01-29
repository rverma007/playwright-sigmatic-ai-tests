pipeline {
    agent any

    environment {
        PLAYWRIGHT_BROWSERS_PATH = "0"
    }

    stages {

        stage("Install Dependencies + Browsers") {
            steps {
                bat '''
                    npm install
                    npx playwright install --with-deps chromium
                '''
            }
        }

        stage("Run Smoke Tests") {
            steps {
                bat '''
                    npx playwright test -g @smoke
                '''
            }
        }

        stage("Generate Allure Report") {
            steps {
                bat '''
                    npx allure generate allure-results --clean -o allure-report
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}
