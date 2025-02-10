sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/ComponentContainer"
], function (Controller, ComponentContainer) {
    "use strict";

    return Controller.extend("sap.ui.demo.app1.controller.App", {
        onTilePress: function () {
          // 1) Get reference to the 'app1' component
          var oApp1Component = this.getOwnerComponent();

          // 2) Create sub-component (app2)
          oApp1Component
            .createComponent({
              usage: "app2",
            })
            .then(
              function (oSubComponent) {
                // 3) Wrap it in a ComponentContainer
                var oSubCompContainer = new sap.ui.core.ComponentContainer({
                  component: oSubComponent,
                });

                // 4) Place inside some layout in this view
                var oVBox = this.getView().byId("mySubCompArea");
                oVBox.addItem(oSubCompContainer);
              }.bind(this)
            );

          // var oApp2Component = new ComponentContainer({
          //     name: "sap.ui.demo.app2",  // ✅ Use the correct namespace
          //     height: "100%"
          // });
          // var oContainer = this.getView().byId("app2Container");

          // // Destroy previous App2 instance
          // // oContainer.destroyContent();  // ✅ Use destroyContent() for VBox

          // // Create and embed App2 inside App1
          // var oApp2Component = new ComponentContainer({
          //     name: "sap.ui.demo.app2",  // ✅ Use correct namespace
          //     height: "100%"
          // });

          // oContainer.addItem(oApp2Component);
          // var oContainer = this.getView().byId("app2Container");

          // Destroy previous instance if it exists
          // oContainer.destroyItems();

          // // Create and embed app2 inside app1
          // var oApp2Component = new ComponentContainer({
          //     name: "app2",
          //     height: "100%"
          // });

          // oContainer.addItem(oApp2Component);
        }
    });
});
