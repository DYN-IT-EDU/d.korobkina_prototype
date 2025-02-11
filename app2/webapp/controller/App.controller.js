sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("app2.controller.App", {
        onInit: function () {
            console.log("App2 Loaded!");
        }
    });
});
