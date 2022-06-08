/*const http = require('http')
const express = require('express')
const app = express()
const PORT = 8000
const cors = require("cors")

app.use(cors())

app.get('/', (request, response) => {
    //console.log('dir name is: %s', __dirname)
    //response.sendFile(__dirname + '/index.html')
    response.send("hello")
})

/*app.get('/api/:commanderName', (request, response) => {
    let commanderName = request.params.commanderName.toLowerCase()
    if(commander[commanderName]){
        response.json(commander[commanderName])
    } else {
        response.json("No commander found")
    }
})*/

/*let commander = {
    "elspeth resplendent": {
        "commander": "Elspeth, Resplendent", 
        "decklist": [
            'The Wandering Emperor', 
            'Plains', 
            'Gideon Blackblade', 
            'Castle Ardenvale', 
            "Elspeth, Sun's Nemesis", 
            "Emeria's Call", 
            'Teyo, Aegis Adept', 
            'Ugin, the Ineffable' ,
            'Eiganjo, Seat of the Empire',
            'Esper Sentinel' ,
            'Hopeful Initiate', 
            'Swords to Plowshares' ,
            'Luminarch Aspirant' ,
            'Ambitious Farmhand' ,
            'Unlicensed Hearse',
            'Pacifism' ,
            'Rune of Sustenance' ,
            'Spirited Companion',
            'Seal Away' ,
            'Thalia, Guardian of Thraben' ,
            'Tocatli Honor Guard' ,
            'Tithe Taker',
            'Valorous Stance ',
            'Adeline, Resplendent Cathar',
            'Banishing Light' ,
            'Borrowed Time' ,
            'Elite Spellbinder', 
            'Inspiring Overseer', 
            'Priest of Ancient Lore' ,
            'Skyclave Apparition ',
            'Prison Realm ',
            'The Restoration of Eiganjo' ,
            'Vryn Wingmare' ,
            'Archon of Absolution' ,
            'Felidar Retreat' ,
            'Baird, Steward of Argive' ,
            'Elesh Norn, Grand Cenobite', 
            'Rumor Gatherer' ,
            'Cosmos Elixir' ,
            'Lion Sash' ,
            'Welcoming Vampire' ,
            'Cathar Commando' ,
            'Hushbringer' ,
            'Linvala, Keeper of Silence' ,
            'Smothering Tithe',
            "Oketra's Monument", 
            'Mangara, the Diplomat' ,
            "Kinjalli's Sunwing" ,
            'Solemn Simulacrum' ,
            "Heliod's Intervention" ,
            'March of Otherworldly Light' ,
            'Settle the Wreckage' ,
            'Farewell' ,
            'Wrath of God' ,
            'Mind Stone' ,
            'Hedron Archive' ,
            'Arcane Signet' ,
            'Coldsteel Heart', 
            'Guardian Idol' ,
            'Archon of Emeria' ,
            'Reidane, God of the Worthy' ,
            'Arch of Orazca' ,
            'Field of Ruin' ,
            'Elspeth Conquers Death' ,
            'Loyal Warhound' ,
            'Celestial Vault' ,
            ]
    },
    "liesa, forgotten archangel": {
        "commander": "Liesa, Forgotten Archangel",
        "decklist": [
            "Segovian Angel", 
           " Snow-Covered Plains",
            "Speaker of the Heavens ",
            "Angel of Unity" ,
            "Youthful Valkyrie" ,
            "Angel of Vitality" ,
            "Giada, Font of Hope", 
            "Inspiring Overseer" ,
            "Resplendent Angel" ,
            "Righteous Valkyrie ",
            "Linvala, Keeper of Silence" ,
            "Starnheim Aspirant ",
           " Starnheim Unleashed" ,
            "Serra the Benevolent" ,
            "Thraben Watcher" ,
            "Angel of Destiny" ,
           " Angel of Invention ",
            "Angel of Grace ",
            "Angel of Sanctions ",
            "Lyra Dawnbringer ",
            "Elspeth Resplendent" ,
            "Baneslayer Angel" ,
            "Angelic Guardian" ,
            "Enduring Angel" ,
            "Sanctuary Warden", 
            "Valkyrie Harbinger" ,
            "Emeria's Call" ,
            "Angel of the Dire Hour ",
            "Sephara, Sky's Blade ",
           " Angel of Suffering" ,
            "Snow-Covered Swamp" ,
            "Eradicator Valkyrie" ,
            "Power Word Kill" ,
           " Great Hall of Starnheim ",
            "Seraph of the Scales ",
            "Firja's Retribution ",
            "Faceless Agent" ,
            "Bloodline Pretender" ,
            "Rampage of the Valkyries" ,
           " Elspeth Conquers Death" ,
            "The Eldest Reborn" ,
            "The Restoration of Eiganjo" ,
            "Valorous Stance" ,
            "Doomskar" ,
            "Vanquish the Horde" ,
            "Heartless Act" ,
            "Infernal Grasp" ,
            "Crux of Fate" ,
            "Mortify" ,
            "Godless Shrine" ,
            "Forsaken Sanctuary" ,
            "Brightclimb Pathway" ,
            "Concealed Courtyard" ,
            "Unburial Rites" ,
            "Isolated Chapel ",
            "Scoured Barrens" ,
            "Temple of Silence", 
            "Despark" ,
           " Vanishing Verse" ,
            "Etchings of the Chosen" ,
            "Cleric Class" ,
            "Blood on the Snow" ,
           " Icon of Ancestry" ,
            "Vanquisher's Banner ",
            "Bonders' Enclave" ,
            "Command Tower" ,
            "Cryptic Caves" ,
            "Evolving Wilds" ,
            "Fabled Passage" ,
            "Forsaken Crossroads" ,
            "Obscura Storefront" ,
            "Secluded Courtyard" ,
            "Unclaimed Territory" ,
            "Terramorphic Expanse" ,
            "Coldsteel Heart" ,
            "Arcane Signet" ,
            "Mind Stone" ,
            "Hedron Archive" ,
            "Skyclave Relic" ,
            "Eiganjo, Seat of the Empire" ,
            "Takenuma, Abandoned Mire "
            ]
    } 
}*/



/*app.listen(process.env.PORT || PORT, () => {                                                //environment variable OR hardcoded port
    console.log(`Listning on port ${PORT}`)
})
console.log(`Listening on port ${PORT}`)*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('Time is: %s', new Date().toLocaleString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})