const req = require("express/lib/request");
const Contact = require("../models/contact");

const create = () => Contact.create();
const insertMany=()=>Contact.insertMany()


module.exports = { create ,insertMany};
