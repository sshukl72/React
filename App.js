
const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "Hello React"),
    React.createElement("h2", {}, "My first app")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "Welcome"),
    React.createElement("h2", {}, "shubham")])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);