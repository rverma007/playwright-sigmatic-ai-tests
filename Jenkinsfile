pipeline {
    agent any

    stages {

        stage("Checkout Code") {
            steps {
                checkout scm
            }
        }

        stage("Install Dependencies") {
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
            echo "Publishing Allure Report..."

            allure([
                results: [[path: 'allure-results']]
            ])

            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
        }

        failure {
            echo "Pipeline Failed!"
        }
    }
}
