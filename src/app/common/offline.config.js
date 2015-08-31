(function() {
    'use strict';
    Offline.options = {
        checkOnLoad: false,
        interceptRequests: true,
        requests: false,
        reconnect: false,
        deDupBody: false
    }

    Offline.on('up', function() {
        console.log('up');
    });

    Offline.on('down', function() {
        console.log('down');
    });

})();
