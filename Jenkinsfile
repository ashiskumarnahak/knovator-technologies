pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS 18', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                git credentialsId: 'github-pat', url: 'https://github.com/ashiskumarnahak/knovator-technologies.git', branch: 'main'
            }
        }

        stage('Install Backend') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy with PM2') {
            steps {
                script {
                    sh 'pm2 delete backend || true'
                    sh 'pm2 delete frontend || true'

                    dir('server') {
                        sh 'pm2 start index.js --name backend'
                    }

                    dir('client') {
                        sh 'pm2 start "serve -s dist -l 3002" --name frontend'
                    }

                    sh 'pm2 save'
                }
            }
        }
    }
}
