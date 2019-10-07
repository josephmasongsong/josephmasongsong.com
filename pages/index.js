import { Fragment } from 'react'
import { getHomepageAPI, getNavbarAPI } from '../api'
import HomeLayout from '../components/HomeLayout'
import Slices from '../components/slices'
import HeadContent from '../components/HeadContent'

const renderSlices = arr => {
  if (arr.length === 0) {
    return <h6>No slices yet, please add one.</h6>
  } else {
    return <Slices sliceZone={arr} />
  }
}

const Index = ({ doc }) =>
  <Fragment>
    <HeadContent doc={doc.data} />
    <HomeLayout>
      {doc && renderSlices(doc.data.body)}
    </HomeLayout>
  </Fragment>


Index.getInitialProps = async () => {
  const doc = await getHomepageAPI()
  return { doc }
}

export default Index
