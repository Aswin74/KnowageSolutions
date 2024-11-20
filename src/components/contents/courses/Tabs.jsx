import React from "react"

const Tabs = ({
    selectedCourse,
    selectedAddOn,
    handleCourses,
    handleAddOn,
    addOn,
    ...props
}) => {
    return (
        <div className={`grid ${addOn ? "grid-cols-2 gap-2" : "grid-cols-1"}`}>
            <select
                className="ks-input"
                value={selectedCourse}
                onChange={handleCourses}
                {...props}
            >
                <option value="Medical">Medical</option>
                <option value="Paramedical">Paramedical</option>
                <option value="AlliedHealthScience">
                    Allied Health Science
                </option>
                <option value="AppliedScience">Applied Science</option>
                <option value="Designing">Designing</option>
                <option value="Marine">Marine</option>
                <option value="Management">Management</option>
                <option value="AddOn">Add Ons</option>
                <option value="Others">Others</option>
            </select>

            {addOn && (
                <select
                    className="ks-input"
                    value={selectedAddOn}
                    onChange={handleAddOn}
                    {...props}
                >
                    <option value="BCom">B.Com</option>
                    <option value="BBA">BBA (Dual)</option>
                    <option value="BCA">BCA (Triple)</option>
                </select>
            )}
        </div>
    )
}

export default Tabs
