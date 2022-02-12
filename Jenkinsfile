pipeline {
    agent any

    stages {
        stage('Git Clone') {
            steps {
                git credentialsId: 'sonohen', url: 'git@github.com:sonohen/app.git'
            }
        }
        stage('Run unit tests') {
            steps {
                dir("./app") {
                    nodeunit test
                }
            }
        }
    }
}