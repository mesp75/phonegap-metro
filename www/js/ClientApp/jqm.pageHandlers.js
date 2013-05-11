(function (appObj) {
    //--------------------------------
    // mainPage
    //--------------------------------
    $("div:jqmData(role='page')[id='mainPage']").live('pagebeforecreate', function (event, ui) {
        appObj.log('page Event ' + event.target.id + '.pagebeforecreate');
    });
    $("div:jqmData(role='page')[id='mainPage']").live('pagecreate', function (event, ui) {
        appObj.log('page Event ' + event.target.id + '.pagecreate');
        
    });
    $("div:jqmData(role='page')[id='mainPage']").live('pageinit', function (event) {
        appObj.log('page Event ' + event.target.id + '.pageinit');
        var page = $(event.target);

        // Initialize widgets prior to knockout
        appObj.ui.scrollPageLayoutCategories = new iScroll('PageLayoutCategories', appObj.ui.scrollOptions_Categories);
        //appObj.ui.scrollArticleList = new iScroll('ArticleListWrapper', appObj.ui.scrollOptions_ArticleList);
        //appObj.log($("#ArticleListWrapper").height());

        // Initialize Knockout
        if (appObj.ui.mainViewModel == null) {
            appObj.ui.mainViewModel = new appObj.ui.mainPageViewModel();
        }
        ko.applyBindings(appObj.ui.mainViewModel, page.get(0));
     
        //show Articles
        appObj.ui.mainViewModel.showArticles();
        //appObj.ui.mainViewModel.goToCategory(2);
        try {
            stLight.options({ publisher: '2d542e22-eb06-47ea-8f59-896ff90fa37d' });
        }
        catch (ex) { }
        var arrData = appObj.getStorage();
        appObj.ui.favoritesCount(arrData.length);

    });
    $("div:jqmData(role='page')[id='mainPage']").live('pagebeforeshow', function (event, ui) {
        //var a = ui.prevPage;
        
        //var fb = $(a).find('span[class="st_facebook_large"]');
        ////alert(fb);
        ////debugger;
        //if (fb.length >0) {
        //    alert($(fb).attr('st_url'));
        //    $(fb).attr('st_url', '');
        //    alert($(fb).attr('st_url'));
        //}
        //if (a != undefined)
          //alerta.$('span[class="st_facebook_large"]').attr('st_url'));
        //debugger;
        appObj.log('page Event ' + event.target.id + '.pagebeforeshow');
        
    });
    $("div:jqmData(role='page')[id='mainPage']").live('pageshow', function (event, ui) {
        appObj.log('page Event ' + event.target.id + '.pageshow');
        //Για κάποο λόγο ο scroller πρέπε να γίνει refresh αφού τελειώσουν τα events
        appObj.ui.scrollPageLayoutCategories.refresh();
        //appObj.log(appObj.ui.scrollPageLayoutCategories.x);
        //appObj.ui.scrollArticleList.refresh();
        //appObj.log($("#ArticleListWrapper").height());
        //$.mobile.silentScroll(appObj.ui.mainViewModel.scrollPosition());
        appObj.ui.scrollPageLayoutCategories.scrollTo(appObj.ui.hzScrollPosition, 0, 50)
    });




    //--------------------------------
    // articlePage
    //--------------------------------
    $("div:jqmData(role='page')[id='articlePage']").live('pagebeforecreate', function (event, ui) {
        appObj.log('page Event ' + event.target.id + '.pagebeforecreate');
    });
    $("div:jqmData(role='page')[id='articlePage']").live('pagecreate', function (event, ui) {
        appObj.log('page Event ' + event.target.id + '.pagecreate');
    });
    $("div:jqmData(role='page')[id='articlePage']").live('pageinit', function (event) {
        appObj.log('page Event ' + event.target.id + '.pageinit');
        var page = $(event.target);
        // Initialize widgets prior to knockout
        //appObj.ui.scrollAjaxLayoutCategories = $('#AjaxLayoutCategories').iScroll(appObj.ui.scrollOptions_Categories);
        appObj.ui.scrollAjaxLayoutCategories = new iScroll('AjaxLayoutCategories', appObj.ui.scrollOptions_Categories);

        // Initialize Knockout
        if (appObj.ui.articleViewModel == null) {
            appObj.ui.articleViewModel = new appObj.ui.articlePageViewModel();
        }
        ko.applyBindings(appObj.ui.articleViewModel, page.get(0));
        //var backButton = $('a[data-theme="app-ios"]').filter('[data-rel="back"]');
        //if (backButton) {
            //backButton.find('.ui-icon').remove();
            //backButton.append('<div class="ios-tip"><span>&nbsp;</span></div>');
        //}
       

    });
    $("div:jqmData(role='page')[id='articlePage']").live('pagebeforeshow', function (event, ui) {
        appObj.log('page Event ' + event.target.id + '.pagebeforeshow');
        
       
    });
    $("div:jqmData(role='page')[id='articlePage']").live('pageshow', function (event, ui) {
        appObj.log('page Event ' + event.target.id + '.pageshow');
        try {
            //debugger;
            //var a = ui;
            //var fb = $(a).find('span[class="st_facebook_large"]');
            //alert("a");
            ////debugger;
            //if (fb.length > 0) {
            //    alert($(fb).attr('st_url'));
            //    //$(fb).attr('st_url', '');
            //    //alert($(fb).attr('st_url'));
            //}
            stButtons.locateElements();
        }
        catch (ex) { }
        appObj.ui.scrollAjaxLayoutCategories.refresh();
        appObj.ui.scrollAjaxLayoutCategories.scrollTo(appObj.ui.hzScrollPosition, 0, 50)
    });

    /*
    //=======================================================================
    //--------------------------------
    // notFoundErrorPage
    //--------------------------------
    $("div:jqmData(role='page')[id='notFoundErrorPage']").live('pagebeforecreate', function (event, ui) {
        urbanit_MG.log('page Event ' + event.target.id + '.pagebeforecreate');
    });
    $("div:jqmData(role='page')[id='notFoundErrorPage']").live('pagecreate', function (event, ui) {
        urbanit_MG.log('page Event ' + event.target.id + '.pagecreate');
    });
    $("div:jqmData(role='page')[id='notFoundErrorPage']").live('pageinit', function (event) {
        urbanit_MG.log('page Event ' + event.target.id + '.pageinit');
        // Initialize Knockout
        var page = $(event.target);
        //GBG.ui.homeModel = new homePageContext();
        ko.applyBindings({}, page.get(0));
    
    });
    $("div:jqmData(role='page')[id='notFoundErrorPage']").live('pagebeforeshow', function (event, ui) {
        urbanit_MG.log('page Event ' + event.target.id + '.pagebeforeshow');
    });
    $("div:jqmData(role='page')[id='notFoundErrorPage']").live('pageshow', function (event, ui) {
        urbanit_MG.log('page Event ' + event.target.id + '.pageshow');
    });
    //=======================================================================
    //--------------------------------
    // pageLoadFailedErrorPage
    //--------------------------------
    $("div:jqmData(role='page')[id='pageLoadFailedErrorPage']").live('pagebeforecreate', function (event, ui) {
        urbanit_MG.log('page Event ' + event.target.id + '.pagebeforecreate');
    });
    $("div:jqmData(role='page')[id='pageLoadFailedErrorPage']").live('pagecreate', function (event, ui) {
        urbanit_MG.log('page Event ' + event.target.id + '.pagecreate');
    });
    $("div:jqmData(role='page')[id='pageLoadFailedErrorPage']").live('pageinit', function (event) {
        urbanit_MG.log('page Event ' + event.target.id + '.pageinit');
        // Initialize Knockout
        var page = $(event.target);
        //GBG.ui.homeModel = new homePageContext();
        ko.applyBindings({}, page.get(0));
    
    });
    $("div:jqmData(role='page')[id='pageLoadFailedErrorPage']").live('pagebeforeshow', function (event, ui) {
        urbanit_MG.log('page Event ' + event.target.id + '.pagebeforeshow');
    });
    $("div:jqmData(role='page')[id='pageLoadFailedErrorPage']").live('pageshow', function (event, ui) {
        urbanit_MG.log('page Event ' + event.target.id + '.pageshow');
        //setTimeout(function() { window.location.reload(); }, 5000);
    });
    */




    //generic handlers
    //.........................
    $("div:jqmData(role='page')").live('pagebeforehide', function (event, ui) {
        //urbanit_MG.log('page Event pagebeforehide');
        //GBG.ui.clearErrorDOM();
    });

    /*
    $("div:jqmData(role='page')").live('pageshow', function (event, ui) {
        //urbanit_MG.log('page Event pagebeforehide');
        //$.mobile.silentScroll(0);
    });
    */

    $(document).bind("pagecreate", function (event) {

        //console.log(event);
        //var page = $(event.target);
        //GBG.ui.antiForgeryToken = GBG.ui.getTokenfromPageInput(page);
        //console.log(GBG.ui.antiForgeryToken);
    });

    $(document).bind("pageloadfailed", function (event, data) {

        // Let the framework know we're going to handle things.

        // ... attempt to load some other page ...
        // at some point, either in this callback, or through
        // some other async means, call resolve, passing in
        // the following args, plus a jQuery collection object
        // containing the DOM element for the page.
        // Change the page
        //alert('pageloadfailed='+GBG.ui.globalAjaxErrorStatusCode);
        /*
        if (!GBG.ui.changePage(GBG.ui.NotAuthorizedErrorPage)) {
        // If it fails, call reject
        data.deferred.reject(data.absUrl, data.options);
        }
        */


        /*
        var showErrorMessageInErrorPage = false;
        //alert(data.xhr.status);
        if (data.xhr.status == 401) { //Unauthorized
            $.mobile.pageLoadErrorMessage = "Session Expired";
            //setTimeout("window.location.reload();", 3000);
            showErrorMessageInErrorPage = true;
        }
        else if (data.xhr.status == 500) { // InternalServer Error
            $.mobile.pageLoadErrorMessage = "Internal Server Error";
            showErrorMessageInErrorPage = true;
        }
        else if (data.xhr.status == 400) { //Bad Request
            $.mobile.pageLoadErrorMessage = "Bad Request";
            showErrorMessageInErrorPage = true;
        }
        else {
            $.mobile.pageLoadErrorMessage = GBG.ui.localizedResources.pageLoadErrorMessage;
    
        }
        GBG.ui.pageLoadFailedErrorMessage = $.mobile.pageLoadErrorMessage;
        //showErrorMessageInErrorPage = false;
        if (showErrorMessageInErrorPage) {
            event.preventDefault();
    
            data.deferred.reject(data.absUrl, data.options);
            if (!GBG.ui.changePage(GBG.ui.pageLoadFailedErrorPage)) {
                // If it fails, call reject
                //data.deferred.reject(data.absUrl, data.options);
            }
        }
        */

    });
    
    $(window).bind('orientationchange', function (event) {
        //alert('orientationchange...');
        if (event.orientation) {
            if (event.orientation == 'portrait') {
                //do something
            }
            else if (event.orientation == 'landscape') {
                //do something
            }
            if (appObj.ui.scrollPageLayoutCategories)
                appObj.ui.scrollPageLayoutCategories.refresh();
            if (appObj.ui.scrollAjaxLayoutCategories)
                appObj.ui.scrollAjaxLayoutCategories.refresh();
            //appObj.ui.scrollArticleList.refresh();

        }
    });

})(urbanit_MG);