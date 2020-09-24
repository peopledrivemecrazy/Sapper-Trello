import fetch from "node-fetch";
require("dotenv").config();

const API_URL = process.env.API_URL;

let data = {};

let trello = async function getPosts() {
  const res = await fetch(API_URL);
  data = await res.json();
  return (data = data.map((e) => {
    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    let posted_date = new Date(e.dateLastActivity);
    let formatted_date = `${posted_date.getDate()} ${
      months[posted_date.getMonth()]
    } ${posted_date.getFullYear()}`;
    let tags = e.labels.map((e) => {
      return {
        name: e.name,
        color: e.color,
      };
    });

    return {
      title: e.name,
      slug: e.name
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-"),
      desc: e.desc,
      time: formatted_date,
      tags,
    };
  }));
};

export default trello;
