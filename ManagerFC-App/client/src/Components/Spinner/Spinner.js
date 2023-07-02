import React from "react"
import "./Spinner.css";

function Loading({ children, loading }) {
    if (loading) {
        return (
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}
export default Loading