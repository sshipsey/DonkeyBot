// Description:
//  Hype man for a savage burn
//
// Commands:
//  rekt - show the checklist to let them know
//
// Author:
//  Matt Perry

/// <reference path="..\..\typings\main.d.ts" />

import { Robot } from "hubot";

let unchecked = "☐";
let checked = "☑";
let rekts = [
    "REKTangle",
    "SHREKT",
    "The Good, the Bad, and the REKT",
    "LawREKT of Arabia",
    "Tyrannosaurus REKT",
    "REKT-it Ralph",
    "The Lord of the REKT",
    "The Usual SusREKTs",
    "REKT to the Future",
    "eREKTile dysfunction",
    "Rekt",
    "Really Rekt",
    "Tyrannosaurus Rekt",
    "Cash4Rekt.com",
    "Grapes of Rekt",
    "Ship Rekt",
    "Rekt markes the spot",
    "Caught rekt handed",
    "The Rekt Side Story",
    "Singin' In The Rekt",
    "Painting The Roses Rekt",
    "Rekt Van Winkle",
    "Parks and Rekt",
    "Lord of the Rekts: The Reking of the King",
    "Star Trekt",
    "The Rekt Prince of Bel-Air",
    "A Game of Rekt",
    "Rektflix",
    "Rekt it like it's hot",
    "RektBox 360",
    "The Rekt-men",
    "School Of Rekt",
    "I am Fire, I am Rekt",
    "Rekt and Roll",
    "Professor Rekt",
    "Catcher in the Rekt",
    "Rekt-22",
    "Harry Potter: The Half-Rekt Prince",
    "Great Rektspectations",
    "Paper Scissors Rekt",
    "RektCraft",
    "Grand Rekt Auto V",
    "Call of Rekt: Modern Reking 2",
    "Legend Of Zelda: Ocarina of Rekt",
    "Rekt It Ralph",
    "Left 4 Rekt",
    "www.rekkit.com",
    "Pokemon: Fire Rekt",
    "The Shawshank Rektemption",
    "The Rektfather",
    "The Rekt Knight",
    "Fiddler on the Rekt",
    "The Rekt Files",
    "The Good, the Bad, and The Rekt",
    "Forrekt Gump",
    "The Silence of the Rekts",
    "The Green Rekt",
    "Gladirekt",
    "Spirekted Away",
    "Terminator 2: Rektment Day",
    "The Rekt Knight Rises",
    "The Rekt King",
    "REKT-E",
    "Citizen Rekt",
    "Requiem for a Rekt",
    "REKT TO REKT ass to ass",
    "Star Wars: Episode VI - Return of the Rekt",
    "Braverekt",
    "Batrekt Begins",
    "2001: A Rekt Odyssey",
    "The Wolf of Rekt Street",
    "Rekt's Labyrinth",
    "12 Years a Rekt",
    "Gravirekt",
    "Finding Rekt",
    "The Arekters",
    "There Will Be Rekt",
    "Christopher Rektellston",
    "Hachi: A Rekt Tale",
    "The Rekt Ultimatum",
    "Shrekt",
    "Rektal Exam",
    "Rektium for a Dream",
    "www.Trekt.tv",
    "Erektile Dysfunction"
];

let rekt = (robot: Robot) => {
    robot.hear(/rekt/i, (res) => {
        res.send(`${unchecked} Not rekt\n${checked} ${res.random(rekts)}`);
    });
};

export = rekt