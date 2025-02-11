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
            var oData = {
                recipient: {
                    name: "Universe"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});
