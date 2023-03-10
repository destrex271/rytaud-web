import {
  NavItem,
  Navbox,
  ParentNav
} from "../StyledComponents/styledComp";
// emotion ui

// data
const data = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "About",
    link: "/about"
  },
  {
    text: "Contribute!",
    link: "https://github.com/destrex271/rytaud"
  },
  {
    text: "Contact",
    link: "/contact"
  }
]

export const Navbar = () => {
  return(
    <ParentNav>
      <Navbox>
        {data.map((item)=>(
          <NavItem
            variant="p"
            onClick = {()=>{window.location = item.link}}
          >
            {item.text}
          </NavItem>
        ))}
      </Navbox>
    </ParentNav>
  );
}
