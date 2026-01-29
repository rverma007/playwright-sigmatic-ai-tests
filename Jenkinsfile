pipeline {
    agent any

    environment {
        PLAYWRIGHT_BROWSERS_PATH = "0"
    }

    stages {

        stage("Clean Workspace") {
            steps {
                cleanWs()
            }
        }

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
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}
