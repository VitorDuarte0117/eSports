import express from "express";

const app = express();

app.get("/ads", (req, res) => {
    res.json([
        { id: 1, name: "Anuncio" },
        { id: 2, name: "Anuncio" },
        { id: 3, name: "Anuncio" },
    ]);
});

app.listen(3000, () => {
    console.log("Ta rodando");
});
