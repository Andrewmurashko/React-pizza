import React from 'react';
import { setCategory } from '../redux/actions/filters';
import { useDispatch } from 'react-redux';


// export default class Categories extends React.Component {
//   state = {
//     activeItem: null,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li
//               onClick={() => this.onSelectItem(index)}
//               className={this.state.activeItem === index ? 'active' : ''}
//               key={`${name}_${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  const dispatch = useDispatch();

  const onSelectItem = (index) => {
    onClickCategory(index);
    dispatch(setCategory(index));
  };
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
