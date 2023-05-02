pipeline {
    agent any

    tools {nodejs "Nosejs"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent11"
                    }
                    steps {
                        git url: 'https://github.com/jbvzla89/Cypress_Cucumber.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key afcede04-342a-487d-8483-539fa1bb698a  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent12"
                    }
                    steps {
                        git url: 'https://github.com/jbvzla89/Cypress_Cucumber.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key afcede04-342a-487d-8483-539fa1bb698a  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent13"
                    }
                    steps {
                        git url: 'https://github.com/jbvzla89/Cypress_Cucumber.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key afcede04-342a-487d-8483-539fa1bb698a  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent14"
                    }
                    steps {
                        git url: 'https://github.com/jbvzla89/Cypress_Cucumber.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key afcede04-342a-487d-8483-539fa1bb698a  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}