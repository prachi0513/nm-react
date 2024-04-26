const Parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "im a child1"),
    React.createElement("h2", {}, "im a child2"),
  ]),
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "im a child1")
  ),
]); //This is an object at the end of the day.
/**
 * first argument is h1 is tag which we are making.
 * second argument is attributes which we are creating.
 * third argument is children which we are creating.
 */
const root = ReactDOM.createRoot(document.getElementById("root")); //here we are creating root

root.render(Parent);
//rendee methid taking all the args making an H1 tag here.
