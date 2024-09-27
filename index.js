const all = React.createElement("div",{id:"parent"} ,   
   [
    React.createElement("div",{id:"child"},

        [ React.createElement("h1",{id:"heading"},"heloooo"),
         React.createElement("h2",{id:"heading"},"heloooo")]
     ),
     React.createElement("div",{id:"child2"},

        [ React.createElement("h1",{id:"heading"},"heloooo"),
         React.createElement("h2",{id:"heading"},"heloooo")]
     )
   ]
)
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(all);
