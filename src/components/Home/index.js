import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './index.scss'

const Home = () => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "starry-sunset-hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopImage: file(relativePath: { eq: "starry-sunset-hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 800px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag="section"
      id="home"
      className="section home"
      fluid={sources}
    >
      <h1 className="section__heading home__heading">
        Hi, my name is
        <span className="home__heading--name">Joe Lee.</span>
      </h1>
      <p className="section__text home__text">
        I'm a front-end web developer based in Manchester.
      </p>
    </BackgroundImage>
  )
}

export default Home
