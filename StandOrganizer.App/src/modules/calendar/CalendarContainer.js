import {connect} from 'react-redux';
import { updateDynamicTitle } from '../navigation/NavigationReducer'
import Calendar from './Calendar';

const mapDispatchToProps = {
   updateDynamicTitle
}

const mapStateToProps = (state) => ({
 //...
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)