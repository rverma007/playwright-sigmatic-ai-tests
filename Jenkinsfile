pipeline {
  agent any

  tools {
    nodejs "Node18"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        bat '''
          npm ci
          npx playwright install --with-deps
        '''
      }
    }

    stage('Run Smoke Tests') {
      steps {
        bat '''
          npm run test:smoke
        '''
      }
    }

    stage('Generate Allure Report') {
      always {
        bat '''
          npx allure generate allure-results --clean -o allure-report
        '''
      }
    }
  }

  post {
    always {
      allure([
        results: [[path: 'allure-results']]
      ])

      archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
      archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
    }
  }
}
