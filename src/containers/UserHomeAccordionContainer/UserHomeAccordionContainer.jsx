
import { connect } from 'react-redux';
import { UserHomeAccordion } from '../../components/UserHomeAccordion'


const mapStateToProps = state => ({
  isOpen: state.reducer.isOpen,
  dateError: state.reducer.dateError
});

const mapDispatchToProps = dispatch => ({
  open: () => dispatch({ type: 'OPEN' }),
  close: () => dispatch({ type: 'CLOSE' }),
  onButtonClick: value => dispatch({ type: 'OPEN', value }),
  onLogError: dateError => dispatch({ type: 'LOG_DATE_ERROR', dateError })
});


const UserHomeAccordionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHomeAccordion);

export default UserHomeAccordionContainer;
