import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListItem,ListIcon  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
   <List color='white' fontSize='1.2rem' spacing={4}>
    <ListItem>
        <NavLink to='/'><ListIcon as={CalendarIcon} color='white'/>Dashboard</NavLink>
    </ListItem>  
      <ListItem>
        <NavLink to='/create'><ListIcon as={EditIcon} color='white'/>create New</NavLink>
    </ListItem> 
       <ListItem>
        <NavLink to='/profile'><ListIcon as={AtSignIcon} color='white'/>profile</NavLink>
    </ListItem>
   </List>
  )
}
