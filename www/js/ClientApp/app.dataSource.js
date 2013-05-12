﻿(function (appObj)
{

    var datasource = function ()
    {
        /*this.categoriesList = [
        { CategoryID: 2, Name: 'News', IsSelected: ko.observable(false) },
        { CategoryID: 7, Name: 'Sports', IsSelected: ko.observable(false) },
        { CategoryID: 16, Name: 'Business', IsSelected: ko.observable(false) },
        { CategoryID: 21, Name: 'Culture', IsSelected: ko.observable(false)  },
        { CategoryID: 26, Name: 'Style', IsSelected: ko.observable(false) },
        { CategoryID: 31, Name: 'Travel', IsSelected: ko.observable(false) },

        ];*/
        this.categoriesList = [
                                { CategoryID: 2, Name: 'News' },
                                { CategoryID: 7, Name: 'Sports' },
                                { CategoryID: 16, Name: 'Business' },
                                { CategoryID: 21, Name: 'Culture' },
                                { CategoryID: 26, Name: 'Style' },
                                { CategoryID: 31, Name: 'Travel' },

        ];

        this.articlesList = [
            {
                ArticleID: 1,
                CategoryID: 2,
                Featured: false,
                Title: '«Πέρασε» το μεσοπρόθεσμο με 153 θετικές ψήφους. Εκτός ΚΟ επτά βουλευτές από ΠΑΣΟΚ και ΝΔ',
                Summary: 'Με 153 θετικές ψήφους εγκρίθηκε το πολυνομοσχέδιο.«Όχι» ψήφισαν 128 βουλευτές και «παρών» 18.Το νομοσχέδιο καταψήφισαν όλα τα κόμματα της αντιπολίτευσης,&nbsp; οι βουλευτές της ΔΗΜΑΡ δήλωσαν «παρών», ενώ έξι βουλευτές από το ΠΑΣΟΚ και ένας βουλευτής της ΝΔ τέθηκαν εκτός Κοινοβουλευτικής Ομάδας.<br>',
                Photo: 'http://www.skai.gr/files/temp/53F8805A510128655F5E050E1C07DED5.jpg',
                Description: 'Με 153 θετικές ψήφους εγκρίθηκε στη Ολομέλεια της Βουλής το πολυνομοσχέδιο. «Όχι» ψήφισαν 128 βουλευτές και «παρών» 18 βουλευτές. Το νομοσχέδιο καταψήφισαν όλα τα κόμματα της αντιπολίτευσης,&nbsp; οι βουλευτές της ΔΗΜΑΡ δήλωσαν «παρών», ενώ έξι βουλευτές από το ΠΑΣΟΚ και ένας βουλευτής της ΝΔ τέθηκαν εκτός Κοινοβουλευτικής Ομάδας. <br><br>Πιο συγκεκριμένα, εκτός ΚΟ ΠΑΣΟΚ τέθηκε ο Κώστας Σκανδαλίδης, που απουσίαζε από την ψηφοφορία, οι Αγγελική Γκερέκου, Μάρκος Μπόλαρης και Γιάννης Κουτσούκος, που δήλωσαν «παρών» και οι Θεόδωρος Παραστατίδης και Μιχάλη Κασσής, οι οποίοι ψήφισαν<br>"όχι".<br><br>Εκτός ΚΟ της ΝΔ τέθηκε ο βουλευτής Κοζάνης Γεώργιος Κασαπίδης, ο οποίος δήλωσε «παρών» κατά την ψηφοφορία.<br><br>Ο βουλευτής του ΠΑΣΟΚ Κώστας Σκανδαλίδης, αιτιολογώντας τη στάση του, ανέφερε σε γραπτή του δήλωση ότι «τα μέτρα και η διαδικασία διαπραγμάτευσης που προηγήθηκε, δυστυχώς αποτελούν πλήρη αντιστροφή των προεκλογικών λόγων του ΠΑΣΟΚ και κατάφωρη παραβίαση της προγραμματικής συμφωνίας».<br><br>«Τώρα ξεκινούν τα δύσκολα», δήλωσε εξερχόμενος της Βουλής ο υπουργός Οικονομικών, Γιάννης Στουρνάρας.<br>'
            },
            {
                ArticleID: 2,
                CategoryID: null,
                Featured: true,
                Title: 'Σαμαράς: Η Ελλάδα έκανε ένα αποφασιστικό βήμα προς την ανάκαμψη',
                Summary: '«Η Ελλάδα έκανε σήμερα ένα αποφασιστικό βήμα προς την ανάκαμψη, για το οποίο είμαι πολύ ευχαριστημένος», δήλωσε εξερχόμενος από τη Βουλή ο πρωθυπουργός, μετά το αποτέλεσμα της ψηφοφορίας.',
                Photo: 'http://www.skai.gr/files/temp/789C4FB49FFB7D2A46F152839B4830DF.jpg',
                Description: '«Η Ελλάδα έκανε σήμερα ένα αποφασιστικό βήμα προς την ανάκαμψη, για το οποίο είμαι πολύ ευχαριστημένος», δήλωσε εξερχόμενος από τη Βουλή ο πρωθυπουργός, μετά το αποτέλεσμα της ψηφοφορίας.<br> Όπως είπε ο κ. Σαμαράς, «προϋπόθεση είναι να δουν οι Έλληνες καλύτερες ημέρες... το επόμενο βήμα είναι ο προϋπολογισμός την Κυριακή, που επίσης θα πάει καλά».«Η προσοχή μας όμως θα επικεντρωθεί μετά τη Δευτέρα», πρόσθεσε ο κ. Σαμαράς, και κατέληξε λέγοντας:  <br>«Μοναδικός, αλλά και προσωπικός μου στόχος είναι να δώσουμε το δικαίωμα της ανάπτυξης στον ελληνικό λαό, να του ξαναδώσουμε το χαμόγελο με συντονισμένη δουλειά, με επενδύσεις με αποκρατικοποιήσεις και γενικά με κινήσεις που θα δώσουν προς τα μέσα την αλλαγή της ψυχολογίας και προς τα έξω το μήνυμα ότι η Ελλάδα έχει αλλάξει σελίδα».'
            },
        //Sports
            {
            ArticleID: 70,
            CategoryID: 7,
            Featured: false,
            Title: 'Χωρίς τον Χριστοδουλόπουλο ο Παναθηναϊκός με ΠΑΟΚ',
            Summary: 'Χωρίς τον Λάζαρο Χριστοδουλόπουλο θα παραταχθεί ο Παναθηναϊκός εναντίον του ΠΑΟΚ, αύριο (19:30 ΣΚΑΪ 100.3) στο ΟΑΚΑ. Ο διεθνής μεσοεπιθετικός έκανε θεραπεία σήμερα, όπως και ο Μπουμσόνγκ, και έτσι δεν θα τεθεί αντιμέτωπος με την παλιά του ομάδα.',
            Photo: 'http://www.skai.gr/files/temp/B796D3DA5C485AE43D9859D523EB897C.jpg',
            Description: 'Χωρίς τον Λάζαρο Χριστοδουλόπουλο θα παραταχθεί ο Παναθηναϊκός εναντίον του ΠΑΟΚ, αύριο (19:30 ΣΚΑΪ 100.3) στο ΟΑΚΑ. Ο διεθνής μεσοεπιθετικός έκανε θεραπεία σήμερα, όπως και ο Μπουμσόνγκ, και έτσι δεν θα τεθεί αντιμέτωπος με την παλιά του ομάδα. <br> <br>Η προετοιμασία ολοκληρώθηκε σήμερα και ο Χουάν Ραμόν Ρότσα επέλεξε 19 παίκτες για το (τρίτο) ντεμπούτο του στον πάγκο του Παναθηναϊκού, αφήνοντας εκτός αποστολής, εκτός των δύο προαναφερθέντων, και τους Πίντο, Σο, Κουσίδη, Μαρινάκη, Καπίνο, Ταμπάκη, Δώνη και Μπαρμπαρούση.<br><br>Η αποστολή: Καρνέζης, Κοτσόλης, Σεϊταρίδης, Μαρίνος, Βύντρα, Σπυρόπουλος, Βελάσκες, Τριανταφυλλόπουλος, Χουχούμης, Σισοκό, Βιτόλο, Μαυρίας, Ζέκα, Λαγός, Φουρλάνος, Φορναρόλι, Πετρόπουλος, Κουίνσι, Τοτσέ. '
        },
            {
                ArticleID: 71,
                CategoryID: 7,
                Featured: false,
                Title: 'Μόνη πρώτη η Σίτι- ήττα Γιουνάιτεντ με 1-0 απο τη Νόριτς',
                Summary: 'Η Μάντσεστερ Σίτι ήταν η μεγάλη κερδισμένη της 12ης αγωνιστικής του αγγλικού πρωταθλήματος, καθώς «σκαρφάλωσε» στην κορυφή της βαθμολογίας. Οι «πολίτες» συνέτριψαν 5-0 την Άστον Βίλα και άφησαν ένα βαθμό πίσω τους τη «συμπολίτισσα» Γιουνάιτεντ, η οποία ηττήθηκε 1-0 από τη Νόριτς στο «Κάροου Ρόουντ».',
                Photo: 'http://www.skai.gr/files/temp/A335B06ADEDEDD97DB7F8017CE6C8B01.jpg',
                Description: 'Η Μάντσεστερ Σίτι ήταν η μεγάλη κερδισμένη της 12ης αγωνιστικής του αγγλικού πρωταθλήματος, καθώς «σκαρφάλωσε» στην κορυφή της βαθμολογίας. Οι «πολίτες» συνέτριψαν 5-0 την Άστον Βίλα και άφησαν ένα βαθμό πίσω τους τη «συμπολίτισσα» Γιουνάιτεντ, η οποία ηττήθηκε 1-0 από τη Νόριτς στο «Κάροου Ρόουντ». Στο μεταξύ, η Τσέλσι έχασε έδαφος στην «κούρσα» για τον τίτλο, ύστερα από την εκτός έδρας ήττα της 2-1 από τη Γουέστ Μπρομ, η οποία «αναρριχήθηκε» στην τέταρτη θέση της κατάταξης.<br><br><strong>Τα αποτελέσματα και οι σκόρερ στην 12η αγωνιστική της πρέμερσιπ έχουν ως εξής:</strong><br><br>Αρσεναλ-Τότεναμ 5-2<br><br>(24΄ Μερτεζάκερ, 42΄ Ποντόλσκι, 45+1΄ Ζιρού, 60΄ Καθόρλα, 90+1΄ Γουόλκοτ - 10΄ Αντεμπαγιόρ, 71΄ Μπέιλ)    <br>    <br>    Λίβερπουλ-Γουίγκαν 3-0    <br>    <br>    (47΄, 58΄ Σουάρες, 65΄ Χοσέ Ενρίκες)    <br>    <br>    Μάντσεστερ Σίτι-Αστον Βίλα 5-0    <br>    <br>    (43΄ Νταβίντ Σίλβα, 54΄ πεν., 67΄ Αγουέρο, 65΄ πεν., 74΄ Τέβες)    <br>    <br>    Νιούκαστλ Σουόνσι 1-2    <br>    <br>    (90+3΄ Μπα - 58΄ Μιτσού, 87΄ Ντε Γκούζμαν)    <br>    <br>    ΚΠΡ-Σαουθάμπτον 1-3    <br>    <br>    (49΄ Χόιλετ - 23΄ Λάμπερτ, 45+1΄ Πάντσεον, 83΄ αυτ. Φέρντιναντ)    <br>    <br>    Ρέντινγκ-Εβερτον 2-1    <br>    <br>    (51΄, 79΄ πεν. Λε Φοντρ - 10΄ Νέισμιθ)    <br>    <br>    Γουέστ Μπρομ-Τσέλσι 2-1    <br>    <br>    (10΄ Λονγκ, 50΄ Οντεμβινγκί - 39΄ Αζάρ)    <br>    <br>    Νόριτς-Μάντσεστερ Γ. 1-0    <br>    <br>    (60΄ Πίλκινγκτον)    <br>    <br>    Φούλαμ-Σάντερλαντ 18/11    <br>    <br>    Γουέστ Χαμ-Στόουκ 19/11    <br>    <br>    <br>    <strong>    <br>    <br>    Μάντσεστερ Σίτι 28    <br>    <br>    Μάντσεστερ Γ. 27    <br>    <br>    Τσέλσι 24    <br>    <br>    Γουέστ Μπρομ 23    <br>    <br>    Έβερτον 20    <br>    <br>    Άρσεναλ 19    <br>    <br>    Γουέστ Χαμ 18 -11αγ.    <br>    <br>    Τότεναμ 17    <br>    <br>    Φούλαμ 16 -11αγ.    <br>    <br>    Σουόνσι 16    <br>    <br>    Λίβερπουλ 15    <br>    <br>    Νιούκαστλ 14    <br>    <br>    Νόριτς 14    <br>    <br>    Στόουκ Σίτι 12 -11αγ.    <br>    <br>    Γουίγκαν 11    <br>    <br>    Σάντερλαντ 9 -10αγ.    <br>    <br>    Ρέντινγκ 9 -11αγ.    <br>    <br>    Άστον Βίλα 9    <br>    <br>    Σαουθάμπτον 8    <br>    <br>    ΚΠΡ 4 '
            },
        //Culture
            {
            ArticleID: 210,
            CategoryID: 21,
            Featured: true,
            Title: 'Πέθανε ο ηθοποιός Μάκης Ρευματάς',
            Summary: 'Σε ηλικία 77 ετών έφυγε από τη ζωή ο ηθοποιός Μάκης Ρευματάς, ο οποίος έπασχε από λέμφωμα. «Σταθμοί» στην καριέρα του Μάκη Ρευματά ήταν η συμμετοχή του στις τηλεοπτικές σειρές Γιούγκερμαν και «Ο πρίγκιπας», ενώ συμμετείχε σε ταινίες όπως «Η Δασκάλα με τα Ξανθά Μαλλιά», «Κατάσκοπος Νέλλη», «Κοντσέρτο για πολυβόλα».',
            Photo: 'http://www.skai.gr/files/temp/DA1F5ED38C510A48431E1D010A980007.jpg',
            Description: 'Σε ηλικία 77 ετών έφυγε από τη ζωή ο ηθοποιός Μάκης Ρευματάς, ο οποίος έπασχε από λέμφωμα.<br><br>Ο Μάκης Ρευματάς γεννήθηκε το 1935 στην Αθήνα.<br><br>«Σταθμοί» στην καριέρα του Μάκη Ρευματά ήταν η συμμετοχή του στις τηλεοπτικές σειρές Γιούγκερμαν και «Ο πρίγκιπας», ενώ συμμετείχε σε ταινίες όπως «Η Δασκάλα με τα Ξανθά Μαλλιά», «Κατάσκοπος Νέλλη», «Κοντσέρτο για πολυβόλα». '
        },
            {
                ArticleID: 211,
                CategoryID: 21,
                Featured: true,
                Title: 'Διαμάχη για τα Κύθηρα',
                Summary: 'Ο πίνακας του Ζαν Αντουάν Βατώ "Επιβίβαση για τα Κύθηρα" που βρίσκεται στο ανάκτορο Charlottenburg στο Βερολίνο φαίνεται ότι αγοράστηκε δύο φορές από το γερμανικό δημόσιο. Η Θέμις έχει τώρα το λόγο ',
                Photo: 'http://www.skai.gr/files/temp/15BD8EEE679FA287C7A4B57E6F731AD9.jpg',
                Description: 'Στο Πρωτοδικείο του Βερολίνου στην οδό Tegeler Weg, ένα βαρύ νεορωμανικό κτίριο που χτίστηκε το 1900, χαρακτηριστικό δείγμα της αρχιτεκτονικής στην τελευταία φάση της γερμανικής αυτοκρατορίας, εκδικάζεται αυτές τις μέρες μια παράξενη υπόθεση. Στο κέντρο της βρίσκεται ένας θαυμάσιος πίνακας του Ζαν Αντουάν Βατώ, η «Επιβίβαση για τα Κύθηρα», έργο του 1717 που δείχνει την αναχώρηση μιας παρέας νέων για το ανέμελο νησί του έρωτα, τα Κύθηρα. Ο πίνακας βρίσκεται σήμερα στο ανάκτορο Charlottenburg και για να μη βγει στο σφυρί το 1983 το γερμανικό δημόσιο τον είχε αγοράσει από τον κάτοχο, τη βασιλική οικογένεια των Hohenzollern. Τώρα ο επικεφαλής της δυναστείας, πρίγκιπας Γεώργιος Φρειδερίκος προσέφυγε στη δικαιοσύνη κατά του εκδοτικού οίκου Schnell & Steiner επιρρίπτοντάς του ότι θίγει την τιμή και την υπόληψη της οικογενείας του, του πρώην βασιλικού οίκου της Πρωσίας. Περί τίνος πρόκειται;<br><br><span style="color: #002060;"><br><br>Ο εκδοτικός οίκος κυκλοφόρησε φέτος ένα βιβλίο του τεχνοκριτικού Guido Hinterkeuser για τους θησαυρούς των ανακτόρων του Βερολίνου. Και στο βιβλίο αυτό παρουσιάζεται ένα ντοκουμέντο που εντοπίστηκε πριν από πέντε μόλις χρόνια στα αρχεία της Παλαιάς Εθνικής Πινακοθήκης. Είναι το επίσημο αντίγραφο ενός διατάγματος του Πρωσικού Υπουργείου Οικονομικών. Πιστοποιεί ότι ο πίνακας του Βατώ είχε αγοραστεί ήδη το 1928 από το γερμανικό δημόσιο που είχε καταβάλει τότε στον οίκο των Hohenzollern 1.800.000 αυτοκρατορικά μάρκα. Με δυο λόγια ο αναγνώστης του βιβλίου αποκομίζει την εντύπωση ότι το δημόσιο αγόρασε μια φορά προπολεμικά και μια φορά μεταπολεμικά τον ίδιο πίνακα και στην ατμόσφαιρα πλανάται η εντύπωση ότι η πρώην βασιλική οικογένεια απομυζά τον δημόσιο κορβανά. Επί της ουσίας το πιθανότερο είναι ότι δεν υπάρχει δόλος, τα στοιχεία δείχνουν ότι το μεγάλο ρήγμα του 2ου Παγκοσμίου Πολέμου κατάπιε όχι μόνο πολλά έγγραφα αλλά και ένα μέρος της δημόσιας μνήμης. Επί της διαδικασίας από την αρχή της δίκης κιόλας οι δικαστές επισήμαναν ότι το γερμανικό δίκαιο προστατεύει σήμερα την τιμή και υπόληψη του ατόμου, όχι όμως και την ξεπερασμένη τιμή της οικογένειας.<br><br><span style="color: #002060;"><br><br>Δεν μπορεί να προδικάσει κανείς το οριστικό τέλος αυτής της ιστορίας, ωστόσο τα σχόλια του τύπου είναι ενδιαφέροντα. Το συμπέρασμα της συντηρητικής Frankfurter Allgemeine Zeitung: „Το πραγματικό δίδαγμα αυτής της υπόθεσης είναι ότι δεν υπάρχει ιστορικό ίχνος, δεν υπάρχει έγγραφο ή διοικητική πράξη του παρελθόντος τόσο καταχωνιασμένη που να μην μπορεί ανά πάσα στιγμή να ξαναβγεί στο φως. Δεν υπάρχει οριστική λήθη, μόνο διαβαθμίσεις της μνήμης.» Η φιλελεύθερη Süddeutsche Zeitung του Μονάχου βγάζει το δικό της δίδαγμα: «Όποιος παρακολουθεί τη δίκη σ’ αυτό το νεορωμανικό φρούριο της Θέμιδος, αυτή την υπόμνηση της μεγάλης εποχής των φεουδαρχικών αξιών, εγκαταλείπει την αίθουσα με ανάμικτα συναισθήματα. Είναι πολύ ωραίο που το παμπάλαιο αυτό κτίριο διατηρείται ακόμα. Και είναι πολύ σωστό που αυτή την εποχή ανακαινίζεται. Αλλά είναι επίσης υπέροχο ότι πνευματικά έχουμε ξεπεράσει όλα αυτά που συμβόλιζε κάποτε.» Και η δική μας αυθόρμητη κατακλείδα: να μια διαφοροποιημένη και εκλογικευμένη, υγιής σχέση ενός λαού με το παρελθόν του.<br><br>'
            }

        ];
    };




    //fake calls
    datasource.prototype.getCategories = function (parameters)
    {
        return this.categoriesList;
    };

    datasource.prototype.getArticles = function (params)
    {
        var crossUrl = 'http://www.tatchit-dev.com/metrogreece/api/Articles/GetArticles';
        var theUrl = 'http://localhost/metrogreeceWeb/api/Articles/GetArticles';
        /*
        var parameters = {
        CategoryID: theCategory,
        Featured: theFeaturedFlag,
        PageIndex: thePageIndex,
        PageSize: thePageSize
        };
        */
        var jqxhr = $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: crossUrl,
            data: params,
            dataType: "json",
            beforeSend: function ()
            {
                appObj.ui.loadingData(true);
            }
        })
                    .done(function (jsonList)
                    {
                    })
                    .fail(function ()
                    {
                        alert('Error getting Articles!!!');
                    })
                    .always(function ()
                    {
                        appObj.ui.loadingData(false);
                    });

        return jqxhr;

        //return filteredArticles;
        /*
        parameters should contain the following
        1. CategoryId 
        -- nullable

        2. feature
        -- bool 
        -- Προτεινόμενα (default : 1) ή τελευταία νεα

        */
        /*
        var parameters = params || {};
        //appObj.log(parameters.Featured !== null);
        var theList=this.articlesList;
        var filteredArticles =  ko.utils.arrayFilter(theList, function (item) {

           
        if (parameters.CategoryID !== null && parameters.Feutured !== null) {
        return (item.CategoryID === parameters.CategoryID && item.Featured === parameters.Featured);

        }
        else if (parameters.Featured !== null) {
        return (item.Featured === parameters.Featured);
        }
        });
        //appObj.log(filteredArticles);
        return filteredArticles;
        */
    };
    /*datasource.prototype.getArticle = function (articleID) {

    return this.articlesList[articleID-1];
    };*/

    appObj.datasource = new datasource();

})(urbanit_MG);


