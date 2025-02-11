sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/ComponentContainer"
], function (Controller, ComponentContainer) {
  "use strict";

  return Controller.extend("sap.ui.demo.app1.controller.App", {
      onTilePress: function () {
          // 1) Get reference to 'app1' component
          var oApp1Component = this.getOwnerComponent();

          // 2) Create sub-component (app2)
          //    references "usage: 'app2'" from manifest.json
          oApp1Component
              .createComponent({
                  usage: "app2"
              })
              .then(function (oSubComponent) {
                  // 3) Wrap it in a ComponentContainer
                  var oSubCompContainer = new ComponentContainer({
                      component: oSubComponent
                  });

                  // 4) Place inside some layout in this view
                  var oVBox = this.getView().byId("mySubCompArea");
                  oVBox.addItem(oSubCompContainer);
              }.bind(this));
      }
  });
});
