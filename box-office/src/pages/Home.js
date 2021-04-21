import React, { useState } from 'react';
import Actorgrid from '../components/actor/Actorgrid';
import Mainpage from '../components/Mainpage';
import Showgrid from '../components/show/Showgrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [search, searchopt] = useState('shows');

  const issearch = search === 'shows';

  const onSearch = () => {
    apiGet(`/search/${search}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onrchange = ev => {
    searchopt(ev.target.value);
  };
  console.log(search);

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <Showgrid data={results} />
      ) : (
        <Actorgrid data={results} />
      );
    }

    return null;
  };

  return (
    <Mainpage>
      <input
        type="text"
        placeholder="search something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="show">
          shows
          <input
            id="show"
            type="radio"
            value="shows"
            checked={issearch}
            onChange={onrchange}
          />
        </label>

        <label htmlFor="show1">
          actor
          <input
            id="show1"
            type="radio"
            value="people"
            checked={!issearch}
            onChange={onrchange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </Mainpage>
  );
};

export default Home;
