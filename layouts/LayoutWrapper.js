const LayoutWrapper = ({ children }) => {
    return (
        <div className="p-6 xs:p-6 sm:p-6 md:p-0 lg:p-0 xl:p-0">
            {children}
        </div>
    )
}

export default LayoutWrapper;