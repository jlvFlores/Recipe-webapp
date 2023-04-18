import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getRecipesRequest } from '../redux/recipes/recipesSlice';
import leftArrow from '../assets/img/left-arrow.svg';
import settingsGear from '../assets/img/settings-gear.svg';

const NavBar = () => {
  const { recipes } = useSelector((store) => store.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <header>
        <img className="icon" src={leftArrow} alt="left arrow" />
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
