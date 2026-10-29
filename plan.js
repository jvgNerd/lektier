// Lektieplanen. Ret her, når der kommer nye ugeplaner.
// Hver opgave skal have et unikt id. Ændr aldrig et id, der allerede er i brug,
// ellers forsvinder fluebenet for den opgave.
// kind: "lektie" (hjemme), "forbered" (vær klar til timen), "medbring" (husk i tasken)

// Skema: timerne står i rækkefølge for hver dag. n = antal lektioner i træk.
// Lokale 209 er klassens eget og vises ikke.
const SUBJ = { MAT: "Matematik", ENG: "Engelsk", BIO: "Biologi", GEO: "Geografi", FK: "Fysik/kemi", SAM: "Samfundsfag",
  DAN: "Dansk", KRI: "Kristendomskundskab", FRA: "Fransk", HIS: "Historie", IDR: "Idræt", KM: "Klassens time" };
const L = (s, n, teacher, room) => ({ subject: SUBJ[s], n, teacher, room: room || "" });

window.PLAN = {
  schedules: {
    normal: {
      man: [L("MAT", 2, "JRJ, KM"), L("ENG", 2, "AF"), L("BIO", 1, "MP", "313 Biologi"), L("BIO", 1, "MP"), L("GEO", 1, "MP"), L("FK", 1, "MP")],
      tir: [L("MAT", 2, "JRJ, KM"), L("SAM", 2, "LMA"), L("DAN", 3, "MSJ, SCO")],
      ons: [L("KRI", 1, "AF"), L("FRA", 1, "AF"), L("HIS", 2, "LMA"), L("ENG", 1, "AF")],
      tor: [L("FRA", 2, "AF"), L("DAN", 2, "MSJ, SCO"), L("MAT", 1, "JRJ, KM"), L("IDR", 2, "", "Hal 3, med 9C")],
      fre: [L("IDR", 2, "MD", "Hal 2, hele 9. årgang"), L("DAN", 2, "MSJ, SCO"), L("KM", 1, "SCO"), L("FK", 2, "MP", "308 Fysik/kemi")],
    },
    projektuge: {
      man: [{ subject: "Projekt: problemstilling og gruppekontrakt", time: "08:45–13:30" }],
      tir: [{ subject: "Projekt: research og produkt", time: "08:45–13:30" }],
      ons: [{ subject: "Projekt: research og produkt", time: "08:45–13:30" }],
      tor: [{ subject: "Projekt: aflevering af produkt og synopsis", time: "08:45–13:30" }],
      fre: [{ subject: "Projekt: fremlæggelser", time: "Se fremlæggelsesplanen" }],
    },
  },

  weeks: [
    {
      id: "u44", name: "Uge 44", dates: "26.–30. okt", start: "2026-10-26",
      schedule: "normal", scheduleNote: "Torsdag: vikar i idræt.",
      subjects: [
        { name: "Dansk", info: ["Opstart på podcast-forløb: teori og lydklip", "“Ulriks telefon” og “Hitler på teenageværelset” med spørgsmål", "Retskrivnings- og læseprøver", "Læseboost"],
          tasks: [
            { id: "u44-da-moerke", kind: "lektie", what: "Lyt til “Mørkevandring” og svar på spørgsmålene", due: "Til torsdag 29/10" },
          ] },
        { name: "Fysik/kemi", info: ["FFF-fremlæggelser, resten af klassen lytter"],
          tasks: [
            { id: "u44-fk-fff", kind: "forbered", what: "Øv FFF-fremlæggelsen med gruppen", why: "Din gruppe er nr. 4 på listen." },
          ] },
        { name: "Geografi", info: ["Fremlæggelse af FFF"],
          tasks: [
            { id: "u44-ge-fff", kind: "forbered", what: "Vær klar til at fremlægge FFF" },
          ] },
        { name: "Biologi", info: ["Fremlæggelserne starter"],
          tasks: [
            { id: "u44-bi-frem", kind: "forbered", what: "Tjek at din fremlæggelse er klar" },
          ] },
        { name: "Matematik", info: ["Ligninger", "Forberedelse til Sholé-dagen"],
          tasks: [
            { id: "u44-ma-shole", kind: "forbered", what: "Forbered Sholé-opgaven", why: "Den store Sholé-dag er onsdag 11. november.", due: "11/11" },
          ] },
        { name: "Engelsk", info: ["Engelskprøve: lytte og læse (Alinea)", "Role reading-opgave"],
          tasks: [
            { id: "u44-en-proeve", kind: "forbered", what: "Vær klar til lytte- og læseprøve på Alinea", why: "Husk høretelefoner og login." },
          ] },
        { name: "Fransk", info: ["Lytte- og læsetest på Alinea"],
          tasks: [
            { id: "u44-fr-guade", kind: "lektie", what: "Færdiggør opgaven om Guadeloupe og Danmark", why: "Skal være færdig inden projektugen." },
            { id: "u44-fr-proeve", kind: "forbered", what: "Vær klar til lytte- og læsetest på Alinea", why: "Testen er rykket frem til denne uge pga. projektugen. Husk høretelefoner og login." },
          ] },
        { name: "Idræt", info: ["Bevægelsesanalyse: krav, selvstændigt arbejde og afleveringsdato"],
          tasks: [
            { id: "u44-id-video", kind: "lektie", what: "Upload én video af dit højdespring til Idrætskanalen på Skoletube" },
            { id: "u44-id-valg", kind: "lektie", what: "Vælg sammen med gruppen hvilken video I analyserer" },
            { id: "u44-id-dato", kind: "forbered", what: "Skriv afleveringsdatoen for bevægelsesanalysen ned", why: "Datoen oplyses i timen. Fortæl den derhjemme." },
          ] },
        { name: "Samfundsfag", info: ["Arbejdsmarkedet: arbejdsløshed og flexicurity"],
          tasks: [
            { id: "u44-sa-comp", kind: "medbring", what: "Computer", why: "Ingen lektier." },
          ] },
        { name: "Historie", info: ["Sidste fremlæggelse og afslutningen på den kolde krig"],
          tasks: [
            { id: "u44-hi-comp", kind: "medbring", what: "Computer" },
          ] },
        { name: "Kristendomskundskab", info: ["Læser “Kort om etik” og “Hvad er etik og moral?” og besvarer spørgsmål"], tasks: [] },
        { name: "Projektopgaven", info: ["Projektugen er i uge 45"],
          tasks: [
            { id: "u44-pr-gruppe", kind: "lektie", what: "Skriv til klasselæreren: gruppe, tema og forslag til delemne", due: "Inden mandag 26/10", why: "Grupper på 1–3 elever fra eget miniteam." },
          ] },
      ]
    },
    {
      id: "u45", name: "Uge 45", dates: "2.–6. nov", start: "2026-11-02",
      schedule: "projektuge", scheduleNote: "Projektuge: tjek ind hos vejlederen kl. 08:45 og ud kl. 13:30.",
      note: "Projektuge. Tjek ind hos vejlederen kl. 08:45 og ud kl. 13:30 hver dag. Arbejde hjemme eller ude i byen skal aftales med vejlederen og skrives på tavlen. Der gives ingen karakter, men en skriftlig udtalelse, som også sendes til forældrene senest 20. november.",
      subjects: [
        { name: "Mandag 2/11: Problemstilling", info: ["Tema: Kriser, Udvikling og betydning eller Modsætninger"],
          tasks: [
            { id: "u45-pr-problem", kind: "lektie", what: "Skriv gruppens problemstilling" },
            { id: "u45-pr-kontrakt", kind: "lektie", what: "Lav gruppekontrakten og få den godkendt af vejlederen", due: "Mandag" },
          ] },
        { name: "Tirsdag–torsdag: Research og produkt", info: ["Research, kreativt produkt og forberedelse af præsentationen"],
          tasks: [
            { id: "u45-pr-vejl1", kind: "lektie", what: "Hold 1. vejledning med vejlederen" },
            { id: "u45-pr-vejl2", kind: "lektie", what: "Hold 2. vejledning med vejlederen", why: "Begge vejledninger skal holdes tirsdag, onsdag eller torsdag." },
            { id: "u45-pr-produkt", kind: "lektie", what: "Lav det kreative produkt" },
          ] },
        { name: "Synopsis", info: [],
          tasks: [
            { id: "u45-sy-problem", kind: "lektie", what: "Problemstilling" },
            { id: "u45-sy-dispo", kind: "lektie", what: "Disposition" },
            { id: "u45-sy-produkt", kind: "lektie", what: "Beskrivelse af produktet og hvordan det bruges i fremlæggelsen" },
            { id: "u45-sy-kilder", kind: "lektie", what: "Kildeliste" },
          ] },
        { name: "Torsdag 5/11: Aflevering", info: [],
          tasks: [
            { id: "u45-pr-aflever", kind: "lektie", what: "Aflever produkt og synopsis", due: "Torsdag inden dagen slutter" },
            { id: "u45-pr-oev", kind: "forbered", what: "Øv fremlæggelsen og tag tid", why: "1 elev: 10 min · 2 elever: 15 min · 3 elever: 20 min, plus spørgsmål." },
          ] },
        { name: "Fredag 6/11: Fremlæggelse", info: ["I fremlægger for jeres egen vejleder og en anden vejleder fra miniteamet"],
          tasks: [
            { id: "u45-pr-tid", kind: "forbered", what: "Find ud af hvornår I fremlægger, og hvornår du er tilskuer", why: "Planen for fremlæggelserne kommer i løbet af ugen." },
            { id: "u45-pr-frem", kind: "lektie", what: "Fremlæg projektet" },
          ] },
        { name: "Matematik", info: [],
          tasks: [
            { id: "u45-ma-shole", kind: "forbered", what: "Gør Sholé klar inden onsdag 11/11", due: "11/11" },
          ] },
      ]
    },
    {
      id: "u46", name: "Uge 46", dates: "9.–13. nov", start: "2026-11-09",
      schedule: "normal", scheduleNote: "Normalskemaet fra uge 44. Tjek Aula for ændringer, fx Sholé-dagen onsdag.",
      subjects: [
        { name: "Matematik", info: ["Den store Sholé-dag onsdag 11. november"],
          tasks: [
            { id: "u46-ma-shole", kind: "forbered", what: "Klar til Sholé-dagen", due: "Onsdag 11/11" },
          ] },
        { name: "Dansk", info: ["“Drengen på knallerten”: podcast og opgaver", "“Kvinden med den tunge kuffert”", "Opsamling på podcast-forløbet", "Læseboost og grammatik"], tasks: [] },
        { name: "Fransk", info: ["Fiche d'identité om Belgien"],
          tasks: [
            { id: "u46-fr-belg", kind: "forbered", what: "Find din Fiche d'identité om Belgien frem", why: "I arbejder videre med den." },
          ] },
        { name: "Kristendomskundskab", info: ["Opfølgning på “Hvad er etik og moral”", "“Min fede træner”"],
          tasks: [
            { id: "u46-kr-etik", kind: "forbered", what: "Genlæs dine svar til “Hvad er etik og moral”" },
          ] },
        { name: "Fysik/kemi", info: ["Den sidste gruppe fremlægger FFF"], tasks: [] },
      ]
    },
  ],

  deadlines: [
    { date: "Tor 29/10", text: "Dansk: “Mørkevandring” og spørgsmål", ids: ["u44-da-moerke"] },
    { date: "Uge 44", text: "Idræt: højdespringsvideo uploadet og valgt", ids: ["u44-id-video", "u44-id-valg"] },
    { date: "Uge 44", text: "Fransk: Guadeloupe og Danmark færdig", ids: ["u44-fr-guade"] },
    { date: "Man 2/11", text: "Projekt: gruppekontrakt godkendt", ids: ["u45-pr-kontrakt"] },
    { date: "Tor 5/11", text: "Projekt: produkt og synopsis afleveret", ids: ["u45-pr-aflever"] },
    { date: "Fre 6/11", text: "Projekt: fremlæggelse", ids: ["u45-pr-frem"] },
    { date: "Ons 11/11", text: "Matematik: Sholé-dag", ids: ["u46-ma-shole"] },
  ],
};
