sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("app2.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the parent init()
            UIComponent.prototype.init.apply(this, arguments);

            // Example: set a simple JSON model

            this.getRootControl().addEventDelegate({
                onAfterRendering: function() {
                    var oSharedModel = this.getModel("sharedModel");
                    if (oSharedModel) {
                        console.log("Child Component - Received Shared Model after rendering:", oSharedModel.getData());
                    } else {
                        console.warn("Child Component - Shared Model Not Found!");
                    }
                }.bind(this)
            });
        }
    });
});
