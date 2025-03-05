pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"
        ANGULAR_APP_DIR = "dist/healthcare-frontend" // Change if needed
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'develop', credentialsId: 'github-credentials', url: 'https://github.com/akashn34/healthcare-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watch=false --browsers=ChromeHeadless'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'npm run build -- --configuration=production'
            }
        }

        stage('Stop Existing Frontend') {
            steps {
                script {
                    sh "lsof -ti:4200 | xargs kill -9 || true"
                }
            }
        }

        stage('Serve Frontend Locally') {
            steps {
                script {
                    sh "nohup npx http-server $ANGULAR_APP_DIR -p 4200 > /dev/null 2>&1 &"
                }
            }
        }
    }

    post {
        success {
            echo '✅ Frontend successfully deployed at http://localhost:4200'
        }
        failure {
            echo '❌ Deployment Failed!'
        }
    }
}

