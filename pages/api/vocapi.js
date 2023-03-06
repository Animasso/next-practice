import fs from "fs";
import path from "path";
export default function handler(req, res) {
  if (req.method === "GET") {
    // TROUVER  chemin de la donnée a récup
    const filePath = path.join(process.cwd(), "data", "list.json");
    //LIRE les donnée et les recupérer
    const fileData = fs.readFileSync(filePath);
    //TRANSFORMER les données en object javascript
    const data = JSON.parse(fileData);
    res.status(200).json({ data: data });
  } else if (req.method === "POST") {
    const enWord = req.body.en;
    const frWord = req.body.fr;
    const newWord = {
      en: enWord,
      fr: frWord,
    };

    const filePath = path.join(process.cwd(), "data", "list.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.englishList[0].data.push(newWord);
    //creation dun fichier pour remplacer l ancien
    fs.writeFileSync(filePath, JSON.stringify(data));
    //envoi de la rep
    res.status(201).json({ message: "REussite" });
  }
}
