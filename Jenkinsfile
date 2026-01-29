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

        stage("Checkout Code") {
            steps {
                checkout scm
            }
        }

        stage("Install Dependencies + Browsers") {
            steps {
                bat '''
                    npm install
                    npx playwright install --force chromium
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
