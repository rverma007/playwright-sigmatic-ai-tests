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
                    npx playwright install chromium
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
}
