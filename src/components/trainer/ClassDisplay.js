import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getTrainerClasses } from "../../actions/index" 
import ClassCard from "./ClassCard"

const ClassDisplay = (props) => {

    return (
        <div>
            {props.classes.map(cls => 
                <ClassCard data={cls} key={cls.id} delClass={props.onClickDeleteTrainerClass}/>
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

export default connect(mapStateToProps, {getTrainerClasses})(ClassDisplay)