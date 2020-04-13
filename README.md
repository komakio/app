# Welcome to Komak’s open-source repository 🙏

[![slackin](https://slack.komak.io/badge.svg)](https://slack.komak.io)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/komakio/app.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/komakio/app/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/komakio/app.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/komakio/app/context:javascript)

![Type checking](https://github.com/komakio/backend/workflows/Type%20checking/badge.svg)
![Lint](https://github.com/komakio/backend/workflows/Lint/badge.svg)

<p><img width="280" src="https://user-images.githubusercontent.com/28791837/77825801-fd82ad00-710b-11ea-827a-19f3f8eb5f74.png"> <img width="280" src="https://user-images.githubusercontent.com/28791837/77825803-007d9d80-710c-11ea-9fdd-c4f90a803ebf.png"> <img width="280" src="https://user-images.githubusercontent.com/28791837/77825806-01163400-710c-11ea-92c9-3a2080363dc8.png"> </p>

* [Introduction](#introduction)
  * [What is Komak?](#what-is-komak)
  * [Who is it for?](#who-is-it-for)
  * [Features](#features)
* [Contribute](#contribute)
* [Contribute as a Developer](#contribute-as-a-developer)
* [Vision and goals](#vision-and-goals)
  * [Vision](#vision)
  * [Goals](#goals)
* [Team](#team)
  * [Core members](#core-members)
  * [Contributors](#contributors)
  * [Sponsors](#sponsors)
* [Contact](#contact)

## Introduction

Welcome to Komak, Nabo's open source project for developing a platform to help fight against the effects of the COVID-19 pandemic. 

### What is Komak?

Komak is an app born out of necessity in the wake of the COVID-19 events. The goal of Komak is to provide a digital platform for healthy volunteers to help out those most in need. 

Komak uses geolocation services to match volunteers with people that are at risk in their area. Komak then enables communication between the two parties so that volunteers can help with groceries, pharmacy runs, etc.

Komak is open-source, and we need all of the help we can get in this hopefully short-lived endeavor. 

### Who is it for?

Komak is built with 3 groups of stakeholders in mind:

1. People in need of isolation. 

2. Healthy adults that want to help out. 

3. Groups and organizations working towards the same goal. Komak can help them act more efficiently using our platform.

### Features

- Geolocation-based matching
- Matching volunteers with those in need
- Accept or reject help requests
- Call or text the people you match with
- Submit requests via web form
- (Planned) Select the area you want to help within 
- (Planned) Create an "in need" account for someone else (your grandparents, for example)
- (Planned) Identity verification
- (Planned) Communicating special needs with requests
- (Planned) Selecting availability time windows

## Contribute

- One the best way to help the project is to talk about it, in any way you can (blog, articles, twitter, etc...)
- Found a bug ? Have an awesome idea ? You can create an issue on the [issue tracker](https://github.com/komakio/app/issues/new/choose)
- Non-english speaker ? You can help us translating this app on [Crowding](https://crwd.in/komak)
- We are a non-profit organization but you can help us pay the bills. Contact us at contact@komak.io.

## Contribute as a developer


### What to do ?

First, thank you! If you want to help the development of this project, you can pick an issue that has been created by one of the main contributor. We recommend starting with an issue with the "Help wanted" or "Good first issue" label. Please, in the issue, let us know that you're working on it. Everybody hates double work ;)
If you have an amazing idea, cool! But please create an issue first, so that we can discuss and validate it before you start working on it.

### Architecture

We have 2 main repositories : App & Backend.

- The [backend](https://github.com/komakio/backend) is written in Node.js + Typescript + [Nest.js](https://nestjs.com/) and is using MongoDB (database) & RabbitMQ (message broker). You can find more information by accessing the [repository](https://github.com/komakio/backend). A swagger API doc [is available](https://api.komak.io/docs/).
- The app is also written in Typescript, and uses the [React Native](https://reactnative.dev/) framework.

### Install

#### Dependencies install

Clone the project and then run:
```bash
npm install
```

The project is trying to install cocoapod dependencies. If you don't have MacOS, don't worry ! It will just fail installing them, but the command will still succeed.

#### Android

Running Android is the most straightforward. Follow the [React Native Instructions](https://reactnative.dev/docs/environment-setup) - Click on this click, then choose *React Native CLI Quickstart*, your plaform and the target OS (Android). Be careful of reading all instructions carefully.

Once you're done, you should be able to run the project on Android.

```bash
npm run android
```

#### iOS

First, follow the [React Native Instructions](https://reactnative.dev/docs/environment-setup) - Click on this click, then choose *React Native CLI Quickstart*, your plaform and the target OS (iOS).

TODO

#### What's next

Per default, you don't need to run the backend, you'll be connected to our staging environment. If you want to work on both in parallel, you can just start the backend by cloning it, installing dependencies and running `npm run start:dev`. See more instructions on the [repository page](https://github.com/komakio/backend). Then you can change the bacend url to your local IP, [here](https://github.com/komakio/app/blob/master/src/environment.ts#L38).

## Vision and goals

We want to develop technology to aid the global response to COVID-19.

### Vision

Komak's vision is to help reduce the spread of COVID-19 by enabling healthy adults to help those most in need maintain physical isolation. 

We envision Komak as a safe to use platform for every one of our users and hope for everyone to support us in this goal.

### Goals

We want to develop a platform that is:

- **Easy to use**: Our platform should be intuitive and easy to access
- **Open source**: We believe everyone should be able to contribute to our efforts in whatever way they can. We plan to leverage the open source community in delivering the best platform that we can, and as quickly as we can. Time is of the essence!
- **Globally accessible**: The platform is being developed with a global scope. Geolocation-enabled services mean that any community, no matter where it is located, can tap into our platform.
- **Free and non-profit**: Komak is born as a volunteer response to the current crisis. We will not charge for access to the platform, and we will not make a profit out of it. Any funding we might receive through donations or sponsorships will be used to cover the costs of running the platform, increasing awareness and supporting the safety of our users.
- **Helping flatten the curve**: Experts are saying that COVID-19 will have to be managed for longer than we have previously thought. We hope that our efforts will help reduce the spread of the disease and by doing so contribute to reducing bottlenecks in our healthcare in the wake of the global pandemic.

## Team

Komak is a group effort, and we would like to thank all of the people and companies that are helping us build it.

### Core members

The core members of Komak are:

- [Ali Fateminia (mfateminia)](https://github.com/mfateminia)
- [Théo Mathieu (mokto)](https://github.com/mokto)
- [Dragos Petria (DragosPetria)](https://github.com/DragosPetria)

### Contributors

We are very lucky to have attracted a number of contributors to help us out in building this. You can find the up to date list of contributors [on our website](https://komak.io/who-we-are/).

### Sponsors

We are thankful to our sponsors for covering some of the costs of our initiative. If you'd like to sponsor our efforts, please get in touch at contact@komak.io

- Ocean.io, hosting

## Contact

Please do not hesitate to get in contact with us if you wish to contribute, sponsor our efforts or just say hi! You can reach us by email at contact@komak.io



