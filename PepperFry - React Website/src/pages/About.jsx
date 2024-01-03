import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'

import aboutImg2 from '../assets/images/14bf5f822e509ac2f24dd82f1795b45d.gif'


import '../styles/about.css'

const About = () => {
  return (
    <Helmet title='About-Us'>
      <CommonSection title='About-Us' />
      <section>
        <Container className='about__section'>
          <Row className='about__body'>
            <Col lg='6' md='6'>
              <div className='about__content right'>
                <h2>About Us</h2>
                <p>
                 
                  We product descriptions that give the shopper an idea of what the furniture would be like in their own home or how they would use the piece. Keep in mind, describing the product without over-personalizing the description can help push broad sets of customers toward products that truly meet their own needs. <br />
                </p>
                <p>
                To succeed in the furniture industry, you need more than just creating beautiful furniture items. You need an efficient marketing strategy to drive customers to your store and make them loyal. Since most buyers see furniture as a long-term commitment, you need more effort to market and convince them than a retailer selling common FMCGs. This article will show you the top 15 essential furniture marketing ideas to improve customer experience and get your products to the right target customers at the right time. <br />
                </p>
              </div>
            </Col>
            <Col lg='6' md='6' className='image2'>
              <div className='about__img'>
                <img src={aboutImg2} alt='' sty />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg='6' md='6'>
              <div className='about__content left'>
                <p>
                  Online shopping has given us the chance to reach our customers
                  in a more efficient and competitive way, enabling us to give
                  you our very best deals. Our high-quality and consumer-focused
                  products lead the market by delivering true innovation and
                  convenience to our valued consumers. <br />
                </p>
                <p>
                  Our promise is to provide the best brands at the best possible
                  price, accompanied by our passion for customer service. <br />
                  We always depend on your valuable feedback and hope you enjoy
                  your shopping experience!
                </p>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='about__content right'>
                <h2>Unsuitable Goods</h2>
                <p>
                  Not withstanding our warranty policy, if you are dissatisfied
                  with our goods or service you may return the goods within 14
                  days of our despatch date. It is essential to obtain an
                  authorisation number prior to returning any goods to us.
                  Contact us here or in our page .
                  <br />
                </p>
                <p>
                  We will refund your purchase in full, less transport costs on
                  receipt of the goods. All returned goods must be in "as sold"
                  condition including all packaging, instructions, invoices etc.
                  We do not accept unauthorised returns. <br />
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg='6' md='6'>
              <div className='about__content left'>
                <h2>Faulty Goods</h2>
                <p>
                  Where such goods have been supplied we undertake to repair or
                  replace on an "express service" basis. It is essential to
                  obtain an authorisation number prior to returning any goods to
                  us.
                  <br />
                </p>
                <p>
                  Contact us here. We do not accept unauthorised returns. A fee
                  of RS:1000(ex GST) and return freight cost will apply where upon
                  inspection there is no fault found with the equipment.
                </p>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='about__content right'>
                <h2>Need Help? </h2>
                <p>
                  <span>Check Out Our Help Center</span>
                  Not withstanding our warranty policy, if you are dissatisfied
                  with our goods or service you may return the goods within 14
                  days of our despatch date. It is essential to obtain an
                  authorisation number prior to returning any goods to us.
                  Contact us here or in our page .
                  <br />
                </p>
                <p>
                  We will refund your purchase in full, less transport costs on
                  receipt of the goods. All returned goods must be in "as sold"
                  condition including all packaging, instructions, invoices etc.
                  We do not accept unauthorised returns. <br />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About
