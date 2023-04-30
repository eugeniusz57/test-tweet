import { Select } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
  return (
    <Select value={value} onChange={onChange}>
      <option value="show all">Show all</option>
      <option value="follow">Follow</option>
      <option value="following">Following</option>
    </Select>
  );
};

export default Filter;
