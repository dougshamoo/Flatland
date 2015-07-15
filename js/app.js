(function() {
    var app = angular.module("store", []);

    app.controller('StoreController', function() {
      this.products = gems;
    });

    app.controller('PanelController', function() {
      this.tab = 1;
      this.selectTab = function(setTab) {
      	this.tab = setTab;
      };
      this.isSelected = function(checkTab) {
        return this.tab === checkTab;
      };
    });

    app.controller('ReviewController', function() {
      this.review = {};
      this.addReview = function(product) {
        product.reviews.push(this.review);
        this.review = {};
      };
    });

    app.directive('productTitle', function() {
      return {
      	restrict: 'E',
      	templateUrl: 'product-title.html'
      };
    });

    var gems = [
	  {
	  	name: 'Dodecahedron',
	  	price: 2,
	  	description: 'This is a Dodecahedron',
	  	canPurchase: false,
	  	soldOut: false,
	  	image: 'http://static.spark.autodesk.com/2013/04/27__20_15_58/RegularDodecahedron01.png876e1ad8-1245-4648-b46f-24a911bee199Medium2.jpg',
	  	reviews: [
	  	  {
	  	  	stars: 4,
	  	  	body: 'I love this gem!!!',
	  	  	author: 'come@me.bro',
	  	  },
	  	  {
	  	  	stars: 3,
	  	  	body: "It's just ok. Seen better.",
	  	  	author: 'heyo@yayo.com',
	  	  },
	  	],
	  },
	  {
	  	name: 'Pentagonal Gem',
	  	price: 5.95,
	  	description: 'This is a Pentagonal Gem',
	  	canPurchase: false,
	  	soldOut: false,
	  	image: 'http://static.spark.autodesk.com/2013/05/02__10_55_50/20264_Main.pngb9a7b367-41ab-4597-a9d8-d2c9f6c3a44aMedium2.jpg',
	    reviews: [
          {
          	stars: 1,
          	body: 'DOA. Way too expensive anyway. I want my refund!',
          	author: 'fake@email.net',
          },
	    ],
	  }
    ];


})();