'use strict';

/* ═══════════════════════════════════════════════════════
   1. ELEMENT CONFIGURATIONS
═══════════════════════════════════════════════════════ */
const ELEMENTS = [
  {
    id:'erde', title:'ERDE', num:'I',
    subtitle:'Beständigkeit · Gemeinschaft · Kreisläufe',
    netHeading:'Eine Welt aus Stein und Wachstum',
    netBody:'Architektur, Landwirtschaft und Gesellschaft folgen dem Rhythmus der Natur — langsam, tief verwurzelt, auf Jahrhunderte gebaut.',
    cardsIntroMono:'Die Geschichte der Erde', cardsIntroH2:'Eine Welt in Bildern',
    dividerMono:'Die Kehrseite', dividerH2:'Was Stabilität kostet',
    finaleMono:'Die Welt der Erde',
    finaleH2:'Keine Utopie.<br>Keine Dystopie.<br>Eine Möglichkeit.',
    finaleP:'Eine Zukunft voller atemberaubender Schönheit — und voller gefährlicher Tendenzen. Beständigkeit und Erstarrung. Gemeinschaft und Kontrolle.',
    finaleQ:'Welche Elemente der Erdwelt<br>leben bereits heute in unserer Gesellschaft?<br>Und welche Zukunft wollen wir gestalten?',
    symbol:'media/Elemente_Symbole/Elemente_Symbole_Erde.svg',
    color:{r:111,g:207,b:90,hex:'#6fcf5a',bg:'#070b09'},
    darkFrom:12,
    images:[
      'media/Element_Erde/Erde_01.png',
      'media/Element_Erde/Erde_02.png',
      'media/Element_Erde/Erde_03.png',
      'media/Element_Erde/Erde_04.png',
      'media/Element_Erde/Erde_05.png',
      'media/Element_Erde/Erde_06.png',
      'media/Element_Erde/Erde_07.png',
      'media/Element_Erde/Erde_08.png',
      'media/Element_Erde/Erde_09.png',
      'media/Element_Erde/Erde_10.png',
      'media/Element_Erde/Erde_11.png',
      'media/Element_Erde/Erde_12.png',
      'media/Element_Erde/Erde_13.png',
      'media/Element_Erde/Erde_14.png',
      'media/Element_Erde/Erde_15.png',
      'media/Element_Erde/Erde_16.png',
      'media/Element_Erde/Erde_17.png',
      'media/Element_Erde/Erde_18.png',
      'media/Element_Erde/Erde_19.png',
    ],
    cards:[
      // Erde_01 — üppige Terrassenstadt am Berghang mit Wasserfällen
      {tag:'I · Die Vision',hHover:'Eine Welt aus Stein und Grün',pHover:'Biomorphe Terrassen wachsen in den Berghang. Wasserfälle rauschen durch Straßen aus Stein. Natur und Architektur sind untrennbar.',h3:'Die erste Vision',p:'Zivilisation, die in die Erde hineinwächst — statt über sie hinaus.'},
      // Erde_02 — Terrassenhang mit Vegetation, Wasserfall, Rotunde im Vordergrund
      {tag:'II · Die Terrassen',hHover:'Hängend und wachsend',pHover:'Stockwerk um Stockwerk erklimmt die Siedlung den Hang. Jede Etage ein Garten. Jeder Bogen eine Brücke ins Grüne.',h3:'Hängend und wachsend',p:'Eine Stadt ohne klare Grenze — sie hört auf, wo der Wald beginnt.'},
      // Erde_03 — Innenhof mit Teich, Steinbögen, Efeu, Laternenlicht
      {tag:'III · Das Leben',hHover:'Moos und Marmor',pHover:'Im Innenhof: ein Teich, Rankgewächse über steinernen Bögen, warmes Licht aus Fenstern, die nie ganz geschlossen werden.',h3:'Moos und Marmor',p:'Die Grenze zwischen Innen und Außen existiert nicht. Das Haus atmet mit seiner Umgebung.'},
      // Erde_04 — Kristallformationen in Berglandschaft, Bergsee, Abendsonne
      {tag:'IV · Die Wildnis',hHover:'Kristalline Erde',pHover:'Kristallformationen wachsen aus dem Fels. Ein Bergsee spiegelt den weiten Himmel. Hier hat kein Mensch gepflügt.',h3:'Kristalline Erde',p:'Was Natur werden kann, wenn der Mensch aufhört, sie zu beherrschen.'},
      // Erde_05 — Uralter Baum auf Klippe über Flusstal im Sonnenuntergang
      {tag:'V · Der Baum',hHover:'Uralte Wächter',pHover:'Er hat Generationen gesehen. Stürme, Dürren, Aufstieg und Fall von Reichen. Und er steht noch.',h3:'Uralte Wächter',p:'In der Welt der Erde ist Langlebigkeit kein Ziel — sie ist ein Beweis.'},
      // Erde_06 — Grünes Tal mit Fluss, goldenes Abendlicht, Bergpanorama
      {tag:'VI · Das Tal',hHover:'Das fruchtbare Herz',pHover:'Ein Fluss windet sich durch sattgrüne Hänge. Abendlicht vergoldet das Land. Genug Wasser. Genug Boden. Genug Schutz.',h3:'Das fruchtbare Herz',p:'Nicht weil das Tal perfekt war — sondern weil es genug war.'},
      // Erde_07 — Menschen setzen Steinmauern am Hang, Abendsonne
      {tag:'VII · Das Handwerk',hHover:'Hände, die bauen',pHover:'Stein für Stein setzen sie die Mauer. Die Hände kennen die Arbeit. Der Abend bringt Stille und das Gefühl, etwas Bleibendes geschaffen zu haben.',h3:'Hände, die bauen',p:'Jede Fuge gesetzt mit dem Wissen, dass sie Jahrhunderte halten soll.'},
      // Erde_08 — Familie vor Steinhaus, Kinder spielen, Gemeinschaft
      {tag:'VIII · Die Heimstatt',hHover:'Stein und Gemeinschaft',pHover:'Kinder spielen auf dem Hof. Alte sitzen im Schatten. Das Haus trägt Generationen — es erinnert sich an alle.',h3:'Stein und Gemeinschaft',p:'Ein Haus ist nicht fertig, wenn es gebaut ist. Es wird fertig, wenn es gelebt wird.'},
      // Erde_09 — Bauern auf Gemüsefeldern, Steinhaus, Berge
      {tag:'IX · Die Ernte',hHover:'Rhythmus der Jahreszeiten',pHover:'Die Menschen kennen die Erde unter ihren Fingernägeln — nicht durch Algorithmen. Jede Pflanze ein Versprechen.',h3:'Rhythmus der Jahreszeiten',p:'Landwirtschaft als Meditation. Eine Gemeinschaft, die sich selbst ernährt.'},
      // Erde_10 — Belebter Dorfplatz, Kopfsteinpflaster, Menschen, Steingebäude
      {tag:'X · Die Gemeinschaft',hHover:'Der Platz als Herz',pHover:'Entscheidungen werden nicht in Konferenzsälen getroffen — sondern unter dem alten Baum, am Brunnen, auf dem Pflasterstein.',h3:'Der Platz als Herz',p:'Nähe statt Reichweite. Tiefe Bindungen statt globaler Vernetzung.'},
      // Erde_11 — Steinbibliothek / Skriptorium mit Pflanzen, Lesende Menschen
      {tag:'XI · Das Wissen',hHover:'Die lebendige Bibliothek',pHover:'Wissen wird nicht gespeichert — es wird gepflegt. Bücher und Pflanzen wachsen nebeneinander. Jede Seite riecht nach Erde.',h3:'Die lebendige Bibliothek',p:'Das Wissen dieser Welt ist nie losgelöst von der Erde, die es hervorbrachte.'},
      // Erde_12 — Terrassenstadt mit Wasserfall, Brücken, Gärten, Menschen
      {tag:'XII · Die Stadt',hHover:'Die wachsende Siedlung',pHover:'Terrassen, Wasserkanäle, Werkstätten. Menschen arbeiten, handeln, lehren. Diese Stadt kennt keine Skyline — ihr höchster Punkt ist ein Baum.',h3:'Die wachsende Siedlung',p:'Beständigkeit und Erstarrung liegen näher beieinander, als man denkt.'},
      // Erde_13 — Efeubewachsenes Steinhaus, Frau an der Tür, Intimität
      {tag:'Kehrseite · I',dim:true,hHover:'Der Aufbruch',pHover:'Die Fassade ist schön. Aber hinter der Tür: dieselben Regeln wie gestern. Und vorgestern. Und seit Jahrhunderten.',h3:'Der Aufbruch',p:'Wer die Wurzeln liebt, darf die Flügel nicht vergessen.'},
      // Erde_14 — Menschen gehen weg von der Stadt, Schilder: "Mehr Leben, Weniger Stress"
      {tag:'Kehrseite · II',dim:true,hHover:'Flucht nach vorn',pHover:'»Mehr Leben. Weniger Stress. Natur statt Hetze.« Schilder zeigen den Weg aus der Stadt. Die Stabilität hat einen Preis — und manche zahlen ihn nicht mehr.',h3:'Flucht nach vorn',p:'Wer bleibt, weil er muss — hat aufgehört zu wählen.'},
      // Erde_15 — Zerfallende Infrastruktur, Schilder "Straße gesperrt seit 2012"
      {tag:'Kehrseite · III',dim:true,hHover:'Infrastruktur des Vergessens',pHover:'»Straße gesperrt seit 2012. Kanalisation defekt seit 2010.« Das Alte ist heilig. Auch das Kaputte. Das Neue ist verboten.',h3:'Infrastruktur des Vergessens',p:'Was nicht mehr dient, verrottet — aber niemand darf es abreißen.'},
      // Erde_16 — Dystopischer Platz, Propaganda, "Regeln schaffen Ordnung"
      {tag:'Kehrseite · IV',dim:true,hHover:'Ordnung über alles',pHover:'Aufmarsch auf dem Platz. Schilder: »Regeln schaffen Ordnung. Freiheit führt zu Chaos.« Die Gemeinschaft hat sich selbst zum Käfig gemacht.',h3:'Ordnung über alles',p:'Was als Gemeinschaft begann, wird Kontrolle.'},
      // Erde_17 — Dorftor mit Wächter, Regeln in Stein, "Zutritt nur mit Genehmigung"
      {tag:'Kehrseite · V',dim:true,hHover:'Zutritt nur mit Genehmigung',pHover:'Am Tor: ein Wächter, Regeln in Stein gemeißelt. »Konformität wird erwartet. Abweichung ist unerwünscht.« Die Gemeinschaft hat Grenzen gezogen.',h3:'Zutritt nur mit Genehmigung',p:'Sicherheit, die Freiheit kostet, ist keine Sicherheit mehr.'},
      // Erde_18 — Gemeinschaft lehnt neue Ideen ab, Schild "Neue Ideen verunsichern Ordnung"
      {tag:'Kehrseite · VI',dim:true,hHover:'Neue Ideen: Abgelehnt',pHover:'Jemand präsentiert eine Idee. Die Menge verschränkt die Arme. Das Schild sagt alles: »Neue Ideen verunsichern Ordnung — Abgelehnt.«',h3:'Neue Ideen: Abgelehnt',p:'Eine Welt, die nie lernt, verrottet — auch wenn sie schön dabei aussieht.'},
      // Erde_19 — Überwucherte Ruinen mit Bronzereiter, "Vergangene Größe"
      {tag:'Ende · oder Anfang?',dim:true,hHover:'Vergangene Größe',pHover:'»Stolz und Macht in Stein gegossen — doch die Zeit hat überwuchert.« Der Reiter aus Bronze schaut in eine Zukunft, die seine Gesellschaft nicht mehr erreichte.',h3:'Vergangene Größe',p:'Am Ende bleibt Stein. Und die Frage, was wir daraus machen.'},
    ],
  },
  {
    id:'feuer', title:'FEUER', num:'II',
    subtitle:'Fortschritt · Dynamik · Erneuerung',
    netHeading:'Eine Welt aus Stahl und Licht',
    netBody:'Technologische Innovationen treiben die Gesellschaft unaufhaltsam voran — Megastrukturen wachsen, Energie fließt ohne Ende, und der Drang zur Erneuerung kennt keine Grenzen.',
    cardsIntroMono:'Die Geschichte des Feuers', cardsIntroH2:'Eine Welt in Bildern',
    dividerMono:'Die Kehrseite', dividerH2:'Was Wachstum kostet',
    finaleMono:'Die Welt des Feuers',
    finaleH2:'Keine Utopie.<br>Keine Dystopie.<br>Eine Möglichkeit.',
    finaleP:'Eine Zukunft voller atemberaubender Energie — und voller gefährlicher Tendenzen. Fortschritt und Zerstörung. Wachstum und Verlust.',
    finaleQ:'Welche Elemente der Feuerwelt<br>leben bereits heute in unserer Gesellschaft?<br>Und welche Zukunft wollen wir gestalten?',
    symbol:'media/Elemente_Symbole/Elemente_Symbole_Feuer.svg',
    color:{r:255,g:106,b:30,hex:'#ff6a1e',bg:'#0b0704'},
    darkFrom:12,
    images:[
      'media/Element_Feuer/Feuer_01.png',
      'media/Element_Feuer/Feuer_03.png',
      'media/Element_Feuer/Feuer_04.png',
      'media/Element_Feuer/Feuer_05.png',
      'media/Element_Feuer/Feuer_06.png',
      'media/Element_Feuer/Feuer_07.png',
      'media/Element_Feuer/Feuer_08.png',
      'media/Element_Feuer/Feuer_09.png',
      'media/Element_Feuer/Feuer_10.png',
      'media/Element_Feuer/Feuer_11.png',
      'media/Element_Feuer/Feuer_12.png',
      'media/Element_Feuer/Feuer_13.png',
      'media/Element_Feuer/Feuer_14.png',
      'media/Element_Feuer/Feuer_15.png',
      'media/Element_Feuer/Feuer_16.png',
    ],
    cards:[
      // Feuer_01 — Vulkanstadt im goldenen Sonnenuntergang, Kanäle, Terrassen
      {tag:'I · Die Vision',hHover:'Stadt am Vulkan',pHover:'Über Lavakanälen erheben sich Türme aus Stein und Stahl. Ein Vulkan dampft am Horizont. Die Stadt lebt von seiner Hitze.',h3:'Die erste Vision',p:'Zivilisation, die sich über die Erde erhebt — und die Erde selbst als Brennstoff nutzt.'},
      // Feuer_03 — Stadtstraßen mit fließenden Lavakanälen zwischen Türmen
      {tag:'II · Die Energie',hHover:'Lava als Lebensader',pHover:'Glühende Ströme fließen durch die Straßenschluchten der Stadt. Wärme, Licht, Kraft — alles speist sich aus dem Feuer unter dem Boden.',h3:'Lava als Lebensader',p:'In der Welt des Feuers ist die Erde selbst der Reaktor.'},
      // Feuer_04 — Seilbahnen über Lavaschlucht, Vulkanstadt auf Klippen
      {tag:'III · Die Geschwindigkeit',hHover:'Über dem Abgrund',pHover:'Seilbahnen gleiten über Lavaschlucht und Brücken. Die Stadt verbindet, was unüberquerbar scheint. Bewegung ist Grundbedingung.',h3:'Über dem Abgrund',p:'Die Feuerwelt wartet nicht — sie überbrückt.'},
      // Feuer_05 — Kreisförmige Vulkankraterstadt aus der Vogelperspektive
      {tag:'IV · Die Architektur',hHover:'Im Krater gebaut',pHover:'Eine kreisförmige Stadt wächst um den Schlund des Vulkans. Dampf steigt aus der Mitte. Alles dreht sich ums Zentrum der Macht.',h3:'Im Krater gebaut',p:'Nicht trotz des Feuers gebaut — mit ihm.'},
      // Feuer_06 — Nachtstadt mit leuchtenden Türmen, Vulkan glüht im Hintergrund
      {tag:'V · Das Licht',hHover:'Kein Dunkel mehr',pHover:'Die Nacht leuchtet in Orange und Gold. Türme strahlen. Der Vulkan glüht im Hintergrund wie eine zweite Sonne.',h3:'Kein Dunkel mehr',p:'Was man nicht sieht, vermisst man nicht — bis es zu spät ist.'},
      // Feuer_07 — Labor "Fire Civilization" mit Wissenschaftlern und Lavagestein
      {tag:'VI · Das Wissen',hHover:'Die Feuerzivilisation forscht',pHover:'Laboratorium mit Blick auf den Vulkan. Wissenschaftler untersuchen Lavagestein, kartieren Energieflüsse. »Fire Civilization: Building a Sustainable Future.«',h3:'Die Feuerzivilisation forscht',p:'Innovation als Überlebensstrategie — und Selbstversprechen.'},
      // Feuer_08 — Belebter Marktplatz vor Vulkanturm, Menschen kaufen und essen
      {tag:'VII · Die Gemeinschaft',hHover:'Der Marktplatz brennt',pHover:'Ein lebendiger Platz vor dem Vulkanturm. Menschen kaufen, essen, lachen. Die Stadt feiert sich selbst.',h3:'Der Marktplatz brennt',p:'Wachstum schafft Wohlstand — vorerst.'},
      // Feuer_09 — Lavastein-Fassaden mit Vertikalgärten, Vulkanstadt dahinter
      {tag:'VIII · Das Wachstum',hHover:'Grün und Feuer',pHover:'Fassaden aus Lavastein, überwuchert von Pflanzen. Vertikale Gärten trotzen der Hitze. Die Natur hält Schritt — noch.',h3:'Grün und Feuer',p:'Was wächst, sucht das Licht — auch wenn der Boden brennt.'},
      // Feuer_10 — Atelier mit Glasbläserinnen, Funken, goldene Laternen, Vulkanblick
      {tag:'IX · Das Handwerk',hHover:'Das Feuer formt',pHover:'Im Atelier: Glasbläserinnen, Funken, Lichtreflexe. Hinter der Werkbank: der Vulkan. Das Handwerk der Feuerwelt ist untrennbar von seiner Quelle.',h3:'Das Feuer formt',p:'Schönheit aus der Tiefe — Kunst, die weiß, woher sie kommt.'},
      // Feuer_11 — Geothermiekraftwerk mit Rohrleitungen, Dampf, Vulkan
      {tag:'X · Die Ressourcen',hHover:'Geothermie ohne Ende',pHover:'Rohrleitungen, Turbinen, Dampf. Ein Geothermiekraftwerk am Fuß des Vulkans liefert Energie für Millionen. Solange der Berg hält.',h3:'Geothermie ohne Ende',p:'Die Erde gibt — und die Rechnung kommt später.'},
      // Feuer_12 — Ruinierte Industriestadt bei Sonnenuntergang, Vulkan eruptiert
      {tag:'XI · Die Macht',hHover:'Feuer und Herrschaft',pHover:'Dampfende Fabrikruinen am Horizont. Die Stadt wächst über ihr Fundament hinaus. Unter dem Glanz verbirgt sich die erste Risse.',h3:'Feuer und Herrschaft',p:'Wer die Energie kontrolliert, kontrolliert die Welt — bis das System selbst brennt.'},
      // Feuer_13 — Lavawüste, ungezügelter Vulkanausbruch, brennende Ruinen
      {tag:'XII · Der Schwellenwert',hHover:'Die Grenze ist überschritten',pHover:'Die Stadt liegt im Verfall. Der Vulkan eruptiert ungezügelt. Was einst gebaut wurde, bröckelt unter dem Gewicht des eigenen Wachstums.',h3:'Die Grenze ist überschritten',p:'Kein Feuer brennt ewig — aber es frisst alles, solange es brennt.'},
      // Feuer_14 — Industriebrache, brennende Raffinerien, überflutete dunkle Landschaft
      {tag:'Kehrseite · I',dim:true,hHover:'Die überhitzte Erde',pHover:'Lava bedeckt alles. Bäume verbrennen. Die Landschaft ist ein Wundmal. Temperaturen, für die die Sprache fehlt.',h3:'Die überhitzte Erde',p:'Wachstum hat eine Rechnung — und sie kommt.'},
      // Feuer_15 — Abrissraupe reißt Gebäude nieder, Ruinen, Feuer
      {tag:'Kehrseite · II',dim:true,hHover:'Der Kollaps',pHover:'Systeme, die zu komplex wurden, um zu versagen — und genau deshalb versagen. Was die Maschinen nicht abreißen, frisst das Feuer.',h3:'Der Kollaps',p:'Kein Feuer brennt ewig.'},
      // Feuer_16 — Einsame Silhouette vor brennender Skyline, Dreiecks-Symbol
      {tag:'Ende · oder Anfang?',dim:true,hHover:'Die Asche',pHover:'Ein Mensch steht vor dem Feuermeer. Im Rücken: ein glühendes Dreieck — das Symbol der Feuerwelt. Vor ihm: nichts als Rauch und Glut.',h3:'Die Asche',p:'Aus Asche entsteht neues Leben — aber zu welchem Preis?'},
    ],
  },
  {
    id:'wasser', title:'WASSER', num:'III',
    subtitle:'Anpassung · Vernetzung · Wandel',
    netHeading:'Eine Welt aus Tiefe und Strömung',
    netBody:'Schwimmende Städte, Korallenmetropolen und Unterwasserarchitekturen — eine Zukunft, in der Technologie und Natur im ständigen Fluss verschmelzen.',
    cardsIntroMono:'Die Geschichte des Wassers', cardsIntroH2:'Eine Welt in Bildern',
    dividerMono:'Die Kehrseite', dividerH2:'Was Anpassung kostet',
    finaleMono:'Die Welt des Wassers',
    finaleH2:'Keine Utopie.<br>Keine Dystopie.<br>Eine Möglichkeit.',
    finaleP:'Eine Zukunft voller fließender Schönheit — und voller verborgener Tiefen. Anpassung und Orientierungslosigkeit. Verbindung und Verlust.',
    finaleQ:'Welche Elemente der Wasserwelt<br>leben bereits heute in unserer Gesellschaft?<br>Und welche Zukunft wollen wir gestalten?',
    symbol:'media/Elemente_Symbole/Elemente_Symbole_Wasser.svg',
    color:{r:66,g:180,b:240,hex:'#42b4f0',bg:'#040810'},
    darkFrom:12,
    images:[
      'media/Element_Wasser/01_Schwimmende_Korallenmetropole.png',
      'media/Element_Wasser/02_Wasserfaelle_zwischen_Inseln.png',
      'media/Element_Wasser/03_Biolumineszente_Lagunen.png',
      'media/Element_Wasser/04_Organische_Gebaeude_Meer.png',
      'media/Element_Wasser/05_Unterwasserstadt_Glaskuppel.png',
      'media/Element_Wasser/06_Sonnenlicht_durchs_Wasser.png',
      'media/Element_Wasser/07b_Gemeinschaftsgaerten_Plattformen.png',
      'media/Element_Wasser/08_Reisen_Wasserstrassen.png',
      'media/Element_Wasser/09_Kinder_Meerestiere.png',
      'media/Element_Wasser/10_Treffpunkte_Wasserhoehlen.png',
      'media/Element_Wasser/11_Nachhaltige_Algenfarmen.png',
      'media/Element_Wasser/12b_Symbiotische_Architektur_Hafen.png',
      'media/Element_Wasser/13_Gewaltige_Stuerme.png',
      'media/Element_Wasser/14_Ueberflutet_Wohngebiete.png',
      'media/Element_Wasser/15_Heimat_verlassen.png',
      'media/Element_Wasser/16_Orientierung_verloren.png',
      'media/Element_Wasser/17_Zerfallende_Siedlungen.png',
      'media/Element_Wasser/18_Einsamer_Bewohner.png',
    ],
    cards:[
      // 01 — Schwimmende Korallenmetropole, Türme aus Koralle und Glas im Meer
      {tag:'I · Die Vision',hHover:'Schwimmende Korallenmetropole',pHover:'Türme aus Koralle und Glas treiben im Meer. Brücken verbinden Inseln. Die Stadt ist lebendig — sie wächst mit jedem Gezeitenwechsel.',h3:'Die erste Vision',p:'Zivilisation, die gelernt hat zu fließen statt zu stehen.'},
      // 02 — Wasserfälle zwischen schwebenden Inseln, biomorphe Plattformen
      {tag:'II · Die Architektur',hHover:'Wasserfälle zwischen Inseln',pHover:'Biomorphe Plattformen verbinden sich zu Metropolen ohne festen Boden. Wasserfälle stürzen zwischen den Ebenen hindurch.',h3:'Schwimmende Städte',p:'Jede Flut formt die Stadt neu.'},
      // 03 — Biolumineszente Lagunen, leuchtende Organismen im dunklen Wasser
      {tag:'III · Die Tiefe',hHover:'Biolumineszente Lagunen',pHover:'Im Dunkel des Meeresbodens leuchtet das Leben. Organische Architektur wächst aus dem Riff — atmet, pulsiert, leuchtet.',h3:'Unter dem Spiegel',p:'Die Tiefe birgt mehr Raum als alle Kontinente.'},
      // 04 — Organische Gebäude am Meer, wachsen wie Korallen aus dem Felsen
      {tag:'IV · Das Riff',hHover:'Organische Architektur am Meer',pHover:'Gebäude wachsen wie Korallen aus dem Felsen. Das Meer ist kein Hindernis — es ist das Fundament.',h3:'Korallenmetropolen',p:'Wenn die Stadt selbst atmet und wächst.'},
      // 05 — Unterwasserstadt unter Glaskuppel, blaues Meereslicht
      {tag:'V · Die Unterwelt',hHover:'Glaskuppel in der Tiefe',pHover:'Eine Unterwasserkuppelstadt liegt im blauen Licht des Ozeans. Draußen: Stille und Druck. Drinnen: alles, was man zum Leben braucht.',h3:'Unter der Kuppel',p:'Die Tiefe schützt — solange das Glas hält.'},
      // 06 — Sonnenlicht bricht durchs Wasser, blaues Unterwasserlicht
      {tag:'VI · Das Licht',hHover:'Sonnenlicht durchs Wasser',pHover:'Sonnenstrahlen brechen sich im Wasser und erhellen die Unterwasserwelt. Tageslicht und Biolumineszenz tanzen ineinander.',h3:'Biolumineszenz',p:'Das Meer hat seine eigene Sprache des Lichts.'},
      // 07b — Kreisförmige Gartenplattformen auf dem Ozean, Frau erntet
      {tag:'VII · Die Ernte',hHover:'Schwimmende Gärten',pHover:'Kreisförmige Gartenplattformen treiben auf dem Ozean. Glaskuppeln schützen die Pflanzen vor dem Salzwind. Eine Frau erntet — umgeben von Weite.',h3:'Schwimmende Gärten',p:'Erde braucht keinen Boden. Sie braucht Fürsorge.'},
      // 08 — Reisen auf Wasserstraßen, Transportwege folgen Meeresströmungen
      {tag:'VIII · Die Strömung',hHover:'Reisen auf Wasserstraßen',pHover:'Transportwege folgen Meeresströmungen. Energie kommt aus Wellen und Gezeiten. Die Natur lehrt die Ingenieure.',h3:'Alles fließt',p:'Wer das Wasser versteht, muss es nicht bezwingen.'},
      // 09 — Kinder schwimmen mit Meerestieren, Delfine und Rochen
      {tag:'IX · Die Verbindung',hHover:'Kinder und Meerestiere',pHover:'Kinder schwimmen mit Delfinen und Rochen. Grenzen zwischen Mensch und Meerestier verschwimmen. Empathie als Lebensform.',h3:'Netzwerke des Lebens',p:'Das Wasser verbindet, was die Erde trennt.'},
      // 10 — Gemeinschaft in natürlichen Wasserhöhlen über dem Meer
      {tag:'X · Die Gemeinschaft',hHover:'Treffpunkte in Wasserhöhlen',pHover:'Gemeinschaften treffen sich in natürlichen Höhlen über dem Meer. Hier werden Entscheidungen gefällt — mit dem Rauschen der Wellen.',h3:'Leben in Bewegung',p:'Zusammen treiben — gemeinsam ankern.'},
      // 11 — Nachhaltige Algenfarmen im flachen Wasser
      {tag:'XI · Die Ressource',hHover:'Nachhaltige Algenfarmen',pHover:'Algenstrukturen ziehen sich durch das flache Wasser. Ernährung, Energie, Material — alles aus dem Meer, zurück ans Meer.',h3:'Symbiose als Prinzip',p:'Das Wasser verzeiht keine Gier.'},
      // 12b — Elegante Rundgebäude auf Stelzen im Wasser, Segelboot zieht vorbei
      {tag:'XII · Der Hafen',hHover:'Symbiotische Architektur am Hafen',pHover:'Elegante Rundbauwerke stehen auf Stelzen im klaren Wasser. Bäume wachsen auf jedem Stockwerk. Ein Segelboot zieht vorbei — klein wie ein Gedanke.',h3:'Das kostbarste Gut',p:'Was überall ist, wird selten.'},
      // 13 — Gewaltige Stürme über schwimmenden Städten
      {tag:'Kehrseite · I',dim:true,hHover:'Gewaltige Stürme',pHover:'Megastürme fegen über die schwimmenden Städte. Was gebaut wurde, wird weggerissen. Das Wasser gibt — und nimmt zurück.',h3:'Der Sturm',p:'Das Wasser gibt — und nimmt zurück.'},
      // 14 — Überflutete Wohngebiete, Straßen unter Wasser
      {tag:'Kehrseite · II',dim:true,hHover:'Überflutete Wohngebiete',pHover:'Straßen unter Wasser. Fenster, die aus dem Meeresspiegel ragen. Wenn das Wasser steigt, gibt es keinen höheren Boden mehr.',h3:'Die Flut',p:'Anpassung hat Grenzen — die Flut nicht.'},
      // 15 — Familie verlässt ihr Haus, Wasser steht im Erdgeschoss
      {tag:'Kehrseite · III',dim:true,hHover:'Heimat verlassen',pHover:'Eine Familie verlässt ihr Haus. Das Wasser steht schon im Erdgeschoss. Alles, was je an einem Ort verwurzelt war, versinkt.',h3:'Heimatverlust',p:'Die Tiefe bewahrt, was die Oberfläche vergisst.'},
      // 16 — Kein Land in Sicht, nur Wasser, Nebel, Stille
      {tag:'Kehrseite · IV',dim:true,hHover:'Orientierung verloren',pHover:'Kein Land in Sicht. Nur Wasser, Nebel, Stille. Freiheit und Orientierungslosigkeit sind Geschwister.',h3:'Unter der Oberfläche',p:'Wer den Horizont nicht kennt, verwechselt ihn mit dem Abgrund.'},
      // 17 — Halbversunkene, zerstörte Plattformen, verlassen
      {tag:'Kehrseite · V',dim:true,hHover:'Zerfallende Siedlungen',pHover:'Einst schwimmende Plattformen — jetzt halbversunken, zerbrochen, verlassen. Das Wasser holt sich zurück, was gebaut wurde.',h3:'Der Zerfall',p:'Was sich nicht erneuert, versinkt.'},
      // 18 — Einsamer Mann auf Floß aus Trümmern, überflutete Ruinen, Regen
      {tag:'Ende · oder Anfang?',dim:true,hHover:'Der einsame Bewohner',pHover:'Ein Mann sitzt auf einem Floß aus Trümmern. Ringsherum: überschwemmte Ruinen, graue Wolken, Regen. Er schaut nicht auf. Er wartet.',h3:'Die ruhige Tiefe',p:'Im tiefsten Punkt liegt vielleicht der Anfang.'},
    ],
  },
  {
    id:'luft', title:'LUFT', num:'IV',
    subtitle:'Freiheit · Leichtigkeit · Vision',
    netHeading:'Eine Welt über den Wolken',
    netBody:'Schwebende Inseln, transparente Himmelsstädte und filigrane Membranarchitekturen — eine Zukunft, in der Grenzen verschwinden und Leichtigkeit zur Grundbedingung wird.',
    cardsIntroMono:'Die Geschichte der Luft', cardsIntroH2:'Eine Welt in Bildern',
    dividerMono:'Die Kehrseite', dividerH2:'Was Freiheit kostet',
    finaleMono:'Die Welt der Luft',
    finaleH2:'Keine Utopie.<br>Keine Dystopie.<br>Eine Möglichkeit.',
    finaleP:'Eine Zukunft voller schwebender Schönheit — und voller Fragen nach Bodenhaftung. Freiheit und Wurzellosigkeit. Offenheit und Halt.',
    finaleQ:'Welche Elemente der Luftwelt<br>leben bereits heute in unserer Gesellschaft?<br>Und welche Zukunft wollen wir gestalten?',
    symbol:'media/Elemente_Symbole/Elemente_Symbole_Luft.svg',
    color:{r:218,g:237,b:242,hex:'#daedf2',bg:'#050809'},
    darkFrom:12,
    images:[
      'media/Element_Luft/Luft_01.png',
      'media/Element_Luft/Luft_02.png',
      'media/Element_Luft/Luft_03.png',
      'media/Element_Luft/Luft_04.png',
      'media/Element_Luft/Luft_05.png',
      'media/Element_Luft/Luft_06.png',
      'media/Element_Luft/Luft_07.png',
      'media/Element_Luft/Luft_08.png',
      'media/Element_Luft/Luft_09.png',
      'media/Element_Luft/Luft_10.png',
      'media/Element_Luft/Luft_11.png',
      'media/Element_Luft/Luft_12.png',
      'media/Element_Luft/Luft_13.png',
      'media/Element_Luft/Luft_14.png',
      'media/Element_Luft/Luft_15.png',
      'media/Element_Luft/Luft_16.png',
      'media/Element_Luft/Luft_17.png',
      'media/Element_Luft/Luft_18.png',
    ],
    cards:[
      // Luft_01 — Schwebende Felsinseln mit Wäldern, Wasserfällen und Palästen im Wolkenmeer
      {tag:'I · Die Vision',hHover:'Schwebende Inseln',pHover:'Felsbrocken mit Wäldern, Wasserfällen und Palästen treiben im Wolkenmeer. Brücken verbinden, was die Schwerkraft trennen wollte.',h3:'Die erste Vision',p:'Eine Zivilisation, die aufgehört hat, den Boden zu brauchen.'},
      // Luft_02 — Filigrane Türme, Kuppeln, Arkaden über Wolkenmeer, Vögel im Innenhof
      {tag:'II · Die Architektur',hHover:'Paläste über den Wolken',pHover:'Filigrane Türme, Kuppeln, Arkaden — gebaut aus weißem Stein über einem Meer aus Wolken. Vögel fliegen durch Innenhöfe.',h3:'Filigrane Strukturen',p:'So leicht, dass man vergisst, es zu sehen.'},
      // Luft_03 — Lebende Luftschiffe wie Fische, begrünt, gleiten über Täler und Seen
      {tag:'III · Die Mobilität',hHover:'Organische Luftschiffe',pHover:'Lebende Luftschiffe — geformt wie Fische, bewachsen mit Efeu — gleiten über Täler und Seen. Reisen ohne Reibung.',h3:'Organische Luftschiffe',p:'Bewegung als natürlicher Zustand.'},
      // Luft_04 — Gewaltige Membranstrukturen über schwebenden Plattformen, Menschen darunter
      {tag:'IV · Die Membran',hHover:'Weiße Segel über Wolken',pHover:'Gewaltige Membranstrukturen spannen sich über schwebende Plattformen. Menschen wandeln darunter. Das Dach ist der Himmel selbst.',h3:'Filigrane Strukturen',p:'Architektur, die atmet statt zu stehen.'},
      // Luft_05 — Schwebende Plattformen mit Gärten, Pavillons, Wasserfällen, Heißluftballons
      {tag:'V · Die Gärten',hHover:'Gärten im Himmel',pHover:'Schwebende Plattformen mit Gärten, Pavillons, Wasserfällen. Heißluftballons driften vorbei. Die Erde ist weit unten — und vergessen.',h3:'Gärten im Himmel',p:'Pflanzenwurzeln im Wind.'},
      // Luft_06 — Ganze Stadt über den Wolken, Türme, Glaskuppeln, Seilbahnen, Luftschiffe
      {tag:'VI · Die Stadt',hHover:'Die schwebende Metropole',pHover:'Eine ganze Stadt über den Wolken. Türme, Glaskuppeln, Seilbahnen, Luftschiffe. Alles leuchtet im Abendlicht.',h3:'Die schwebende Metropole',p:'Eine Stadt ohne Straßen — nur Wege durch die Luft.'},
      // Luft_07 — Offener Pavillon in Wolken, Künstlerinnen, Luftschiffe gleiten vorbei
      {tag:'VII · Das Atelier',hHover:'Das Atelier in den Wolken',pHover:'Künstlerinnen arbeiten in einem offenen Pavillon — Wolken ziehen durch den Raum, Luftschiffe gleiten vorbei. Kreativität als einzige Währung.',h3:'Wissen als Strömung',p:'Gedanken sind die leichteste Form der Materie.'},
      // Luft_08 — Zwei Menschen auf schwankender Holzbrücke zwischen schwebenden Inseln
      {tag:'VIII · Die Verbindung',hHover:'Die Hängebrücke',pHover:'Zwei Menschen überqueren eine schwankende Holzbrücke zwischen schwebenden Inseln. Unter ihnen: Wolken ohne Boden.',h3:'Schwebende Gemeinschaften',p:'Zusammen fliegen — gemeinsam landen.'},
      // Luft_09 — Gläsernes Observatorium über Wolken, Wissenschaftlerinnen, Instrumente, Airships
      {tag:'IX · Das Wissen',hHover:'Das Labor in den Wolken',pHover:'Wissenschaftlerinnen arbeiten in einem gläsernen Observatorium hoch über den Wolken. Instrumente messen das Unsichtbare. Airships gleiten vorbei.',h3:'Der neue Blick',p:'Wer hoch genug steht, sieht weiter als alle anderen.'},
      // Luft_10 — Schwebende Plattformen, Kuppeln, Brücken ohne Zahl, eine ganze Zivilisation aus Luft
      {tag:'X · Die Freiheit',hHover:'Eine Welt aus Licht',pHover:'Schwebende Plattformen, Kuppeln, Brücken ohne Zahl — eine ganze Zivilisation aus Luft und Licht. Keine Grenzen. Keine Horizonte.',h3:'Grenzen ohne Bedeutung',p:'Freiheit als Grundzustand.'},
      // Luft_11 — Kreisförmiges Amphitheater über den Wolken, Hunderte Menschen, Luftschiffe kreisen
      {tag:'XI · Die Gemeinschaft',hHover:'Der Versammlungsplatz',pHover:'Hunderte Menschen versammeln sich in einem kreisförmigen Amphitheater über den Wolken. Ein Sprecher in der Mitte. Luftschiffe kreisen oben.',h3:'Versammlung über dem Abgrund',p:'Gemeinsam schweben — solange die Insel trägt.'},
      // Luft_12 — Weitläufige Garteninsel mit Zypressen, Pavillon, Wasserfällen, Familien
      {tag:'XII · Das Paradies',hHover:'Das schwebende Eden',pHover:'Weitläufige Garteninsel mit Zypressen, Pavillon, Wasserfällen. Familien spazieren. Alles ist schön — und doch: kein Weg nach unten.',h3:'Über allem',p:'Der Gipfel ist kein Ende — er ist ein Anfang. Und eine Falle.'},
      // Luft_13 — Schwebende Felsstücke mit verrottenden Ruinen, überwucherten Pavillons, verlassen
      {tag:'Kehrseite · I',dim:true,hHover:'Die verlassenen Inseln',pHover:'Schwebende Felsstücke mit verrottenden Ruinen, überwucherten Pavillons. Niemand ist mehr hier. Die Schönheit hat sich selbst überlebt.',h3:'Die Wurzellosigkeit',p:'Ohne Boden — kein Zuhause.'},
      // Luft_14 — Einsame Gestalt auf Balkon über Wolkenmeer, verlassene Plattform dahinter
      {tag:'Kehrseite · II',dim:true,hHover:'Die einsame Wacht',pHover:'Eine Gestalt steht auf einem Balkon über dem Wolkenmeer. Hinter ihr: eine verlassene Plattform. Unter ihr: nichts. Nur Weite.',h3:'Der Sturm',p:'Die Luft trägt — und reißt fort.'},
      // Luft_15 — Schwebende Inseln mit zerbrochenen Säulen, zerfallenden Brücken, Stille
      {tag:'Kehrseite · III',dim:true,hHover:'Ruinen im Wolkenmeer',pHover:'Schwebende Inseln mit zerbrochenen Säulen, zerfallenden Brücken, überwucherten Ruinen. Einst Zivilisation — jetzt Stille.',h3:'Die Leere',p:'Zu viel Weite macht den Menschen klein.'},
      // Luft_16 — Brücken die nirgendwohin führen, Plattformen ohne Menschen, aufgelöstes Netz
      {tag:'Kehrseite · IV',dim:true,hHover:'Zerfall der Verbindungen',pHover:'Brücken, die nirgendwohin führen. Plattformen ohne Menschen. Das Netz aus Verbindungen hat sich aufgelöst — eine Insel nach der anderen.',h3:'Zusammenhalt fehlt',p:'Wer immer fliegt, vergisst das Landen.'},
      // Luft_17 — Brücken und Bögen hängen schief, Strukturen lösen sich auf, Fragmente treiben davon
      {tag:'Kehrseite · V',dim:true,hHover:'Die stürzende Ordnung',pHover:'Brücken und Bögen hängen schief in der Luft. Strukturen, die sich auflösen. Einzelne Fragmente treiben davon — in alle Richtungen.',h3:'Der freie Fall beginnt',p:'Wenn die Strukturen brechen, gibt es kein Netz.'},
      // Luft_18 — Alles bricht auseinander: Kuppeln, Bögen, Korridore — zersplittert, treibend, fallend
      {tag:'Ende · oder Anfang?',dim:true,hHover:'Der freie Fall',pHover:'Alles bricht auseinander. Kuppeln, Bögen, Korridore — zersplittert, treibend, fallend. Die Luft trägt nur solange, wie man ihr vertraut.',h3:'Der freie Fall',p:'Die Luft trägt nur solange, wie man ihr vertraut.'},
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   2. SPRING PHYSICS
═══════════════════════════════════════════════════════ */
class Spring {
  constructor({stiffness=180,damping=22,mass=1,initial=0}={}) {
    this.stiffness=stiffness; this.damping=damping; this.mass=mass;
    this.value=initial; this.velocity=0; this.target=initial;
  }
  step(dt) {
    const d=Math.min(dt,0.064);
    const force=-this.stiffness*(this.value-this.target)-this.damping*this.velocity;
    this.velocity+=force/this.mass*d; this.value+=this.velocity*d;
    return this.value;
  }
  get settled(){return Math.abs(this.value-this.target)<0.0005&&Math.abs(this.velocity)<0.0005;}
  snap(){this.value=this.target;this.velocity=0;}
}

const PRESETS = {
  gentle: {stiffness:120,damping:18,mass:1},
  snappy: {stiffness:280,damping:26,mass:1},
  bouncy: {stiffness:200,damping:14,mass:1},
  heavy:  {stiffness:90, damping:20,mass:2},
};

/* ═══════════════════════════════════════════════════════
   3. UTILITIES
═══════════════════════════════════════════════════════ */
const clamp = (v,lo,hi) => Math.max(lo,Math.min(hi,v));
const lerp  = (a,b,t)   => a+(b-a)*t;

function ca(c,a){ return `rgba(${c.r},${c.g},${c.b},${a})`; }
function cm(c,a){ return `rgba(${Math.round(c.r*.72)},${Math.round(c.g*.72)},${Math.round(c.b*.72)},${a})`; }
function cd(c,a){ return `rgba(${Math.round(c.r*.4)},${Math.round(c.g*.4)},${Math.round(c.b*.4)},${a})`; }

function approxSegLen(x0,y0,cpx,cpy,x1,y1,steps=24){
  let len=0,px=x0,py=y0;
  for(let i=1;i<=steps;i++){
    const t=i/steps,ti=1-t;
    const x=ti*ti*x0+2*ti*t*cpx+t*t*x1;
    const y=ti*ti*y0+2*ti*t*cpy+t*t*y1;
    len+=Math.hypot(x-px,y-py); px=x; py=y;
  }
  return len;
}

/* Active element state */
let activeEl = ELEMENTS[0];
function setActiveEl(el) {
  if (activeEl === el) return;
  activeEl = el;
  document.documentElement.style.setProperty('--page-bg', el.color.bg);
  document.documentElement.style.setProperty('--cursor-color', el.color.hex);
}

/* ═══════════════════════════════════════════════════════
   4. BUILD PAGE HTML
═══════════════════════════════════════════════════════ */
function buildPage() {
  buildStartSymbols();
  buildElementSections();
}

function buildStartSymbols() {
  const row = document.getElementById('elements-row');
  ELEMENTS.forEach(el => {
    row.innerHTML += `
      <a href="#el-${el.id}" class="element-entry ${el.id}" id="startSym-${el.id}"
         onclick="smoothScrollTo('el-${el.id}');return false;">
        <div class="element-symbol-wrap" id="startBob-${el.id}">
          <div class="sym-inner">
            <img src="${el.symbol}" alt="${el.title}">
          </div>
          <div class="sq-corner tl"></div><div class="sq-corner tr"></div>
          <div class="sq-corner bl"></div><div class="sq-corner br"></div>
        </div>
        <span class="element-label">${el.title}</span>
      </a>`;
  });
}

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({behavior:'smooth'});
}
window.smoothScrollTo = smoothScrollTo;

function buildElementSections() {
  const container = document.getElementById('element-sections');
  ELEMENTS.forEach(el => {
    const section = document.createElement('section');
    section.id = `el-${el.id}`;
    section.className = 'el-section';
    section.dataset.theme = el.id;
    section.innerHTML = buildElementHTML(el);
    container.appendChild(section);
  });
}

function buildElementHTML(el) {
  const cards = buildCardsHTML(el);
  return `
  <!-- HERO -->
  <div class="el-hero">
    <canvas class="el-hero-canvas" id="hero-canvas-${el.id}"></canvas>
    <div class="hero-center">
      <div class="floating-symbol" id="floatSym-${el.id}">
        <div class="sym-inner">
          <img src="${el.symbol}" alt="${el.title}">
        </div>
        <div class="sq-corner tl"></div><div class="sq-corner tr"></div>
        <div class="sq-corner bl"></div><div class="sq-corner br"></div>
      </div>
    </div>
    <div class="hero-text" id="heroText-${el.id}">
      <span class="hero-overline">Die vier Elemente der Zukunft · ${el.num}</span>
      <h1 class="hero-title">${el.title}</h1>
      <p class="hero-sub">${el.subtitle}</p>
    </div>
    <div class="scroll-cue" id="scrollCue-${el.id}">
      <span>Scrollen</span>
      <div class="scroll-tick"></div>
    </div>
  </div>

  <!-- NETWORK -->
  <div class="el-network">
    <canvas class="el-network-canvas" id="network-canvas-${el.id}"></canvas>
    <div class="network-text">
      <h2 class="net-heading" data-spring="fadeup">${el.netHeading}</h2>
      <p class="net-body" data-spring="fadeup" data-delay="0.15">${el.netBody}</p>
    </div>
  </div>

  <!-- CARDS -->
  <div class="el-cards">
    <div class="cards-intro" data-spring="fadeup">
      <span class="mono">${el.cardsIntroMono}</span>
      <h2>${el.cardsIntroH2}</h2>
    </div>
    <div class="path-cards" id="cards-${el.id}">
      ${cards}
    </div>
  </div>

  <!-- ELEMENT FINALE -->
  <div class="el-finale">
    <div class="finale-inner" data-spring="fadeup">
      <span class="mono">${el.finaleMono}</span>
      <h2>${el.finaleH2}</h2>
      <p>${el.finaleP}</p>
      <div class="finale-question">${el.finaleQ}</div>
    </div>
  </div>`;
}

function buildCardsHTML(el) {
  let html = '';
  const numCards = Math.min(el.cards.length, el.images.length);
  let dividerInserted = false;

  for (let i = 0; i < numCards; i++) {
    const card = el.cards[i];
    const img  = el.images[i];
    const isDark = (el.darkFrom !== undefined && i >= el.darkFrom);
    const num = String(i+1).padStart(2,'0');

    if (isDark && !dividerInserted) {
      dividerInserted = true;
      html += `<div class="chapter-divider" data-spring="fadeup">
        <span class="mono">${el.dividerMono}</span>
        <h2>${el.dividerH2}</h2>
      </div>`;
    }

    html += `
    <article class="card-row${isDark?' dark':''}" data-index="${i}">
      <div class="card-img-wrap" data-spring="card">
        <img src="${img}" alt="${card.hHover}" loading="lazy">
        <div class="card-hover-text">
          <span class="chapter-tag${isDark?' dim':''}">${card.tag}</span>
          <h3>${card.hHover}</h3>
          <p>${card.pHover}</p>
        </div>
        <div class="sq-corner tl${isDark?' dim':''}"></div>
        <div class="sq-corner tr${isDark?' dim':''}"></div>
        <div class="sq-corner bl${isDark?' dim':''}"></div>
        <div class="sq-corner br${isDark?' dim':''}"></div>
      </div>
      <div class="card-text${isDark?' dim':''}" data-spring="slidetext">
        <div class="card-num">${num}</div>
        <h3>${card.h3}</h3>
        <p>${card.p}</p>
      </div>
    </article>`;
  }
  return html;
}

/* ═══════════════════════════════════════════════════════
   5. CURSOR
═══════════════════════════════════════════════════════ */
function initCursor() {
  document.addEventListener('mousemove', e => {
    document.documentElement.style.setProperty('--cx', e.clientX+'px');
    document.documentElement.style.setProperty('--cy', e.clientY+'px');
  });
}

/* ═══════════════════════════════════════════════════════
   6. LOADER
═══════════════════════════════════════════════════════ */
function initLoader() {
  const lbar=document.getElementById('lbar');
  const lpct=document.getElementById('lpct');
  const loader=document.getElementById('loader');
  let v=0;
  const iv=setInterval(()=>{
    v+=Math.random()*14+2;
    if(v>=100){v=100;clearInterval(iv);setTimeout(()=>loader.classList.add('done'),450);}
    lbar.style.width=v+'%';
    lpct.textContent=Math.floor(v)+'%';
  },70);
}

/* ═══════════════════════════════════════════════════════
   7. ACTIVE ELEMENT TRACKER — updates colors as you scroll
═══════════════════════════════════════════════════════ */
function initActiveElementTracker() {
  // Start section -> default colors
  const startObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio > 0.3) {
        document.documentElement.style.setProperty('--page-bg','#070b09');
        document.documentElement.style.setProperty('--cursor-color','#6fcf5a');
        activeEl = ELEMENTS[0];
      }
    });
  },{threshold:0.3});
  const startSec = document.getElementById('start');
  if(startSec) startObs.observe(startSec);

  // Each element section
  ELEMENTS.forEach(el => {
    const section = document.getElementById(`el-${el.id}`);
    if(!section) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting && e.intersectionRatio > 0.15) {
          document.documentElement.style.setProperty('--page-bg', el.color.bg);
          document.documentElement.style.setProperty('--cursor-color', el.color.hex);
          activeEl = el;
          // Update progress bar color
          const pb = document.getElementById('progress-bar');
          if(pb) {
            pb.style.background = `linear-gradient(to right, ${cd(el.color,1)}, ${el.color.hex})`;
            pb.style.boxShadow = `0 0 6px ${ca(el.color,0.9)}, 0 0 18px ${ca(el.color,0.4)}`;
          }
        }
      });
    },{threshold:0.15});
    obs.observe(section);
  });
}

