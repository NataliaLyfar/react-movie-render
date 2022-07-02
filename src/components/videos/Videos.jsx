import styled from "styled-components";

const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: ${p => p.theme.space[1]}
`;
const Item = styled.li`
margin-bottom: ${p => p.theme.space[1]}px;
box-shadow: 0px 10px 5px -5px ${p => p.theme.colors.accent};
text-decoration: none;
cursor: pointer;
transition: all .3s ease;
color: ${p => {
    return p.isSelected ? p.theme.colors.secondary : p.theme.colors.primary;
}};
&:hover {
  transform: scale(1.03);
};
`;

export const Videos = ({items, onSelect,  selected}) => {
    return(
       <List>
        {items.map(({id, link}) => 
        <Item 
        key={id} 
        onClick={()=>onSelect(link)}
        isSelected={link === selected}
        >{link}</Item>
        )}
       </List>
    )
}