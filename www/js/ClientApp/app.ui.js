(function (appObj) {

    var ui = function () {
        var self = this;

        //global viewModels
        self.mainViewModel = null;
        self.articleViewModel = null;

        self.categories = ko.observableArray([]);
        self.selectedCategory = ko.observable();
        self.isCategorySelected = function (CategoryID) {
            return self.selectedCategory() == CategoryID;
        };
        self.loadingData = ko.observable(false);
        self.loadingData.subscribe(function (newValue) {
            //console.log(newValue);
            if (newValue===true)
                $.mobile.loading('show', { theme: "b", text: "", textonly: false });
            else if (newValue === false)
                $.mobile.loading('hide');
        });

        self.favoritesCount = ko.observable(0);

        self.hzScrollPosition = 0;
        //for testing sliding menou
        //self.categoriesMenouIndex = ko.observable(1);
        //self.categoriesMenouWidth = ko.observable($(window).width() / 3);

        //iscroll variables
        self.scrollPageLayoutCategories = null;
        self.scrollAjaxLayoutCategories = null;

        self.scrollArticleList = null;

        self.scrollOptions_Categories = {
                        hScroll: true,
                        vScroll: false,
                        hScrollbar: true,
                        vScrollbar: false
                        //scrollbarClass: 'myScrollbar'
                        //snap: 'li'
        };
        self.scrollOptions_ArticleList = {
            hScroll: false,
            vScroll: true,
            hScrollbar: false,
            vScrollbar: true
            //scrollbarClass: 'myScrollbar'
            //snap: 'li'
        };


        self.refreshListView = function (listview) {
            
            if (listview) {
                appObj.log('refreshing Listview [' + listview.attr("id") + ']');
                try {
                    $(listview).listview('refresh');
                } catch (e) {
                    // if the listview is not initialised, the above call with throw an exception
                    // there doe snot appear to be any way to easily test for this state, so
                    // we just swallow the exception here.
                }
            }
            
        };

        self.getPageScroll=function () {
            var yScroll;
            if (self.pageYOffset) {
                yScroll = self.pageYOffset;
            } else if (document.documentElement && document.documentElement.scrollTop) {
                yScroll = document.documentElement.scrollTop;
            } else if (document.body) {
                yScroll = document.body.scrollTop;
            }
            return yScroll
        }
    };

    appObj.ui = new ui();

    appObj.ui.baseViewModel = function () {
        var self = this;
        //self.categories = ko.observableArray([]);


    };
    //Shared Data across all view Models
    appObj.ui.baseViewModel.prototype.navbarButton_Featured = 1;
    appObj.ui.baseViewModel.prototype.navbarButton_Latest = 2;
    appObj.ui.baseViewModel.prototype.navbarButton_Favorites = 3;
/*
    appObj.ui.baseViewModel.prototype.categories = ko.observableArray([]);
    appObj.ui.baseViewModel.prototype.selectedCategory = ko.observable();
    appObj.ui.baseViewModel.prototype.isCategorySelected = function (CategoryID) {
        return this.selectedCategory() == CategoryID;
    };
    */




})(urbanit_MG);