/* ═══════════════════════════════════════════════════════
   8. PROGRESS BAR
═══════════════════════════════════════════════════════ */
function initProgressBar() {
  const bar=document.getElementById('progress-bar');
  const spring=new Spring({stiffness:100,damping:22,mass:1,initial:0});
  let raw=0,last=null;
  window.addEventListener('scroll',()=>{
    const max=document.body.scrollHeight-window.innerHeight;
    raw=max>0?window.scrollY/max:0;
  },{passive:true});
  function frame(now){
    if(!last)last=now;
    const dt=(now-last)/1000;last=now;
    spring.target=raw*100; spring.step(dt);
    bar.style.width=clamp(spring.value,0,100)+'%';
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ═══════════════════════════════════════════════════════
   9. START CANVAS — star field
═══════════════════════════════════════════════════════ */
function initStartCanvas() {
  const canvas=document.getElementById('start-canvas');
  const ctx=canvas.getContext('2d');
  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
  resize();
  window.addEventListener('resize',resize);

  const stars=Array.from({length:140},()=>({
    x:Math.random(),y:Math.random(),r:Math.random()*1.3+0.2,
    a:Math.random()*0.45+0.08,phase:Math.random()*Math.PI*2,
    speed:0.25+Math.random()*0.7,
  }));

  function draw(now){
    const W=canvas.width,H=canvas.height,t=now/1000;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#070b09';ctx.fillRect(0,0,W,H);
    stars.forEach(s=>{
      const alpha=s.a*(0.6+0.4*Math.sin(t*s.speed+s.phase));
      ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(234,226,210,${alpha})`;ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ═══════════════════════════════════════════════════════
   10. START SYMBOL BOBS
═══════════════════════════════════════════════════════ */
function initStartBobs() {
  const bobs = ELEMENTS.map((el,i)=>({
    el: document.getElementById(`startBob-${el.id}`),
    phase: (Math.PI*2/ELEMENTS.length)*i,
    yS: new Spring({stiffness:95,damping:17,mass:1,initial:0}),
    rS: new Spring({stiffness:55,damping:12,mass:1.5,initial:0}),
  })).filter(b=>b.el);

  let last=null;
  function frame(now){
    if(!last)last=now;
    const dt=(now-last)/1000;last=now;
    const t=now/1000;
    bobs.forEach(b=>{
      b.yS.target=Math.sin(t*0.55+b.phase)*14;
      b.rS.target=Math.sin(t*0.38+b.phase)*2;
      b.yS.step(dt);b.rS.step(dt);
      b.el.style.transform=`translateY(${b.yS.value}px) rotate(${b.rS.value}deg)`;
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ═══════════════════════════════════════════════════════
   11. HERO CANVASES — perspective grid per element
═══════════════════════════════════════════════════════ */
function initHeroCanvases() {
  ELEMENTS.forEach(el => {
    const canvas = document.getElementById(`hero-canvas-${el.id}`);
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const c = el.color;

    function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
    resize();
    window.addEventListener('resize',()=>{resize();draw();});

    function draw(){
      const W=canvas.width,H=canvas.height;
      ctx.clearRect(0,0,W,H);

      // Sky gradient
      const sky=ctx.createRadialGradient(W/2,H*0.6,0,W/2,H*0.6,H*0.9);
      sky.addColorStop(0,`rgba(${c.r>>1},${c.g>>1},${c.b>>1},0.15)`);
      sky.addColorStop(0.6,`rgba(${c.r>>3},${c.g>>3},${c.b>>3},0.08)`);
      sky.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);

      const horizonY=H*0.52;
      const vp={x:W/2,y:horizonY};
      const COLS=14,spread=W*0.7;

      ctx.save();
      for(let i=0;i<=COLS;i++){
        const t=i/COLS;
        const startX=vp.x+(t-0.5)*spread*0.12;
        const endX=vp.x+(t-0.5)*spread;
        const alpha=0.04+Math.sin(t*Math.PI)*0.04;
        const grad=ctx.createLinearGradient(startX,horizonY,endX,H);
        grad.addColorStop(0,ca(c,0));
        grad.addColorStop(0.3,ca(c,alpha));
        grad.addColorStop(1,ca(c,0));
        ctx.beginPath();ctx.moveTo(startX,horizonY);ctx.lineTo(endX,H+20);
        ctx.strokeStyle=grad;ctx.lineWidth=0.8;ctx.stroke();
      }
      const ROWS=8;
      for(let i=1;i<=ROWS;i++){
        const t=i/ROWS,eased=t*t;
        const y=horizonY+(H-horizonY)*eased;
        const xSpan=(W*0.06)+(W*0.7)*eased;
        ctx.beginPath();ctx.moveTo(vp.x-xSpan,y);ctx.lineTo(vp.x+xSpan,y);
        ctx.strokeStyle=ca(c,(1-t*0.7)*0.06);ctx.lineWidth=0.7;ctx.stroke();
      }
      ctx.restore();

      const hg=ctx.createLinearGradient(0,horizonY-30,0,horizonY+60);
      hg.addColorStop(0,ca(c,0));hg.addColorStop(0.5,ca(c,0.07));hg.addColorStop(1,ca(c,0));
      ctx.fillStyle=hg;ctx.fillRect(0,horizonY-30,W,90);
    }
    draw();
  });
}

/* ═══════════════════════════════════════════════════════
   12. FLOATING HERO SYMBOLS — spring bob
═══════════════════════════════════════════════════════ */
function initFloatingSymbols() {
  ELEMENTS.forEach(el => {
    const sym = document.getElementById(`floatSym-${el.id}`);
    if(!sym) return;
    const yS=new Spring({...PRESETS.gentle,initial:0});
    const rS=new Spring({stiffness:60,damping:12,mass:1.5,initial:0});
    let t=0,last=null;

    function frame(now){
      if(!last)last=now;
      const dt=(now-last)/1000;last=now;
      t+=dt;
      yS.target=Math.sin(t*0.55)*18;
      rS.target=Math.sin(t*0.38)*2.5;
      yS.step(dt);rS.step(dt);
      sym.style.transform=`translateY(${yS.value}px) rotate(${rS.value}deg)`;
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

/* ═══════════════════════════════════════════════════════
   13. HERO TEXT SPRING-IN
═══════════════════════════════════════════════════════ */
function initHeroTexts() {
  ELEMENTS.forEach(el => {
    const text=document.getElementById(`heroText-${el.id}`);
    const cue=document.getElementById(`scrollCue-${el.id}`);
    if(!text) return;

    const opS=new Spring({...PRESETS.snappy,initial:0});
    const yS=new Spring({...PRESETS.bouncy,initial:40});
    let started=false,last=null;

    // Use IntersectionObserver to trigger when hero enters view
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)setTimeout(()=>{started=true;},300);});
    },{threshold:0.5});
    const heroDiv=document.querySelector(`#el-${el.id} .el-hero`);
    if(heroDiv) obs.observe(heroDiv);

    function frame(now){
      if(!last)last=now;
      const dt=(now-last)/1000;last=now;
      if(started){opS.target=1;yS.target=0;}
      opS.step(dt);yS.step(dt);
      text.style.opacity=clamp(opS.value,0,1);
      text.style.transform=`translateY(${yS.value}px)`;
      if(cue) cue.style.opacity=clamp(opS.value-0.3,0,1);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });

  // Also trigger Erde hero on load (first section)
  setTimeout(()=>{
    const text=document.getElementById('heroText-erde');
    if(text){text.style.opacity='0';text.style.transform='translateY(40px)';}
  },0);
}

/* ═══════════════════════════════════════════════════════
   14. NETWORK CANVASES
═══════════════════════════════════════════════════════ */
function initNetworkCanvases() {
  ELEMENTS.forEach(el => {
    const canvas=document.getElementById(`network-canvas-${el.id}`);
    if(!canvas) return;
    const ctx=canvas.getContext('2d');
    const section=canvas.closest('.el-network');
    const c=el.color;

    const NODE_COUNT=32;
    let nodes=[],scrollProgress=0;

    function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;buildNodes();}

    function buildNodes(){
      const W=canvas.width,H=canvas.height,cx=W/2,cy=H/2;
      nodes=[{cx,cy,spring:{x:new Spring({...PRESETS.bouncy,initial:cx}),y:new Spring({...PRESETS.bouncy,initial:cy})},r:6,hub:true,delay:0}];
      for(let i=0;i<NODE_COUNT-1;i++){
        const angle=(i/(NODE_COUNT-1))*Math.PI*2+Math.random()*0.4;
        const dist=70+Math.random()*Math.min(W,H)*0.38;
        const fx=cx+Math.cos(angle)*dist,fy=cy+Math.sin(angle)*dist;
        nodes.push({cx:fx,cy:fy,spring:{x:new Spring({...PRESETS.bouncy,initial:cx}),y:new Spring({...PRESETS.bouncy,initial:cy})},r:1.5+Math.random()*3,hub:false,delay:0.05+(i/(NODE_COUNT-1))*0.6});
      }
    }

    resize();
    window.addEventListener('resize',resize);

    window.addEventListener('scroll',()=>{
      if(!section) return;
      const rect=section.getBoundingClientRect(),vh=window.innerHeight;
      scrollProgress=clamp((vh-rect.top)/(vh+rect.height),0,1);
    },{passive:true});

    const flickerOff=nodes.map(()=>Math.random()*Math.PI*2);
    let last=null;

    function frame(now){
      if(!last)last=now;
      const dt=(now-last)/1000;last=now;
      const W=canvas.width,H=canvas.height;
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle=c.bg;ctx.fillRect(0,0,W,H);

      nodes.forEach((node,i)=>{
        if(node.hub){node.spring.x.target=node.cx;node.spring.y.target=node.cy;}
        else{
          const lp=clamp((scrollProgress-node.delay)/(1-node.delay+0.001),0,1);
          node.spring.x.target=lerp(nodes[0].cx,node.cx,lp);
          node.spring.y.target=lerp(nodes[0].cy,node.cy,lp);
        }
        node.spring.x.step(dt);node.spring.y.step(dt);
        node.px=node.spring.x.value;node.py=node.spring.y.value;
      });

      const t=now/1000;
      nodes.forEach((node,i)=>{
        if(node.hub) return;
        const hub=nodes[0];
        const dx=node.px-hub.px,dy=node.py-hub.py;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<2) return;
        const maxDist=Math.sqrt((node.cx-hub.cx)**2+(node.cy-hub.cy)**2);
        const dr=clamp(dist/maxDist,0,1);
        const flicker=0.85+0.15*Math.sin(t*2.1+(flickerOff[i]||0));
        const alpha=dr*0.5*flicker;

        ctx.save();
        ctx.beginPath();ctx.moveTo(hub.px,hub.py);
        const mx=(hub.px+node.px)/2+dy*0.08,my=(hub.py+node.py)/2-dx*0.08;
        ctx.quadraticCurveTo(mx,my,node.px,node.py);
        ctx.strokeStyle=ca(c,alpha);ctx.lineWidth=0.9;
        ctx.shadowColor=c.hex;ctx.shadowBlur=dr*8;ctx.stroke();ctx.restore();

        if(dr>0.7){
          const da=(dr-0.7)/0.3*flicker;
          ctx.save();ctx.beginPath();ctx.arc(node.px,node.py,node.r,0,Math.PI*2);
          ctx.fillStyle=ca(c,da*0.9);ctx.shadowColor=c.hex;ctx.shadowBlur=node.r*4*da;ctx.fill();ctx.restore();
        }
      });

      const hubA=clamp(scrollProgress*3,0,1);
      if(hubA>0.01){
        const hub=nodes[0],pulse=1+0.12*Math.sin(t*1.8);
        ctx.save();ctx.beginPath();ctx.arc(hub.px,hub.py,6*pulse,0,Math.PI*2);
        ctx.fillStyle=ca(c,hubA);ctx.shadowColor=c.hex;ctx.shadowBlur=22;ctx.fill();ctx.restore();
      }

      // Network text animation
      const heading=section&&section.querySelector('.net-heading');
      const body=section&&section.querySelector('.net-body');
      if(heading){
        heading.style.opacity=clamp(scrollProgress>0.25?1:0,0,1);
        heading.style.transform=`translateY(${scrollProgress>0.25?0:30}px)`;
        heading.style.transition='opacity 0.5s ease, transform 0.5s ease';
      }
      if(body){
        body.style.opacity=clamp(scrollProgress>0.35?1:0,0,1);
        body.style.transform=`translateY(${scrollProgress>0.35?0:30}px)`;
        body.style.transition='opacity 0.5s ease, transform 0.5s ease';
      }

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

/* ═══════════════════════════════════════════════════════
   15. SPINE CANVAS — multi-element, multi-color
═══════════════════════════════════════════════════════ */
function initSpineCanvas() {
  const canvas=document.getElementById('spine-canvas');
  const ctx=canvas.getContext('2d');
  const drawSpring=new Spring({stiffness:120,damping:22,mass:1,initial:0});
  let rawDraw=0;

  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
  resize();
  window.addEventListener('resize',()=>{resize();setTimeout(rebuildPath,300);});

  let waypoints=[],cachedSegs=[],totalLen=0;

  function getDocCenter(el){
    const r=el.getBoundingClientRect();
    return{docX:r.left+r.width/2,docY:r.top+r.height/2+window.scrollY};
  }

  function rebuildPath(){
    waypoints=[];
    ELEMENTS.forEach(el=>{
      const netSec=document.querySelector(`#el-${el.id} .el-network`);
      if(netSec){
        const r=netSec.getBoundingClientRect();
        waypoints.push({docX:window.innerWidth/2,docY:r.top+window.scrollY+r.height*0.5,color:el.color});
      }
      document.querySelectorAll(`#el-${el.id} .card-img-wrap`).forEach(wrap=>{
        waypoints.push({...getDocCenter(wrap),color:el.color});
      });
    });

    cachedSegs=[];totalLen=0;
    for(let i=1;i<waypoints.length;i++){
      const p0=waypoints[i-1],p1=waypoints[i];
      const wiggle=Math.sin(i*1.9+0.8)*32;
      const cpx=(p0.docX+p1.docX)/2+wiggle;
      const cpy=(p0.docY+p1.docY)/2;
      const len=approxSegLen(p0.docX,p0.docY,cpx,cpy,p1.docX,p1.docY);
      cachedSegs.push({x0:p0.docX,y0:p0.docY,cpx,cpy,x1:p1.docX,y1:p1.docY,len,color:p1.color});
      totalLen+=len;
    }
  }

  function updateProgress(){
    if(waypoints.length<2||cachedSegs.length===0||totalLen===0) return;
    // Map viewport-front directly to whichever segment it's currently inside.
    // This ensures the line reaches each waypoint exactly when that waypoint
    // enters the viewport at the chosen depth (55% down), regardless of how
    // evenly spaced the waypoints are vertically.
    const viewFront=window.scrollY+window.innerHeight*0.55;
    let accLen=0;
    for(let i=0;i<cachedSegs.length;i++){
      const y0=waypoints[i].docY;
      const y1=waypoints[i+1].docY;
      const segLen=cachedSegs[i].len;
      if(viewFront<=y0){
        rawDraw=accLen/totalLen;
        return;
      }
      if(viewFront<y1){
        const t=(viewFront-y0)/Math.max(y1-y0,1);
        rawDraw=(accLen+segLen*t)/totalLen;
        return;
      }
      accLen+=segLen;
    }
    rawDraw=1;
  }

  window.addEventListener('scroll',()=>{rebuildPath();updateProgress();},{passive:true});
  // Rebuild at multiple times: after initial render, after lazy images load, after fonts
  setTimeout(()=>{rebuildPath();updateProgress();},400);
  setTimeout(()=>{rebuildPath();updateProgress();},1800);
  window.addEventListener('load',()=>{setTimeout(()=>{rebuildPath();updateProgress();},200);});

  let last=null;
  function frame(now){
    if(!last)last=now;
    const dt=Math.min((now-last)/1000,0.064);last=now;
    drawSpring.target=rawDraw;drawSpring.step(dt);
    const W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    const frac=drawSpring.value;
    if(frac<0.002||cachedSegs.length===0){requestAnimationFrame(frame);return;}

    const target=totalLen*frac;
    let drawn=0;
    const sy=window.scrollY;
    ctx.save();ctx.lineCap='round';ctx.lineJoin='round';

    for(let i=0;i<cachedSegs.length;i++){
      if(drawn>=target) break;
      const s=cachedSegs[i];
      const remaining=target-drawn;
      const segFrac=clamp(remaining/s.len,0,1);
      drawn+=s.len*segFrac;

      const t2=segFrac,ti=1-t2;
      const ex=ti*ti*s.x0+2*ti*t2*s.cpx+t2*t2*s.x1;
      const ey=ti*ti*s.y0+2*ti*t2*s.cpy+t2*t2*s.y1;

      const ax=s.x0,ay=s.y0-sy;
      const bx=s.cpx,by=s.cpy-sy;
      const cx2=ex,cy2=ey-sy;

      if(Math.min(ay,cy2)>H+80||Math.max(ay,cy2)<-80) continue;

      const c=s.color;
      // Ambient
      ctx.beginPath();ctx.moveTo(ax,ay);ctx.quadraticCurveTo(bx,by,cx2,cy2);
      ctx.strokeStyle=cd(c,0.09);ctx.lineWidth=52;ctx.shadowBlur=0;ctx.stroke();
      // Medium
      ctx.beginPath();ctx.moveTo(ax,ay);ctx.quadraticCurveTo(bx,by,cx2,cy2);
      ctx.strokeStyle=cm(c,0.17);ctx.lineWidth=7;ctx.shadowColor=c.hex;ctx.shadowBlur=18;ctx.stroke();
      // Bright
      ctx.beginPath();ctx.moveTo(ax,ay);ctx.quadraticCurveTo(bx,by,cx2,cy2);
      ctx.strokeStyle=ca(c,0.72);ctx.lineWidth=1.5;ctx.shadowColor=c.hex;ctx.shadowBlur=10;ctx.stroke();

      if(segFrac>=1){
        const nx=s.x1,ny=s.y1-sy;
        ctx.beginPath();ctx.arc(nx,ny,4.5,0,Math.PI*2);
        ctx.fillStyle=c.hex;ctx.shadowColor=c.hex;ctx.shadowBlur=20;ctx.fill();
      }
    }

    if(waypoints.length&&frac>0.01){
      const hub=waypoints[0],pulse=1+0.1*Math.sin(now*0.0018);
      const c=ELEMENTS[0].color;
      ctx.beginPath();ctx.arc(hub.docX,hub.docY-sy,5.5*pulse,0,Math.PI*2);
      ctx.fillStyle=ca(c,clamp(frac*5,0,1));ctx.shadowColor=c.hex;ctx.shadowBlur=26;ctx.fill();
    }

    ctx.restore();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ═══════════════════════════════════════════════════════
   16. SCROLL-SPRING REVEALS
═══════════════════════════════════════════════════════ */
function initScrollReveals() {
  const targets=Array.from(document.querySelectorAll('[data-spring]'));
  const states=targets.map(el=>{
    const type=el.dataset.spring;
    const delay=parseFloat(el.dataset.delay||'0');
    const preset=type==='card'?PRESETS.bouncy:type==='slidetext'?PRESETS.gentle:PRESETS.snappy;
    const initY=type==='card'?50:40;
    return{el,type,delay,triggered:false,triggerTime:null,
      opS:new Spring({...preset,initial:0}),
      yS: new Spring({...preset,initial:initY})};
  });

  targets.forEach(el=>{
    el.style.opacity='0';
    el.style.transform=`translateY(${el.dataset.spring==='card'?50:40}px)`;
    el.style.willChange='transform,opacity';
  });

  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const state=states.find(s=>s.el===e.target);
        if(state&&!state.triggered){state.triggered=true;state.triggerTime=performance.now();}
      }
    });
  },{threshold:0.12});
  targets.forEach(el=>io.observe(el));

  let last=null;
  function frame(now){
    if(!last)last=now;
    const dt=(now-last)/1000;last=now;
    states.forEach(state=>{
      if(!state.triggered) return;
      const elapsed=(now-state.triggerTime)/1000;
      const active=elapsed>=state.delay;
      state.opS.target=active?1:0;
      state.yS.target=active?0:state.yS.value;
      state.opS.step(dt);state.yS.step(dt);
      state.el.style.opacity=clamp(state.opS.value,0,1);
      state.el.style.transform=`translateY(${state.yS.value}px)`;
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ═══════════════════════════════════════════════════════
   17. CARD HOVER SPRINGS
═══════════════════════════════════════════════════════ */
function initCardHoverSprings() {
  document.querySelectorAll('.card-img-wrap').forEach(wrap=>{
    const img=wrap.querySelector('img');if(!img) return;
    const sp=new Spring({stiffness:220,damping:24,mass:1,initial:1});
    let hovered=false,last=null;
    wrap.addEventListener('mouseenter',()=>{hovered=true;});
    wrap.addEventListener('mouseleave',()=>{hovered=false;});
    function frame(now){
      if(!last)last=now;const dt=(now-last)/1000;last=now;
      sp.target=hovered?1.05:1;sp.step(dt);
      img.style.transform=`scale(${sp.value})`;
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

/* ═══════════════════════════════════════════════════════
   18. CARD SCROLL PROXIMITY SCALE
═══════════════════════════════════════════════════════ */
function initCardScrollScale() {
  document.querySelectorAll('.card-img-wrap').forEach(wrap=>{
    const sp=new Spring({stiffness:150,damping:22,mass:1,initial:1});
    let last=null;
    function frame(now){
      if(!last)last=now;const dt=Math.min((now-last)/1000,0.064);last=now;
      const r=wrap.getBoundingClientRect();
      const centerY=r.top+r.height/2;
      const dist=Math.abs(centerY-window.innerHeight/2);
      const prox=clamp(1-dist/(window.innerHeight*0.55),0,1);
      sp.target=1+prox*0.038;sp.step(dt);
      wrap.style.scale=sp.value;
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

/* ═══════════════════════════════════════════════════════
   19. HERO SCROLL FADE
═══════════════════════════════════════════════════════ */
function initHeroScrollFades() {
  ELEMENTS.forEach(el=>{
    const heroDiv=document.querySelector(`#el-${el.id} .el-hero`);
    const text=document.getElementById(`heroText-${el.id}`);
    const cue=document.getElementById(`scrollCue-${el.id}`);
    if(!heroDiv||!text) return;
    window.addEventListener('scroll',()=>{
      const r=heroDiv.getBoundingClientRect();
      const t=clamp(-r.top/(window.innerHeight*0.4),0,1);
      text.style.opacity=clamp(1-t*1.4,0,1);
      if(cue) cue.style.opacity=clamp(1-t*3,0,1);
    },{passive:true});
  });
}

/* ═══════════════════════════════════════════════════════
   20. GLOBAL FINALE CANVAS — network from top down
═══════════════════════════════════════════════════════ */
function initFinaleCanvas() {
  const canvas=document.getElementById('finale-canvas');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  const section=document.getElementById('global-finale');
  const NODE_COUNT=55;
  let nodes=[],scrollProgress=0;

  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;buildNodes();}

  function buildNodes(){
    const W=canvas.width,H=canvas.height;
    const hubX=W/2,hubY=H*0.06;
    nodes=[{cx:hubX,cy:hubY,isHub:true,r:5,delay:0,
      spring:{x:new Spring({...PRESETS.bouncy,initial:hubX}),y:new Spring({...PRESETS.bouncy,initial:hubY})}}];
    for(let i=0;i<NODE_COUNT-1;i++){
      const angle=-Math.PI/2+(Math.random()-0.5)*Math.PI*1.65;
      const dist=60+Math.random()*Math.min(W,H)*0.6;
      let tx=hubX+Math.cos(angle)*dist;
      let ty=hubY+Math.abs(Math.sin(Math.abs(angle)))*dist*1.1;
      tx=clamp(tx,30,W-30);ty=clamp(ty,hubY,H-30);
      const vRatio=clamp((ty-hubY)/(H*0.9),0,1);
      const elIdx=Math.min(Math.floor(vRatio*ELEMENTS.length),ELEMENTS.length-1);
      nodes.push({cx:tx,cy:ty,isHub:false,r:1.5+Math.random()*2.5,
        delay:0.04+(i/(NODE_COUNT-1))*0.72,
        color:ELEMENTS[elIdx].color,
        spring:{x:new Spring({...PRESETS.bouncy,initial:hubX}),y:new Spring({...PRESETS.bouncy,initial:hubY})}});
    }
  }

  resize();
  window.addEventListener('resize',resize);

  window.addEventListener('scroll',()=>{
    if(!section) return;
    const rect=section.getBoundingClientRect(),vh=window.innerHeight;
    scrollProgress=clamp((vh-rect.top)/(vh+rect.height),0,1);
  },{passive:true});

  const flickerOff=Array.from({length:NODE_COUNT},()=>Math.random()*Math.PI*2);
  let last=null;

  function frame(now){
    if(!last)last=now;
    const dt=(now-last)/1000;last=now;
    const W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#050809';ctx.fillRect(0,0,W,H);

    nodes.forEach(node=>{
      if(node.isHub){node.spring.x.target=node.cx;node.spring.y.target=node.cy;}
      else{
        const lp=clamp((scrollProgress-node.delay)/(1-node.delay+0.001),0,1);
        node.spring.x.target=lerp(nodes[0].cx,node.cx,lp);
        node.spring.y.target=lerp(nodes[0].cy,node.cy,lp);
      }
      node.spring.x.step(dt);node.spring.y.step(dt);
      node.px=node.spring.x.value;node.py=node.spring.y.value;
    });

    const t=now/1000;
    nodes.forEach((node,i)=>{
      if(node.isHub) return;
      const hub=nodes[0];
      const dx=node.px-hub.px,dy=node.py-hub.py;
      const dist=Math.sqrt(dx*dx+dy*dy);if(dist<2) return;
      const maxDist=Math.sqrt((node.cx-hub.cx)**2+(node.cy-hub.cy)**2);
      const dr=clamp(dist/maxDist,0,1);
      const flicker=0.85+0.15*Math.sin(t*2.1+flickerOff[i]);
      const alpha=dr*0.45*flicker;
      const c=node.color||ELEMENTS[0].color;

      ctx.save();
      ctx.beginPath();ctx.moveTo(hub.px,hub.py);
      const mx=(hub.px+node.px)/2+dy*0.06,my=(hub.py+node.py)/2-dx*0.06;
      ctx.quadraticCurveTo(mx,my,node.px,node.py);
      ctx.strokeStyle=ca(c,alpha);ctx.lineWidth=0.9;
      ctx.shadowColor=c.hex;ctx.shadowBlur=dr*7;ctx.stroke();ctx.restore();

      if(dr>0.7){
        const da=(dr-0.7)/0.3*flicker;
        ctx.save();ctx.beginPath();ctx.arc(node.px,node.py,node.r,0,Math.PI*2);
        ctx.fillStyle=ca(c,da*0.85);ctx.shadowColor=c.hex;ctx.shadowBlur=node.r*4*da;ctx.fill();ctx.restore();
      }
    });

    // Hub
    const hubA=clamp(scrollProgress*3,0,1);
    if(hubA>0.01){
      const hub=nodes[0],pulse=1+0.12*Math.sin(t*1.8);
      // Hub glows with cycling element colors
      const elIdx=Math.floor(t*0.3)%ELEMENTS.length;
      const c=ELEMENTS[elIdx].color;
      ctx.save();ctx.beginPath();ctx.arc(hub.px,hub.py,6*pulse,0,Math.PI*2);
      ctx.fillStyle=ca(c,hubA);ctx.shadowColor=c.hex;ctx.shadowBlur=28;ctx.fill();ctx.restore();
    }

    // Edge fade overlay
    const fadeTop=ctx.createLinearGradient(0,0,0,H*0.12);
    fadeTop.addColorStop(0,'rgba(5,8,9,1)');fadeTop.addColorStop(1,'rgba(5,8,9,0)');
    ctx.fillStyle=fadeTop;ctx.fillRect(0,0,W,H*0.12);
    const fadeBot=ctx.createLinearGradient(0,H*0.88,0,H);
    fadeBot.addColorStop(0,'rgba(5,8,9,0)');fadeBot.addColorStop(1,'rgba(5,8,9,0.85)');
    ctx.fillStyle=fadeBot;ctx.fillRect(0,H*0.88,W,H*0.12);

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ═══════════════════════════════════════════════════════
   21. INFINITE SCROLL LOOP
═══════════════════════════════════════════════════════ */
function initInfiniteScroll() {
  let locked=false;
  window.addEventListener('scroll',()=>{
    if(locked) return;
    const maxScroll=document.body.scrollHeight-window.innerHeight;
    if(window.scrollY>=maxScroll-60){
      locked=true;
      const overlay=document.createElement('div');
      overlay.style.cssText='position:fixed;inset:0;background:#050809;z-index:99999;opacity:0;transition:opacity 0.55s ease;pointer-events:none;';
      document.body.appendChild(overlay);
      requestAnimationFrame(()=>requestAnimationFrame(()=>{overlay.style.opacity='1';}));
      setTimeout(()=>{
        window.scrollTo({top:0,behavior:'instant'});
        // Reset active element
        document.documentElement.style.setProperty('--page-bg','#070b09');
        document.documentElement.style.setProperty('--cursor-color','#6fcf5a');
        setTimeout(()=>{
          overlay.style.opacity='0';
          setTimeout(()=>{overlay.remove();locked=false;},600);
        },80);
      },580);
    }
  },{passive:true});
}

/* ═══════════════════════════════════════════════════════
   22. START SECTION FADE IN
═══════════════════════════════════════════════════════ */
function initStartFade(){
  const inner=document.getElementById('start-inner');
  if(!inner) return;
  inner.style.opacity='0';inner.style.transition='opacity 1.2s ease';
  setTimeout(()=>{inner.style.opacity='1';},900);
}

/* ═══════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════ */
buildPage();

initCursor();
initLoader();
initStartCanvas();
initStartBobs();
initStartFade();
initHeroCanvases();
initFloatingSymbols();
initHeroTexts();
initProgressBar();
initNetworkCanvases();

// Spine and reveals need DOM to be fully rendered
requestAnimationFrame(()=>{
  initSpineCanvas();
  initScrollReveals();
  initCardHoverSprings();
  initCardScrollScale();
  initHeroScrollFades();
  initActiveElementTracker();
  initFinaleCanvas();
  initInfiniteScroll();
});
