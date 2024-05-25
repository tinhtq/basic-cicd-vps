# DevOps Exercise

## Process

- Fork this repository to your personal GitHub account. If you prefer, you may create your own private repository instead.
- Complete your project and push your code to your repository.
- Send a link to your public repo to devexercise@theblock.co or invite [@sachatememe](https://github.com/sachatememe), [@Mike](https://github.com/web-mech) and [@AlexeyGolubeff](https://github.com/AlexeyGolubeff) as collaborators if it is private.
- We will schedule the final interview to review and discuss.

## Project Requirements

### Overview

Write **Terraform** that can be used to deploy the three-tiered "click counter" application contained in this repository. Use the `front`, `back`, and `redis` images detailed below.

- Use Dockerfile in the `front` directory of this repo to build `front` image
- Use Dockerfile in the `back` directory of this repo to build `back` image
- Push built images to free container registry like Dockerhub, Github Packages, or AWS ECR
- Use any version of `redis` from Dockerhub
- Use AWS free-tier option(s) like **EC2** and/or **Lambda + API Gateway** for running containers
- Use **Terraform**, your choice of CI/CD solution, and/or any additional scripting to deploy the containers

If you have questions or something seems "not right", please reach out via email.

### Application details

- `back` app
    - Requires these ENV vars:
        - `REDIS_SERVER` - Address of Redis container in the form of `<host>:<port>`
    - Binds to port
        - `4000`
    - Provides these endpoints:
        - `/api/clicks` - Returns current click count
        - `/api/clicks/incr` - Increments click count by 1 and returns new click count
        - `/api/ping` - Returns static "pong" response
- `front` app
    - Requires these ENV vars:
        - `BACKEND_API_URL` - Address of the Back container reachable from the server-side in the form of `http://<host>`
        - `CLIENT_API_URL` -  Address of the Back container reachable from the client-side in the form of `http://<host>`
        - Note: depending on how you've networked the containers, these to vars could be the same
    - Binds to port
        -  `3000`
    - Provides:
        - `/`  - Click counter display/UI
        - `/ping` - Returns static "pong" response

- `redis` image
    - Requires these ENV vars:
        - None
    - Binds to port
        - `6379`

### Extra credit

- Hide the `3000`/`4000` ports and make the service available over port `80` using the method of your choice
- Add healthchecks to `front` and `back` apps using the ping endpoint each app provides
- Implement basic security measures
- Add DNS or other customizations

### Example

https://devops-exercise.tblk.us

![image](https://user-images.githubusercontent.com/68586/162465910-892c2e8d-be41-4852-87c7-9ead1ca2e966.png)


## Interview

During your online interview, we will:

- Walk through your solution and use it to deploy the application
- Discuss any challenges and successes of your implementation
- Cover additional questions, both technical and otherwise
- Answer any questions you may have
