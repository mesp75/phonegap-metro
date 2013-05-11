/*
http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

application object
based on javascript module pattern and anonymous closures

*/

//urbanit_metrogreece
var urbanit_MG = (function (appObj) {


    appObj.version = "0.95";

    //VARIABLES
    appObj.fullPageLoad = false;

    //............................
    //methods
    appObj.log = function (message) {
        try{
            console.log(message);
        }
        catch (ex) { }
    };



    appObj.changePage = function (to, initOptions) {
        initOptions = initOptions || {};
        var options = {
            transition: "fade",
            reverse: false,
            changeHash: true
        };
        jQuery.extend(options, initOptions);
        var ok = $.mobile.changePage(to, options);
    };

    appObj.navigate = function (to) {
        var ok = $.mobile.navigate(to);
    };

    //loading from storage
    appObj.getStorage = function () {
        var arrData = [];
        if (localStorage) {
            var currentArrData = localStorage["favorites"];
            //appObj.log(currentArrData);
            if (typeof currentArrData != "undefined")
                arrData = JSON.parse(currentArrData);
        }
        //appObj.log(arrData);
        return arrData;
    };

    //Checking storage
    appObj.hasInStorage = function (id) {
        if (!localStorage) { return false; }
        var arrData = appObj.getStorage();
        var index = arrData.indexOf(id);
        return  index > -1;
    }

    //save storage
    appObj.saveStorage = function (data) {
        //console.dir(data);
        var stringData = JSON.stringify(data);
        localStorage.setItem('favorites', stringData);
    };



    //Adding to storage
    appObj.addToStorage = function (id) {
        if (!appObj.hasInStorage(id)) {
            appObj.log("addToStorage: ArticleId " + id + " DOES NOT exist in the localstorage");
            var arrData = appObj.getStorage();
            appObj.log(arrData);
            //data[id] = label;
            arrData.push(id);
            appObj.saveStorage(arrData);
            return true;
        }
        else 
            appObj.log("addToStorage: ArticleId " + id + " EXIST in the localstorage");
        
        return false;
    };
                
                
    
               
    //Adding to storage
    appObj.removeFromStorage = function (id) {
        if (appObj.hasInStorage(id)) {
            var arrData = appObj.getStorage();
            //delete data[id];
            var index = arrData.indexOf(id);

            if (index > -1) {
                arrData.splice(index, 1);
            }


            //console.log('removed ' + id);
            appObj.saveStorage(arrData);
            return true;
        }
        return false;
    };

    return appObj;

}(urbanit_MG || {}));


