define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'mage/cookies'
    ], function($, modal, cookies) {
    var options = {
        type: 'popup',
        responsive: true,
        innerScroll: true,
        modalClass: 'newsletter-modal',
        buttons: []
    };

    var popup = modal(options, $('#newsletter-popup'));

    $(document).ready(function() {
        if(!$("body").hasClass("checkout-index-index")) {
            setTimeout(function(){
                if($.cookie('MyCookie') == null) {
                    $('#newsletter-popup').modal('openModal');
                    // if we want to display popup only once
                    // $.cookie('MyCookie', 1);
                }
            }, 10000);
        }
    });
});