// const fs = require("fs").promises;
// const path = require("path");

import * as fs from "node:fs/promises";

import * as path from "node:path";

const contactsPath = path.resolve("./db/contacts.json");

export async function listContacts() {
  const list = await fs.readFile(contactsPath, "utf-8");
}

export async function addContact() {
    const 
} 