import {connect} from 'react-redux';
import Calendar from './Calendar';

const mapDispatchToProps = {
    //...
}

const mapStateToProps = (state) => ({
 //...
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)