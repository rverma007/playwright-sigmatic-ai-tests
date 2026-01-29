pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.49.0-jammy'
            args '--ipc=host'
        }
    }

    stages {

        stage("Install Dependencies") {
            steps {
                sh '''
                    npm ci
                '''
            }
        }

        stage("Run Smoke Tests") {
            steps {
                sh '''
                    npx playwright test -g @smoke
                '''
            }
        }

        stage("Generate Allure Report") {
            steps {
                sh '''
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
