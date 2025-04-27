import Child from "./Child";

function Parent() {
    const house = "none";
    const car = 1;
    return(
      <Child house={house} car={car}/>
    );
}

export default Parent