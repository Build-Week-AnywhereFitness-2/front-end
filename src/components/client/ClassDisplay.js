import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getClientClasses } from "../../actions/index" 
import ClassCard from "./ClassCard"

const ClassDisplay = (props) => {

    return (
        <div>
            {props.classes.map(cls => 
                <ClassCard data={cls} key={cls.id} />
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        classes: state.classes,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, {getClientClasses})(ClassDisplay)