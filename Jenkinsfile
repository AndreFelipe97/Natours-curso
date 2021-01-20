pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'echo "Hello world"'
            }
        }
    }
    post {
        failure {
            slackSend channel: '#ops-room',
                    color: 'red',
                    message: "Error."
        }
        success {
            slackSend channel: '#ops-room',
                    color: 'green',
                    message: "Successfully."
        }
    }
}