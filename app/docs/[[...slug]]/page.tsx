import content from '@/utils/content.json'

export const generateStaticParams = () => {
  return Object.keys(content).map((slug) => ({
    slug: slug.split('/'),
  }))
}

const getData = (slug: any) => {
  const path = slug.join('/')
  return 'coming soon' //needs remodification
}

const DocsPage = ({ params }: any) => {
  const data = getData(params.slug || [])
  return (
    <div>
      <h1 className="text-3xl">docs page</h1>
      <div>
        <p className="text-xl">{data}</p>
      </div>
    </div>
  )
}

export default DocsPage
