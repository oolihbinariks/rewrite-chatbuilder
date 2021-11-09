import { all } from 'redux-saga/effects'
import audiencesSaga from './AudienceSaga/audienceSaga'
import authorizeSaga from './AuthSaga/authSaga'
import campaignSaga from './CampaignSaga/campaignSaga'
import templatesSaga from './TemplateSaga/templateSaga'

export default function* rootSaga() {
    yield all([
      authorizeSaga(),
      audiencesSaga(),
      templatesSaga(),
      campaignSaga(),
    ])
  }