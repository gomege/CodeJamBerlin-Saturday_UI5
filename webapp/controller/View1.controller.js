sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("CodeJam.controller.View1", {

		handleListItemPress: function (evt) {
		 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		 	var selectedProductId = evt.getSource().getBindingContext().getProperty("ProductID");
			oRouter.navTo("detail", {
				productId: selectedProductId
						}
					);
				},
		handleSearch : function (evt) {
			// create model filter
			var filters = [];
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}
		
			// update list binding
			var list = this.getView().byId("List");
			var binding = list.getBinding("items");
			binding.filter(filters);
		}
			});
});