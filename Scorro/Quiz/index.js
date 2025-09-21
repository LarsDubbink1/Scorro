let QuestionPickerDiv = document.getElementById("QuestionsPicker");
let QuestionsDiv = document.getElementById("QuestionsDiv");

let randomNummer

const DierenInfo = [
    {Naam:"Bearded Collie",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Bearded-Collie.jpg"},
    {Naam:"Mechelse Herdershond",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Mechelse-Herder.png"},
    {Naam:"Bouvier des Flandres",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Bouvier-des-Flandres.jpg"},
    {Naam:"Briard",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Briard.JPG"},
    {Naam:"Stokharige Duitse Herdershond",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Stokharige-Duitse-Herder.jpg"},
    {Naam:"Langstokharige Duitse Herdershond",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Langstokharige-Duitse-Herder.jpg"},
    {Naam:"Kortharige Hollandse Herdershond",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Hollandse-Herder.jpg"},
    {Naam:"Langharige Hollandse Herdershond",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Langharige-Hollandse-Herder.jpg"},
    {Naam:"Ruwharige Hollandse Herdershond",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Ruwharige-Hollandse-Herder.jpg"},
    {Naam:"Nederlandse Schapendoes",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Nederlandse-Schapendoes.jpg"},
    {Naam:"Old English Sheepdog",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Old-English-Sheepdog.jpg"},
    {Naam:"Shetland Sheepdog",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Shetland-Sheepdog.jpg"},
    {Naam:"Zwitserse Witte Herdershond",Diersoort:"Hond",Soort:"HEV",IMGPad:"../Diersoorten/Fotos/Honden/Zwitserse-Witte-Herder.jpg"},
    {Naam:"Appenzeller Sennenhond",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/appenzeller-sennenhond.jpg"},
    {Naam:"Berner Sennenhond",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Berner-Sennen.jpg"},
    {Naam:"Bordeaux Dog",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/bordeaux-dog.jpg"},
    {Naam:"Boxer",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Boxer.jpg"},
    {Naam:"Bullmastiff",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/bullmastiff.jpg"},
    {Naam:"Doberman",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/dobermann.jpg"},
    {Naam:"Gele Duitse Dog",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Gele-Duitse-Dog.jpg"},
    {Naam:"Gestroomde Duitse Dog",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Gestroomde-Duitse-Dog.jpg"},
    {Naam:"Zwarte Duitse Dog",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Zwarte-Duitse-Dog.jpg"},
    {Naam:"Gevlekte/Harlekijn Duitse Dog",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Gevlekte-Duitse-Dog.jpg"},
    {Naam:"Blauwe Duitse Dog",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Blauwe-Duitse-Dog.jpeg"},
    {Naam:"Duitse Pinscher",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Duitse-Pinscher.jpg"},
    {Naam:"Engelse Bulldog",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Engelse-Bulldog.jpg"},
    {Naam:"Grote Zwitserse Sennenhond",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/grote-zwitserse-sennenhond.png"},
    {Naam:"Hovawart",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Hovawart.jpg"},
    {Naam:"Leonberger",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Leonberger.jpg"},
    {Naam:"Newfoundlander",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Newfoundlander.jpg"},
    {Naam:"Zwarte Riesenschnauzer",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Zwarte-Riesenschnauzer.jpg"},
    {Naam:"Peper-en-zwarte Riesenschnauzer",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Peper-en-Zout-Riesenschnauzer.jpg"},
    {Naam:"Zwart-zilveren Riesenschnauzer",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Zwart-Zilveren-Riesenschnauzer.jpg"},
    {Naam:"Rottweiler",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/rottweiler.jpg"},
    {Naam:"Shar-Pei",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/shar-pei.jpg"},
    {Naam:"Kortharige Sint Bernard",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Sint-Bernard.jpg"},
    {Naam:"Langharige Sint Bernard",Diersoort:"Hond",Soort:"PSMS",IMGPad:"../Diersoorten/Fotos/Honden/Langharige-Sint-Bernard.jpg"},
    {Naam:"Airedale Terrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/Airedale-Terrier.jpg"},
    {Naam:"American Staffordshire Terrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/American-Staffordshire-Terrier.jpg"},
    {Naam:"Bull Terrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/Bull-Terrier.jpg"},
    {Naam:"Cairn Terrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/Cairn-Terrier.jpg"},
    {Naam:"Draadharige Foxterrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/Draadharige-Fox-Terrier.jpg"},
    {Naam:"Gladharige Foxterrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/Gladharige-Fox-Terrier.jpg"},
    {Naam:"Jack Russel Terrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/Jack-Russel-Terrier.png"},
    {Naam:"Staffordshire Bull Terrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/Staffordshire-Bull-Terrier.jpg"},
    {Naam:"West Highland White Terrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/West-Highland-White-Terrier.jpg"},
    {Naam:"Yorkshire Terrier",Diersoort:"Hond",Soort:"T",IMGPad:"../Diersoorten/Fotos/Honden/Yorkshire-Terrier.jpg"},
    {Naam:"Kortharige Dashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Standaard-Dashond.jpg"},
    {Naam:"Langharige Dashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Langharige-Standaard-Dashond.jpg"},
    {Naam:"Ruwharige Dashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Ruwharige-Standaard-Dashond.jpg"},
    {Naam:"Kortharige Dwergdashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Dwergdashond.jpg"},
    {Naam:"Langharige Dwergdashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Langharige-Dwergdashond.jpg"},
    {Naam:"Ruwharige Dwergdashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Ruwharige-Dwergdashond.jpg"},
    {Naam:"Kortharige Kaninchen Dashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Kaninchen-Dashond.jpg"},
    {Naam:"Langharige Kaninchen Dashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Langharige-Kaninchen-Dashond.jpg"},
    {Naam:"Ruwharige Kaninchen Dashond",Diersoort:"Hond",Soort:"D",IMGPad:"../Diersoorten/Fotos/Honden/Ruwharige-Kaninchen-dashond.jpg"},
    {Naam:"Akita",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/Akita.jpg"},
    {Naam:"Alaska Malamute",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/Alaskan_Malamute.jpg"},
    {Naam:"Basenji",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/basenji.jpg"},
    {Naam:"Chow Chow",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/chow-chow.jpg"},
    {Naam:"Dwergkeeshond",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/Dwergkeeshond.jpg"},
    {Naam:"Kleine Keeshond",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/Kleine-Keeshond.jpg"},
    {Naam:"Samojeed",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/Samojeed.jpg"},
    {Naam:"Shiba",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/Shiba.jpg"},
    {Naam:"Siberian Husky",Diersoort:"Hond",Soort:"SO",IMGPad:"../Diersoorten/Fotos/Honden/Siberian-Husky.jpg"},
    {Naam:"Basset Hound",Diersoort:"Hond",Soort:"LZ",IMGPad:"../Diersoorten/Fotos/Honden/Basset-Hound.jpg"},
    {Naam:"Beagle",Diersoort:"Hond",Soort:"LZ",IMGPad:"../Diersoorten/Fotos/Honden/beagle.jpg"},
    {Naam:"Dalmatische Hond",Diersoort:"Hond",Soort:"LZ",IMGPad:"../Diersoorten/Fotos/Honden/Dalmatische-Hond.jpg"},
    {Naam:"Rhodesian Ridgeback",Diersoort:"Hond",Soort:"LZ",IMGPad:"../Diersoorten/Fotos/Honden/rhodesian-ridgeback.jpg"},
    {Naam:"Drentsche Patrijshond",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Drentsche-Patrijshond.jpg"},
    {Naam:"Kortharige Duitse Staande Hond",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Duitse-Staande-Hond.jpg"},
    {Naam:"Draadharige Duitse Staande Hond",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Draadharige-Duitse-Staande-Hond.jpg"},
    {Naam:"Langharige Duitse Staande Hond",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Langharige-Duitse-Staande-Hond.jpg"},
    {Naam:"Heidewachtel",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Heidewachtel.jpg"},
    {Naam:"Ierse Setter",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/ierse-setter.jpg"},
    {Naam:"Pointer",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Pointer.jpg"},
    {Naam:"Stabijhoun",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Stabijhoun.jpg"},
    {Naam:"Kortharige Vizsla",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Vizsla.jpg"},
    {Naam:"Draadharige Vizsla",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Draadharige-Vizsla.jpg"},
    {Naam:"Kortharige Weimaraner",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Weimaraner.jpg"},
    {Naam:"Langharige Weimaraner",Diersoort:"Hond",Soort:"S",IMGPad:"../Diersoorten/Fotos/Honden/Langharige-Weimaraner.jpg"},
    {Naam:"Engelse Cocker Spaniel",Diersoort:"Hond",Soort:"RWS",IMGPad:"../Diersoorten/Fotos/Honden/engelse-cockerspaniel.jpg"},
    {Naam:"Flatcoated Retriever",Diersoort:"Hond",Soort:"RWS",IMGPad:"../Diersoorten/Fotos/Honden/flatcoated-retriever.jpg"},
    {Naam:"Golden Retriever",Diersoort:"Hond",Soort:"RWS",IMGPad:"../Diersoorten/Fotos/Honden/Golden_Retriever.jpg"},
    {Naam:"Labrador Retriever",Diersoort:"Hond",Soort:"RWS",IMGPad:"../Diersoorten/Fotos/Honden/Labrador-Retriever.jpg"},
    {Naam:"Nederlandse Kooikerhondje",Diersoort:"Hond",Soort:"RWS",IMGPad:"../Diersoorten/Fotos/Honden/nederlandse-kooikerhondje.jpg"},
    {Naam:"Nova Scotia Duck Tolling Retriever",Diersoort:"Hond",Soort:"RWS",IMGPad:"../Diersoorten/Fotos/Honden/Nova-Scotia-Duck-Tolling-Retriever.jpg"},
    {Naam:"Portugese Waterhond (Cão de Água Português)",Diersoort:"Hond",Soort:"RWS",IMGPad:"../Diersoorten/Fotos/Honden/Portugese-Waterhond.jpg"},
    {Naam:"Wetterhoun",Diersoort:"Hond",Soort:"RWS",IMGPad:"../Diersoorten/Fotos/Honden/wetterhound.jpg"},
    {Naam:"Cavalier King Charles Spaniel",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/Cavalier-King-Charles-Spaniel.jpg"},
    {Naam:"Kortharige Chihuahua",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/Kortharige-Chihuahua.jpg"},
    {Naam:"Langharige Chihuahua",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/Langharige-Chihuahua.jpg"},
    {Naam:"Chinese Naakthond",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/Chinese-Naakthond.jpg"},
    {Naam:"Franse Bulldog",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/franse-bulldog.jpg"},
    {Naam:"Maltezer",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/maltezer.jpg"},
    {Naam:"Mopshond",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/mopshond.jpg"},
    {Naam:"Dwergpoedel",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/Dwergpoedel.jpg"},
    {Naam:"Grote Poedel",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/grote-poedel.jpg"},
    {Naam:"Middenslag Poedel",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/Middenslag-Poedel.jpg"},
    {Naam:"Shih Tzu",Diersoort:"Hond",Soort:"G",IMGPad:"../Diersoorten/Fotos/Honden/shih-tzu.jpg"},
    {Naam:"Afghaanse Windhond",Diersoort:"Hond",Soort:"W",IMGPad:"../Diersoorten/Fotos/Honden/Afghaanse-Windhond.jpg"},
    {Naam:"Greyhound",Diersoort:"Hond",Soort:"W",IMGPad:"../Diersoorten/Fotos/Honden/greyhound.jpg"},
    {Naam:"Ierse Wolfshond",Diersoort:"Hond",Soort:"W",IMGPad:"../Diersoorten/Fotos/Honden/Ierse-Wolfshond.jpg"},
    {Naam:"Whippet",Diersoort:"Hond",Soort:"W",IMGPad:"../Diersoorten/Fotos/Honden/Whippet.jpg"},
    {Naam:"Abessijn",Diersoort:"Kat",Soort:"K",IMGPad:"../Diersoorten/Fotos/Katten/Abessijn.jpg"},
    {Naam:"Bengaal",Diersoort:"Kat",Soort:"K",IMGPad:"../Diersoorten/Fotos/Katten/Bengaal.jpg"},
    {Naam:"Brits Korthaar",Diersoort:"Kat",Soort:"K",IMGPad:"../Diersoorten/Fotos/Katten/Brits-Korthaar.jpg"},
    {Naam:"Burmees",Diersoort:"Kat",Soort:"K",IMGPad:"../Diersoorten/Fotos/Katten/Burmees.jpg"},
    {Naam:"Europees korthaar",Diersoort:"Kat",Soort:"K",IMGPad:"../Diersoorten/Fotos/Katten/Europees-korthaar.jpg"},
    {Naam:"Exotic",Diersoort:"Kat",Soort:"K",IMGPad:"../Diersoorten/Fotos/Katten/Exotic.jpg"},
    {Naam:"Manx",Diersoort:"Kat",Soort:"K",IMGPad:"../Diersoorten/Fotos/Katten/Manx.jpg"},
    {Naam:"Siamees",Diersoort:"Kat",Soort:"K",IMGPad:"../Diersoorten/Fotos/Katten/Siamees.jpg"},
    {Naam:"Balinees",Diersoort:"Kat",Soort:"HL",IMGPad:"../Diersoorten/Fotos/Katten/Balinees.jpg"},
    {Naam:"Heilige Birmaan",Diersoort:"Kat",Soort:"HL",IMGPad:"../Diersoorten/Fotos/Katten/Heilige-Birmaan.jpg"},
    {Naam:"Maine Coon",Diersoort:"Kat",Soort:"HL",IMGPad:"../Diersoorten/Fotos/Katten/Maine-Coon.jpg"},
    {Naam:"Noorse Boskat",Diersoort:"Kat",Soort:"HL",IMGPad:"../Diersoorten/Fotos/Katten/Noorse-Boskat.png"},
    {Naam:"Ragdoll",Diersoort:"Kat",Soort:"HL",IMGPad:"../Diersoorten/Fotos/Katten/Ragdoll.png"},
    {Naam:"Somali",Diersoort:"Kat",Soort:"HL",IMGPad:"../Diersoorten/Fotos/Katten/Somali.jpg"},
    {Naam:"Turkse Van",Diersoort:"Kat",Soort:"HL",IMGPad:"../Diersoorten/Fotos/Katten/Turkse-Van.jpg"},
    {Naam:"Perzisch langhaar",Diersoort:"Kat",Soort:"L",IMGPad:"../Diersoorten/Fotos/Katten/Perzisch-langhaar.jpg"},
    {Naam:"Sphynx",Diersoort:"Kat",Soort:"BH",IMGPad:"../Diersoorten/Fotos/Katten/Sphynx.jpg"},
    {Naam:"Devon Rex",Diersoort:"Kat",Soort:"BH",IMGPad:"../Diersoorten/Fotos/Katten/Devon-Rex.jpg"}
];


function GenerateQuestion(KattenTF, HondenTF) {
    console.log("Honden geselecteerd: " + HondenTF + " Katten geselecteerd: " + KattenTF);
    if (HondenTF == true && KattenTF == false) {
        randomNummer = Math.floor(Math.random() * 103);
    } else if (HondenTF == false && KattenTF == true) {
        randomNummer = Math.floor(Math.random() * (DierenInfo.length - 103)) + 103;
    } else if (HondenTF == true && KattenTF == true) {
        randomNummer = Math.floor(Math.random() * DierenInfo.length)
    }
    console.log(randomNummer);
    if (randomNummer <= 102) {
        document.getElementById("SelecteerHondenSoort").style.display = "block";
        document.getElementById("SelecteerKattenSoort").style.display = "none";
    } else {
        document.getElementById("SelecteerHondenSoort").style.display = "none";
        document.getElementById("SelecteerKattenSoort").style.display = "block";
    }
    document.getElementById("vraagFoto").src = DierenInfo[randomNummer].IMGPad;
}

function AntwoordInvoeren() {
    let RasGoedTekst = "is goed!"
    let RasFoutTekst = "is fout!"
    let Rassoort
    if (DierenInfo[randomNummer].Soort == "HEV") {
        Rassoort = "Herdershonden en veedrijvers"
    } else if (DierenInfo[randomNummer].Soort == "PSMS") {
        Rassoort = "Pinschers en Schnauzers, Mollosers en Sennehonden"
    } else if (DierenInfo[randomNummer].Soort == "T") {
        Rassoort = "Terriërs"
    } else if (DierenInfo[randomNummer].Soort == "D") {
        Rassoort = "Dashonden"
    } else if (DierenInfo[randomNummer].Soort == "SO") {
        Rassoort = "Spitsen en Oertypes"
    } else if (DierenInfo[randomNummer].Soort == "LZ") {
        Rassoort = "Lopende honden en zweethonden"
    } else if (DierenInfo[randomNummer].Soort == "S") {
        Rassoort = "Staande honden"
    } else if (DierenInfo[randomNummer].Soort == "RWS") {
        Rassoort = "Retrievers, waterhonden en spaniels"
    } else if (DierenInfo[randomNummer].Soort == "G") {
        Rassoort = "Gezelschapshonden"
    } else if (DierenInfo[randomNummer].Soort == "W") {
        Rassoort = "Windhonden"
    } else if (DierenInfo[randomNummer].Soort == "K") {
        Rassoort = "Kortharig"
    } else if (DierenInfo[randomNummer].Soort == "HL") {
        Rassoort = "Half langharig"
    } else if (DierenInfo[randomNummer].Soort == "L") {
        Rassoort = "Langharig"
    } else if (DierenInfo[randomNummer].Soort == "BH") {
        Rassoort = "Bijzondere haarstructuur"
    }
if (
  randomNummer <= 102 &&
  document.getElementById("SelecteerHondenSoort").value.toLowerCase() != DierenInfo[randomNummer].Soort.toLowerCase() &&
  document.getElementById("DierenRasVraag").value.toLowerCase() != DierenInfo[randomNummer].Naam.toLowerCase()
) {
  console.log(DierenInfo[randomNummer].Soort + " " + Rassoort);
  document.getElementById("antwoordCheckerTekst").innerHTML =
    "Dat ras " +
    RasFoutTekst +
    " Het juiste ras was " +
    DierenInfo[randomNummer].Naam +
    ". De soort ras ook niet, de juiste soort is " +
    Rassoort;
} else if (
  randomNummer <= 102 &&
  document.getElementById("SelecteerHondenSoort").value.toLowerCase() == DierenInfo[randomNummer].Soort.toLowerCase() &&
  document.getElementById("DierenRasVraag").value.toLowerCase() != DierenInfo[randomNummer].Naam.toLowerCase()
) {
  document.getElementById("antwoordCheckerTekst").innerHTML =
    "Dat ras " +
    RasFoutTekst +
    " Het juiste ras was " +
    DierenInfo[randomNummer].Naam +
    ". De soort ras wel!";
} else if (
  randomNummer <= 102 &&
  document.getElementById("SelecteerHondenSoort").value.toLowerCase() != DierenInfo[randomNummer].Soort.toLowerCase() &&
  document.getElementById("DierenRasVraag").value.toLowerCase() == DierenInfo[randomNummer].Naam.toLowerCase()
) {
  document.getElementById("antwoordCheckerTekst").innerHTML =
    "Dat ras " +
    RasGoedTekst +
    " De soort niet, de juiste soort is " +
    Rassoort;
} else if (
  randomNummer <= 102 &&
  document.getElementById("SelecteerHondenSoort").value.toLowerCase() == DierenInfo[randomNummer].Soort.toLowerCase() &&
  document.getElementById("DierenRasVraag").value.toLowerCase() == DierenInfo[randomNummer].Naam.toLowerCase()
) {
  document.getElementById("antwoordCheckerTekst").innerHTML =
    "Dat ras " + RasGoedTekst + " De soort ook!";
} else if (
  randomNummer >= 103 &&
  document.getElementById("SelecteerKattenSoort").value.toLowerCase() != DierenInfo[randomNummer].Soort.toLowerCase() &&
  document.getElementById("DierenRasVraag").value.toLowerCase() != DierenInfo[randomNummer].Naam.toLowerCase()
) {
  console.log(DierenInfo[randomNummer].Soort + " " + Rassoort);
  document.getElementById("antwoordCheckerTekst").innerHTML =
    "Dat ras " +
    RasFoutTekst +
    " Het juiste ras was " +
    DierenInfo[randomNummer].Naam +
    ". De soort ras ook niet, de juiste soort is " +
    Rassoort;
} else if (
  randomNummer >= 103 &&
  document.getElementById("SelecteerKattenSoort").value.toLowerCase() == DierenInfo[randomNummer].Soort.toLowerCase() &&
  document.getElementById("DierenRasVraag").value.toLowerCase() != DierenInfo[randomNummer].Naam.toLowerCase()
) {
  document.getElementById("antwoordCheckerTekst").innerHTML =
    "Dat ras " +
    RasFoutTekst +
    " Het juiste ras was " +
    DierenInfo[randomNummer].Naam +
    ". De soort ras wel!";
} else if (
  randomNummer >= 103 &&
  document.getElementById("SelecteerKattenSoort").value.toLowerCase() != DierenInfo[randomNummer].Soort.toLowerCase() &&
  document.getElementById("DierenRasVraag").value.toLowerCase() == DierenInfo[randomNummer].Naam.toLowerCase()
) {
  document.getElementById("antwoordCheckerTekst").innerHTML =
    "Dat ras " +
    RasGoedTekst +
    " De soort niet, de juiste soort is " +
    Rassoort;
} else if (
  randomNummer >= 103 &&
  document.getElementById("SelecteerKattenSoort").value.toLowerCase() == DierenInfo[randomNummer].Soort.toLowerCase() &&
  document.getElementById("DierenRasVraag").value.toLowerCase() == DierenInfo[randomNummer].Naam.toLowerCase()
) {
  document.getElementById("antwoordCheckerTekst").innerHTML =
    "Dat ras " + RasGoedTekst + " De soort ook!";
}


    document.getElementById("DierenRasVraag").value = null
    GenerateQuestion(document.getElementById('KattenOefenen').checked, document.getElementById('HondenOefenen').checked)
}

function startQuiz() {
    if (document.getElementById('KattenOefenen').checked == true || document.getElementById('HondenOefenen').checked == true) {
        QuestionPickerDiv.style.display = "none";
        QuestionsDiv.style.display = "flex"
        GenerateQuestion(document.getElementById('KattenOefenen').checked, document.getElementById('HondenOefenen').checked)
    } else {
        alert("Er is geen keuze gemaakt")
    }
}