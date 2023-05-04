# 10up Front-end Engineering Technical Challenge

This project contains the code implementation for the [10up Front-end Engineering Technical Challenge](challenge.md).

## Table of Contents

1. [About the project](#about-the-project)
2. [Build with](#build-with)
3. [Getting Started](#getting-started)
    1. [Prerequisites](#prerequisites)
    2. [Run Locally](#run-locally)
5. [Usage](#usage)
    1. [Demo](#demo)
6. [Authors](#authors)
7. [Color reference](#color-reference)
8. [License](#license)
9. [Acknowledgements](#acknowledgements)
10. [About Me](#about-me)

----

## About the project <a name="about-the-project"></a>

The progress is part of 10up screening process for senior front-end engineer.

## Build With <a name="build-with"></a>

- Docker
- WordPress 6.2
- PNPM
- MySQL
- PHP

## Getting Started <a name="getting-started"></a>

To get started ensure that you have all the technologies above set in place in your local machine. The project 
is enabled to use https by default. Docker already enable all certificates, requring only the installation of [mkcert](https://github.com/FiloSottile/mkcert).
SSL is not mandatory in order to the application work.

### Prerequisites <a name="prerequisites"></a>

- Docker
- PNPM
- [mkcert](https://github.com/FiloSottile/mkcert)

#### Run Locally <a name="run-locally"></a>

Clone the repository and navigate to folder and:

1. Install dependencies

```bash
docker compose up
```
2. Install React App depencencies

```bash
cd react-app ; pnpm i
```

3. Start the server

```bash
pnpm dev
```

## Usage <a name="usage"></a>

### Front-end
Hit the address: https://10up-frontend-challenge.dev:5173 or http://localhost:5173

## Backend (CMS)
For access admin hit https://10up-frontend-challenge.dev/wp-admin/ with the credentials:

Username: `admin`  
Password: `10challengepass`  

## Demo <a name="demo"></a>

https://user-images.githubusercontent.com/22594/236174487-aaa1f3ad-e784-4771-86a6-c80d4f9db644.mov

### Project scripts available
<img width="592" alt="image" src="https://user-images.githubusercontent.com/22594/236172359-ea5fbde5-9995-41cf-8ea1-8eecd38f1fe4.png">

### Test suite coverage

<img width="942" alt="image" src="https://user-images.githubusercontent.com/22594/236173521-3b4cfaec-6df0-4f5e-ba46-f840b2228414.png">

## Code Authors <a name="authors"></a>
- [@juniovitorino](https://www.github.com/juniovitorino)

## Color Reference <a name="color-reference"></a>

| Color Location              | Color                                                                                                                  | Hex                    |
| --------------------------- | :--------------------------------------------------------------------------------------------------------------------: | :--------------------: |
| Content text                | ![#081523](https://via.placeholder.com/10/081523?text=+)                                                               | `#081523`              |
| Hero eyebrow text           | ![#01FDAB](https://via.placeholder.com/10/01FDAB?text=+)                                                               | `#01FDAB`              |
| White panel eyebrow text    | ![#0262F0](https://via.placeholder.com/10/0262F0?text=+)                                                               | `#0262F0`              |
| Menu and footer background  | ![#010203](https://via.placeholder.com/10/010203?text=+)                                                               | `#010203`              |
| Hero Background Gradient    | ![#091523](https://via.placeholder.com/10/091523?text=+)&nbsp;![#0E253F](https://via.placeholder.com/10/0E253F?text=+) | `#091523` ~> `#0E253F` |

## License <a name="license"></a>
This project is under [MIT](https://choosealicense.com/licenses/mit/) licensing.

## Acknowledgements <a name="acknowledgements"></a>

Add Acknowledgements.

## 🚀 About Me <a name="about-me"></a>

With a diverse and extensive 20-year career as a Senior Software Engineer, I have honed my engineering expertise to create seamless, responsive, and user-centric web applications. My strong foundation in Google Cloud services and CI/CD best practices have enabled me to optimize development workflows, ensuring consistent, high-quality deliverables for clients and organizations.

I have worked on numerous projects throughout my career, collaborating with cross-functional teams to create innovative and scalable solutions. My in-depth knowledge of web technologies and commitment to staying current with the latest industry trends make me a valuable asset to any team.

Key skills & expertise:

- Expert in Node, Typescript, React and Ruby on Rails;
- Strong knowledge of Google Cloud services and infrastructure;
- Proficient in Continuous Integration and Continuous Deployment (CI/CD) methodologies;
- Excellent collaboration and communication skills;
- Adept at problem-solving, debugging, and optimization;
- Passion for learning and adapting to new technologies and tools;

As a seasoned Senior Software Engineer, I am committed to leveraging my diverse skill set and experience to drive technology projects to successful completion. I am always eager to tackle new challenges, collaborate with teams, and contribute to the ever-evolving world of software engineering.

For more please visit my [LinkedIn](https://www.linkedin.com/in/juniovitorino).
