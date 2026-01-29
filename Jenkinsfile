pipeline {
    agent any

    tools {
        nodejs "Node25"
    }

    stages {

        stage("Checkout Code") {
            steps {
                checkout scm
            }
        }

        stage("Install Dependencies") {
            steps {
                bat '''
                    npm ci
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

            // ✅ Publish Allure Report inside Jenkins
            allure([
                results: [[path: 'allure-results']]
            ])

            // ✅ Archive report folder
            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true

            echo "Pipeline completed. Allure report published."
        }

        failure {
            echo "Pipeline failed. Check logs."
        }
    }
}
