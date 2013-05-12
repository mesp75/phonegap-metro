//this file should be positioned before jquery.mobile.js

$(document).bind("mobileinit", function () {
    //apply overrides here
    $.extend($.mobile, {
        hashListeningEnabled: true,    //default : true
        ajaxEnabled: false,             //default : true
        linkBindingEnabled: false,      //default : true
        allowCrossDomainPages: true,
        pushStateEnabled: true         //default : true
        //minScrollBack : 0
    });
    $.mobile.page.prototype.options.addBackBtn = false; //default : false
    $.mobile.page.prototype.options.domCache = true;
});

/*
activeBtnClass
    ---string, default: "ui-btn-active"
    ---The CSS class used for "active" button state.

activePageClass 
    ---string, default: "ui-page-active"
    ---The CSS class used for the page currently in view or in a transition.

ajaxEnabled 
    ---boolean, default: true
    ---jQuery Mobile will automatically handle link clicks and form submissions through Ajax, when possible. 
       If false, URL hash listening will be disabled as well, and URLs will load as ordinary HTTP requests.

allowCrossDomainPages 
    ---boolean, default: false
    ---When jQuery Mobile attempts to load an external page, 
        the request runs through $.mobile.loadPage(). 
        This will only allow cross-domain requests if $.mobile.allowCrossDomainPages is set to true. 
        Because the jQuery Mobile framework tracks what page is being viewed within the browser's location hash, 
        it is possible for a cross-site scripting (XSS) attack to occur if the XSS code in question 
        can manipulate the hash and set it to a cross-domain URL of its choice. 
        This is the main reason that the default setting for $.mobile.allowCrossDomainPages is set to false. 
        In PhoneGap apps that must "phone home" by loading assets off a remote server, 
        both the $.support.cors AND $.mobile.allowCrossDomainPages must be set to true.

 autoInitializePage 
    ---boolean, default: true
    ---When the DOM is ready, the framework should automatically call $.mobile.initializePage. 
        If false, the page will not initialize and will be visually hidden 
        until $.mobile.initializePage is manually called.
    
buttonMarkup.hoverDelay 
    ---integer, default: 200
    ---Set the delay for touch devices to add the hover and down classes on touch interactions 
        for buttons throughout the framework. Reducing the delay here results in a more responsive feeling ui, 
        but will often result in the downstate being applied during page scrolling.
        
defaultDialogTransition 
    ---string, default: 'pop'
    ---Set the default transition for dialog changes that use Ajax. Set to 'none' for no transitions.

defaultPageTransition 
    ---string, default: 'fade'
    ---Set the default transition for page changes that use Ajax. 
        Note: default changed from 'slide' to 'fade' in 1.1. 
        Set to 'none' for no transitions.

getMaxScrollForTransition 
    ---integer, default: 3
    ---Set a scroll position breakpoint for transitions. 
        If the scroll position is greater than the window height multiplied 
        by the value that has been set, transition "none" will be used.

gradeA 
    ---function that returns a boolean, 
        default: a function returning the value of $.support.mediaquery
        Any support conditions that must be met in order to proceed.

hashListeningEnabled 
    ---boolean, default: true
    ---jQuery Mobile will automatically listen and handle changes to the location.hash. 
        Disabling this will prevent jQuery Mobile from handling hash changes, 
        which allows you to handle them yourself or use simple deep-links 
        within a document that scroll to a particular id.

ignoreContentEnabled 
    ---boolean, default: false
    ---Warning: Setting this property to true will cause performance degradation on enhancement. 
       Once set, all automatic enhancements made by the framework to each enhanceable element of the user's markup 
       will first check for a data-enhance=false parent node. 
       If one is found the markup will be ignored. 
       This setting and the accompanying data attribute provide a mechanism through which users can prevent enhancement 
       over large sections of markup.
        
linkBindingEnabled 
    ---boolean, default: true
    ---jQuery Mobile will automatically bind the clicks on anchor tags in your document. 
        Setting this option to false will prevent all anchor click handling 
        including the addition of active button state and alternate link bluring. 
        This should only be used when attempting to delegate the click management 
        to another library or custom code.

loadingMessage 
    ---string, default: "loading"
    ---Set the text that appears when a page is loading. 
        If set to false, the message will not appear at all.

    Deprecated in 1.2 - use $.mobile.loader.prototype.options.text instead. See the loader docs for more.


loadingMessageTextVisible 
    ---boolean, default: false
    ---Whether the text should be visible when a loading message is shown. 
        The text is always visible for loading errors.

    Deprecated in 1.2 - use $.mobile.loader.prototype.options.textVisible instead. See the loader docs for more.


loadingMessageTheme 
    ---string, default: "a"
    ---The theme that the loading message box uses when text is visible.

    Deprecated in 1.2 - use $.mobile.loader.prototype.options.theme instead. See the loader docs for more.

maxTransitionWidth 
    ---integer, boolean, default: false
    ---Set a max width for transitions. 
        The option accepts any number representing a pixel width and its default value false. 
        If a number value is set, transition "none" will be used 
        if the window is wider than the specified value.

minScrollBack 
    ---integer, default: 250
    ---Minimum scroll distance that will be remembered when returning to a page.

ns 
    ---string, default: ""
    ---The namespace used in data attributes (e.g., data-role). 
    Can be set to any string, including a blank string which is the default. 
    When using, it's clearest if you include a trailing dash, 
    such as "mynamespace-" which maps to data-mynamespace-foo="...".

    If you use data- namespacing, you will need to update/override one selector in the theme CSS. 
    The following data selectors should incorporate the namespace you're using:

    .ui-mobile [data-mynamespace-role=page], .ui-mobile [data-mynamespace-role=dialog], .ui-page { ...
    		

pageLoadErrorMessage 
    ---string, default: "Error Loading Page"
    ---Set the text that appears when a page fails to load through Ajax.

pageLoadErrorMessageTheme 
    ---string, default: "e"
    ---Set the theme that the error message box uses.

phonegapNavigationEnabled 
    ---boolean, default: false
    ---Replace calls to window.history.back with PhoneGap's navigation helper where it is available. 
    This addresses navigation issues on page refresh in Android PhoneGap applications using jQuery Mobile.

pushStateEnabled 
    ---boolean, default: true
    ---Enhancement to use history.replaceState in supported browsers, 
    to convert the hash-based Ajax URL into the full document path. 
    Note that we recommend disabling this feature if Ajax is disabled or if external links are used extensively.

subPageUrlKey 
    ---string, default: "ui-page"
    ---The url parameter used for referencing widget-generated sub-pages 
    (such as those generated by nested listviews). 
    Translates to example.html&ui-page=subpageIdentifier. 
    The hash segment before &ui-page= is used by the framework 
    for making an Ajax request to the URL where the sub-page exists.

touchOverflowEnabled 
    ---boolean, default: false
    ---Enable smoother page transitions and true fixed toolbars in devices 
    that support both the overflow: and overflow-scrolling: touch; CSS properties.

    Deprecated in 1.1.0

transitionFallbacks.[transition] 
    ---string, default: "fade"
    ---Set the fallback transition for browsers 
    that don't support 3D transforms for a specific transition type. 

*/