(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };

});

  var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "The Dodecahedron has been a source of metaphysical interest for at least 2000 years. Like a crystal or gem, its facets and symmetries compel our eyes and hearts to observe life more deeply.",
      images: [
      {
        full: "dodecahedron-01-full.jpg",
      }
      ],
      canPurchase: true,
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "A Pentagonal Gem has a pentagon as a cross section or as a base.",
      images: [
      {
        full: "pentagonal-gem-01-full.jpg",
      }
      ],
      canPurchase: false,
    }
];
})();
