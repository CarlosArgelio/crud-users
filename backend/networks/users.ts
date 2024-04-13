import { Router } from "express";

const users = Router();

users.get("/", (req, res) => {})
users.post("/", (req, res) => {})
users.get("/:id", (req, res) => {})
users.put("/:id", (req, res) => {})
users.delete("/:id", (req, res) => {})

export { users }