import logo from './logo.svg';
import './App.css';
import RestauxList from './components/restauxList/RestauxList';
import { useState } from 'react';
import AddModal from './components/AddModal';
import { v4 as uuidv4 } from 'uuid';
import StarRatingComponent from 'react-star-rating-component';
function App() {

  const [restaux,setRestaux] = useState([
    {id:uuidv4()  , name : "MixMax" , description : "description01" , rate : 3 , img : "https://allrest-space.fra1.digitaloceanspaces.com/adverts/restaurants/mixmax/mixmax.jpeg" },
    {id:uuidv4()  , name : "laromate" , description : "description02" , rate : 5 , img : "https://allrest-space.fra1.digitaloceanspaces.com/adverts/restaurants/mixmax/mixmax.jpeg" },
    {id:uuidv4() , name : "chez Kayri" , description : "description03" , rate : 5 , img : "https://allrest-space.fra1.digitaloceanspaces.com/adverts/restaurants/mixmax/mixmax.jpeg" }
  ])

 const [filtredRestaux,setFilter]=useState(restaux)


  const [rate,setRate]=useState(0)
 const onStarClick=(nextValue) =>{
 
   setRate(nextValue);
 setFilter( restaux.filter(e=>e.rate>=nextValue));
  }
  return (
    <div className="App">
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rate}
          onStarClick={onStarClick}
        />
      
       <RestauxList filtredRestaux={filtredRestaux} setFilter={setFilter}></RestauxList>
      
       <br></br>
     <AddModal restaux={restaux} setRestaux={setRestaux}></AddModal>
    </div>
  );
}

export default App;
