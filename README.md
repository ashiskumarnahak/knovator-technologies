
# Knovator Technologies - Game Shop Management System

This project demonstrates a full-stack web application (Node.js backend + React frontend) with automated CI/CD using **Jenkins**, **PM2**, and **GitHub**. It is container-ready and can be deployed in a production environment with minimal changes.

---

## 🧱 Project Components

### 1. Infrastructure Provisioning (Terraform) - http://18.212.30.223/

- AWS VPC with public/private subnets
- EC2 instances
- RDS MYSQL (non-HA)
- Security Groups, Key Pairs

I have created EC2 instances, installed all the required software, deployed our React application, and configured it with a Load Balancer.

This is your Deployed application ip - http://18.212.30.223/


### 2. CI/CD Pipeline (Jenkins)- http://18.212.30.223:8080
- Clones code from GitHub
- Installs react-js dependencies (`npm install`)
- Optional build step (`npm run build`)
- Deploys to remote EC2 using `ssh` and `pm2`
- Automatically restarts the app

### 2. Monitoring Tools (Grafana)- http://18.212.30.223:8080
- To ensure observability of the deployed infrastructure and application, the following monitoring tools were configured:
- Prometheus: Used for collecting metrics from EC2 instances, application services, and the system. Exporters like node_exporter were used to expose CPU, memory, disk, and network metrics.
- Grafana: Used to visualize the metrics collected by Prometheus. Custom dashboards were created to monitor:
- Infrastructure performance (CPU, memory, disk usage)

- Application health (request rate, error rate, latency)

---

## 🚀 Tools Used

| Tool        | Purpose                          |
|-------------|----------------------------------|
| **Terraform** | Provision AWS infrastructure     |
| **Jenkins**   | Automate CI/CD pipeline          |
| **GitHub**    | Source code repository           |
| **PM2**       | Node.js process management       |
| **Nginx**     | (Optional) Reverse proxy/static hosting |
| **MYSQL**| Database (via AWS RDS)           |
| 


---

## 🛠️ Setup Instructions

### 1. Infrastructure

```bash
cd terraform/
terraform init
terraform apply
terraform destroy

```
### 2. Deploye Application

```bash
pm2 status 
pm2 apply 
pm2 delete 
 ```

 ### 📌 Final Output

 - Jenkins auto-fetches code from GitHub

 - Installs and builds on the Jenkins node
 - SSHs into EC2 and deploys app via pm2
 - App runs at: http://18.212.30.223/

### 🛡️ Security Notes
 - GitHub credentials are stored securely in Jenkins

 - EC2 access is via SSH key, stored securely in Jenkins
 - Never commit secrets or private keys to GitHub


### 🙋 Author
 Ashis Kumar Nahak
-DevOps Developer 

