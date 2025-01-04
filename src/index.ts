import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const app = express();

app.post("api/v1/signup", function (req, res) {});

app.post("api/v1/signin", function (req, res) {});

app.post("api/v1/content", function (req, res) {});

app.get("api/v1/content", function (req, res) {});

app.delete("api/v1/content", function (req, res) {});

app.post("api/v1/brain/share", function (req, res) {});

app.post("api/v1/brain/:shareLink", function (req, res) {});
