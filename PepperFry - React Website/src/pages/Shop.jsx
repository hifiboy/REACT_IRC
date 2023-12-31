import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'

import products from '../assets/data/products'
import '../styles/shop.css'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {
  const [productsData, setProductsData] = useState(products)

  const handleFilter = (e) => {
    const filterValue = e.target.value
    if (filterValue === 'console') {
      const filteredProducts = products.filter(
        (item) => item.category === 'console'
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter(
        (item) => item.category === 'mobile'
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === 'computer') {
      const filteredProducts = products.filter(
        (item) => item.category === 'computer'
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === 'watch') {
      const filteredProducts = products.filter(
        (item) => item.category === 'watch'
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter(
        (item) => item.category === 'wireless'
      )

      setProductsData(filteredProducts)
    }
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setProductsData(searchedProducts)
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value='console'>sofa</option>
                  <option value='mobile'>Wall shelve</option>
                  <option value='computer'>Beds</option>
                  <option value='watch'>Dinning table</option>
                  <option value='wireless'>Wall shelf</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className='filter__widget'>
                <select>
                  <option>Sort By</option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='search__box'>
                <input
                  type='text'
                  placeholder='Search...'
                  onChange={handleSearch}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No products found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop