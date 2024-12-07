import SectionSvg from "../assets/svg/SectionSvg"

const Section = ({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children,
}) => {
    return (
        <section
            id={id}
            className={`relative ${customPaddings || "lg:py-10"} ${
                crosses ? "lg:py-32 xl:py-40" : ""
            } ${className}`}
            aria-label={id}
        >
            {children}

            <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-gray pointer-events-none md:block lg:left-7.5 xl:left-10" />
            <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-gray pointer-events-none md:block lg:right-7.5 xl:right-10" />

            {crosses && (
                <>
                    <div
                        className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-gray ${
                            crossesOffset && crossesOffset
                        } pointer-events-none lg:block xl:left-10 xl:right-10`}
                    />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </section>
    )
}

export default Section
