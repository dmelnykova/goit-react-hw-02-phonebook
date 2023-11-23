// import { ListItem } from 'components/ListItem/ListItem.jsx';
// import React from 'react';
// // import { List, Wrapper } from './ContactsList.styled';

// export const ContactsList = ({ contacts, onDelete }) => {
//   return (
//     <div>
//       <ul>
//         {contacts.map(contact => {
//           return (
//             <ListItem
//               name={contact.name}
//               phone={contact.phone}
//               id={contact.id}
//               onDelete={onDelete}
//               key={contact.id}
//             />
//           );
//         })}
//       </ul>
//     </div>
//   );
// };


// import { Item, Button, IconWrapper } from './ContactList.styled';
// import { IoMdContact } from 'react-icons/io';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {/* <span>
              <IoMdContact size="24"/>
            </span> */}
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};