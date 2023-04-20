import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getRecipesRequest } from '../redux/recipes/recipesSlice';
import { setPage, setIsSelected, setSearch } from '../redux/navbar/navbarSlice';
import leftArrow from '../assets/img/left-arrow.svg';
import settingsGear from '../assets/img/settings-gear.svg';
import searchGlass from '../assets/img/search-m-glass.svg';

const NavBar = () => {
  const dispatch = useDispatch();
  const { page, isSelected } = useSelector((store) => store.navbar);
  const route = useParams();

  useEffect(() => {
    dispatch(getRecipesRequest());
  }, [dispatch]);

  const returnButton = () => {
    dispatch(setPage('Top 20 Balanced Recipes'));
  };

  const searchInput = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <header id="temp">
        {route.id !== undefined
          ? (
            <NavLink to="/">
              <button className="icon-btn" onClick={returnButton} type="button">
                <img className="icon" src={leftArrow} alt="left arrow" />
              </button>
            </NavLink>
          )
          : (
            <button
              className="icon-btn"
              onClick={() => dispatch(setIsSelected(!isSelected))}
              type="button"
            >
              <img className="icon" src={searchGlass} alt="search button" />
            </button>
          )}
        {isSelected
          ? (
            <form>
              <input type="text" placeholder="Search by name" onChange={searchInput} />
            </form>
          )
          : page}
        <img className="icon" src={settingsGear} alt="settings" />
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default NavBar;
