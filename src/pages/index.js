import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import HomeHeroSection from "../components/home/HomeHeroSection"
import CategoryListsection from "../components/elements/CategoryList"
import PostsTitlesSlider from "../components/elements/PostsTitlesSlider"
import LatestArticle from "../components/elements/LatestArticles"
import Fundamentals from "../components/blog/Fundamentals"
import ArticleType from "../components/elements/Articles"
import HomeCategoryArticles from "../components/home/HomeCategoryArticles"
import HomeCategorySection from "../components/home/HomeCategorySection"
import CategorySection from "../components/blog/CategorySection"

const IndexPage = (props) => {
  const {
    MetabolicHealthData,
    NutritionData,
    PhysicalFitnessData,
    MetabolicBasicsData,
    WomensHealthData,
    MentalHealthData,
    WeightLossData,
    PersonalStoriesData,
    LevelsNewsData,
    UltimateGuideData,
    LatestPosts } = props.data

    const HomeCategoryData = [
      {
        data: MetabolicHealthData.edges,
        title: "Metabolic Health",
        slug: "metabolic-health" 
      },
      {
        data: NutritionData.edges,
        title: "Nutrition",
        slug: "nutrition" 
      },
      {
        data: PhysicalFitnessData.edges,
        title: "Physical Fitness",
        slug: "physical-fitness" 
      },
      {
        data: MetabolicBasicsData.edges,
        title: "Metabolic Basics",
        slug: "metabolic-basics" 
      },
      {
        data: WomensHealthData.edges,
        title: "Women's Health",
        slug: "womens-health" 
      },
      {
        data: MentalHealthData.edges,
        title: "Mental Health",
        slug: "mental-health" 
      },
      {
        data: WeightLossData.edges,
        title: "Weight Loss",
        slug: "weight-loss" 
      },
      {
        data: PersonalStoriesData.edges,
        title: "Personal Stories",
        slug: "testimonials" 
      },
      {
        data: LevelsNewsData.edges,
        title: "Levels Culture & News",
        slug: "levels-news" 
      }
    ]
  return (
    <Layout>
      <div className="relative md:pt-36 pt-32 md:pb-28 pb-20">
        <CategoryListsection />
        <HomeHeroSection />
        <PostsTitlesSlider />
        <HomeCategorySection
          NutritionData={NutritionData.edges.slice(0,2)}
          PersonalStoriesData = {PersonalStoriesData.edges.slice(0,1)}
          MetabolicHealthData= {MetabolicHealthData.edges.slice(0,2)}
          UltimateGuideData = {UltimateGuideData.edges}
        />
        {HomeCategoryData && HomeCategoryData.map((item,index)=> <HomeCategoryArticles key={index} data={item.data} title={item.title} slug={item.slug} />)}
      </div>
      {/* <LatestArticle data={props.data.LatestPosts.edges} /> */}
    </Layout>
  )
}

export const query = graphql`
query HomePageQuery {
  MetabolicHealthData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "metabolic-health"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
  MetabolicBasicsData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "metabolic-basics"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
      }
    }
  }
  NutritionData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "nutrition"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
        HeightImg : featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 450, width: 400)
              }
            }
          }
        }
      }
    }
  }
  PhysicalFitnessData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "physical-fitness"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
  WomensHealthData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "womens-health"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
      }
    }
  }
  MentalHealthData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "mental-health"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
      }
    }
  }
  LevelsNewsData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "levels-news"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
      }
    }
  }
  WeightLossData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "weight-loss"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
      }
    }
  }
  PersonalStoriesData : allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 6
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "testimonials"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
        HeightImg : featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 450, width: 400)
              }
            }
          }
        }
      }
    }
  }
  UltimateGuideData: allWpPost(
    sort: {fields: dateGmt, order: DESC}
    limit: 3
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "ultimate-guides"}}}}}
  ) {
    edges {
      node {
        id
        slug
        title
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        blogSingle {
          readingTime
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 40, width: 40, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
  LatestPosts : allWpPost(limit: 12, sort: {order: DESC, fields: modified}) {
    edges {
      node {
        title
        id
        slug
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
        categories {
          nodes {
            name
          }
        }
        blogSingle {
          readingTime
        }
      }
    }
  }
}
`
export default IndexPage