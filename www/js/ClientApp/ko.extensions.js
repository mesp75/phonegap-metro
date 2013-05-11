(function (ko, appObj) {

    //http://stackoverflow.com/questions/10231347/knockout-afterrender-but-just-once?rq=1
    //http://jsfiddle.net/rniemeyer/Ampng/
    //http://jsfiddle.net/rniemeyer/Ampng/37/

    ko.virtualElements.allowedBindings.refreshListViewOnce = true;
    ko.bindingHandlers.refreshListViewOnce = {
        init: function (element) {
            // locate the listview
            var listview = $(element).parents()
                                     .andSelf()
                                     .filter("[data-role='listview']");

            //appObj.log('refreshListViewOnce');
            appObj.ui.refreshListView(listview);
        }
    };
    
    ko.virtualElements.allowedBindings.refreshListViewOnChange = true;
    ko.bindingHandlers.refreshListViewOnChange = {
        update: function (element, valueAccessor) {
            ko.utils.unwrapObservable(valueAccessor());  //grab dependency

            // locate the listview
            var listview = $(element).parents()
                                     .andSelf()
                                     .filter("[data-role='listview']");

            //appObj.log('refreshListViewOnChange');
            appObj.ui.refreshListView(listview);
            //appObj.log($("#ArticleListWrapper").height());
        }
    };


    ko.bindingHandlers.refreshScrollerOnChange = {
        update: function (element, valueAccessor) {
            ko.utils.unwrapObservable(valueAccessor());  //grab dependency
            //if (appObj.ui.scrollArticleList==null)
            //    appObj.ui.scrollArticleList = new iScroll('ArticleListWrapper', appObj.ui.scrollOptions_ArticleList);
            //appObj.ui.scrollArticleList.refresh();
            //appObj.log($("#ArticleListWrapper").height());
        }
    };

    

})(ko, urbanit_MG);
