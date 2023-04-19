import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getRecipesRequest } from '../redux/recipes/recipesSlice';
import leftArrow from '../assets/img/left-arrow.svg';
import settingsGear from '../assets/img/settings-gear.svg';

const NavBar = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((store) => store.recipes);

  useEffect(() => {
    dispatch(getRecipesRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <header>
        <NavLink to="/">
          <img className="icon" src={leftArrow} alt="left arrow" />
        </NavLink>
        Header
        <img className="icon" src={settingsGear} alt="" />
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default NavBar;
