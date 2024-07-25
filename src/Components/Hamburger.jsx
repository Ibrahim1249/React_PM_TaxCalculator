import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


function Hamburger() {


  
  return (
    <>
         <Dropdown >
      <MenuButton  variant="soft"
    color="warning"><MenuOpenIcon/></MenuButton>
      <Menu>
        <MenuItem>Features</MenuItem>
        <MenuItem>Exchanges</MenuItem>
        <MenuItem>How it Works?</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>About us</MenuItem>
      </Menu>
    </Dropdown>
    </>
  )
}

export default Hamburger