
// BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };

    var Income = function(){
      this.id = id;
      this.description = description;
      this.value = value;
    };


    var data = {
      allItems: {
         exp: [],
        income: []
    },
    total: {
      exp: 0,
      income: 0
    };
};

     return {
       addItem: function(type, des, val){

        var newItem;

        newItem = new Expense(ID, des, val);
       }
     };
})();

//UI CONTROLLER
var UIController = (function(){

var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
}
  return {
    getinput: function(){
      return {
         type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
         description: document.querySelector(DOMstrings.inputDescription).value,
         value: document.querySelector(DOMstrings.inputValue).value
      };

    },

    getDOMstrings: function(){
      return DOMstrings;
    }
  };

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListener = function(){

      var DOM = UICtrl.getDOMstrings();

      document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem );

      document.addEventListener('keypress' ,function(e){

        if (e.keyCode === 13 || e.which === 13 ) {
          ctrlAddItem();
        }

      });
    }

    var ctrlAddItem = function () {
          // 1. Get the field input data
          var input = UICtrl.getinput();

          // 2. Add item to the budget controller

          // 3. Add the item to the UI

          //4. Calculate the budget

          //5. Display the budget on the UI
};
    return {
      init: function(){
        console.log('app has started.')
        setupEventListener();
      }
    };

})(budgetController, UIController);

  controller.init();
