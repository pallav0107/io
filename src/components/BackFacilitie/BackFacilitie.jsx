import React from 'react';
import PropTypes from 'prop-types';
import { SearchContainer1, Wrappere1, Wrappere, Container1, Container2 } from '../../style/style'
import { IconInfo, IconDelete, Table, Tr, Td, Badge, Button,ButtonGroup } from '@wdpui/react-gel';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from '@wdpui/react-gel';
import { Field } from 'redux-form';
import { InputForm } from '../forms';
import { Tbody } from '@wdpui/gel-table';
import { Checkbox } from '@wdpui/gel-checkbox';

const BackFacilitie = ({ open, close, isOpen, history }) => (

  <SearchContainer1>
    <Table>
      <Tbody>
        <Tr>
          <Td>
            <Wrappere1>
              <h1> Facilities</h1>
            </Wrappere1>
          </Td>
          <Td>
            <Wrappere> <h3>Overall Limit $550,000.000</h3>
            </Wrappere>
          </Td>
          <Td></Td>
        </Tr>
      </Tbody>
    </Table>
    <Table>
      <Tr>
        <Td>
          <Container2>
            BroomStricks Pty Lty - 34098365 <IconInfo size='xsmall' />
          </Container2>
        </Td>
        <Td><Wrappere>
          Total Limit $550,000.000</Wrappere>
        </Td>
      </Tr>
    </Table><Table>
      <Tr>
        <Td>
          Home Lone Flexi Saver ING Orange Variable <Badge styling='hero'>New</Badge>
        </Td>
        <Td><Wrappere>
          Facility Limit $550,000.000</Wrappere></Td><Td><Button label="View" /> <IconDelete /></Td>
      </Tr>
      <hr />
      <Tr>
        <Td>
          <Container2>
            Cradit card Weastpac Business MasterCard <IconInfo size='xsmall' />
          </Container2>
        </Td>
        <Td><Wrappere>
          Facility Limit $550,000.000</Wrappere>
        </Td><Td><Button label='Complete' /></Td>
      </Tr>
      <hr />
    </Table>
    <Table>
      <Tr>
        <Td>
          <h6>Mr.Jone Deo 34098365,Mrs.Jone Deo 34098365</h6>
        </Td>
        <Td>
          <Wrappere>
            Entity Facility limit $0.00</Wrappere>
        </Td>
        <Td></Td>
      </Tr>
    </Table>
    <Table>
      <Tr>
        <Td>
          Account Weastpac Overdraft account EXISTING <Badge styling='hero'>Existing</Badge>
        </Td>
        <Td><Wrappere>
          Facility Limit $0.000</Wrappere></Td><Td><Button label="View" /> <IconDelete /></Td>
      </Tr>
      <hr />
    </Table>
    <Table>
      <Tr>
        <Td>
        </Td>
        <Td>
          <Wrappere>
            <Button onClick={() => { open() }} label="Add" />
          </Wrappere>
        </Td>
      </Tr>
    </Table>
    <Modal isOpen={isOpen} onClose={() => { close() }}>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody><Table>
        <Tr>
          <Td>
            Facility Name
                        </Td>
          <Td>
            <Container1> <Field
              name="facility_name"
              type='text'
              component={InputForm}
              placeholder='Enter a Name'
            /></Container1>
          </Td>
        </Tr>
        <Tr>
          <Td>
            Who are the borrowers for this facility?
                        </Td>
          <Td>
            <Container1>
              <Checkbox />  Mr.JhonDao-34098365
                            </Container1>
          </Td>
        </Tr>

        <Tr>
          <Td>
          </Td>
          <Td>
            <Container1>
              <Checkbox /> Mrs.JhonDao-34098365
                            </Container1>
          </Td>
        </Tr>
      </Table>
      </ModalBody>
      <ModalFooter>
        <Button styling='hero' onClick={() => { close() }} label="Cancel" />
        <Button type="submit" styling='hero' onClick={()=> history.push('/formmenu')} label="Add New Facility" />{' '}
      </ModalFooter>
    </Modal>
  </SearchContainer1>
)

BackFacilitie.propTypes = {
  open: PropTypes.func,
  close: PropTypes.func,
  isOpen: PropTypes.bool,
};

BackFacilitie.defaultProps = {
  open: () => { },
  close: () => { }
};

export default BackFacilitie;
