describe("listinput", function(){
	var ListView; 
	var list; 
	
	beforeEach(function(){
		//ListView = new ListView(); 
		list; 
		
		
	});
	//before new list is added check to see the list should be empty
	it("Before you submit new list check list is empty.", function(){
		//updatenewlist(list)
		//list should be undefined
		expect(list).toEqual(undefined); 
	}); 
	

});

describe('ListForm', function(){
	var TestUtils = React.addons.TestUtils; 
	var ListFormComponent, element, renderedDOM;
    
	beforeEach(function () {
            element = React.createElement('ListForm');
            ListFormComponent = TestUtils.renderIntoDocument(element);
            //ListFormComponent.setState({items: [{text: "testItem"}]});
        });
		
	it("check that the react element form is created", function(){
		expect(element).not.toBeUndefined(); 
	}); 
	
	it("Has a new listing", function () {
			var listing; 
            //let listing = TestUtils.scryRenderedDOMComponentsWithTag(ListFormComponent, "list");
            expect(listing).toBeUndefined();
            //expect(listing[1].innerHTML).toBe("New");
      });
		
}); 

describe("ListForm Spies & Firebase", function () {
            var ListFormComponent;
            beforeEach(function(){
                 ListFormComponent = TestUtils.findRenderedComponentWithType(ListFormAppComponent, ListForm);
            });
			//failing because we need to update listinput.js 
            it("Updates firebase when text is changed", function(){
                var setSpy;
                setSpy = jasmine.createSpy("set");
                spyOn(ListFormAppComponent.fireRef, "child").and.returnValue({set : setSpy});
                var inputs = TestUtils.scryRenderedDOMComponentsWithTag(ListFormComponent,"input");
                inputs[0].value = "123";
                TestUtils.Simulate.change(inputs[0]);
                expect(ListFormAppComponent.fireRef.child).toHaveBeenCalled();
                expect(setSpy).toHaveBeenCalledWith({text: "123"});
            });
			//we will implement this in the future
            it("Removes items from firebase when item is removed", function(){
                var deleteSpy;
                deleteSpy = jasmine.createSpy("remove");
                spyOn(ListFormAppComponent.fireRef, "child").and.returnValue({remove : deleteSpy});
                var deleteButtons = TestUtils.scryRenderedDOMComponentsWithTag(ListFormComponent,"button");
                TestUtils.Simulate.click(deleteButtons[0]);
                expect(ListFormAppComponent.fireRef.child).toHaveBeenCalled();
                expect(deleteSpy).toHaveBeenCalled();
            });
        });

		describe('ListView', function () {
			
var TestUtils = React.addons.TestUtils;
var ListViewComponent, element, renderedDom;
		
beforeEach(function (done) {
		element = React.createElement(ListView);
		ListViewComponent = TestUtils.renderIntoDocument(element);
		todoAppComponent.setState({items: [{text: "testItem"}]}, done);
	});
	it("Has a ListForm component", function() {
		expect(function () {
			TestUtils.findRenderedComponentWithType(ListViewComponent, ListForm);
		}).not.toThrow();
	});
});


