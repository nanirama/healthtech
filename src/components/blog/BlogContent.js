import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const BlogContent = () => {
    return (
        <>
            <div className="lg:max-w-3xl md:max-w-xl max-w-full px-4 mx-auto mt-24">
                <div className="author flex justify-between items-end mb-8">
                    <div className="flex items-center gap-2">
                        <StaticImage src="../../assets/images/author.png" alt="" width={40} height={40} />
                        <div>
                            <h6 className="tracking-tight mb-1">Casey Means, MD</h6>
                            <p className="flex items-center text-sm text-gray-500 tracking-tight gap-1"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4006 11.7744L9.58762 16.76C9.54377 16.8805 9.46389 16.9847 9.35881 17.0583C9.25372 17.1319 9.12854 17.1714 9.00024 17.1714C8.87195 17.1714 8.74676 17.1319 8.64168 17.0583C8.5366 16.9847 8.45672 16.8805 8.41287 16.76L6.59992 11.7744C6.56871 11.6885 6.51907 11.6106 6.45449 11.546C6.38991 11.4814 6.31197 11.4318 6.22614 11.4006L1.24051 9.58762C1.11994 9.54377 1.01579 9.46389 0.942185 9.35881C0.868583 9.25372 0.829102 9.12854 0.829102 9.00024C0.829102 8.87195 0.868583 8.74676 0.942185 8.64168C1.01579 8.5366 1.11994 8.45672 1.24051 8.41287L6.22614 6.59992C6.31197 6.56871 6.38991 6.51907 6.45449 6.45449C6.51907 6.38991 6.56871 6.31197 6.59992 6.22614L8.41287 1.24051C8.45672 1.11994 8.5366 1.01579 8.64168 0.942185C8.74676 0.868583 8.87195 0.829102 9.00024 0.829102C9.12854 0.829102 9.25372 0.868583 9.35881 0.942185C9.46389 1.01579 9.54377 1.11994 9.58762 1.24051L11.4006 6.22614C11.4318 6.31197 11.4814 6.38991 11.546 6.45449C11.6106 6.51907 11.6885 6.56871 11.7744 6.59992L16.76 8.41287C16.8805 8.45672 16.9847 8.5366 17.0583 8.64168C17.1319 8.74676 17.1714 8.87195 17.1714 9.00024C17.1714 9.12854 17.1319 9.25372 17.0583 9.35881C16.9847 9.46389 16.8805 9.54377 16.76 9.58762L11.7744 11.4006C11.6885 11.4318 11.6106 11.4814 11.546 11.546C11.4814 11.6106 11.4318 11.6885 11.4006 11.7744Z" stroke="#5D6465" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> Author</p>
                        </div>
                    </div>
                    <p className="flex gap-1 items-center text-sm text-gray-500 tracking-tight"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#5D6465" stroke-width="1.5" stroke-miterlimit="10" />
                        <path d="M10 5.625V10H14.375" stroke="#5D6465" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> 11 min read</p>
                </div>
                <div className="bg-gray-100 md:p-8 p-4 rounded-lg article">
                    <h6 className="uppercase text-black text-xs font-normal mb-8">ARTICLE highlights</h6>
                    <ul>
                        <li>This article reviews the standard clinical criteria for normal glucose levels.</li>
                        <li>Given the growing use of continuous glucose monitors (CGM) in research studies, we give an overview of data on glucose patterns in nondiabetic individuals wearing CGM.</li>
                        <li>Standard tests to assess glucose levels include fasting glucose test, 3 month average glucose levels test (hemoglobin a1c), and an oral glucose tolerance test. These data points are momentary snapshots, and do not give insight into what is happening to an individual’s highly dynamic glucose level over time and whether these trends are healthy.</li>
                        <li>CGM goes further by showing continuous data about daily glucose trends, but there is no clinical consensus yet on goal 24-hour glucose levels for a nondiabetic individual.</li>
                        <li>Our analysis of the research literature distills insights about what may be safe and optimal ranges to strive for throughout a 24-hour cycle for a healthy, nondiabetic individual, and propose a series of glucose ranges that can be helpful to orient around when determining what to strive for on a day-to-day basis while using CGM. </li>
                        <li>Based on the data of healthy individuals wearing CGM, it appears that it is safe and healthy to strive for a fasting glucose between 72-85 mg/dL, a post-meal glucose level 110 mg/dL or lower, and an average glucose of 100 mg/dL or lower.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogContent