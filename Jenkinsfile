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
                dir("/var/jenkins_home/workspace/First Pipeline") {
                    sh 'nodeunit test'
                }
            }
        }
        stage('Build Docker image') {
            steps {
                dir("/var/jenkins_home/workspace/First Pipeline") {
                    sh 'docker image build --tag archinwater/testrepo:0.1 .'
                }
            }
        }
        stage('Push docker image') {
            steps {
                // jenkinsに登録した認証情報を利用する
                withCredentials([[$class: 'UsernamePasswordMultiBinding', 
                    credentialsId: 'archinwater',
                    usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                        sh 'docker login -u $USERNAME -p $PASSWORD'
                    }
                sh "docker push archinwater/testrepo:0.1"
            }
        }
    }
}