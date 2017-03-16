import { connect } from 'react-redux';
import { selectDate } from './CalendarActions';
import { updateDynamicTitle } from '../navigation/NavigationReducer'
import Calendar from './components/Calendar';

const mapDispatchToProps = {
   updateDynamicTitle,
   selectDate
}

const mapStateToProps = (state) =>  ({
    calendarState: state.get('calendar')
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)