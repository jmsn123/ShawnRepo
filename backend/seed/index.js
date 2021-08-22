let mongoose = require("mongoose");
var faker = require("faker");
require("dotenv").config();
let db = require("../models");

mongoose.connect(
  "mongodb+srv://jmsn123:Babytroy12@cluster0.t5hyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const userId = new mongoose.Types.ObjectId();
let projectSeed = [
  {
    project_name: faker.internet.userName(),
    start_date: new Date().setDate(new Date().getDate() - 10),
    target_end_date: new Date().setDate(new Date().getDate() - 10),
    actual_end_date: new Date().setDate(new Date().getDate() - 10),
    created_on: new Date().setDate(new Date().getDate() - 10),
    created_by: faker.internet.userName(),
    modified_on: new Date().setDate(new Date().getDate() - 10),
    modified_by: faker.internet.userName(),
  },
];
let issueSeed = [
  {
    created_on: new Date().setDate(new Date().getDate() - 10),
    modified_on: new Date().setDate(new Date().getDate() - 10),
    issue_created_on: new Date().setDate(new Date().getDate() - 10),
    assignto: userId,
    created_by: faker.internet.userName(),
    modified_by: faker.internet.userName(),
    description: faker.lorem.sentences(),
    userThatSubmitted: userId,
    priority: 1,
    status: "true",
    progress: "fifty percent",
    summary: faker.lorem.sentences(),
    related_project: userId,
  },
  {
    created_on: new Date().setDate(new Date().getDate() - 10),
    modified_on: new Date().setDate(new Date().getDate() - 10),
    issue_created_on: new Date().setDate(new Date().getDate() - 10),
    assignto: userId,
    created_by: faker.internet.userName(),
    modified_by: faker.internet.userName(),
    description: faker.lorem.sentences(),
    userThatSubmitted: userId,
    priority: 1,
    status: "true",
    progress: "fifty percent",
    summary: faker.lorem.sentences(),
    related_project: userId,
  },
  {
    created_on: new Date().setDate(new Date().getDate() - 10),
    modified_on: new Date().setDate(new Date().getDate() - 10),
    issue_created_on: new Date().setDate(new Date().getDate() - 10),
    assignto: userId,
    created_by: faker.internet.userName(),
    modified_by: faker.internet.userName(),
    description: faker.lorem.sentences(),
    userThatSubmitted: userId,
    priority: 1,
    status: "true",
    progress: "fifty percent",
    summary: faker.lorem.sentences(),
    related_project: userId,
  },
  {
    created_on: new Date().setDate(new Date().getDate() - 10),
    modified_on: new Date().setDate(new Date().getDate() - 10),
    issue_created_on: new Date().setDate(new Date().getDate() - 10),
    assignto: userId,
    created_by: faker.internet.userName(),
    modified_by: faker.internet.userName(),
    description: faker.lorem.sentences(),
    userThatSubmitted: userId,
    priority: 1,
    status: "true",
    progress: "fifty percent",
    summary: faker.lorem.sentences(),
    related_project: userId,
  },
  {
    created_on: new Date().setDate(new Date().getDate() - 10),
    modified_on: new Date().setDate(new Date().getDate() - 10),
    issue_created_on: new Date().setDate(new Date().getDate() - 10),
    assignto: userId,
    created_by: faker.internet.userName(),
    modified_by: faker.internet.userName(),
    description: faker.lorem.sentences(),
    userThatSubmitted: userId,
    priority: 1,
    status: "true",
    progress: "fifty percent",
    summary: faker.lorem.sentences(),
    related_project: userId,
  },
];

db.Issue.deleteMany({})
  .then(() => db.Issue.collection.insertMany(issueSeed))
  .then((data) => {
    console.log(data.result.n + " record(s) inserted !");
    db.Project.deleteMany({})
      .then(() => db.Project.collection.insertMany(projectSeed))
      .then((data) => {
        console.log(data.result.n + " record(s) inserterd !");
        process.exit(0);
      });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
