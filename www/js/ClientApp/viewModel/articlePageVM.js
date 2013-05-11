//το viewmodel της αναλυτικής σείδας του άρθρου
//

(function (appObj) {


    appObj.ui.articlePageViewModel = function () {

        var self = this;

        //page observables
        self.selectedArticle = ko.observable();
        self.hasBeenAddedToFavorites = ko.observable(false);
        self.hasBeenRemovedFromFavorites = ko.observable(false);

        //computed observables
        self.hasInStorage = ko.computed(function () {
            var currentArticle = self.selectedArticle();
            var hasBeenAdded = self.hasBeenAddedToFavorites();
            var hasBeenRemoved = self.hasBeenRemovedFromFavorites();
            //appObj.log(hasBeenAdded);
            //appObj.log(hasBeenRemoved);
            if (currentArticle) {
                var ok = appObj.hasInStorage(currentArticle.ArticleID);
                return ok;
            }
            else
                return false;
        });
        
        self.navbarButton = 0;
        self.showArticle = function (article, navbarButton) {

            //debugger;
            appObj.log(article.ArticleID);
            self.hasBeenAddedToFavorites(false);
            self.hasBeenRemovedFromFavorites(false);
            self.navbarButton = navbarButton;
            //get data
            //appObj.log(article.PublishDate);
            article.PublishDate = moment.utc(article.PublishDate).local().format("D/MM/YYYY HH:mm:ss");
            //appObj.log(article.PublishDate.format("D/MM/YYYY HH:mm:ss"));

            self.selectedArticle(article);

            //show the page
            //appObj.changePage(appObj.articlePageUrl + '/' + article.ArticleID); //causes reload of article page (full event stack)
            //appObj.changePage(appObj.articlePageUrl, { type: 'post', data: { Id: article.ArticleID } }); //causes reload of article page (full event stack)
            appObj.changePage(appObj.articlePageUrl);


        };

        self.goToCategory = function (data,event) {

            //appObj.ui.selectedCategory(data.CategoryID);
            if (appObj.ui.mainViewModel == null) {
                appObj.ui.mainViewModel = new appObj.ui.mainPageViewModel();
            }
            appObj.ui.mainViewModel.goToCategory(data);
            appObj.ui.hzScrollPosition = appObj.ui.scrollAjaxLayoutCategories.x;
            appObj.changePage(appObj.homePageUrl, {reverse:true});
        };

        self.goBack = function () {
            if (self.navbarButton == 3) { // favorites
                //appObj.ui.selectedCategory(data.CategoryID);
                if (appObj.ui.mainViewModel == null) {
                    appObj.ui.mainViewModel = new appObj.ui.mainPageViewModel();
                }
                appObj.ui.mainViewModel.goToNavbar(self.navbarButton);
            }
            window.history.go(-1);
            //the folowing cll makes jqm to return to the top of the prevoues page
            //WE DONT WANT THIS
            //appObj.changePage(appObj.homePageUrl, { reverse: true }); 
        };


        self.showDefaultArticles = function () {
            //do nothing
            window.history.go(-1);
            appObj.ui.mainViewModel.showDefaultArticles();
        };

        
        self.addToFavorites = function () {
            var currentArticle = self.selectedArticle();
            //localStorage.setItem(currentArticle.ArticleID, 'true'); //currentArticle.ArticleID
            var ok = appObj.addToStorage(currentArticle.ArticleID);
            if (ok) {
                appObj.ui.favoritesCount(appObj.ui.favoritesCount() + 1);
                appObj.log('added to Favorites');
                self.hasBeenAddedToFavorites(true);
            }
            
        };
        
        self.removefromFavorites = function () {
            var currentArticle = self.selectedArticle();
            //localStorage.removeItem(currentArticle.ArticleID)
            var ok = appObj.removeFromStorage(currentArticle.ArticleID);
            if (ok) {
                appObj.ui.favoritesCount(appObj.ui.favoritesCount() - 1);
                appObj.log('removed from Favorites');
                self.hasBeenRemovedFromFavorites(true);
            }
        };

        
        //self.articleUrl = ko.computed(function () {
        //    alert("1");
        //    var currentArticle = self.selectedArticle();
        //    alert(currentArticle);
        //    if (currentArticle) {
        //        return 'http://www.metrogreece.gr/ArticleDetails/tabid/82/ArticleID/' + currentArticle.ArticleID + '/Default.aspx'
        //    }
        //    return '';
        //});
        //self.articleTitle = ko.computed(function () {
        //    var currentArticle = self.selectedArticle();
        //    if (currentArticle) {
        //        return currentArticle.Title;
        //    }
        //    return '';
        //});
        self.shareThisUpdate = ko.computed(function () {
            var currentArticle = self.selectedArticle();
            if (currentArticle) {
                if ($('span[class="st_facebook_large"],[class="st_twitter_large"],[class="st_googleplus_large"],[class="st_linkedin_large"]').length > 0)
                    $('span[class="st_facebook_large"],[class="st_twitter_large"],[class="st_googleplus_large"],[class="st_linkedin_large"]').remove();

                var facebook = $("<span>");
                facebook.addClass('st_facebook_large');
                facebook.attr({
                    'displayText': 'Facebook',
                    'st_url': 'http://www.metrogreece.gr/ArticleDetails/tabid/82/ArticleID/' + currentArticle.ArticleID + '/Default.aspx',
                    'st_title': currentArticle.Title
                });
                $("#sthisbtns").append(facebook);

                var twitter = $("<span>");
                twitter.addClass('st_twitter_large');
                twitter.attr({
                    'displayText': 'Twitter',
                    'st_url': 'http://www.metrogreece.gr/ArticleDetails/tabid/82/ArticleID/' + currentArticle.ArticleID + '/Default.aspx',
                    'st_title': currentArticle.Title
                });
                $("#sthisbtns").append(twitter);

                var googleplus = $("<span>");

                googleplus.addClass('st_googleplus_large');
                googleplus.attr({
                    'displayText': 'Google+',
                    'st_url': 'http://www.metrogreece.gr/ArticleDetails/tabid/82/ArticleID/' + currentArticle.ArticleID + '/Default.aspx',
                    'st_title': currentArticle.Title
                });
                $("#sthisbtns").append(googleplus);

                var linkedin = $("<span>");
                linkedin.addClass('st_linkedin_large');
                linkedin.attr({
                    'displayText': 'LinkedIn',
                    'st_url': 'http://www.metrogreece.gr/ArticleDetails/tabid/82/ArticleID/' + currentArticle.ArticleID + '/Default.aspx',
                    'st_title': currentArticle.Title
                });
                $("#sthisbtns").append(linkedin);

            }
        });

    };

    appObj.ui.articlePageViewModel.prototype = new appObj.ui.baseViewModel();

})(urbanit_MG);

