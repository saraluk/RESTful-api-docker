## Install docker

Install docker on your machine, you need to create an account in order to download the software.
Once installation is done, log in to your docker account

### run `docker run hello-world` in terminal

### cd to the cloned repository

### run `docker build -t hello-world .`

### run `docker run -p 8090:8090 hello-world`

    Open [http://localhost:8090/inventory] to view collection of record.
    Open [http://localhost:8090/inventory/id] (where id is 1 to 5) to view individual record by id

    If port 8090 is already used, you will need to map with another avaiable port (try port 8099)
    `docker run -p 8090:8099 hello-world`
