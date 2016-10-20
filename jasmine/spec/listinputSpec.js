describe("ListInput", function(){
	var item;
	var condition; 
	var description; 
	
	beforeEach(function(){
		item = new Item();
		condition = new Condition(); 
		description = new Description({
		itemDes: itemStock,
		conditionDes: 100,
		decriptionDes: 0
		}); 
	}); 
	
	it("should be of a description", function(){
		expect(description.itemDes).toBe(itemStock);
	});
}); 