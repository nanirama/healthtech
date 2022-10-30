import * as React from "react"

const AuthorInfo = ({ author }) => {
    
    return (
        <div class="flex flex-row gap-4 items-center">
            {author?.node?.name && (
                <>
                    {author?.node?.avatar?.url && (
                        <img src={author?.node?.avatar?.url} alt={author?.node?.name} width={40} height={40} className="rounded-full" />
                    )}
                    <h6 className="text-sm tracking-tight mb-0">{author?.node?.name}</h6>
                </>
            )}
        </div>
    )
}

export default AuthorInfo