pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
        stage('Deploy') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: 'cypress\\reports\\mochawesome', reportFiles: 'index.html', reportName: 'EBAC Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}
