import React, { useEffect, useState } from 'react'
import NavbarView from './NavbarView';
import { logoutUser } from './../../../redux/actions/loginActions'
import { connect } from 'react-redux'

const Navbar = (props) => {

  const [prefLang, setPrefLang] = useState('')
  const [selectedCat, setSelectedCat] = useState(0)
  const [productCategory, setProductCategory] = useState([])
  const [query, setQuery] = useState('')


  useEffect(() => {

    const category = [
      "navbar.product_category.all",
      "navbar.product_category.smartphone",
      "navbar.product_category.kitchen_hardware",
      "navbar.product_category.prime_deal",
      "navbar.product_category.book"
    ]

    setProductCategory(category)

    // change page title
    document.title = "Online site for shopping."

    // cleanup
    return () => {

    }
  }, [])


  const handleChangeLang = (event) => {
    props.i18n.changeLanguage(event.target.value);
    setPrefLang(event.target.value);
  }

  const handleCatChange = (event, index) => {
    event.preventDefault();
    setSelectedCat(index);
  }

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }

  const logoutUser = (e) => {
    e.preventDefault()

    // call logout user action
    props.logoutUser(navigate)
  }

  const handleSearch = (event) => {
    event.preventDefault();

    console.log("Query: " + query);
    console.log("Category: " + selectedCat);
  }


  return (
    <NavbarView
      {...props}
      handleChangeLang={handleChangeLang}
      prefLang={prefLang}
      rtl={(prefLang == 'pk' ? 'text-right' : '')}
      handleCatChange={handleCatChange}
      selectedCat={selectedCat}
      productCategory={productCategory}
      handleQueryChange={handleQueryChange}
      query={query}
      handleSearch={handleSearch}
      logoutUser={logoutUser}
    />
  )
}

const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
