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
        <>
            <select value={selectedCourse} onChange={handleCourses} {...props}>
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
                <select value={selectedAddOn} onChange={handleAddOn} {...props}>
                    <option value="BCom">B.Com</option>
                    <option value="BBA">BBA (Dual)</option>
                    <option value="BCA">BCA (Triple)</option>
                </select>
            )}
        </>
    )
}

export default Tabs
