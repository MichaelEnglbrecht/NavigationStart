sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.navigation1.controller.Main", {
		onInit: function() {
			var oLinktoApp = this.getView().byId("navLink");
			this.fgetService = sap.ushell && sap.ushell.Container 
					&& sap.ushell.Container.getService;
			this.oCrossAppNavigator = this.fgetService && 
							this.fgetService("CrossApplicationNavigation");

			var oHref = this.oCrossAppNavigator.hrefForExternal({
				target: {
					semanticObject: "NavigationEnd",
					action: "display"
				},
				params: {"Text" : "Hello World"}
			}) || "";

		oLinktoApp.setHref(oHref);
	//	console.log(oLinktoApp);
		},

		onPress: function(oEvent) {
			this.oCrossAppNavigator.toExternal({
				target: {
					semanticObject: "NavigationEnd",
					action: "display"
				},
				params: {"Text" : "Hello World"}
			});
		}
	});

});