pipeline {
    agent any

    environment {
        IMAGE_NAME = "https://github.com/Pravindaskrishnasamy27/TaskTracker.git"
        IMAGE_TAG = "1.0.0"
        DOCKER_USERNAME = 'pravindas'
        DOCKER_PASSWORD = credentials('DOCKER_TOKEN')
    }

    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
                checkout scm
            }
        }

        stage('Build'){
    steps {
        sh 'mvn -f tasktracker_backd/pom.xml clean install'
    }
}

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Package') {
            steps {
                sh 'mvn package'
            }
        }
    }
}