pipeline {
    agent any

    options {
        timestamps()
    }

    triggers {
        cron('H 22 * * 1-5')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat '''
                    npm ci
                    npx playwright install chromium
                    npx playwright install-deps chromium
                '''
            }
        }

        stage('Run Smoke Tests') {
            steps {
                bat '''
                    npx playwright test -g @smoke
                '''
            }
        }
    }

    post {
        always {

            echo 'Publishing Allure Report'

            // THIS IS THE KEY STEP (without this, no left-panel link)
            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
