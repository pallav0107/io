import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalHeaderClose,
  ModalHeaderTitle,
} from '@wdpui/react-gel';

const UserHomeModal = props => (
  <form>
    <Modal isOpen={props.isOpen} onClose={props.close} value={props.value}>
      <ModalHeader hasCloseButton>
        <ModalHeaderTitle>
            User Home Modal
        </ModalHeaderTitle>
        <ModalHeaderClose
          type="button"
          srLabel="Close modal and return to GUI page"
          onClick={props.close}
        />
      </ModalHeader>
    </Modal>
  </form>
);

export default UserHomeModal;