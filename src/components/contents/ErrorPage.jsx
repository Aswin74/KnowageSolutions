import React from "react"
import Heading from "../Heading"

const ErrorPage = () => {
    return (
        <div className="h-screen grid place-content-center bg-ks-gray">
            <h1 className="hlarge text-ks-primary_dark">404! Not Found!!</h1>
            <Heading
                className="text-ks-primary_dark text-center"
                text="Seems you've lost your way...."
            />
        </div>
    )
}

export default ErrorPage
