var jsdom = require("jsdom").jsdom;
global.document = jsdom("<html><body></body></html>");
global.window = document.defaultView;
global.navigator = window.navigator;
global.HTMLElement = window.HTMLElement;

let React = require("react/addons");
let should = require("should");
let SelectList = require("../build");

let TestUtils = React.addons.TestUtils;

let list, inputContainer, options, currentResponse;

let handleChange = (response) => {
	currentResponse = response;
};

let setupComponent = function(component) {
	return function() {

		let renderedComponent = TestUtils.renderIntoDocument(
			component
		);

		list = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			"hire-list"
		);

		inputContainer = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			"input-container"
		);

		TestUtils.Simulate.click(inputContainer);

		options = TestUtils.findRenderedDOMComponentWithClass(
			renderedComponent,
			"hire-options"
		);
	};
};

describe("Hire Forms Select List", function() {
	it("Should be a ReactElement", function() {
		TestUtils.isElement(<SelectList onChange={function() {}} />).should.be.ok();
	});

	describe("With string options", function() {
		let setup = setupComponent(
			<SelectList
				onChange={handleChange}
				options={["eeny", "meeny", "miny", "moe"]} />
		);

		beforeEach(setup);

		it("Should have four options", function() {
			options.getDOMNode().children.length.should.equal(4);
		});

		it("Should return the string of the selected item", function() {
			TestUtils.Simulate.click(options.getDOMNode().children[0]);
			should.deepEqual(currentResponse, ["eeny"]);
		});

		it("Should return the string of the selected item", function() {
			TestUtils.Simulate.click(options.getDOMNode().children[3]);
			should.deepEqual(currentResponse, ["moe"]);
		});
	});

	describe("With key/value options", function() {
		let setup = setupComponent(
			<SelectList
				onChange={handleChange}
				options={[
					{key: "eeny", value: "eeny"},
					{key: "meeny", value: "meeny"},
					{key: "miny", value: "miny"},
					{key: "moe", value: "moe"}
				]} />
		);

		beforeEach(setup);

		it("Should have four options", function() {
			options.getDOMNode().children.length.should.equal(4);
		});

		it("Should return the key/value of the selected item", function() {
			TestUtils.Simulate.click(options.getDOMNode().children[0]);
			should.deepEqual(currentResponse, [{key: "eeny", value: "eeny"}]);
		});

		it("Should return the key/value of the selected item", function() {
			TestUtils.Simulate.click(options.getDOMNode().children[3]);
			should.deepEqual(currentResponse, [{key: "moe", value: "moe"}]);
		});
	});

	describe("With string selected values", function() {
		let setup = setupComponent(
			<SelectList
				onChange={handleChange}
				options={["eeny", "meeny", "miny", "moe"]}
				values={["eeny", "moe"]} />
		);

		beforeEach(setup);

		it("Should have two selected values", function() {
			let spans = list.getDOMNode().querySelectorAll("span");

			spans.length.should.equal(2);
			spans[0].innerHTML.should.equal("eeny");
			spans[1].innerHTML.should.equal("moe");
		});
	});

	describe("With key/value selected values", function() {
		let setup = setupComponent(
			<SelectList
				onChange={handleChange}
				options={[
					{key: "eeny", value: "eeny"},
					{key: "meeny", value: "meeny"},
					{key: "miny", value: "miny"},
					{key: "moe", value: "moe"}
				]}
				values={[
					{key: "eeny", value: "eeny"},
					{key: "moe", value: "moe"}
				]}/>
		);

		beforeEach(setup);

		it("Should have two selected values", function() {
			let spans = list.getDOMNode().querySelectorAll("span");

			spans.length.should.equal(2);
			spans[0].innerHTML.should.equal("eeny");
			spans[1].innerHTML.should.equal("moe");
		});
	});

	describe("With async prop", function() {
		let getOptions = function(done) {
			done(["eeny", "meeny", "miny", "moe"]);
		};

		let setup = setupComponent(
			<SelectList
				async={getOptions}
				onChange={handleChange} />
		);

		beforeEach(setup);

		it("Should load options from async func", function() {
			options.getDOMNode().children.length.should.equal(4);
		});
	});
});