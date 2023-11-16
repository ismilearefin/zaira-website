import Rootlayout from '@/components/Layout/Rootlayout'


export default function FeaturesPage() {
  return(
    <div>
        <h1>Features</h1>
    </div>
  )
}

FeaturesPage.getLayout = function getLayout(page) {
    return (
      <Rootlayout>
        {page}
      </Rootlayout>
    )
  }