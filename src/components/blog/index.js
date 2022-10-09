import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BlogTag from "./BlogTag"
import Share from "./Share"

const Index = ({ props }) => {
    const { site, postDetails } = props.data
    const { title, content, featuredImage, author, blogSingle, tags, categories, modified, date } = postDetails
    const { readingTime, contentOverview } = blogSingle

    const siteURL = site.siteMetadata.siteUrl
    const siteTitle = postDetails.seo.title || site.siteMetadata.title

    const stitle = `Read ${siteTitle} `;
    const surl = `${siteURL}${props.location.pathname || "/"}`;
    const stwitterHandle = "_MsLinda";

    const pcategory = categories?.nodes[0] ? categories.nodes[0] : {}
    return (
        <>
            <div className="w-full blogbanner relative">
                <GatsbyImage image={getImage(featuredImage.node.localFile)} alt={title && title} className="w-full" />
                <div className="w-100 z-20 max-w-5xl mx-auto absolute bottom-0 left-0 right-0 px-4">
                    {pcategory && pcategory.name && (
                        <h6 className="text-xs text-black uppercase text-center font-normal pb-5">{pcategory.name}</h6>
                    )}                    
                    <h1 className="xl:text-6xl lg:text-5xl text-3xl text-black text-center tracking-wide pb-2">{title && title}</h1>
                </div>
            </div>
            <div className="relative mt-6">
                <p className="xl:max-w-3xl lg:max-w-2xl md:max-w-xl max-w-full mx-auto px-4 text-center font-normal bannertext md:hidden block">Metabolic health and fitness can be improved by consistently making choices that keep glucose levels in a stable and healthy range.</p>
                <div className="md:left-0 md:top-5 md:sticky relative s_links px-4">
                    <Share
                        socialConfig={{
                            twitter: stwitterHandle,
                            config: {
                                url: surl,
                                title: stitle,
                            },
                        }}
                    />
                </div>
                <p className="xl:max-w-3xl md:max-w-2xl max-w-full mx-auto px-4 text-center font-normal bannertext md:block hidden">Metabolic health and fitness can be improved by consistently making choices that keep glucose levels in a stable and healthy range.</p>
                <div className="lg:max-w-3xl md:max-w-xl max-w-full px-4 mx-auto mt-24">
                    <div className="author flex justify-between items-end mb-8">
                        {author?.node?.name && (
                            <div className="flex items-center gap-2">           
                                {author?.node?.avatar?.url && (
                                    <img src={author?.node?.avatar?.url} alt={author?.node?.name} width={40} height={40} className="rounded-full" />
                                )}                            
                                <div>
                                    <h6 className="tracking-tight mb-1">{author?.node?.name}</h6>
                                    <p className="flex items-center text-sm text-gray-500 tracking-tight gap-1"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4006 11.7744L9.58762 16.76C9.54377 16.8805 9.46389 16.9847 9.35881 17.0583C9.25372 17.1319 9.12854 17.1714 9.00024 17.1714C8.87195 17.1714 8.74676 17.1319 8.64168 17.0583C8.5366 16.9847 8.45672 16.8805 8.41287 16.76L6.59992 11.7744C6.56871 11.6885 6.51907 11.6106 6.45449 11.546C6.38991 11.4814 6.31197 11.4318 6.22614 11.4006L1.24051 9.58762C1.11994 9.54377 1.01579 9.46389 0.942185 9.35881C0.868583 9.25372 0.829102 9.12854 0.829102 9.00024C0.829102 8.87195 0.868583 8.74676 0.942185 8.64168C1.01579 8.5366 1.11994 8.45672 1.24051 8.41287L6.22614 6.59992C6.31197 6.56871 6.38991 6.51907 6.45449 6.45449C6.51907 6.38991 6.56871 6.31197 6.59992 6.22614L8.41287 1.24051C8.45672 1.11994 8.5366 1.01579 8.64168 0.942185C8.74676 0.868583 8.87195 0.829102 9.00024 0.829102C9.12854 0.829102 9.25372 0.868583 9.35881 0.942185C9.46389 1.01579 9.54377 1.11994 9.58762 1.24051L11.4006 6.22614C11.4318 6.31197 11.4814 6.38991 11.546 6.45449C11.6106 6.51907 11.6885 6.56871 11.7744 6.59992L16.76 8.41287C16.8805 8.45672 16.9847 8.5366 17.0583 8.64168C17.1319 8.74676 17.1714 8.87195 17.1714 9.00024C17.1714 9.12854 17.1319 9.25372 17.0583 9.35881C16.9847 9.46389 16.8805 9.54377 16.76 9.58762L11.7744 11.4006C11.6885 11.4318 11.6106 11.4814 11.546 11.546C11.4814 11.6106 11.4318 11.6885 11.4006 11.7744Z" stroke="#5D6465" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> Author</p>
                                </div>
                            </div>
                        )}                        
                        <p className="flex gap-1 items-center text-sm text-gray-500 tracking-tight"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#5D6465" stroke-width="1.5" stroke-miterlimit="10" />
                            <path d="M10 5.625V10H14.375" stroke="#5D6465" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> {readingTime && readingTime} read</p>
                    </div>
                    {contentOverview && (
                        <div className="bg-gray-100 md:p-8 p-4 rounded-lg article">
                            <h6 className="uppercase text-black text-xs font-normal mb-8">ARTICLE highlights</h6>
                            <ul>
                                {contentOverview.map((item,index)=>(
                                    <li key={index}>{item.item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                </div>
                <div className="lg:max-w-3xl md:max-w-xl max-w-full px-4 mx-auto mt-12 blogcontent">
                    {/* <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6> */}
                    {content && <div dangerouslySetInnerHTML={{ __html: content }} className="w-fll" ></div>}
                </div>
                <BlogTag tags={tags} modified={modified} />
            </div>
        </>
    )
}

export default Index