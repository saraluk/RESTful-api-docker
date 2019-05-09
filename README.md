## Instruction

This is a RESTful web service that runs in a docker container display a collection of record a single record that the corresponds to an ID in JSON form.

## Clone repository

    //with git clone
    cd <cloned repository>

## Build docker image

    docker build -t <imagename> .

## Run docker container

    //port 8088 is given in Dockerfile, so map port 8088 with any available port on your machine

    docker run -p <available-port-on-local-machine>:8088 <imagename>

## view result

    Open [http://localhost:<available-port-on-local-machine>/inventory] to view collection of record.
    Open [http://localhost:<available-port-on-local-machine>/inventory/id] (where id is 1 to 5) to view individual record by id
