pipeline {
    agent any

    environment {
        PLAYWRIGHT_BROWSERS_PATH = "0"
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
                    npx playwright install --force chromium

                    echo ============================
                    echo Checking Browser Install Folder...
                    echo ============================
                    dir node_modules\\playwright-core\\.local-browsers
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

            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}
