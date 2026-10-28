// Lektieplanen. Ret her, når der kommer nye ugeplaner.
// Hver opgave skal have et unikt id. Ændr aldrig et id, der allerede er i brug,
// ellers forsvinder fluebenet for den opgave.
// kind: "lektie" (hjemme), "forbered" (vær klar til timen), "medbring" (husk i tasken)

window.PLAN = {
  weeks: [
    {
      id: "u44", name: "Uge 44", dates: "26.–30. okt", start: "2026-10-26",
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
      ]
    },
    {
      id: "u45", name: "Uge 45", dates: "2.–6. nov", start: "2026-11-02",
      note: "Projektuge. Ingen almindelig undervisning i engelsk, fransk og fysik/kemi.",
      subjects: [
        { name: "Projektopgaven", info: [],
          tasks: [
            { id: "u45-pr-plan", kind: "lektie", what: "Lav en plan for ugen sammen med gruppen", why: "Hvem gør hvad, og hvornår skal det være færdigt?" },
            { id: "u45-pr-arb", kind: "lektie", what: "Arbejd på projektopgaven hver dag" },
            { id: "u45-pr-aflev", kind: "lektie", what: "Tjek kravene og afleveringen for projektopgaven" },
          ] },
        { name: "Matematik", info: [],
          tasks: [
            { id: "u45-ma-shole", kind: "forbered", what: "Gør Sholé klar inden onsdag 11/11", due: "11/11" },
          ] },
      ]
    },
    {
      id: "u46", name: "Uge 46", dates: "9.–13. nov", start: "2026-11-09",
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
    { date: "2.–6. nov", text: "Projektuge", ids: ["u45-pr-plan", "u45-pr-arb", "u45-pr-aflev"] },
    { date: "Ons 11/11", text: "Matematik: Sholé-dag", ids: ["u46-ma-shole"] },
  ],
};
