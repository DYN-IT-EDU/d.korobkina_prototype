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
            var oModel = new sap.ui.model.json.JSONModel({
              greeting: "Hello from Parent",
            }); 
            this.setModel(oModel, "sharedModel");
            // console.log("model itself look:", )
            console.log("COMPONENT.JS model data:", oModel.getData('greeting',))
        }
    });
});
