import { all } from 'redux-saga/effects';
import { rootExportSaga } from '@wdpui/redux-exp-staff-core-v1/sagas';
import { commonSagas } from '@wdpui/common-app-wrapper';

export default function* rootSaga() {
  yield all([commonSagas(), rootExportSaga()]);
}
