import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getRecipesRequest } from '../redux/recipes/recipesSlice';
import { setPage } from '../redux/details/detailsSlice';
import leftArrow from '../assets/img/left-arrow.svg';
import settingsGear from '../assets/img/settings-gear.svg';

const NavBar = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((store) => store.details);

  useEffect(() => {
    dispatch(getRecipesRequest());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(setPage('Top 20 Balanced Recipes'));
  };

  return (
    <>
      <header>
        <NavLink to="/">
          <button className="return-btn" onClick={handleClick} type="button">
            <img className="icon" src={leftArrow} alt="left arrow" />
          </button>
        </NavLink>
        {page}
        <img className="icon" src={settingsGear} alt="settings" />
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default NavBar;
