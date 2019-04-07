import { Table, Tr, Td, IconInfo, Button, TextArea, InputGroup, Drop, ButtonGroup } from '@wdpui/react-gel';
import { Field } from 'redux-form';
import { InputForm, SelectForm, InputDate, renderButtonDropdown, RadioForm } from '../forms';
import { Box } from 'grid-styled';
import { AlignL, Container1, Container2, SearchButton, Wrappere, Wrappere1, PaddingContent } from '../../style/style';
import React, { Component } from 'react';
import Business from '../../components/FormMenu/Dropdown.json';
import Personal from '../../components/FormMenu/DropdownPersonal.json';
import { Checkbox } from '@wdpui/gel-checkbox';
import { DropdownButton } from '@wdpui/gel-buttondropdown';

export class Facilities extends Component {
    onChange = (e) => {
        if (e.target.value === 'business') {
            this.props.onClickBtn(Business)
        }
        else {
            this.props.onClickBtn(Personal);
        }
    }

    render() {
        return (
            <Box>
                <AlignL>
                    <h3>Flexi-rate Home Lone</h3>
                </AlignL>
                <AlignL>
                    Facility Detail <div> </div> <IconInfo size='xsmall' />
                </AlignL>
                <hr />
                <Container2>
                    <Table>
                        <Tr>
                            <Td><lable><PaddingContent>Facility Name</PaddingContent></lable></Td>
                            <Td><PaddingContent><Container1><Field
                                name="fName"
                                type="text"
                                placeholder="Flexi-Rate Home Lone"
                                component={InputForm}
                            /></Container1></PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent><lable>Which financial Institution is this facility with?</lable></PaddingContent></Td>
                            <Td><PaddingContent><Container1><Field
                                name="institite"
                                type="text"
                                placeholder="Search For Institution"
                                component={InputForm}
                            /></Container1>
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent><lable>BSB & Account Number</lable></PaddingContent></Td>
                            <Td><PaddingContent><Container1><Field
                                name="account number"
                                type="text"
                                placeholder="Enter BSB Account Number"
                                component={InputForm}
                            /></Container1></PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent><lable>Purpose</lable></PaddingContent></Td>
                            <Td><PaddingContent>
                                <ButtonGroup name='any1' type='radio' styling="hero" onChange = {this.onChange.bind(this)}>
                                    <Button value='business' label="business" />
                                    <Button value='personal' label="Personal" />
                                </ButtonGroup>
                            </PaddingContent>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent><lable> Facility Type</lable></PaddingContent></Td>
                            <Td><PaddingContent>
                                <Field
                                    name="Country23"
                                    type="select"
                                    component={SelectForm}
                                    placeholder='Select Facility Type'
                                    options={this.props.Jdata.map(res => {
                                        return res.value
                                    })}
                                    id="Country"
                                />
                            </PaddingContent></Td>
                        </Tr>
                    </Table>
                </Container2>
                <AlignL>
                    Borrowers,gurantors & common debt reducers <IconInfo size='xsmall' />
                </AlignL>
                <hr />
                <Container2>
                    <Table>
                        <Tr>
                            <Td>
                                <PaddingContent>
                                    <Container1>
                                        <Checkbox />

                                    </Container1></PaddingContent>
                            </Td>
                            <Td><PaddingContent>Mr.Jone Deo 34098365</PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <PaddingContent>
                                    <Container1>
                                        <lable>Role</lable>
                                    </Container1></PaddingContent>
                            </Td>
                            <Td>
                                <PaddingContent>
                                    <Container1> <Field
                                        name="rolee"
                                        type="select"
                                        component={SelectForm}
                                        placeholder='Select Facility Type'
                                        options={['Value1', 'Value2', 'Value3']}
                                        id="Role"
                                    /></Container1></PaddingContent>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                <Container1>
                                    <lable>Ownership</lable>
                                </Container1></PaddingContent>
                            </Td>
                            <Td><PaddingContent>
                                <Container1>
                                    <Td>
                                        <InputGroup prefix='%' placeholder='100' />
                                    </Td>
                                </Container1></PaddingContent>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                <Container1>
                                    <Checkbox />
                                </Container1>
                            </PaddingContent></Td>
                            <Td><PaddingContent>Mrs.Jone Deo 34098365</PaddingContent></Td>
                        </Tr>
                    </Table>
                </Container2>
                <AlignL>
                    Facility Detail <IconInfo size='xsmall' />
                </AlignL>
                <hr />
                <Container2>
                    <Table>
                        <Tr>
                            <Td><PaddingContent>
                                <Container1>
                                    <lable>Is The Debt Changing</lable>
                                </Container1></PaddingContent>
                            </Td>
                            <Td><PaddingContent>
                                <Container1> <Field
                                    name="debtr"
                                    type="select"
                                    component={SelectForm}
                                    placeholder='Select Facility Type'
                                    options={['Value1', 'Value2', 'Value3']}
                                /></Container1>
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                <Container1>
                                    <lable>With the Debt be clear,reduced or disbursed?</lable>
                                </Container1>
                            </PaddingContent></Td>
                            <Td>
                                <PaddingContent> <Container1>
                                    <Field
                                        name="clearty"
                                        type="select"
                                        component={SelectForm}
                                        placeholder='Select Facility Type'
                                        options={['Value1', 'Value2', 'Value3']}
                                    /></Container1></PaddingContent>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                current Facility limit
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='$' />
                            </PaddingContent>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                New Facility limit
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='$' />
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                current outstanding balance
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='$' />
                                <DropdownButton
                                    label='debt'
                                    styling='hero'
                                />
                            </PaddingContent> </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                Term</PaddingContent>
                            </Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='$' />
                                <DropdownButton
                                    label='Months'
                                    styling='hero'
                                />
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                intrest only term
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='$' />
                                <DropdownButton
                                    label='Months'
                                    styling='hero'

                                />
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                Repayment Type
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <Container1> <Field
                                    name="repayment"
                                    type="select"
                                    component={SelectForm}
                                    placeholder='Select Facility Type'
                                    options={['Value1', 'Value2', 'Value3']}
                                /></Container1>
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                Recidual/ballon payment (if applicable)
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='$' />
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                Bulk Reduction(if applicable)
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='$' />
                            </PaddingContent>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                Is the facility intrent deductable?
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <Container1>
                                    <ButtonGroup name='radio2' type='radio' styling="hero">
                                        <Button label="Yes" />
                                        <Button label="No" />
                                    </ButtonGroup>
                                </Container1>
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                Monthly fee
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='$' />
                            </PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                Line fee
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <InputGroup prefix='%' placeholder='40' />
                            </PaddingContent> </Td>
                        </Tr>
                    </Table>
                </Container2>
                <AlignL>
                    Actual & Assessed Totals <IconInfo size='xsmall' />
                </AlignL>
                <hr />
                <Container2>
                    <Table>
                        <Tr>
                            <Td><PaddingContent></PaddingContent></Td>
                            <Td><PaddingContent>Actual</PaddingContent></Td>
                            <Td><PaddingContent>Assessed at</PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>monthly repayments</PaddingContent></Td>
                            <Td><PaddingContent>$ XXX,XXX.XX</PaddingContent></Td>
                            <Td><PaddingContent>$ XXX,XXX.XX</PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>Intrest payable</PaddingContent></Td>
                            <Td><PaddingContent>$ XXX,XXX.XX</PaddingContent></Td>
                            <Td><PaddingContent>$ XXX,XXX.XX</PaddingContent></Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>Principle payable</PaddingContent></Td>
                            <Td><PaddingContent>$ XXX,XXX.XX</PaddingContent></Td>
                            <Td><PaddingContent>$ XXX,XXX.XX</PaddingContent></Td>
                        </Tr>
                        <hr />
                        <Tr>
                            <Td><PaddingContent><b>Total payable</b></PaddingContent></Td>
                            <Td><PaddingContent>$ XXX,XXX.XX</PaddingContent></Td>
                            <Td><PaddingContent>$ XXX,XXX.XX</PaddingContent></Td>
                        </Tr>
                    </Table>
                </Container2>
                <AlignL>
                    Security Properties <IconInfo size='xsmall' />
                </AlignL>
                <hr />
                <Container2>
                    <Table>

                        <Tr>
                            <Td><PaddingContent>
                                <Container1>
                                    <Checkbox />
                                </Container1></PaddingContent>
                            </Td>
                            <Td><PaddingContent>
                                [Assest name]
                                </PaddingContent>   </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                <Container1>
                                    <Checkbox />
                                </Container1></PaddingContent>
                            </Td>
                            <Td><PaddingContent>
                                [Assest name]
                                </PaddingContent> </Td>
                        </Tr>

                    </Table>
                </Container2>
                <AlignL>
                    Varification < IconInfo size='xsmall' />
                </AlignL>
                <hr />
                <Container2>
                    <Table>

                        <Tr>
                            <Td><PaddingContent>
                                What Document have userd to verify
                                this information?
                                </PaddingContent>  </Td>
                            <Td><PaddingContent>
                                <Container1>
                                    <Field
                                        name="information"
                                        type="select"
                                        component={SelectForm}
                                        placeholder='Select Facility Type'
                                        options={['Value1', 'Value2', 'Value3']}
                                    /></Container1></PaddingContent>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td><PaddingContent>
                                Date of Verification document
                                </PaddingContent></Td>
                            <Td><PaddingContent>
                                <Container1> <Field
                                    name="iddnfo"
                                    type='text'
                                    component={InputDate}
                                    placeholder='DD/MM/YYYY'
                                /></Container1>
                            </PaddingContent></Td>
                        </Tr>

                    </Table>
                </Container2>
                <AlignL>
                    General Comments <IconInfo size='xsmall' />
                </AlignL>
                <hr />

                <Container2>
                    <TextArea
                        name='commants'
                        placeholder='commants(optinals)'
                    />
                    <Table>
                        <Tr>
                            <Td>
                                <Wrappere1>
                                    <SearchButton
                                        value="Back"
                                        type="submit"
                                        label="Back"
                                        onClick={()=> window.location = '/facilite'}
                                        styling='hero'
                                    />
                                </Wrappere1>
                            </Td>
                            <Td>
                                <Wrappere>
                                    <SearchButton
                                        value="Save"
                                        type="submit"
                                        label="Save"
                                    />
                                </Wrappere>
                            </Td>
                        </Tr>
                    </Table>
                </Container2>
            </Box>
        )
    }
}

export default Facilities