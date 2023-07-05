import React from 'react';
import { Input } from 'antd';

const Search = ({placeholder, width, height, onChange}) => {
    const { Search } = Input;

    return (
        <Search
            placeholder={placeholder}
            onSearch={onChange}
            style={{
                width: width,
                height: height
            }}
            size="large"
        />
    )
}

export default Search;