import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/loader/Loader'
import { Search } from '../../components/search/Search'
import { ServicesRight } from '../../components/services-right/ServicesRight'
import './Categories.scss'
import lamp from '../../assets/images/lamp.svg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSupercategories } from '../../store/actions/quiz'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { fetchСategories } from '../../store/actions/quiz'
import {serviceEnding} from '../../utils/utils'

const Categories = () => {

  const dispatch = useDispatch();
  const supercategories = useSelector(state => state.supercategories);

  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
    }
  }, [])


  const renderCategories = () => {
    return (
      supercategories.map(s => (
        <React.Fragment key={s.id}>
          <li className="list-service__title">
            <p>{s.supercategory_name}</p>
          </li>
          {
            s.category.map(c => (
            <li key={c.id}>
                <Link className="list-service__item"
                  to={`/categories/${c.id}`}
                  onClick={() => (dispatch(fetchСategories(c.id)))}
              >
                <p>
                  <img src={lamp} alt="иконка" />
                  <span className="list-service__name">{c.category_name}</span>
                </p>
                <p className="list-service__num">
                  <span>{c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0)}</span>  {/* количество услуг в суаеркатегории */}    {/* <span>{c.subcategory.length}</span> */}
                  <span>{serviceEnding(c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0))}</span>
                  <ArrowLink />
                </p>  
              </Link>
            </li>
            ))
          }
        </React.Fragment>
      ))
    )
  }

  return (
    <>
      <Search />
      <section className="categories">
        <div className="categories__inner">
          <div className="service__list list-service">
            <ul className="list-service__list">
              <Loader />
              { renderCategories() }
            </ul>
          </div>
          <ServicesRight />
        </div>
      </section>
    </>
  )
}

export default Categories;
