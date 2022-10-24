import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse  from 'html-react-parser';

const PostPreview = ({ hit }) => {
    console.log('hit details', hit)
    return (
        <div className="grid grid-cols-4 gap-4 my-1 py-1 hit-preview">
            <div className="col-span-1 overflow-hidden">
                <GatsbyImage image={getImage(hit.featuredImage.node.localFile)} alt={hit.title && hit.title} width="200" height="140" className="mb-4 w-full" />
            </div>
            <div className="col-span-3 grid grid-cols-1 gap-0">
                <div>
                <h3><Link to={hit.slug}>
                    <Highlight hit={hit} attribute="title" tagName="mark" />
                </Link>
                </h3>
                <Highlight hit={hit} attribute="excerpt" tagName="mark" />
                </div>
            </div>
        </div>
    )
}

export default PostPreview