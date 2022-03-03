import * as utils from '../utils/utils';

const CategoryButton = ({ category_name }) => {
  return (
    <button className="btn btn_category" onClick={() => utils.filterList()}>
      {category_name}
    </button>
  );
};

export default CategoryButton;
