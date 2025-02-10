sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/ComponentContainer"
], function (Controller, ComponentContainer) {
    "use strict";

    return Controller.extend("sap.ui.demo.app2.controller.App", {
        onInit: function () {
            console.log("App2 Loaded!");
        }
    });
});