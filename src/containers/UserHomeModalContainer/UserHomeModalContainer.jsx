
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { UserHomeModal} from '../../components/UserHomeModal'

const mapStateToProps = state => ({
  isOpen: state.reducer.isOpen,
  value: state.reducer.value,
 
});

const mapDispatchToProps = dispatch => ({
  open: () => dispatch({ type: 'OPEN' }),
  close: () => dispatch({ type: 'CLOSE' }),
  
});
  

const UserHomeModal1 = reduxForm({
  form: 'UserHomeModal',
})(UserHomeModal);

 const UserHomeModalContainer =compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UserHomeModal1);

export default UserHomeModalContainer;