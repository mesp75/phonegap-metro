//το viewmodel της κυρίως σελίδας

(function (appObj) {


    /*
        Υποθέσεις
        1. Το μοντέλο αυτό θα γίνει consume από το knockoutjs
        2. Δεν θα χρησιμοποιήσουμε κάποιο μοντέλο δεδομένων (data model)
           λόγω απλότητας της εφαρμογής (λογικά δεν έχει editable λειτουργικότητες)
        3. Μάλλον δεν θα χρησιμοποιήσουμε και client side routing (summy.js)
           για τον ίδιο λόγο
    */
    appObj.ui.mainPageViewModel = function () {

        var self=this;


        //common ui observables
        appObj.ui.categories(appObj.datasource.getCategories());
        appObj.ui.selectedCategory(null);//default καμία επιλογή



        //page observables
        //self.selectedFeaturedFlag = ko.observable(true);//default τα προτεινόμενα
        self.selectedNavbarButton = ko.observable(1);//default τα προτεινόμενα

        self.articles = ko.observableArray([]);
        self.pageIndex = ko.observable(1);
        self.pageSize=  ko.observable(10);
        self.renderArticles = ko.observable(false);

        self.scrollPosition = ko.observable(0);

        self.addToFavorites = function () {
            appObj.ui.favoritesCount(appObj.ui.favoritesCount() + 1);
        };

        self.showArticles = function () {
            self.renderArticles(true);
        };

        self.goToArticle = function (article) {
            self.scrollPosition(appObj.ui.getPageScroll());
            if (appObj.ui.articleViewModel == null) {
                appObj.ui.articleViewModel = new appObj.ui.articlePageViewModel();
            }
            appObj.ui.hzScrollPosition = appObj.ui.scrollPageLayoutCategories.x;
            appObj.ui.articleViewModel.showArticle(article, self.selectedNavbarButton());
            
        };

        self.goToCategory = function (data, event) {
            var currentCategory = appObj.ui.selectedCategory();
            if (currentCategory !== data.CategoryID) {
                appObj.ui.selectedCategory(data.CategoryID);
                self.pageIndex(1);
                self.renderArticles(true);
            }
        };

        self.goToNavbar = function (flag) {
            //flag=1: Προτεινόμενα
            //flag=0: Τελευταία
            //self.renderArticles(false);
            var currentflag = self.selectedNavbarButton();
            if (currentflag !== flag || flag==3) { //Let Favorite button to refresh tself everytime we click t
                self.pageIndex(1);
                self.selectedNavbarButton(flag);
                if (flag == 3)
                    appObj.ui.selectedCategory(null);
                self.renderArticles(true);
            }
        };
        self.showDefaultArticles = function () {
            var category = appObj.ui.selectedCategory();
            var flag = self.selectedNavbarButton();
            //appObj.log(category);
            //appObj.log(flag);
            if (category != null || flag !== 1) {
                self.hzScrollPosition = 0;
                appObj.ui.selectedCategory(null);
                self.selectedNavbarButton(1);
                self.pageIndex(1);
                self.renderArticles(true);
                appObj.ui.scrollPageLayoutCategories.scrollTo(appObj.ui.hzScrollPosition, 0, 50);
            }

            
        };

        self.nextPage = function () {
            var currentPageIndex = self.pageIndex();
            self.pageIndex(currentPageIndex + 1);
            self.renderArticles(true);
        };
        self.previousPage = function () {
            var currentPageIndex = self.pageIndex();
            if (currentPageIndex>1)
                self.pageIndex(currentPageIndex - 1);
            self.renderArticles(true);
        };

        self.dataChangedTrigger = ko.computed(function () {
            //appObj.log('dataChangedTrigger');
            var theNavbarButton = self.selectedNavbarButton()
            if (self.renderArticles() && theNavbarButton<4) { // Προτεινόμενα ή τελευταία
                var theCategory =       appObj.ui.selectedCategory(),
                    thePageIndex=       self.pageIndex();
                thePageSize = self.pageSize();
                theFavorites = '';
                if (theNavbarButton == 3) {
                    var arrData = appObj.getStorage();
                    //theFavorites = JSON.stringify(arrData);
                    theFavorites =arrData.join(); 
                }

                var parameters = {
                    CategoryID: theCategory,
                    NavType: theNavbarButton,
                    Favorites: theFavorites,
                    PageIndex: thePageIndex,
                    PageSize: thePageSize
                };
                //self.articles([]);
                
                appObj.log('getting articles');
                var theArticles = appObj.datasource.getArticles(parameters)
                    .done(function (jsonList) {
                        //console.log(jsonList);
                        if (thePageIndex == 1) {
                            self.articles(jsonList)
                            $.mobile.silentScroll(0);
                        }
                        else {
                            ko.utils.arrayPushAll(self.articles, jsonList);
                            self.scrollPosition(appObj.ui.getPageScroll());
                            $.mobile.silentScroll(self.scrollPosition()+100);
                        }
                    })
                    .always(function(){
                        self.renderArticles(false);
                    });
                
            }
            else if (theNavbarButton == 3) {

            }
        });

    };

    appObj.ui.mainPageViewModel.prototype = new appObj.ui.baseViewModel();

})(urbanit_MG);
