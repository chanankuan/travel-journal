import Card from '../Card/Card';
import data from '../../data/data';

import '../Main/Main.css';

export default function Main() {
  const list = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return <div className='card-list'>{list}</div>;
}
