import React ,{useState} from 'react';
import Dropdown from './Dropdown';
// import   Search from "./Search.js";
// import Accordion from './Accordion';

// const items= [
//   {title: 'What is React',
//   content:'React is a fronett end JavaScript frameworks'

   
// },
// {
//   title:'why use react?',
//   content:'React is a favorite JS library among eng '

// },
// {
//   title: 'How do you use React',
//   content:'You use React by creating components'
// }
// ]
const options= [
{
  label:'the Color Red',
  value: 'red'
},
{
  label:'The Color Green',
  value:'green'
},
{
  label:'A Shade of Blue',
  value:'blue'
}
];
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected ,setSelected]= useState(options[0]);
  const[showDropdown, setShowDropdown] = useState(true);
  return(
    <div>
    {/* <Accordion  items ={items} /> */}
    {/* <Search /> */}
    <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    { showDropdown ?
      <Dropdown selected={selected} onSelectedChange={setSelected} options={options} /> :null} 
    </div>
  )
};