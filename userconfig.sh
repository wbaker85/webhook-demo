#!/bin/bash

# check for docker-compose using: docker-compose version
# check for docker using: docker info


# terminal stuff for termite
wget https://raw.githubusercontent.com/thestinger/termite/master/termite.terminfo
tic -x termite.terminfo
rm termite.terminfo

# general update and git
sudo yum update -y
sudo yum install -y git

# docker
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo chkconfig docker on

# docker compose
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# download from repo and run
git clone https://github.com/wbaker85/webhook-demo.git && cd webhook-demo
docker-compose up -d