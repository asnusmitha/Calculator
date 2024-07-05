import React,{useState} from 'react';
import apple from './apple2.jpg';
import mango from './mango2.jpg';
import grapes from './grapes2.jpg';
import banana from './banana2.jpg';
function Search() {
    const fruits = [
        { name: "apple", id: 1 ,image:apple},
        { name: "banana",  id: 2,image:banana},
        {name:"grapes",id:5,image:grapes},
        {name:"mango",id:6,image:mango}
      ];
      const [search, setNewSearch] = useState("");
      const [selectedFruits, setSelectedFruits] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");
      const [showSelectedFruits, setShowSelectedFruits] = useState(false);
      const filtered = !search ? fruits : fruits.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        const handleCheckboxChange = (event) => {
          const { name } = event.target;
          if (selectedFruits.includes(name)) {
            setSelectedFruits(selectedFruits.filter((fruit) => fruit !== name));
          } else {
            setSelectedFruits([...selectedFruits, name]);
          }
        };
        const handleButtonClick = () => {
          setShowSelectedFruits(true);
        };
      
      return(
        <>
        <header class='header'><h4><b>REACT EXERCISE</b></h4></header>
        <div class="search">
        Search:
        <input type="text" value={search} onChange={(e)=>setNewSearch(e.target.value)} />
        {filtered.map((item) => {
          return (
            <ol key={item.id}>
                <table>
                    <tr>
             <th> {item.name}</th>
             <th><img src={item.image} id='images' alt='Fruit-images' height="100px" width="100px"/></th> 
              </tr>
              </table>
            </ol>
          );
        })}
        </div>
        <h4 ><b>Select Fruits</b></h4>
        {fruits.filter((fruit) => fruit.name.includes(searchTerm))
          .map((fruit) => (
          <span key={fruit.name}> 
              <img src={fruit.image} alt={fruit.name} height="100px" width="100px" class='h4'/>
              <input type="checkbox" name={fruit.name} onChange={handleCheckboxChange}/>
          </span>  
        ))}
      <button onClick={handleButtonClick}>Display</button>     
       {showSelectedFruits && selectedFruits.length > 0 ? (
        <div>          
          <p>Fruits selected:</p>         
            <ul>{selectedFruits.map((fruit) => (
                <li key={fruit}>{fruit}</li>))}
            </ul>       
        </div>) : showSelectedFruits && selectedFruits.length === 0 ? (
          <p>No fruits selected</p>) : null}
      
      </>
  )}

        
            


export default Search;
