import {connect} from 'react-redux'
import {setVisibility} from '../actions/actions'
import Link from '../component/Link'

const mapStateToProps = (state,ownProps)=>{
    return {
        active:ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch,ownPrpos)=>{
    return {
        onClick:()=>{
            dispatch(setVisibility(ownPrpos.filter))
        }
    }
}

const FiltetLink = connect(mapStateToProps,mapDispatchToProps)(Link)

export default FiltetLink;