import { Fragment } from 'react'
import { getPageAPI, getNavbarAPI } from '../api'
import PageLayout from '../components/PageLayout'
import Slices from '../components/slices'
import HeadContent from '../components/HeadContent'
import { RichText } from 'prismic-reactjs'

const Hero = ({ title, subtitle }) =>
  <div className="bg-hex h-1/2 md:h-350 w-full flex items-center relative px-4 xl:px-0 text-white">
    <div className="container mx-auto">
      <div className="w-full">
        <h1 className="xs:text-xl text-2xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <div>{RichText.render(subtitle)}</div>}
      </div>
    </div>
  </div>

const renderSlices = arr => {
  if (arr.length === 0) {
    return <h6>No slices yet, please add one.</h6>
  } else {
    return <Slices sliceZone={arr} />
  }
}

const Page = ({ doc }) =>
  <Fragment>
    <HeadContent doc={doc.data} />
    <PageLayout >
      <Hero title={doc.data.title[0].text} subtitle={doc.data.subtitle} />
      {doc && renderSlices(doc.data.body1)}
    </PageLayout>
  </Fragment>


Page.getInitialProps = async (context) => {
  const { uid } = context.query
  const doc = await getPageAPI(uid)
  return { doc }
}

export default Page
