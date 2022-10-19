import express from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get("/games", async (req, res) => {
    const games = await prisma.game.findMany();

    return res.json(games);
});
app.post("/ads", (req, res) => {
    return res.status(201).json([]);
});
app.get("/games/:id/ads", (req, res) => {
    const gameId = req.params.id;

    return res.send(gameId);
});

app.get("/ads/:id/discord", (req, res) => {
    // const adId = req.params.id;
    res.json([]);
});

app.listen(3000, () => {
    console.log("Ta rodando");
});
