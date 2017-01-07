(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "The Dodecahedron has been a source of metaphysical interest for at least 2000 years. Like a crystal or gem, its facets and symmetries compel our eyes and hearts to observe life more deeply.",
      canPurchase: true,
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "A Pentagonal Gem has a pentagon as a cross section or as a base",
      canPurchase: false,
    }
];
})();
