import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { pokeType } from '../../models/pokemon.model';
import { SearchBarStyled } from './SearchBarStyled';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ref = e.currentTarget.elements.namedItem('id') as HTMLInputElement;
    navigate(`/${ref.value.toLowerCase()}`);
    ref.value = '';
  };

  const handleType = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ref = e.currentTarget.elements.namedItem('type') as HTMLInputElement;
    navigate(`/filter/${ref.value.toLowerCase()}`);
  };

  return (
    <SearchBarStyled>
      <form onSubmit={handleSearch}>
        <label>
          Enter a name or an ID
          <div>
            <input type="text" placeholder="Search pokemon" name="id" />
            <button type="submit" data-testid="searchById">
              <AiOutlineSearch />
            </button>
          </div>
        </label>
      </form>

      <form onSubmit={handleType}>
        <label>
          Filter by type:
          <div>
            <select name="type">
              {Object.keys(pokeType).map(
                (type) =>
                  type !== 'undefined' && <option key={type}>{type}</option>
              )}
            </select>
            <button type="submit" data-testid="searchByType">
              <AiOutlineSearch />
            </button>
          </div>
        </label>
      </form>
    </SearchBarStyled>
  );
};
export default SearchBar;
