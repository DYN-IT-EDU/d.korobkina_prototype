sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ComponentContainer"
], function (UIComponent, JSONModel, ComponentContainer) {
    "use strict";
    // sap.ui.loader.config({
    //     paths: {
    //         "sap.ui.demo.app2": "../app2/webapp"
    //     }
    // });
    return UIComponent.extend("sap.ui.demo.app1.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            // // 
            // this.createComponent({
            //     usage: "app2" // matches the 'componentUsages.app2' key in manifest.json
            //   }).then(function (oSubComponent) {
            //     // 3) Embed the sub-component in a container
            //     var oSubCompContainer = new sap.ui.core.ComponentContainer({
            //       component: oSubComponent
            //     });
        
            //     // 4) Add the container to some part of the UI (e.g., root view)
            //     // For example, if your root view is a sap.m.App or a sap.m.Page
            //     var oRootView = this.getRootControl();  // Typically returns the top-level view
            //     oRootView.byId("mySubCompArea").addItem(oSubCompContainer);
        
            //   }.bind(this));
            // //   
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});