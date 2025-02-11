sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    sap.ui.loader.config({
        paths: {
            // "app2": "../app2/webapp"
            "app2": "http://localhost:8081/"
        }
    });

    return UIComponent.extend("sap.ui.demo.app1.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call parent's init
            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});
