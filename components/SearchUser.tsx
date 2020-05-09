import { useState, useCallback, useRef } from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

import { getApiData } from '../server/utils.js';

const SearchUser = ({ onChange }) => {
  const [search, setSearch] = useState(false);
  const [items, setItems] = useState([]);
  const nextIdRef = useRef(0);

  const searchUser = useCallback(
    debounce(async (value: string) => {
      nextIdRef.current += 1;
      const id = nextIdRef.current;
      setSearch(true);
      setItems([]);
      const data = value
        ? await getApiData(null, `/search/users?q=${value}`)
        : {};
      // 不渲染上一次未及时响应的数据
      if (id !== nextIdRef.current) return;
      setSearch(false);
      setItems(data.items || []);
    }, 2000),
    []
  );

  return (
    <Select
      showSearch={true}
      notFoundContent={search ? <Spin size="small" /> : <span>no data</span>}
      filterOption={false}
      placeholder="搜索用户"
      allowClear={true}
      onSearch={searchUser}
      onChange={onChange}
      style={{ width: 150, marginBottom: 20 }}
    >
      {items.map((item: any) => (
        <Select.Option value={item.value} key={item.id}>
          {item.login}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SearchUser;
